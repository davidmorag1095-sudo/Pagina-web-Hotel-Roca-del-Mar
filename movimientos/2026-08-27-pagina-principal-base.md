# Página principal base

**Fecha:** 27 de agosto de 2026

## Objetivo

Preparar `index.astro` para utilizar el layout general y recibir los componentes de la página principal sin añadir todavía contenido visual ni secciones.

## Qué se hizo

- Se revisó `frontend/src/pages/index.astro`.
- Se confirmó que importa `Layout.astro` y lo utiliza como contenedor principal.
- En la etapa posterior del Navbar, el contenedor dejó de ser autocerrado para recibir `<Navbar />`.
- Se importó `Navbar.astro` y se colocó dentro de `<Layout>`.
- Se verificó que la página principal carga correctamente.

## Archivos modificados

- `frontend/src/pages/index.astro`.
- `movimientos/2026-08-27-pagina-principal-base.md`.

## Decisiones

- La comprobación inicial no requirió cambios porque `<Layout />` ya cumplía el objetivo base.
- La integración posterior del Navbar requirió usar `<Layout><Navbar /></Layout>`.
- No se añadieron Hero, contenido visual, secciones ni estilos directamente en `index.astro`.

## Verificación

- `npm run dev`: correcto.
- La página principal respondió con estado HTTP `200`.
- El servidor de desarrollo se detuvo después de la comprobación.

## Pendiente

- Añadir contenido a la página principal únicamente en futuras etapas solicitadas.

## Git

- Commit publicado: `676ae39` — `feat: connect homepage to base layout`.
- Push realizado correctamente a `origin/main` el 27 de agosto de 2026, junto con el layout y el Navbar.
