# Versiones horizontales para la galería exterior

**Fecha:** 12 de septiembre de 2026

## Objetivo

Adaptar las fotografías verticales utilizadas por la galería de áreas del hotel a una presentación horizontal real, sin inventar ni alterar el contenido documental de las tomas.

## Cambios realizados

- Se conservaron intactas las doce fotografías verticales originales.
- Se descartaron las primeras ampliaciones generativas porque podían introducir contexto inexistente en el hotel.
- Se crearon doce copias horizontales en proporción `4:3` mediante un recorte determinista del excedente superior e inferior de cada original.
- El encuadre conserva únicamente píxeles de la fotografía fuente: no añade fondos, personas, objetos, vehículos, puertas ni arquitectura.
- Las nuevas versiones corresponden a fotografías de piscina, exteriores, mar, pasillos, entrada y parqueo.
- `gallery.ts` utiliza ahora estas variantes horizontales dentro del lightbox exterior.
- Las fotografías que ya eran horizontales se mantuvieron sin cambios.
- No se modificaron captions, categorías, navegación, autoplay, precarga, transiciones ni diseño del lightbox.

## Verificación

- Las doce variantes nuevas tienen relación horizontal `4:3` y conservan el ancho original de cada fuente.
- No se aplicó estiramiento, deformación ni expansión generativa.
- La galería y las fotografías de habitaciones permanecieron intactas.
- `npm run check`: correcto; 17 archivos revisados, sin errores, advertencias ni sugerencias.
- `npm run build`: correcto; se generó la página estática y Astro optimizó las nuevas fuentes PNG a WebP para su entrega.
- `git diff --check`: correcto, sin errores de espacios en blanco.

## Git

- No se realizó commit ni push.
