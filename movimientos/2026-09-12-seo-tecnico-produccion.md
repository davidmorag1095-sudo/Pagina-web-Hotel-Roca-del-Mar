# SEO técnico de producción

**Fecha:** 12 de septiembre de 2026

## Objetivo

Completar la configuración SEO técnica prioritaria para el dominio oficial `https://hotelrocadelmar.com` sin modificar el diseño ni el comportamiento de la página.

## Cambios

- Se configuró `site` con el dominio oficial en Astro.
- Se añadió la integración oficial `@astrojs/sitemap`.
- Se incorporaron canonical, Open Graph y Twitter Card en el layout principal.
- La imagen social se genera desde la fotografía real actual del Hero en formato JPEG de 1200 × 630 píxeles.
- Se añadió JSON-LD con un único tipo `Hotel` y únicamente información confirmada: nombre, URL, dirección, teléfono, correo, perfiles sociales, Booking e imágenes reales.
- Se reutilizó el SVG actual del hotel como favicon, sin modificar el recurso ni el branding.
- Se añadió la ubicación del sitemap a `robots.txt`.

## Archivos

- `frontend/astro.config.mjs`
- `frontend/package.json`
- `frontend/package-lock.json`
- `frontend/public/robots.txt`
- `frontend/src/layouts/Layout.astro`
- `movimientos/README.md`
- `movimientos/2026-09-12-seo-tecnico-produccion.md`

## Verificación prevista

- `npm run check`
- `npm run build`
- `git diff --check`
- Revisión del HTML generado para confirmar metadata única, JSON-LD válido y un solo H1.
- Revisión de `sitemap-index.xml`, `sitemap-0.xml` y `robots.txt` en la salida de producción.

## Restricciones respetadas

- Sin cambios visuales ni textos visibles.
- Sin cambios en Booking, WhatsApp, galerías, mapa o navegación.
- Sin AVIF, nueva página 404, optimización adicional del SVG ni nuevas páginas.
