# Imágenes preparadas para el Hero

**Fecha:** 27 de agosto de 2026

## Objetivo

Guardar los recursos fotográficos disponibles para el futuro Hero sin implementar todavía esa sección.

## Cambios realizados

- Se añadió una imagen destinada a la versión de escritorio.
- Se añadió una imagen destinada a la versión móvil.
- Se añadió una imagen de prueba para evaluar el Hero posteriormente.

## Archivos afectados

- `frontend/src/assets/images/hero/hero-desktop.jpg`.
- `frontend/src/assets/images/hero/hero-mobile.jpg`.
- `frontend/src/assets/images/hero/hero-test.jpg`.
- `movimientos/2026-08-27-imagenes-hero.md`.

## Verificación

- Se confirmó que las tres imágenes existen dentro de `frontend/src/assets/images/hero/`.
- No correspondía ejecutar `npm run dev` porque este avance solo añadió recursos y no modificó código ni configuración.

## Decisiones

- Las imágenes se almacenaron en `src/assets` para que Astro pueda procesarlas cuando se implemente el Hero.
- Se conservaron variantes separadas para escritorio, móvil y pruebas.
- Ninguna imagen fue conectada todavía a una página o componente.

## Pendiente

- Elegir e integrar las imágenes definitivas cuando se construya el Hero.
- Comprobar el recorte, la optimización y el comportamiento responsive durante esa etapa.

## Git

- Commit publicado: `c375b39` — `Fotos`.
- El historial confirma que el commit está incluido en `origin/main`.
- Este movimiento fue creado posteriormente durante la auditoría documental; todavía no tiene commit propio.
