interface GallerySlide {
  src: string;
  alt: string;
  caption: string;
  category: string;
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
    const images = Array.from(this.querySelectorAll<HTMLImageElement>("[data-gallery-image]"));
    const caption = this.querySelector<HTMLElement>("[data-gallery-caption]");
    const counter = this.querySelector<HTMLElement>("[data-gallery-counter]");
    const status = this.querySelector<HTMLElement>("[data-gallery-status]");
    const data = this.querySelector<HTMLScriptElement>("[data-gallery-images]");

    if (!dialog || !openButton || !closeButton || !previous || !next || images.length !== 2 || !caption || !counter || !status || !data) return;

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

    const show = async (index: number) => {
      const target = normalizeIndex(index);
      requested = target;
      const slide = slides[target];
      const token = ++renderToken;
      const incomingIndex = activeImageIndex === 0 ? 1 : 0;
      const incoming = images[incomingIndex];
      const outgoing = images[activeImageIndex];

      clearLoadingStatus();
      loadingStatusTimer = window.setTimeout(() => {
        if (token === renderToken) status.textContent = "Cargando foto…";
      }, 900);
      incoming.style.opacity = "0";
      incoming.alt = "";

      try {
        await preload(target);
        if (token !== renderToken) return false;

        incoming.src = slide.src;
        await waitUntilReady(incoming);
        if (token !== renderToken) return false;

        clearLoadingStatus();
        incoming.alt = slide.alt;
        caption.textContent = slide.caption;
        counter.textContent = `${target + 1} / ${slides.length} · ${slide.category}`;
        incoming.style.opacity = "1";
        outgoing.style.opacity = "0";
        outgoing.alt = "";
        activeImageIndex = incomingIndex;
        current = target;
        preloadAdjacent(current);
        return true;
      } catch {
        if (token !== renderToken) return false;

        clearLoadingStatus();
        incoming.style.opacity = "0";
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
      images.forEach((galleryImage) => {
        galleryImage.style.opacity = "0";
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

    dialog.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        dialog.close();
      } else if (event.key === "Tab") {
        const controls = [closeButton, previous, next];
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
