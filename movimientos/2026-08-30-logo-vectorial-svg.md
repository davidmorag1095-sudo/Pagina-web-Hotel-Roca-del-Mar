# Logo vectorial SVG

**Fecha:** 30 de agosto de 2026

## Objetivo

Convertir el logo horizontal existente a un recurso SVG escalable y usarlo en los lugares donde ya aparecía, sin rediseñar la identidad ni modificar las dimensiones visuales del Navbar o el Footer.

## Cambios realizados

- Se creó `frontend/src/assets/logo/logo-hotel-la-roca-del-mar.svg` a partir del PNG original de 2172 × 724 px.
- El SVG contiene trazados vectoriales reales y no incrusta el PNG como una imagen raster.
- Se conservaron el símbolo, los colores, las letras, las proporciones 3:1 y el fondo azul marino del recurso original.
- `Navbar.astro` usa ahora directamente el SVG y mantiene sus anchos visuales de 180, 210 y 270 px según el breakpoint existente.
- `Footer.astro` usa el mismo SVG y conserva su ancho visual de 230 px.
- Se retiró la copia raster superpuesta que antes se usaba para mejorar el contraste de las letras; el recurso ya no es necesario porque el SVG define directamente sus formas y colores.
- El PNG original se conserva como fuente histórica y respaldo, pero ya no es referenciado por la página.
- No se añadieron dependencias al proyecto.

## Verificación

- `npm run check`: correcto; 16 archivos revisados sin errores, advertencias ni sugerencias.
- `npm run build`: correcto; se generó 1 página estática y las 26 variantes raster existentes se recuperaron o procesaron normalmente.
- Revisión visual desktop: el logo conserva los anchos existentes, mantiene la alineación del Navbar y se muestra completo sobre el Footer.
- Revisión visual a 390 × 844 px: el logo conserva su proporción y nitidez sin desplazar el botón «Reservar» ni producir desbordamiento horizontal.
- Se comprobó que el SVG contiene trazados y no referencias `<image>` ni datos raster incrustados.

## Ajuste de transparencia

- Se eliminó únicamente el trazado rectangular `2172 × 724` en color `#00132a` que provenía del fondo del PNG original.
- El SVG conserva intactos los restantes 6.956 trazados de la ilustración, los textos y los detalles de color.
- El fondo del recurso es ahora completamente transparente para integrarse con los colores propios del Navbar y el Footer.
- Se retiraron exclusivamente las clases de fondo aplicadas a las etiquetas del logo en `Navbar.astro` y `Footer.astro`; sus tamaños y estructura permanecen iguales.
- La lectura de los cuatro píxeles de esquina del SVG renderizado confirmó un canal alfa de `0`, sin fondo residual.
- La revisión visual local confirmó que el degradado del Navbar y el azul marino del Footer continúan detrás del logo sin bloques rectangulares visibles.
- Tras el ajuste, `npm run check` volvió a finalizar con 0 errores, 0 advertencias y 0 sugerencias.
- Tras el ajuste, `npm run build` volvió a generar correctamente la página estática.

## Git

- No se realizó commit ni push.
