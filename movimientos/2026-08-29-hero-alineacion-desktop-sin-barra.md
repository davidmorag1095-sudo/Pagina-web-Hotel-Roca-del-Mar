# Hero: alineación de escritorio y eliminación de la barra flotante

**Fecha:** 29 de agosto de 2026

## Objetivo

Acercar el contenido del Hero y el logo al borde izquierdo en escritorio y retirar la barra blanca inferior, cuya información ya está cubierta por los botones y beneficios.

## Cambios realizados

- En el contenedor del contenido del Hero y en el Navbar, se sustituyó `lg:px-[5.5vw]` por `lg:px-[4vw]` y se añadió `lg:max-w-none`.
- Desde el breakpoint `lg`, el margen lateral deja de acumular el espacio del contenedor centrado de 1536 px. El logo y el contenido comparten la misma alineación; la navegación permanece centrada.
- Se conservan tamaños, separación interna y posición vertical del contenido. La fotografía, el degradado y la altura del área fotográfica no cambian.
- Se eliminó `BookingBar.astro`, su import y su renderizado en el Hero.
- Se retiró el padding inferior `pb-14 lg:pb-16` que acompañaba a la barra. El Hero termina ahora donde termina la fotografía, sin un espacio adicional reservado.
- Se trasladó `id="reservar"` al grupo de botones para conservar el destino de los enlaces existentes sin cambiar su texto ni sus URLs.
- No se construyeron otras secciones ni se realizaron ajustes específicos para móvil o tablet. La eliminación de la barra es común a todos los anchos; las clases responsive restantes se conservan.

## Archivos modificados o eliminados

- `frontend/src/components/sections/Hero.astro`.
- `frontend/src/components/navigation/Navbar.astro`.
- `frontend/src/components/sections/BookingBar.astro` (eliminado; recuperable desde Git).
- `movimientos/2026-08-29-hero-alineacion-desktop-sin-barra.md`.
- `movimientos/README.md`.

## Verificación

- Revisión en navegador a 1366 × 864 y 1920 × 1080.
- A 1366 px, el borde izquierdo del título y logo pasa de aproximadamente 75 a 55 px; a 1920 px, de 298 a 77 px.
- El título conserva su ancho, tamaño de letra, altura y coordenada vertical en ambas comprobaciones.
- Se confirmó la ausencia de la barra, el padding inferior de 0 px y el destino `reservar` en los botones.
- `npm run check`: correcto; 6 archivos revisados, 0 errores, 0 advertencias y 0 sugerencias.
- `npm run build`: correcto; 1 página estática generada.
- `git diff --check`: correcto.

## Pendiente

- Continuar el cierre visual de escritorio y luego construir las siguientes secciones.
- Completar los enlaces definitivos de Booking y WhatsApp.
- Mantener la etapa responsive para después del cierre de escritorio.

## Git

- Sin commit ni push por instrucción del usuario.
