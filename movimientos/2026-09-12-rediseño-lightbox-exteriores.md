# Rediseño del lightbox de áreas exteriores

**Fecha:** 12 de septiembre de 2026

## Objetivo

Transformar la galería exterior en una composición editorial con panel informativo fijo, imagen principal y miniaturas, manteniendo la identidad visual del Hotel La Roca del Mar y sin alterar la galería de habitaciones.

## Cambios realizados

- El modal exterior adopta una composición de dos columnas en escritorio: panel informativo fijo a la izquierda e imagen protagonista a la derecha.
- El encabezado permanente muestra `GALERÍA`, `Áreas del hotel` y una línea dorada discreta.
- El título dinámico se obtiene de `category`; para la categoría `Mar` se presenta el texto confirmado `Frente al Pacífico`.
- La descripción dinámica utiliza directamente el `caption` existente de cada fotografía en `gallery.ts`.
- El título y la descripción cambian con una transición breve de opacidad, sin desplazar ni redimensionar la columna.
- El contador y la barra de progreso se actualizan junto con la imagen activa.
- Se añadió una fila navegable de miniaturas WebP de 240 px; la activa se identifica mediante borde dorado.
- Las miniaturas permiten navegación directa y reinician el autoplay de 4 segundos.
- Se conservaron crossfade, navegación circular, flechas, teclado, Escape y precarga adyacente con `Image()` y `decode()`.
- No se añadieron características, amenidades, horarios ni servicios no confirmados.
- En tablet y móvil el panel se apila sobre la fotografía y la fila de miniaturas conserva desplazamiento táctil interno sin overflow horizontal de la página.

## Verificación

- El contenido dinámico fue comprobado en las categorías `Entrada y parqueo`, `Piscina` y `Mar`.
- La navegación rápida entre miniaturas mantuvo sincronizados título, descripción, contador y miniatura activa.
- Tras una selección manual, el autoplay avanzó después de 4 segundos.
- Pruebas visuales realizadas en desktop de 1366 × 768, tablet de 768 × 1024 y móvil de 390 × 844, sin overflow horizontal.
- La galería de habitaciones conserva sus siete miniaturas, datos confirmados y composición independiente.

## Git

- No se realizó commit ni push.
