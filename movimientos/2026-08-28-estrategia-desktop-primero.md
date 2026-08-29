# Estrategia de desarrollo: escritorio primero

**Fecha:** 28 de agosto de 2026

## Objetivo

Definir el orden de trabajo visual del sitio antes de continuar con el desarrollo de nuevas secciones.

## Decisión

**Desktop se completa primero; responsive se trabaja como etapa posterior.**

El orden acordado es:

1. Terminar visualmente el Hero en escritorio.
2. Construir las demás secciones para escritorio.
3. Cerrar visualmente la página completa en escritorio.
4. Realizar después una etapa integral de responsive para móvil y tablet.

## Criterios de arquitectura

- Se mantendrá una sola arquitectura dentro de `frontend/`.
- No se crearán carpetas separadas para móvil.
- No se duplicarán componentes según el dispositivo.
- Los mismos componentes se adaptarán posteriormente con las variantes responsive de Tailwind CSS.
- Los componentes se mantendrán pequeños, claros y separados por responsabilidad.
- `index.astro` seguirá funcionando como una composición limpia de secciones.
- El futuro backend con Django permanecerá separado del frontend.
- Se evitarán archivos gigantes, código duplicado y refactorizaciones que no sean necesarias.

## Alcance de esta decisión

- La prioridad visual inmediata pasa a ser exclusivamente escritorio.
- Los comportamientos responsive básicos ya existentes se conservan como base técnica.
- No se optimizará ni rediseñará específicamente móvil o tablet hasta la etapa responsive posterior.
- Esta decisión no introduce cambios en componentes, estilos, contenido ni diseño.

## Git

- No se realizó commit ni push como parte de este registro.
