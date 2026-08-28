# Estilos globales base

**Fecha:** 27 de agosto de 2026

## Objetivo

Preparar `global.css` como base mínima y limpia para Astro con Tailwind CSS 4, sin añadir estilos específicos de componentes o secciones.

## Qué se hizo

- Se importó Tailwind CSS mediante la sintaxis oficial de Tailwind 4.
- Se definió una altura mínima global para `html` y `body`.
- Se dejó que Tailwind Preflight gestione el reinicio de márgenes y `box-sizing` para evitar reglas duplicadas.

## Archivos modificados

- `frontend/src/styles/global.css`.
- `movimientos/2026-08-27-estilos-globales-base.md`.

## Decisiones

- No se definieron colores todavía; la paleta se aplicará cuando se trabaje el diseño visual.
- No se añadieron estilos de componentes, secciones ni controles.
- No se modificaron `package.json`, `astro.config.mjs` ni `Layout.astro` porque esta etapa está limitada a la hoja global.

## Verificación

- Después de instalar y conectar Tailwind con Astro, `npm run dev` inició correctamente.
- La página principal respondió con estado HTTP `200`.
- El servidor de desarrollo se detuvo después de la comprobación.

## Pendiente

- Incorporar la paleta del hotel y los estilos visuales únicamente cuando se diseñen sus componentes y secciones.

## Git

- Commit principal: `71d2722` — `chore: configure Astro and Tailwind base`.
- Commit documental: `99413ac` — `docs: record Astro and Tailwind base commit`.
- Rama y remoto: `main` en `origin`.
- Estado de publicación: ambos commits fueron publicados correctamente el 27 de agosto de 2026.
