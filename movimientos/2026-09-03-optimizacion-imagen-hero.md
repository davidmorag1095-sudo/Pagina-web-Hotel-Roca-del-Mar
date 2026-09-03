# Optimización de la imagen del Hero

**Fecha:** 3 de septiembre de 2026

## Objetivo

Reducir el peso descargado por la fotografía principal y servir resoluciones apropiadas según el dispositivo sin cambiar la imagen, el encuadre ni la composición visual del Hero.

## Estado anterior

- La fotografía PNG original mide 1448 × 1086 px y pesa 3,131,892 bytes, aproximadamente 3.13 MB decimales o 2.99 MiB.
- Se entregaba directamente el mismo archivo PNG en todos los tamaños de pantalla, sin `srcset` ni formatos modernos.

## Cambios realizados

- `Hero.astro` utiliza ahora el componente `Picture` de `astro:assets` sobre la misma fotografía original.
- Se solicitaron variantes de 480, 640, 768, 960, 1280 y 1448 px.
- El navegador puede elegir WebP, con JPEG como formato de respaldo.
- Se descartó AVIF después de medirlo porque, a la calidad visual seleccionada, produjo archivos mayores que WebP para esta fotografía.
- Se conservaron `loading="eager"`, `fetchpriority="high"`, dimensiones intrínsecas y el comportamiento existente de `object-cover` y `object-position`.
- No se modificaron textos, botones, colores, alturas, overlays ni composición responsive.

## Verificación

- `npm run check`: correcto; 16 archivos revisados, sin errores, advertencias ni sugerencias.
- `npm run build`: correcto; se generó la página estática y las variantes optimizadas del Hero.
- WebP generado en 480, 640, 768, 960, 1280 y 1448 px, con pesos entre 51,794 y 409,542 bytes.
- JPEG de respaldo generado en las mismas resoluciones, con pesos entre 55,930 y 454,778 bytes.
- En la prueba desktop de 1280 × 720 px el navegador eligió el WebP de 1280 px, de 334,630 bytes.
- En la prueba móvil de 390 × 844 px el navegador eligió el WebP de 480 px, de 51,794 bytes.
- Se revisó visualmente desktop y móvil: se conservaron el encuadre, `object-cover`, `object-position` y la composición, sin desbordamiento horizontal ni errores de consola.

## Git

- No se realizó commit ni push.
