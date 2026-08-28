# Estilos globales base

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

## Pendiente

- Instalar Astro, Tailwind CSS y el plugin oficial de Tailwind para Vite en una etapa separada.
- Importar `global.css` desde el layout general cuando se implemente `Layout.astro`.
- Verificar la compilación completa después de instalar las dependencias.

## Git

- No se realizó commit ni push por solicitud del usuario.
