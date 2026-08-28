# Layout base del sitio

## Qué se hizo

- Se creó la estructura HTML5 completa del layout general.
- Se configuró el idioma español, UTF-8 y el viewport responsive.
- Se añadió el título base y una descripción profesional del hotel.
- Se mantuvo la importación de `global.css`.
- Se colocó `<slot />` dentro de `body` para recibir las futuras secciones.

## Archivos modificados

- `frontend/src/layouts/Layout.astro`.
- `movimientos/2026-08-27-layout-base.md`.

## Decisiones

- El layout contiene únicamente metadatos y estructura semántica básica.
- No se añadieron Navbar, Hero, Footer, scripts ni estilos específicos.
- El título base identifica el hotel y su ubicación en Puntarenas, Costa Rica.

## Verificación

- `npm run dev`: correcto.
- La página respondió con estado HTTP `200`.
- El servidor de desarrollo se detuvo después de la comprobación.

## Pendiente

- Añadir las secciones visuales únicamente en futuras etapas solicitadas.

## Git

- Commit correspondiente: `feat: add base page layout`.
- El push se realizará junto con los demás avances estables de esta etapa.
