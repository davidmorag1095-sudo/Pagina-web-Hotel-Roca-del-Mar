# Movimientos del proyecto

**Última revisión:** 1 de septiembre de 2026

Esta carpeta mantiene separados del código del sitio los prompts reutilizables, las decisiones y los resúmenes de cambios realizados con Codex.

El procedimiento obligatorio para commits y publicaciones está definido en `FLUJO-GIT.md`.

## Reglas

- El código de la página web no se guarda en esta carpeta.
- Cada etapa importante tendrá un archivo fechado con su objetivo, cambios y verificación.
- No se guardan contraseñas, tokens, claves ni otros datos sensibles.
- Los archivos generados por Astro, Tailwind y demás herramientas permanecen en sus ubicaciones normales del proyecto.
- Cada etapa estable debe documentarse antes del commit y completarse con su referencia de Git después del push.

## Índice actual

- `2026-09-01-refinamiento-informacion-habitaciones.md`: mejora de la jerarquía y presentación de la configuración y el uso recomendado en la base de las tres tarjetas de habitaciones.
- `2026-08-31-titulo-presentacion-hotel.md`: actualización del título compartido de la sección de presentación a «Conoce La Roca del Mar», sin cambios en su composición ni contenido restante.
- `2026-08-30-responsive-mobile-tablet.md`: adaptación responsive de toda la página sobre los componentes existentes, con menú móvil, layouts verticales, lightboxes táctiles y validación en teléfono y tablet.
- `2026-08-30-logo-vectorial-svg.md`: conversión del logo horizontal a SVG con trazados reales e integración en Navbar y Footer sin cambiar sus dimensiones visuales.
- `2026-08-30-navbar-logo-hover.md`: sustitución de la identidad textual por el logo horizontal 4K y líneas inferiores animadas en los enlaces del Navbar.
- `2026-08-29-ubicacion-footer-desktop.md`: sección de ubicación con mapa, CTA azul y footer azul marino con logo integrado, contactos y enlaces externos reales.
- `2026-08-29-habitaciones-desktop.md`: sección desktop «Nuestras habitaciones» con tres opciones compactas y un lightbox independiente de seis fotografías reales.
- `2026-08-29-integracion-fotos-habitaciones-atardecer.md`: incorporación organizada de fotografías reales de habitaciones y exteriores, incluida la actualización de una imagen conservando su ruta.
- `2026-08-29-estancia-desktop-galeria.md`: sección de estancia desktop con un collage de tres fotografías y lightbox; el catálogo actual reúne 16 imágenes y excluye del recorrido las tres visibles.
- `2026-08-29-hero-alineacion-desktop-sin-barra.md`: alineación horizontal del Hero y Navbar en escritorio y eliminación de la barra flotante y su espacio inferior.
- `2026-08-29-hero-nueva-fotografia.md`: corrección de las referencias rotas del Hero e integración de la nueva fotografía, sin adaptación móvil ni cambios en el contenido.
- `2026-08-28-estrategia-desktop-primero.md`: decisión de completar primero toda la versión de escritorio y abordar responsive en una etapa posterior.
- `2026-08-28-hero-composicion-superior-completa.md`: composición final de Navbar, Hero, beneficios y barra flotante basada en la referencia visual.
- `2026-08-28-hero-parte-1-base-visual.md`: base visual responsive del Hero con imágenes y overlay degradado.
- `2026-08-28-preparacion-tecnica-entorno.md`: preparación de Node.js, TypeScript, scripts npm y documentación para continuar desde otra computadora.
- `2026-08-27-auditoria-documentacion.md`: revisión integral y actualización de los movimientos existentes.
- `2026-08-27-configuracion-inicial.md`: carpeta de trabajo y separación entre código y movimientos.
- `2026-08-27-estructura-inicial.md`: estructura inicial del frontend, backend futuro y archivos generales.
- `2026-08-27-imagenes-hero.md`: recursos fotográficos añadidos para el futuro Hero.
- `2026-08-27-estilos-globales-base.md`: base mínima de `global.css` y Tailwind Preflight.
- `2026-08-27-configuracion-tailwind-astro.md`: instalación y conexión de Astro, Tailwind CSS 4 y Vite.
- `2026-08-27-layout-base.md`: estructura HTML5 y metadatos de `Layout.astro`.
- `2026-08-27-pagina-principal-base.md`: uso del layout e integración de componentes en `index.astro`.
- `2026-08-27-navbar-base.md`: estructura semántica e integración del Navbar.
- `2026-08-27-estilos-navbar.md`: presentación visual del Navbar con Tailwind CSS.
- `FLUJO-GIT.md`: procedimiento obligatorio para commits, verificaciones y pushes.
