# Página principal base

## Qué se hizo

- Se revisó `frontend/src/pages/index.astro`.
- Se confirmó que ya importa `Layout.astro` y lo utiliza como único contenedor principal.
- Se verificó que la página principal carga correctamente.

## Archivos modificados

- `movimientos/2026-08-27-pagina-principal-base.md`.

`frontend/src/pages/index.astro` no necesitó cambios porque ya cumplía exactamente el alcance solicitado.

## Decisiones

- Se conservó `<Layout />`, equivalente a un contenedor `<Layout></Layout>` vacío y más limpio mientras no exista contenido.
- No se añadieron Navbar, Hero, contenido visual, secciones ni estilos.

## Verificación

- `npm run dev`: correcto.
- La página principal respondió con estado HTTP `200`.
- El servidor de desarrollo se detuvo después de la comprobación.

## Pendiente

- Añadir contenido a la página principal únicamente en futuras etapas solicitadas.

## Git

- Commit correspondiente: `feat: connect homepage to base layout`.
- El push se realizará junto con los demás avances estables de esta etapa.
