# Hotel La Roca del Mar

Proyecto web del Hotel La Roca del Mar.

La implementación comenzará con el frontend en Astro, Tailwind CSS y TypeScript. La carpeta `backend/` queda reservada para una etapa futura.

Los prompts, decisiones y resúmenes de cambios se guardan por separado en `movimientos/`.

## Requisitos

- Node.js 22.12.0 o superior en una versión par. Se recomienda utilizar la versión LTS par más reciente compatible.
- npm, incluido con Node.js.
- Git para clonar y actualizar el repositorio.

## Instalación

Desde la carpeta `frontend/`:

```bash
npm install
```

## Comandos del frontend

Ejecutar desde `frontend/`:

```bash
npm run dev
npm run build
npm run preview
npm run check
```

- `dev`: inicia el servidor local de desarrollo.
- `build`: genera la versión de producción en `frontend/dist/`.
- `preview`: sirve localmente la compilación de producción; requiere ejecutar `build` primero.
- `check`: revisa archivos Astro y TypeScript mediante las dependencias de desarrollo incluidas en el proyecto.

## Continuar desde otra computadora

1. Instalar Git y una versión compatible de Node.js.
2. Clonar el repositorio desde GitHub y entrar en la carpeta del proyecto.
3. Cambiar a `frontend/` y ejecutar `npm install`.
4. Ejecutar `npm run check` y `npm run build` para verificar el estado recibido.
5. Usar `npm run dev` para continuar el desarrollo.
6. Antes de trabajar, actualizar la rama local desde `origin/main` y confirmar que el árbol de trabajo esté limpio.
