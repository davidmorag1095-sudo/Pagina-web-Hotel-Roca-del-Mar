import type { ImageMetadata } from "astro";
import poolOverview from "../assets/images/piscina/Vista de la piscina esquina derecha desde arriba, sol.png";
import poolTerrace from "../assets/images/piscina/Foto Piscina y mesas lado soda desde abajo sol.png";
import poolGarden from "../assets/images/piscina/Planta piscina y hotel de fondo sol.png";
import poolBalcony from "../assets/images/piscina/Vista de la piscina esquina izquierda desde arriba, sol.png";
import palms from "../assets/images/exteriores/Palmeras entradas al hotel al frente de soda sol.png";
import cactus from "../assets/images/exteriores/Foto cactus con fondo de piscina y hotel sol.png";
import courtyard from "../assets/images/exteriores/Foto piscina desde el lado de la soda sol.png";
import sloth from "../assets/images/exteriores/Oso peresozo  sol.png";
import sea from "../assets/images/mar/Vista trasera Playa sol.png";
import leftWalkway from "../assets/images/pasillos/Pasillo izquierdo arriba sol.png";
import mainWalkway from "../assets/images/pasillos/Pasillo principal arriba sol.png";
import rearWalkway from "../assets/images/pasillos/Pasillo trasero arriba sol.png";
import receptionEntrance from "../assets/images/entrada-parqueo/Entrada principal hotel con vista a la recepcion y parqueo de fondo sol.png";
import parkingEntrance from "../assets/images/entrada-parqueo/Foto entrada al hotel con vista a todo el parqueo, sol.png";
import rearParking from "../assets/images/entrada-parqueo/Parqueo parte trase desde arriba sol.png";

const currentPoolOverview = { ...poolOverview };

// En desarrollo Astro conserva la URL al reemplazar una foto con el mismo nombre.
// Vite renueva esta revisión al recargar el módulo o cambiar la imagen importada.
// Producción conserva las URLs con hash que genera Astro.
if (import.meta.env.DEV) {
  const separator = currentPoolOverview.src.includes("?") ? "&" : "?";
  currentPoolOverview.src += `${separator}v=${Date.now().toString(36)}`;
}

export interface GalleryPhoto {
  image: ImageMetadata;
  alt: string;
  caption: string;
  category: string;
  featured?: boolean;
}

export const galleryPhotos: GalleryPhoto[] = [
  {
    image: currentPoolOverview,
    alt: "Piscina del hotel rodeada de jardines y palmeras, vista desde arriba",
    caption: "Un momento junto a la piscina",
    category: "Piscina",
    featured: true,
  },
  {
    image: poolTerrace,
    alt: "Piscina y mesas junto a la soda del hotel",
    caption: "Piscina y espacios para compartir",
    category: "Piscina",
  },
  {
    image: poolGarden,
    alt: "Vegetación con la piscina y el edificio del hotel al fondo",
    caption: "Jardines junto a la piscina",
    category: "Piscina",
  },
  {
    image: poolBalcony,
    alt: "Vista de la piscina desde el balcón izquierdo del hotel",
    caption: "La piscina desde el balcón",
    category: "Piscina",
  },
  {
    image: palms,
    alt: "Palmeras y jardines junto a la escalera roja del hotel",
    caption: "Entre palmeras y jardines",
    category: "Exteriores",
    featured: true,
  },
  {
    image: cactus,
    alt: "Cactus del jardín con la piscina y el hotel al fondo",
    caption: "Detalles de nuestros jardines",
    category: "Exteriores",
  },
  {
    image: courtyard,
    alt: "Vista de la piscina desde el lado de la soda",
    caption: "Los exteriores del hotel",
    category: "Exteriores",
  },
  {
    image: sloth,
    alt: "Perezoso fotografiado entre la vegetación",
    caption: "Decoración del entorno",
    category: "Exteriores",
  },
  {
    image: sea,
    alt: "Vista del mar y las palmeras desde la parte trasera del hotel",
    caption: "El Pacífico, a pasos del hotel",
    category: "Mar",
  },
  {
    image: leftWalkway,
    alt: "Pasillo izquierdo de la planta alta del hotel",
    caption: "Pasillo izquierdo",
    category: "Pasillos",
  },
  {
    image: mainWalkway,
    alt: "Pasillo principal de la planta alta del hotel",
    caption: "Pasillo principal",
    category: "Pasillos",
  },
  {
    image: rearWalkway,
    alt: "Pasillo trasero de la planta alta del hotel",
    caption: "Pasillo trasero",
    category: "Pasillos",
  },
  {
    image: receptionEntrance,
    alt: "Entrada principal con vista hacia la recepción y el parqueo",
    caption: "La llegada al hotel",
    category: "Entrada y parqueo",
  },
  {
    image: parkingEntrance,
    alt: "Entrada del hotel con vista al área de estacionamiento",
    caption: "Entrada y estacionamiento",
    category: "Entrada y parqueo",
  },
  {
    image: rearParking,
    alt: "Área de parqueo trasera vista desde la planta alta",
    caption: "Estacionamiento en la parte trasera del hotel",
    category: "Entrada y parqueo",
  },
];
