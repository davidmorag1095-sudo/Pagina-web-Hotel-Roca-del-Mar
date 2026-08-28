# Estructura base del Navbar

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

- Diseñar el Navbar únicamente en una futura etapa solicitada.
- Implementar las secciones enlazadas cuando corresponda.

## Git

- Commit correspondiente: `feat: add styled navbar`.
- El push se realizará junto con los demás avances estables de esta etapa.
