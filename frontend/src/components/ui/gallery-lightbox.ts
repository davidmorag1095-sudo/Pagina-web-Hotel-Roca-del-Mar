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
    const image = this.querySelector<HTMLImageElement>("[data-gallery-image]");
    const caption = this.querySelector<HTMLElement>("[data-gallery-caption]");
    const counter = this.querySelector<HTMLElement>("[data-gallery-counter]");
    const status = this.querySelector<HTMLElement>("[data-gallery-status]");
    const data = this.querySelector<HTMLScriptElement>("[data-gallery-images]");

    if (!dialog || !openButton || !closeButton || !previous || !next || !image || !caption || !counter || !status || !data) return;

    const slides: GallerySlide[] = JSON.parse(data.textContent ?? "[]");
    if (!slides.length) return;

    const events = new AbortController();
    const options = { signal: events.signal };
    let current = 0;
    let savedOverflow: string | undefined;

    const restoreScroll = () => {
      if (savedOverflow !== undefined) {
        document.body.style.overflow = savedOverflow;
        savedOverflow = undefined;
      }
    };

    const show = (index: number) => {
      current = (index + slides.length) % slides.length;
      const slide = slides[current];
      status.textContent = "Cargando foto…";
      image.style.opacity = "0";
      image.alt = slide.alt;
      image.src = slide.src;
      caption.textContent = slide.caption;
      counter.textContent = `${current + 1} / ${slides.length} · ${slide.category}`;
      if (image.complete && image.naturalWidth > 0) {
        image.style.opacity = "1";
        status.textContent = "";
      }
    };

    image.addEventListener("load", () => {
      image.style.opacity = "1";
      status.textContent = "";
    }, options);
    image.addEventListener("error", () => {
      image.style.opacity = "0";
      status.textContent = "No se pudo cargar esta foto. Puedes seguir navegando.";
    }, options);

    openButton.addEventListener("click", () => {
      if (dialog.open) return;
      show(0);
      dialog.showModal();
      savedOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    }, options);
    closeButton.addEventListener("click", () => dialog.close(), options);
    previous.addEventListener("click", () => show(current - 1), options);
    next.addEventListener("click", () => show(current + 1), options);

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
        show(current + (event.key === "ArrowRight" ? 1 : -1));
      }
    }, options);
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    }, options);
    dialog.addEventListener("close", () => {
      restoreScroll();
      openButton.focus({ preventScroll: true });
    }, options);

    this.cleanup = () => {
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