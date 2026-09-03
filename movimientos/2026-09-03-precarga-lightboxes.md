# Precarga y transición de imágenes en lightboxes

**Fecha:** 3 de septiembre de 2026

## Objetivo

Hacer prácticamente instantánea la navegación de la galería general y la galería de habitaciones, manteniendo visible la fotografía actual hasta que la siguiente esté cargada y decodificada.

## Cambios realizados

- La lógica compartida de `GalleryLightbox` precarga la primera fotografía al interactuar con el botón de apertura.
- Cada imagen se prepara con `Image()` y `decode()` antes de asignarse a la capa entrante del lightbox.
- Después de mostrar una fotografía se precargan únicamente la anterior y la siguiente, con navegación circular.
- La fotografía visible permanece intacta mientras se prepara el siguiente destino; el crossfade empieza solo cuando la nueva imagen está lista.
- Las solicitudes usan un token para ignorar resultados obsoletos al navegar rápidamente y evitar flashes o fotografías equivocadas.
- El autoplay de 4 segundos se programa después de completar cada cambio y la navegación manual reinicia el contador.
- “Cargando foto…” deja de aparecer inmediatamente y queda como fallback tras una espera excepcional de 900 ms.
- Se conserva el mensaje de error para fallos reales de carga.
- No se modificó el diseño del lightbox ni los datasets de fotografías.

## Verificación

- `npm run check`: correcto; 16 archivos revisados, sin errores, advertencias ni sugerencias.
- `npm run build`: correcto; se generó 1 página estática.
- `git diff --check`: correcto.
- Galería general y galería de habitaciones verificadas a 1440 × 900 px y 390 × 844 px.
- La navegación rápida hacia adelante y atrás mantuvo una sola fotografía visible y aplicó únicamente el último destino solicitado.
- El estado “Cargando foto…” permaneció oculto durante las transiciones normales.
- Flechas, teclado, captions, contador, cierre con Escape y autoplay de 4 segundos continuaron funcionando.
- No se detectaron errores ni advertencias en la consola del navegador.

## Git

- No se realizó commit ni push.
