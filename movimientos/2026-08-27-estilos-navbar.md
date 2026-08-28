# Estilos base del Navbar

## Qué se hizo

- Se posicionó el Navbar de forma absoluta sobre el espacio del futuro Hero.
- Se mantuvo el fondo transparente y el ancho completo.
- Se distribuyeron el nombre del hotel, la navegación y el botón de reserva en tres zonas.
- Se aplicó texto blanco, una línea inferior en el enlace activo y transiciones suaves al pasar el cursor.
- Se diseñó el botón `Reservar` con color coral, forma redondeada y estado hover.

## Archivos modificados

- `frontend/src/components/navigation/Navbar.astro`
- `movimientos/2026-08-27-estilos-navbar.md`

## Decisiones tomadas

- Se definió una altura de `88px`, dentro del rango solicitado de 80–90px.
- Se utilizó una cuadrícula de tres columnas para mantener la navegación centrada.
- Se usó `#e85d4a` como coral de acción y `#cf4c3a` para su estado hover.
- Se mantuvo el fondo completamente transparente, aunque temporalmente el texto blanco tenga poco contraste sin el Hero.
- No se agregó menú móvil, JavaScript, animaciones, sombras ni fondo sólido.

## Verificación

- `npm run dev` inició correctamente.
- La página principal respondió con estado HTTP `200`.
- El servidor de desarrollo se detuvo después de la comprobación.

## Pendiente

- Incorporar el Hero que dará contraste al Navbar.
- Implementar la navegación móvil en una etapa posterior.
- Revisar el diseño visual completo cuando exista el mockup y el Hero.

## Estado de Git

- Commit correspondiente: `feat: add styled navbar`.
- El push se realizará junto con los demás avances estables de esta etapa.
