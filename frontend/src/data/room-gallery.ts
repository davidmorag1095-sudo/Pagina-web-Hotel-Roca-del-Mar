import type { GalleryPhoto } from "./gallery";
import { roomImages } from "./room-images";

export interface RoomGalleryPhoto extends GalleryPhoto {
  roomName: string;
  facts: string[];
  description?: string;
}

export const roomGalleryCategoryOrder = [
  "Habitación doble sin aire",
  "Habitación doble con aire",
  "Habitación familiar",
  "Baños",
  "Otros detalles",
] as const;

const commonAmenities = ["Baño privado", "TV", "Wi-Fi"];

export const roomGalleryPhotos: RoomGalleryPhoto[] = [
  {
    image: roomImages.doubleWithFanAlternate,
    alt: "Vista alternativa de la habitación doble con ventilador",
    caption: "Habitación doble con ventilador",
    category: roomGalleryCategoryOrder[0],
    roomName: "Habitación doble con ventilador",
    facts: ["2 camas", "Baño privado", "Ventilador", "TV", "Wi-Fi"],
  },
  {
    image: roomImages.doubleWithAir,
    alt: "Habitación doble del hotel con dos camas",
    caption: "Habitación doble con aire acondicionado",
    category: roomGalleryCategoryOrder[1],
    roomName: "Habitación doble con aire acondicionado",
    facts: ["2 camas", "Baño privado", "Aire acondicionado", "TV", "Wi-Fi"],
  },
  {
    image: roomImages.doubleWithAirDetail,
    alt: "Dos camas en una habitación doble con aire acondicionado",
    caption: "Habitación doble con aire acondicionado",
    category: roomGalleryCategoryOrder[1],
    roomName: "Habitación doble con aire acondicionado",
    facts: ["2 camas", "Baño privado", "Aire acondicionado", "TV", "Wi-Fi"],
  },
  {
    image: roomImages.family,
    alt: "Habitación familiar del hotel con cama y camarote",
    caption: "Habitación familiar con aire acondicionado",
    category: roomGalleryCategoryOrder[2],
    roomName: "Habitación familiar con aire acondicionado",
    facts: ["1 cama + 1 camarote", "Baño privado", "Aire acondicionado", "TV", "Wi-Fi"],
    description: "Ideal para familias o grupos pequeños.",
  },
  {
    image: roomImages.double,
    alt: "Habitación doble del hotel con dos camas amplias",
    caption: "Habitación doble",
    category: "Habitación doble",
    roomName: "Habitación doble",
    facts: ["2 camas", ...commonAmenities],
  },
  {
    image: roomImages.bathroomShower,
    alt: "Ducha dentro del baño privado de una habitación",
    caption: "Ducha del baño privado",
    category: roomGalleryCategoryOrder[3],
    roomName: "Baño privado",
    facts: ["Baño privado"],
  },
  {
    image: roomImages.bathroomToilet,
    alt: "Inodoro dentro del baño privado de una habitación",
    caption: "Baño privado de la habitación",
    category: roomGalleryCategoryOrder[3],
    roomName: "Baño privado",
    facts: ["Baño privado"],
  },
];
