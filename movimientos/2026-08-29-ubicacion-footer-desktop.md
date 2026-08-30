# Sección de ubicación y footer

**Fecha:** 29 de agosto de 2026

## Objetivo

Construir la sección de ubicación y el footer del sitio siguiendo la arquitectura existente, con una composición hotelera profesional y sin modificar las secciones anteriores.

## Cambios realizados

- Se creó `Location.astro` dentro de `frontend/src/components/sections/`.
- La sección utiliza la composición compacta de dos columnas de la referencia final: información de ubicación a la izquierda y mapa amplio a la derecha.
- Se incorporaron el eyebrow «Ubicación», el título «Encuéntranos en Barrio El Cocal», la descripción proporcionada, la dirección sin ícono y el CTA «Cómo llegar».
- «Cómo llegar» utiliza la URL real de Google Maps proporcionada por el usuario.
- El CTA utiliza azul marino para coincidir con la referencia visual final.
- El mapa se integra mediante un iframe de Google Maps sin API key, dentro de una tarjeta con bordes redondeados, borde ligero y sombra.
- Se creó `Footer.astro` dentro de `frontend/src/components/layout/`.
- El footer utiliza fondo azul marino y la versión actualizada del logo `src/assets/logo/logo-hotel-la-roca-del-mar.png`.
- El logo se presenta directamente sobre el fondo, sin tarjeta blanca; conserva la ilustración a color y refuerza las letras claras para mantener legibilidad.
- Su contenido forma una franja horizontal compacta: identidad del hotel y cinco accesos directos para WhatsApp, correo, Booking, Facebook e Instagram.
- Booking, Facebook e Instagram utilizan las URLs reales proporcionadas.
- WhatsApp utiliza el número confirmado `+506 8896 2637` y abre una conversación con el mensaje precargado «Hola, quisiera consultar disponibilidad en Hotel La Roca del Mar.».
- El correo utiliza el dato confirmado `olgacabr@gmail.com` mediante un enlace `mailto:`.
- Los enlaces y datos compartidos se centralizaron en `src/config/contact.ts` para evitar duplicación entre ubicación y footer.
- Se añadieron identificadores `ubicacion` y `contacto`, conectando las anclas ya existentes del Navbar y Hero.
- `index.astro` permanece limpio y únicamente incorpora `Location` y `Footer` después de `Rooms`.

## Alcance conservado

- No se modificaron Hero, Navbar, Stay, Rooms, la galería exterior ni el lightbox de habitaciones.
- No se añadieron dependencias, datos de contacto ficticios ni una API key de mapas.

## Verificación

- `npm run check`: completado, 16 archivos revisados sin errores, advertencias ni sugerencias.
- `npm run build`: completado; se generó correctamente la página estática y 23 variantes optimizadas de imagen.
- Revisión visual desktop: completada en navegador a 1366 × 864; el bloque de ubicación mantiene texto compacto, mapa amplio y footer horizontal sin cortes.
- Comprobación básica a 768 × 900: sin desbordamiento horizontal; la ubicación y los contactos se reorganizan en columnas mediante los mismos componentes.
- `git diff --check`: completado sin errores de espacios en blanco.

## Git

- No se realizó commit ni push por instrucción del usuario.
