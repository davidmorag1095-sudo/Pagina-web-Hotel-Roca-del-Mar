# Landmark principal y semántica de ubicación

**Fecha:** 3 de septiembre de 2026

## Objetivo

Mejorar la estructura semántica de la página mediante un único landmark `<main>`, manteniendo Navbar y Footer fuera del contenido principal.

## Cambios realizados

- `index.astro` agrupa Hero, presentación del hotel, habitaciones y ubicación dentro de un único `<main>`.
- Navbar permanece antes de `<main>` y Footer permanece después de su cierre.
- La dirección física visible en `Location.astro` utiliza ahora el elemento semántico `<address>`.
- Se mantuvieron las clases existentes de la dirección y se añadió `not-italic` para neutralizar el estilo cursivo nativo del elemento.
- No se modificaron textos, espaciados, colores, tamaños, composición ni comportamiento responsive.

## Verificación

- Se confirmó un único elemento de apertura `<main>` y un único cierre `</main>` en el código fuente.
- `npm run check`: correcto; 16 archivos revisados, sin errores, advertencias ni sugerencias.
- `npm run build`: correcto; se generó 1 página estática.
- `git diff --check`: correcto.

## Git

- No se realizó commit ni push.
