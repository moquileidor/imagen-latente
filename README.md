# Imagen Latente — Fotografía Digital

Sitio web tipo portfolio fotográfico desarrollado en HTML, CSS (Tailwind) y JavaScript.
Pensado para ser liviano, rápido y escalable.

## Estructura del proyecto

```
imagen-latente/
├── public_html/              # Todo lo que se sube al hosting
│   ├── assets/
│   │   ├── css/
│   │   │   ├── styles.css    # (vacío, estilos en index.html)
│   │   │   └── tailwind.css  # (no usado, CDN en HTML)
│   │   ├── img/
│   │   │   ├── brand/        # Logo, favicon
│   │   │   ├── gallery/
│   │   │   │   ├── full/     # Imágenes alta resolución
│   │   │   │   └── thumbs/   # Thumbnails optimizados
│   │   │   └── hero/         # Imagen de portada
│   │   └── js/
│   │       ├── app.js        # Navegación, contacto
│   │       └── gallery.js    # Galería, lightbox, filtros
│   ├── data/
│   │   └── images.json       # Catálogo de imágenes
│   ├── .htaccess             # Optimización y seguridad
│   ├── robots.txt            # SEO
│   └── index.html            # Página principal
├── api/                      # Preparado para Fase 2
│   ├── _lib/
│   ├── auth/
│   └── gallery/
└── uploads/                  # Preparado para Fase 2
```

## Fase 1 (alcance actual)

✅ **Completado:**
- Sitio web funcional con navegación responsive
- Galería de fotos con filtros por categoría
- Lightbox con navegación por teclado
- Diseño responsive (mobile-first)
- Optimización básica (lazy loading, GZIP, caché)
- SEO básico (meta tags, Open Graph, robots.txt)
- Enlaces a redes sociales

🔄 **Pendiente:**
- Contenido real (fotos del cliente)
- Sistema de upload simple (Fase 1)

La galería consume los datos desde `data/images.json`.

## Fase 2 (planeada)

- Backend en PHP
- Panel de administración
- Subida de fotos por el cliente
- Control de acceso
- Descarga privada de material
- Organización por álbumes

En esta fase, el frontend consumirá datos desde `/api/` en lugar de `images.json`.

## Deploy

1. Subir el contenido de `public_html/` al directorio raíz del dominio en Hostinger
2. Verificar que `.htaccess` esté activo
3. Probar navegación y galería

## Cómo añadir fotos (Fase 1)

1. Subir imágenes a `assets/img/gallery/full/`
2. Crear thumbnails en `assets/img/gallery/thumbs/` (400px ancho recomendado)
3. Actualizar `data/images.json` con la nueva foto:
   ```json
   {
     "id": "evento-002",
     "title": "Nombre descriptivo",
     "category": "eventos",
     "date": "2026-01-11",
     "url": "assets/img/gallery/full/nombre-foto.jpg",
     "thumb": "assets/img/gallery/thumbs/nombre-foto.jpg",
     "alt": "Descripción para accesibilidad"
   }
   ```

## Tecnologías

- **HTML5** — Estructura semántica
- **Tailwind CSS 3.x** — Estilos (vía CDN en Fase 1)
- **JavaScript ES6+** — Lógica vanilla (sin frameworks)
- **JSON** — Base de datos estática (Fase 1)

## Notas técnicas

- Todas las rutas son relativas (compatibles con cualquier hosting)
- Lazy loading activo en imágenes de galería
- GZIP y caché configurados en `.htaccess`
- Mobile-first responsive design
- Accesibilidad: navegación por teclado, ARIA labels

## TODO

- [ ] Recibir contenido del cliente (10-15 fotos + imagen hero)
- [ ] Implementar sistema de upload simple (Opción A: FTP + script)
- [ ] Generar thumbnails automáticamente
- [ ] Testing en producción (Hostinger)
- [ ] Validación Lighthouse (target: >90 Performance)
