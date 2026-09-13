interface GallerySlide {
  src: string;
  thumbnail?: string;
  alt: string;
  caption: string;
  category: string;
  panelTitle?: string;
  roomName?: string;
  facts?: string[];
  description?: string;
}

class HotelGallery extends HTMLElement {
  private cleanup?: () => void;

  connectedCallback() {
    this.cleanup?.();
    const dialog = this.querySelector<HTMLDialogElement>("dialog");
    const openButton = this.querySelector<HTMLButtonElement>("[data-gallery-open]");
    const closeButton = this.querySelector<HTMLButtonElement>("[data-gallery-close]");
    const previous = this.querySelector<HTMLButtonElement>("[data-gallery-previous]");
    const next = this.querySelector<HTMLButtonElement>("[data-gallery-next]");
    const layers = Array.from(this.querySelectorAll<HTMLElement>("[data-gallery-layer]"));
    const images = Array.from(this.querySelectorAll<HTMLImageElement>("[data-gallery-image]"));
    const caption = this.querySelector<HTMLElement>("[data-gallery-caption]");
    const counter = this.querySelector<HTMLElement>("[data-gallery-counter]");
    const status = this.querySelector<HTMLElement>("[data-gallery-status]");
    const dynamicContent = this.querySelector<HTMLElement>("[data-gallery-dynamic]");
    const description = this.querySelector<HTMLElement>("[data-gallery-description]");
    const progress = this.querySelector<HTMLElement>("[data-gallery-progress]");
    const factItems = Array.from(this.querySelectorAll<HTMLElement>("[data-gallery-fact]"));
    const thumbnails = Array.from(this.querySelectorAll<HTMLButtonElement>("[data-gallery-thumbnail]"));
    const data = this.querySelector<HTMLScriptElement>("[data-gallery-images]");

    if (!dialog || !openButton || !closeButton || !previous || !next || layers.length !== 2 || images.length !== 2 || !caption || !counter || !status || !data) return;

    const slides: GallerySlide[] = JSON.parse(data.textContent ?? "[]");
    if (!slides.length) return;

    const events = new AbortController();
    const options = { signal: events.signal };
    let current = 0;
    let savedOverflow: string | undefined;
    let autoplayTimer: number | undefined;
    let loadingStatusTimer: number | undefined;
    let activeImageIndex = 0;
    let renderToken = 0;
    let requested = 0;
    const preloadedImages = new Map<number, Promise<HTMLImageElement>>();

    const normalizeIndex = (index: number) => (index + slides.length) % slides.length;

    const waitUntilReady = async (image: HTMLImageElement) => {
      if (!image.complete) {
        await new Promise<void>((resolve, reject) => {
          const cleanup = () => {
            image.removeEventListener("load", handleLoad);
            image.removeEventListener("error", handleError);
          };
          const handleLoad = () => {
            cleanup();
            resolve();
          };
          const handleError = () => {
            cleanup();
            reject(new Error("No se pudo cargar la fotografía."));
          };

          image.addEventListener("load", handleLoad, { once: true });
          image.addEventListener("error", handleError, { once: true });
        });
      }

      if (image.naturalWidth === 0) throw new Error("No se pudo cargar la fotografía.");

      try {
        await image.decode();
      } catch {
        if (!image.complete || image.naturalWidth === 0) throw new Error("No se pudo decodificar la fotografía.");
      }

      return image;
    };

    const preload = (index: number) => {
      const normalized = normalizeIndex(index);
      const cached = preloadedImages.get(normalized);
      if (cached) return cached;

      const image = new Image();
      image.decoding = "async";
      image.src = slides[normalized].src;
      const pending = waitUntilReady(image).catch((error) => {
        if (preloadedImages.get(normalized) === pending) preloadedImages.delete(normalized);
        throw error;
      });
      preloadedImages.set(normalized, pending);
      return pending;
    };

    const preloadAdjacent = (index: number) => {
      if (slides.length < 2) return;
      const normalized = normalizeIndex(index);
      const adjacent = new Set([normalizeIndex(normalized - 1), normalizeIndex(normalized + 1)]);
      adjacent.delete(normalized);
      adjacent.forEach((adjacentIndex) => {
        void preload(adjacentIndex).catch(() => undefined);
      });
    };

    const clearLoadingStatus = () => {
      if (loadingStatusTimer !== undefined) {
        window.clearTimeout(loadingStatusTimer);
        loadingStatusTimer = undefined;
      }
      status.textContent = "";
    };

    const restoreScroll = () => {
      if (savedOverflow !== undefined) {
        document.body.style.overflow = savedOverflow;
        savedOverflow = undefined;
      }
    };

    const updateSupplementalContent = (slide: GallerySlide, index: number) => {
      factItems.forEach((item, factIndex) => {
        const fact = slide.facts?.[factIndex];
        const text = item.querySelector<HTMLElement>("[data-gallery-fact-text]");
        item.hidden = !fact;
        item.classList.toggle("flex", Boolean(fact));
        if (text) text.textContent = fact ?? "";
      });

      if (description) {
        description.textContent = slide.description ?? "";
        description.hidden = !slide.description;
      }

      if (progress) progress.style.width = `${((index + 1) / slides.length) * 100}%`;

      thumbnails.forEach((thumbnail, thumbnailIndex) => {
        const isActive = thumbnailIndex === index;
        thumbnail.dataset.active = isActive ? "true" : "false";
        if (isActive) {
          thumbnail.setAttribute("aria-current", "true");
          thumbnail.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
        } else {
          thumbnail.removeAttribute("aria-current");
        }
      });
    };

    const show = async (index: number) => {
      const target = normalizeIndex(index);
      requested = target;
      const slide = slides[target];
      const token = ++renderToken;
      const incomingIndex = activeImageIndex === 0 ? 1 : 0;
      const incoming = images[incomingIndex];
      const outgoing = images[activeImageIndex];
      const incomingLayer = layers[incomingIndex];
      const outgoingLayer = layers[activeImageIndex];

      clearLoadingStatus();
      loadingStatusTimer = window.setTimeout(() => {
        if (token === renderToken) status.textContent = "Cargando foto…";
      }, 900);
      incomingLayer.style.opacity = "0";
      incoming.alt = "";

      try {
        await preload(target);
        if (token !== renderToken) return false;

        incoming.src = slide.src;
        await waitUntilReady(incoming);
        if (token !== renderToken) return false;

        if (dynamicContent) {
          dynamicContent.style.opacity = "0";
          await new Promise((resolve) => window.setTimeout(resolve, 120));
          if (token !== renderToken) return false;
        }

        clearLoadingStatus();
        incoming.alt = slide.alt;
        caption.textContent = slide.roomName ?? slide.panelTitle ?? slide.caption;
        counter.textContent = slide.roomName || slide.panelTitle
          ? `${target + 1} / ${slides.length}`
          : `${target + 1} / ${slides.length} · ${slide.category}`;
        updateSupplementalContent(slide, target);
        if (dynamicContent) dynamicContent.style.opacity = "1";
        incomingLayer.style.opacity = "1";
        outgoingLayer.style.opacity = "0";
        outgoing.alt = "";
        activeImageIndex = incomingIndex;
        current = target;
        preloadAdjacent(current);
        return true;
      } catch {
        if (token !== renderToken) return false;

        clearLoadingStatus();
        incomingLayer.style.opacity = "0";
        requested = current;
        status.textContent = "No se pudo cargar esta foto. Puedes seguir navegando.";
        return true;
      }
    };

    const stopAutoplay = () => {
      if (autoplayTimer !== undefined) {
        window.clearTimeout(autoplayTimer);
        autoplayTimer = undefined;
      }
    };

    const scheduleAutoplay = () => {
      stopAutoplay();
      autoplayTimer = window.setTimeout(() => {
        void show(current + 1).then((isLatestRequest) => {
          if (isLatestRequest && dialog.open) scheduleAutoplay();
        });
      }, 4000);
    };

    const showManually = (step: number) => {
      stopAutoplay();
      void show(requested + step).then((isLatestRequest) => {
        if (isLatestRequest && dialog.open) scheduleAutoplay();
      });
    };

    const showSelected = (index: number) => {
      stopAutoplay();
      void show(index).then((isLatestRequest) => {
        if (isLatestRequest && dialog.open) scheduleAutoplay();
      });
    };

    const preloadFirstSlide = () => {
      void preload(0).catch(() => undefined);
    };

    openButton.addEventListener("pointerenter", preloadFirstSlide, options);
    openButton.addEventListener("pointerdown", preloadFirstSlide, options);
    openButton.addEventListener("focus", preloadFirstSlide, options);

    openButton.addEventListener("click", () => {
      if (dialog.open) return;
      renderToken++;
      clearLoadingStatus();
      if (dynamicContent) dynamicContent.style.opacity = "1";
      layers.forEach((layer) => {
        layer.style.opacity = "0";
      });
      images.forEach((galleryImage) => {
        galleryImage.alt = "";
      });
      activeImageIndex = 0;
      current = 0;
      requested = 0;
      dialog.showModal();
      savedOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      void show(0).then((isLatestRequest) => {
        if (isLatestRequest && dialog.open) scheduleAutoplay();
      });
    }, options);
    closeButton.addEventListener("click", () => dialog.close(), options);
    previous.addEventListener("click", () => showManually(-1), options);
    next.addEventListener("click", () => showManually(1), options);
    thumbnails.forEach((thumbnail) => {
      thumbnail.addEventListener("click", () => {
        const index = Number(thumbnail.dataset.galleryThumbnailIndex);
        if (Number.isInteger(index)) showSelected(index);
      }, options);
    });

    dialog.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        dialog.close();
      } else if (event.key === "Tab") {
        const controls = [closeButton, previous, ...thumbnails, next];
        const focused = controls.indexOf(document.activeElement as HTMLButtonElement);
        const step = event.shiftKey ? -1 : 1;
        event.preventDefault();
        controls[(focused + step + controls.length) % controls.length].focus();
      } else if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        showManually(event.key === "ArrowRight" ? 1 : -1);
      }
    }, options);
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    }, options);
    dialog.addEventListener("close", () => {
      stopAutoplay();
      renderToken++;
      requested = current;
      clearLoadingStatus();
      restoreScroll();
      openButton.focus({ preventScroll: true });
    }, options);

    this.cleanup = () => {
      stopAutoplay();
      renderToken++;
      clearLoadingStatus();
      events.abort();
      if (dialog.open) dialog.close();
      restoreScroll();
    };
  }

  disconnectedCallback() {
    this.cleanup?.();
  }
}

if (!customElements.get("hotel-gallery")) {
  customElements.define("hotel-gallery", HotelGallery);
}
