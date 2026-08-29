# Hero: integración de la nueva fotografía

**Fecha:** 29 de agosto de 2026

## Objetivo

Corregir las referencias rotas del Hero y utilizar la nueva fotografía real disponible, manteniendo el alcance en escritorio y sin cambiar el resto de la composición.

## Contexto

El commit `8f594a7` añadió fotografías organizadas por zonas del hotel y eliminó `hero-desktop.jpg`, `hero-mobile.jpg` y `hero-test.jpg`. El componente todavía importaba las dos primeras imágenes, por lo que sus referencias habían quedado rotas.

## Cambios realizados

- Se importa `Foto piscina con hotel de fondo soleado.png` desde `src/assets/images/hero/`.
- Se eliminaron los imports de `hero-desktop.jpg` y `hero-mobile.jpg`.
- Se sustituyó el selector `picture/source` por una única imagen, conservando el posicionamiento, `object-cover`, el centrado, las dimensiones obtenidas del recurso y la prioridad de carga.
- La fotografía original no se modificó ni se renombró.
- Se mantuvieron intactos textos, botones, beneficios, overlay, alturas, Navbar y barra flotante.
- No se añadieron adaptaciones móviles ni se modificaron las clases responsive existentes. Se mantiene la decisión de completar escritorio primero.

## Archivos modificados o creados

- `frontend/src/components/sections/Hero.astro`.
- `movimientos/2026-08-29-hero-nueva-fotografia.md`.
- `movimientos/README.md`.

## Verificación

- `npm run check`: correcto; 7 archivos revisados, 0 errores, 0 advertencias y 0 sugerencias.
- `npm run build`: correcto; 1 página estática generada.
- `git diff --check`: correcto.

## Pendiente

- Continuar con el cierre visual del Hero de escritorio; esta corrección no implica su aprobación visual definitiva.
- La optimización de las nuevas fotografías y la etapa responsive quedan pendientes, fuera del alcance de esta corrección.
- Los enlaces definitivos de Booking y WhatsApp siguen pendientes.

## Git

- Sin commit ni push por instrucción del usuario.
