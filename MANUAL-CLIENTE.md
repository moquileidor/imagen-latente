# Manual del Cliente — Imagen Latente

Guía simple para gestionar tu sitio web de fotografía.

---

## 📸 Cómo Subir Fotos Nuevas

### Opción 1: Via FTP/cPanel (Recomendado)

1. **Conectar a Hostinger:**
   - Abre tu cliente FTP (FileZilla, WinSCP, o el File Manager de cPanel)
   - Conéctate con tus credenciales de Hostinger

2. **Subir las fotos:**
   - Navega a: `public_html/assets/img/gallery/full/`
   - Sube tus fotos en alta resolución (JPG, PNG)
   - **Importante:** Usa nombres descriptivos sin espacios
     - ✅ Bueno: `evento-boda-maria-001.jpg`
     - ❌ Malo: `IMG_1234.jpg` o `foto con espacios.jpg`

3. **Crear thumbnails:**
   - Opción A: Usa un editor de imágenes (Photoshop, GIMP, etc.)
     - Redimensiona a 400px de ancho
     - Guarda en: `public_html/assets/img/gallery/thumbs/`
     - Usa el mismo nombre que la foto original
   
   - Opción B: Usa herramientas online
     - [iloveimg.com](https://www.iloveimg.com/es/redimensionar-imagen)
     - [tinypng.com](https://tinypng.com/) (también comprime)

4. **Actualizar el catálogo:**
   - Abre el archivo: `public_html/data/images.json`
   - Añade una nueva entrada al final (antes del `]`):
   
   ```json
   ,
   {
     "id": "evento-002",
     "title": "Boda María & Juan — Ceremonia",
     "category": "eventos",
     "date": "2026-01-11",
     "url": "assets/img/gallery/full/evento-boda-maria-001.jpg",
     "thumb": "assets/img/gallery/thumbs/evento-boda-maria-001.jpg",
     "alt": "Ceremonia de boda en jardín al atardecer"
   }
   ```

5. **Verificar:**
   - Abre tu sitio web: `https://imagenlatente.com.ar/`
   - Scroll a la sección "Galería"
   - Verifica que la nueva foto aparece
   - Haz clic para abrir en lightbox

---

## 🎨 Categorías Disponibles

Usa estas categorías en el campo `"category"`:

- `"eventos"` — Bodas, cumpleaños, eventos corporativos
- `"retratos"` — Sesiones de retrato, headshots
- `"arte"` — Fotografía artística, editorial, conceptual

---

## 📝 Estructura del JSON

Cada foto necesita estos campos:

```json
{
  "id": "identificador-unico",        // Sin espacios, único
  "title": "Título descriptivo",      // Lo que ve el usuario
  "category": "eventos",              // eventos, retratos, o arte
  "date": "2026-01-11",              // Formato: YYYY-MM-DD
  "url": "assets/img/gallery/full/nombre.jpg",    // Ruta a imagen grande
  "thumb": "assets/img/gallery/thumbs/nombre.jpg", // Ruta a thumbnail
  "alt": "Descripción para accesibilidad"         // Para lectores de pantalla
}
```

**⚠️ Importante:** 
- No olvides la coma (`,`) entre fotos
- La última foto NO lleva coma antes del `]`
- Respeta las comillas dobles (`"`)

---

## ✏️ Cómo Cambiar Información de Contacto

1. Abre: `public_html/index.html`
2. Busca la sección `<!-- CONTACTO -->` (línea ~196)
3. Cambia:
   - Teléfono: línea ~206
   - Email: línea ~207
   - Instagram: línea ~208

4. También actualiza el email del formulario:
   - Abre: `public_html/assets/js/app.js`
   - Línea 36: cambia `ariel@example.com` por tu email real

---

## 🖼️ Cómo Cambiar la Imagen Hero (Portada)

1. Sube tu nueva imagen a: `public_html/assets/img/hero/`
   - Recomendado: 2400px ancho, formato landscape
   - Nombre sugerido: `hero.jpg`

2. Abre: `public_html/index.html`
3. Busca línea ~70-71
4. Cambia la URL de Unsplash por tu imagen:
   ```html
   <img
     src="assets/img/hero/hero.jpg"
     alt="Fotografía de portada"
     class="h-full w-full object-cover opacity-40"
     loading="eager"
   />
   ```

---

## 🚨 Problemas Comunes

### "Las fotos no aparecen en la galería"

**Solución:**
1. Verifica que las rutas en `images.json` sean correctas
2. Asegúrate de que los archivos existen en el servidor
3. Revisa que no haya errores de sintaxis en el JSON
   - Usa [jsonlint.com](https://jsonlint.com/) para validar

### "El sitio no carga los estilos"

**Solución:**
1. Verifica que tienes conexión a internet (usa CDN de Tailwind)
2. Revisa la consola del navegador (F12) para ver errores

### "El formulario de contacto no funciona"

**Solución:**
1. Verifica que el email en `app.js` línea 36 sea correcto
2. El formulario usa `mailto:`, requiere que el usuario tenga cliente de correo configurado

---

## 📞 Soporte Técnico

Si tienes problemas que no puedes resolver:

1. **Revisa la consola del navegador:**
   - Presiona F12
   - Ve a la pestaña "Console"
   - Copia cualquier error en rojo

2. **Contacta a tu desarrollador** con:
   - Descripción del problema
   - Errores de la consola
   - Qué estabas intentando hacer

---

## 🎯 Mejores Prácticas

### Para las Fotos:
- ✅ Usa nombres descriptivos
- ✅ Optimiza antes de subir (comprime sin perder calidad)
- ✅ Mantén un estilo consistente
- ✅ Añade descripciones útiles en el campo `alt`

### Para el JSON:
- ✅ Haz una copia de respaldo antes de editar
- ✅ Usa un editor de texto (Notepad++, VS Code)
- ✅ Valida la sintaxis antes de guardar
- ✅ Sube y prueba inmediatamente

### Para el Sitio:
- ✅ Prueba en mobile después de cada cambio
- ✅ No borres archivos sin estar seguro
- ✅ Mantén backups regulares

---

## 📊 Estadísticas y Métricas

Para ver cómo está funcionando tu sitio:

1. **Google Analytics** (si está configurado):
   - Visitas, páginas vistas, tiempo en sitio

2. **Google Search Console**:
   - Posicionamiento en búsquedas
   - Errores de indexación

3. **Lighthouse** (Chrome DevTools):
   - F12 → Pestaña "Lighthouse"
   - Analiza Performance, SEO, Accesibilidad

---

## 🔮 Próximos Pasos (Fase 2)

Cuando estés listo para expandir el sitio:

- ✅ Panel de administración web (sin necesidad de FTP)
- ✅ Subida de fotos con drag & drop
- ✅ Generación automática de thumbnails
- ✅ Sistema de usuarios y descargas privadas
- ✅ Organización por álbumes/eventos
- ✅ Estadísticas integradas

**Contacta a tu desarrollador para planificar Fase 2.**

---

*Última actualización: Enero 2026*
