# Preparación técnica del entorno

**Fecha:** 28 de agosto de 2026

## Objetivo

Preparar la configuración técnica mínima del frontend para continuar el proyecto desde esta computadora antes de implementar el Hero.

## Cambios realizados

- Se comprobó la disponibilidad local de Node.js y npm.
- Se instaló Node.js 24.18.1 LTS x64 desde el instalador oficial para Windows, con npm 11.16.0.
- Se instalaron las dependencias existentes del frontend.
- Se añadieron `@astrojs/check` y `typescript` como dependencias de desarrollo.
- Se configuró TypeScript con la plantilla estricta oficial de Astro.
- Se añadieron los scripts estándar de desarrollo, compilación, previsualización y comprobación.
- Se documentaron los requisitos, la instalación, los comandos y el flujo básico para continuar desde otra computadora.
- Se verificaron los comandos `dev`, `check`, `build` y `preview`.
- Se confirmó la disponibilidad de Git y Visual Studio Code y se abrió el repositorio en una ventana nueva de VS Code.

## Archivos modificados

- `frontend/tsconfig.json`.
- `frontend/package.json`.
- `frontend/package-lock.json`.
- `README.md`.
- `movimientos/README.md`.
- `movimientos/2026-08-28-preparacion-tecnica-entorno.md`.

## Decisiones

- Se recomienda Node.js 22.12.0 o superior en una versión par, de acuerdo con los requisitos actuales de Astro.
- Se eligió `astro/tsconfigs/strict` porque el proyecto está planteado con TypeScript y Astro recomienda `strict` o `strictest` para ese caso.
- Se mantuvieron únicamente `include` y `exclude` recomendados por Astro; no se añadieron alias, plugins ni opciones particulares del compilador.
- El script `check` usa `astro check`.
- `@astrojs/check@0.9.10` y `typescript@6.0.3` quedaron declarados como dependencias de desarrollo. El primero aporta el verificador oficial de Astro y el segundo el análisis de tipos.
- No se instalaron frameworks, integraciones visuales ni librerías adicionales.
- No se instalaron extensiones de VS Code sin autorización. Se consideran recomendables Astro Official y Tailwind CSS IntelliSense para el trabajo posterior.
- No se modificaron componentes, layouts, imágenes ni estilos visuales.
- La estructura actual se conservó porque separa adecuadamente páginas, layouts, navegación, secciones, UI, datos, configuración, utilidades y recursos; el backend futuro permanece aislado en `backend/`.

## Verificación

- Node.js: `v24.18.1` LTS.
- npm: `11.16.0`.
- Git: `2.55.0.windows.4`.
- Visual Studio Code: `1.135.0` x64.
- `npm install`: correcto; dependencias reconciliadas y 0 vulnerabilidades detectadas.
- Instalación de `@astrojs/check` y `typescript`: correcta; 279 paquetes auditados y 0 vulnerabilidades detectadas.
- `npm run check`: correcto; 5 archivos revisados, 0 errores, 0 advertencias y 0 sugerencias.
- `npm run build`: correcto; 1 página estática generada en `frontend/dist/`.
- `npm run dev`: correcto; `http://127.0.0.1:4321/` respondió HTTP 200 y el servidor se detuvo después de la prueba.
- `npm run preview`: correcto; `http://127.0.0.1:4321/` respondió HTTP 200 desde la compilación y el servidor se detuvo después de la prueba.
- VS Code abrió correctamente la carpeta raíz del repositorio.
- npm advirtió que el script de instalación de `esbuild@0.28.2` no está incluido en su política `allowScripts`; no fue necesario aprobarlo porque las comprobaciones y la compilación funcionaron correctamente.
- Astro activó su telemetría anónima predeterminada al ejecutar la primera comprobación. No se cambió esa preferencia.

## Pendiente

- Reiniciar cualquier terminal o instancia de VS Code que estuviera abierta antes de instalar Node.js para que reciba el `PATH` actualizado.
- Instalar opcionalmente, con autorización, las extensiones Astro Official y Tailwind CSS IntelliSense.
- Esperar la imagen de referencia antes de comenzar el Hero.

## Git

- No se realizó commit ni push en esta etapa.
