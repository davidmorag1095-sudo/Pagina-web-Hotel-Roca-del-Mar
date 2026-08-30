# Logo horizontal e interacción del Navbar

**Fecha:** 30 de agosto de 2026

## Objetivo

Actualizar únicamente la identidad visual y la interacción de los enlaces del Navbar superpuesto al Hero, siguiendo la referencia proporcionada y sin modificar el resto del Hero.

## Cambios realizados

- Se sustituyó el isotipo circular y el nombre construido con texto HTML por el logo horizontal 4K existente en `frontend/src/assets/logo/logo-hotel-la-roca-del-mar.png`.
- El logo reúne ilustración, nombre y lema en una sola pieza visual y se procesa mediante `astro:assets` en WebP.
- Se genera a 540 px de ancho para mantener nitidez al mostrarse a un máximo de 270 px en desktop.
- El fondo azul `#00142A` incorporado en el archivo se continúa mediante un degradado horizontal limitado al Navbar, sólido detrás del logo y transparente hacia la derecha, evitando que se perciba como una tarjeta rectangular sin editar el recurso original.
- «Inicio» conserva su línea inferior como enlace activo.
- «Galería», «Ubicación» y «Contacto» muestran una línea inferior animada al pasar el cursor o recibir foco mediante teclado.
- El botón «Reservar», la posición transparente del Navbar y todo el contenido del Hero permanecen intactos.

## Verificación

- `npm run check`: correcto; 16 archivos revisados sin errores, advertencias ni sugerencias.
- `npm run build`: correcto; 1 página estática y 28 variantes de imágenes optimizadas o recuperadas de caché.
- Revisión visual a 1280 × 720: logo mostrado a 270 × 90 px desde una imagen optimizada de 540 × 180 px, sin invadir el menú ni causar desbordamiento horizontal.
- El fondo sólido del recurso se integra visualmente con el degradado del Navbar sin mostrar bordes rectangulares.
- Se comprobó que «Inicio» mantiene la línea activa y que «Galería» anima su línea de escala 0 a escala 1 al recibir hover; las otras opciones comparten el mismo estado.
- `git diff --check`: correcto; sin errores de espacios en blanco.

## Git

- No se realizó commit ni push; el cambio queda pendiente de prueba y autorización del usuario.
