import type { GalleryPhoto } from "./gallery";
import { roomImages } from "./room-images";

export const roomGalleryCategoryOrder = [
  "Habitación doble sin aire",
  "Habitación doble con aire",
  "Habitación familiar",
  "Baños",
  "Otros detalles",
] as const;

export const roomGalleryPhotos: GalleryPhoto[] = [
  {
    image: roomImages.doubleWithFan,
    alt: "Habitación doble con ventilador y dos camas",
    caption: "Habitación doble con ventilador",
    category: roomGalleryCategoryOrder[0],
  },
  {
    image: roomImages.doubleWithFanAlternate,
    alt: "Vista alternativa de la habitación doble con ventilador",
    caption: "Habitación doble con ventilador",
    category: roomGalleryCategoryOrder[0],
  },
  {
    image: roomImages.doubleWithAir,
    alt: "Habitación doble del hotel con dos camas",
    caption: "Habitación doble con aire acondicionado",
    category: roomGalleryCategoryOrder[1],
  },
  {
    image: roomImages.doubleWithAirAlternate,
    alt: "Habitación doble con aire acondicionado y salida al corredor",
    caption: "Habitación doble con aire acondicionado",
    category: roomGalleryCategoryOrder[1],
  },
  {
    image: roomImages.doubleWithAirDetail,
    alt: "Dos camas en una habitación doble con aire acondicionado",
    caption: "Habitación doble con aire acondicionado",
    category: roomGalleryCategoryOrder[1],
  },
  {
    image: roomImages.family,
    alt: "Habitación familiar del hotel con cama y camarote",
    caption: "Habitación familiar con aire acondicionado",
    category: roomGalleryCategoryOrder[2],
  },
];
