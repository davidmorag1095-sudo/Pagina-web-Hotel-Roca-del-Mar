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
    image: roomImages.doubleWithAir,
    alt: "Habitación doble del hotel con dos camas",
    caption: "Habitación doble con aire acondicionado",
    category: roomGalleryCategoryOrder[1],
  },
  {
    image: roomImages.family,
    alt: "Habitación familiar del hotel con dos camas y aire acondicionado",
    caption: "Habitación familiar con aire acondicionado",
    category: roomGalleryCategoryOrder[2],
  },
];
