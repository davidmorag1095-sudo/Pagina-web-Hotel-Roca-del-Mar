# Responsive para móvil y tablet

**Fecha:** 30 de agosto de 2026

## Objetivo

Adaptar la página principal completa a teléfonos y tablets mediante los mismos componentes Astro, manteniendo la composición desktop existente y sin crear una estructura paralela.

## Cambios realizados

- `Navbar.astro`: encabezado móvil de 82 px, logo compacto, CTA de reserva y menú hamburguesa con apertura, cierre exterior, cierre mediante Escape y cierre al navegar.
- `Hero.astro`: altura, tipografías y espaciados móviles; encuadre específico de la fotografía; CTA apilados y beneficios distribuidos en dos columnas.
- `Stay.astro`: texto sobre collage en móvil, con fotografía principal y dos fotografías secundarias proporcionadas y sin deformación.
- `GalleryLightbox.astro`: modal ajustado a `100dvh`, controles superpuestos con tamaño táctil, encabezado compacto, captions visibles y conservación de autoplay, navegación circular y crossfade.
- `Rooms.astro`: tarjetas en una columna para móvil, tres columnas desde tablet y altura intermedia específica a 768 px para evitar texto cortado.
- `Location.astro`: texto antes del mapa, CTA de ancho completo en teléfono y mapa de ancho disponible con altura usable.
- `Footer.astro`: una columna en teléfonos estrechos, dos columnas desde 480 px y distribución horizontal original desde desktop.
- `global.css`: protección global frente al desbordamiento horizontal.
- Se conservaron textos, colores, fotografías, enlaces reales, contenido y funcionalidad existentes.

## Verificación

- `npm run check`: correcto; 16 archivos revisados con 0 errores, 0 advertencias y 0 sugerencias.
- `npm run build`: correcto; 1 página estática generada y 26 variantes raster procesadas o recuperadas de caché.
- Pruebas visuales móviles: 320 × 720, 375 × 812, 390 × 844, 430 × 932 y 480 × 900 px.
- Pruebas visuales tablet: 768 × 1024 y 1024 × 768 px.
- Regresión desktop revisada a 1280 × 720 px sin cambios en su composición general.
- A 320 px se probaron apertura/cierre y navegación del menú, galería exterior, galería de habitaciones, flechas, captions, contador, mapa y Footer.
- A 480 px se verificó el Footer en dos columnas sin textos cortados ni elementos fuera del viewport.
- No se observaron desbordamientos horizontales en las capturas de los tamaños probados.

## Git

- No se realizó commit ni push.
