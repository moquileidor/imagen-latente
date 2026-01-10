# Imagen Latente — Fotografía Digital

Sitio web tipo portfolio fotográfico desarrollado en HTML, CSS (Tailwind) y JavaScript.
Pensado para ser liviano, rápido y escalable.

## Estructura del proyecto

- `public_html/`  
  Contiene todo lo que se publica en el hosting (Hostinger).

- `assets/`  
  Recursos del sitio:
  - `js/` lógica de navegación y galería
  - `img/` imágenes (brand, hero y galería)
  - `fonts/` fuentes locales (opcional)

- `data/images.json`  
  Catálogo de imágenes utilizado por la galería en Fase 1.

## Fase 1 (alcance actual)

- Sitio web funcional
- Galería de fotos organizada
- Diseño responsive
- Carga inicial de contenido proporcionado por el cliente
- Optimización básica de velocidad
- Enlaces a redes sociales

La galería consume los datos desde `data/images.json`.

## Fase 2 (planeada)

- Backend en PHP
- Panel de administración
- Subida de fotos por el cliente
- Control de acceso
- Descarga privada de material

En esta fase, el frontend consumirá datos desde `/api/` en lugar de `images.json`.

## Deploy

Subir el contenido de `public_html/` al directorio raíz del dominio
(`public_html`) en Hostinger.

## Notas

- Las imágenes de galería se organizan en:
  - `assets/img/gallery/full/`
  - `assets/img/gallery/thumbs/`
- El archivo `README.md` no se sube al hosting.
