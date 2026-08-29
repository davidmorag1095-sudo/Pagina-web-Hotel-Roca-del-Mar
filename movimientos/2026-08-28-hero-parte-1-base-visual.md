# Hero, parte 1: base visual

**Fecha:** 28 de agosto de 2026

## Objetivo

Crear la base visual responsive del Hero sin añadir todavía contenido textual, botones, beneficios ni elementos flotantes.

## Cambios realizados

- Se creó el componente `Hero.astro` dentro de `components/sections/`.
- Se configuró una portada de ancho completo y altura mínima equivalente a la pantalla inicial.
- Se utilizó `hero-desktop.jpg` como imagen principal y `hero-mobile.jpg` para pantallas de hasta 767 px.
- Se aplicó `object-cover` para cubrir el área sin deformar las fotografías.
- Se añadió un overlay oscuro con degradado, más intenso hacia la izquierda, preparado para el contenido blanco futuro.
- Se importó y colocó el Hero debajo del Navbar en la página principal.

## Archivos modificados

- `frontend/src/components/sections/Hero.astro`.
- `frontend/src/pages/index.astro`.
- `movimientos/2026-08-28-hero-parte-1-base-visual.md`.

## Decisiones

- Se utilizó un elemento `picture` para cambiar de fotografía según el ancho de pantalla sin añadir JavaScript.
- Las imágenes se consideran decorativas en esta etapa y usan texto alternativo vacío.
- El Navbar no requirió cambios porque ya utiliza posición absoluta y un nivel de apilamiento superior al Hero.
- No se añadieron contenedores vacíos, copy temporal ni elementos que no tengan una función visual actual.
- Se mantuvo el alcance limitado a la base visual; el contenido se incorporará en una etapa posterior.
- La referencia visual se utilizó únicamente para orientar la composición, las proporciones y el tratamiento del contraste; no se copiaron textos, controles, logotipo ni contenido de otro sitio.

## Verificación

- `npm run check`: correcto; 6 archivos revisados, 0 errores, 0 advertencias y 0 sugerencias.
- `npm run build`: correcto; 1 página estática generada.
- Se confirmó que el Navbar, el layout, los estilos globales y las imágenes originales no fueron modificados.

## Pendiente

- Recibir nuevamente la imagen de referencia antes de definir el contenido y los siguientes elementos del Hero.
- Añadir título, subtítulo, descripción, botones, beneficios y barra flotante únicamente en sus etapas correspondientes.

## Git

- No se realizó commit ni push en esta etapa.
