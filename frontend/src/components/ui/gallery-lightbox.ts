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
    let activeImageIndex = 0;
    let renderToken = 0;

    const restoreScroll = () => {
      if (savedOverflow !== undefined) {
        document.body.style.overflow = savedOverflow;
        savedOverflow = undefined;
      }
    };

    const show = (index: number) => {
      current = (index + slides.length) % slides.length;
      const slide = slides[current];
      const token = ++renderToken;
      const incomingIndex = activeImageIndex === 0 ? 1 : 0;
      const incoming = images[incomingIndex];
      const outgoing = images[activeImageIndex];

      status.textContent = "Cargando foto…";
      incoming.style.opacity = "0";
      incoming.alt = slide.alt;
      caption.textContent = slide.caption;
      counter.textContent = `${current + 1} / ${slides.length} · ${slide.category}`;

      const reveal = () => {
        if (token !== renderToken) return;
        incoming.style.opacity = "1";
        outgoing.style.opacity = "0";
        outgoing.alt = "";
        activeImageIndex = incomingIndex;
        status.textContent = "";
      };
      const showError = () => {
        if (token !== renderToken) return;
        incoming.style.opacity = "0";
        status.textContent = "No se pudo cargar esta foto. Puedes seguir navegando.";
      };

      incoming.addEventListener("load", reveal, { once: true });
      incoming.addEventListener("error", showError, { once: true });
      incoming.src = slide.src;
      if (incoming.complete && incoming.naturalWidth > 0) reveal();
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
        show(current + 1);
        scheduleAutoplay();
      }, 4000);
    };

    const showManually = (step: number) => {
      show(current + step);
      scheduleAutoplay();
    };

    openButton.addEventListener("click", () => {
      if (dialog.open) return;
      renderToken++;
      images.forEach((galleryImage) => {
        galleryImage.style.opacity = "0";
        galleryImage.alt = "";
      });
      activeImageIndex = 0;
      show(0);
      dialog.showModal();
      savedOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      scheduleAutoplay();
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
      restoreScroll();
      openButton.focus({ preventScroll: true });
    }, options);

    this.cleanup = () => {
      stopAutoplay();
      renderToken++;
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
