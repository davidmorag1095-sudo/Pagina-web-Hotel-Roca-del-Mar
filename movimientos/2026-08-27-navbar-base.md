# Estructura base del Navbar

**Fecha:** 27 de agosto de 2026

## Objetivo

Crear la estructura semántica inicial del Navbar e integrarla en la página principal, sin menú móvil ni comportamiento con JavaScript.

## Qué se hizo

- Se creó el componente `Navbar.astro`.
- Se añadió el nombre del hotel como enlace principal.
- Se añadieron los enlaces Inicio, Galería, Ubicación, Contacto y Reservar.
- Se importó y colocó el Navbar dentro del Layout de la página principal.

## Archivos creados o modificados

- `frontend/src/components/navigation/Navbar.astro`.
- `frontend/src/pages/index.astro`.
- `movimientos/2026-08-27-navbar-base.md`.

## Decisiones

- Se utilizaron `header`, `nav`, `ul`, `li` y enlaces semánticos.
- Los enlaces de futuras secciones usan identificadores preparados para Galería, Ubicación, Contacto y Reservar.
- No se añadieron estilos, menú móvil, JavaScript ni animaciones.

## Verificación

- `npm run dev`: correcto.
- La página principal respondió con estado HTTP `200`.
- El servidor de desarrollo se detuvo después de la comprobación.

## Pendiente

- Incorporar el Hero que dará contraste al Navbar transparente.
- Ajustar su comportamiento responsive cuando se implemente el menú móvil.
- Implementar las secciones enlazadas cuando corresponda.

## Git

- Componente y movimientos publicados en `0b81790` — `feat: add styled navbar`.
- Integración de `Navbar.astro` en `index.astro` publicada en `676ae39` — `feat: connect homepage to base layout`.
- Push realizado correctamente a `origin/main` el 27 de agosto de 2026.
- La estructura y los estilos se conservaron juntos en un solo commit porque `Navbar.astro` ya contenía ambos al organizar el historial.
