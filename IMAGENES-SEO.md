# Imágenes Necesarias para SEO Completo

Para completar la optimización SEO y mejorar la presencia en redes sociales, necesitas crear las siguientes imágenes y colocarlas en la carpeta `public/`:

## Imágenes Requeridas

### 1. **Open Graph Image** (Redes Sociales)
- **Nombre:** `og-image.jpg`
- **Tamaño:** 1200 x 630 píxeles
- **Formato:** JPG o PNG
- **Propósito:** Se muestra cuando compartes la web en Facebook, Twitter, LinkedIn, WhatsApp, etc.
- **Contenido sugerido:** Logo de Casa Vacía + texto "Estudio Creativo - Cine de Autor y Género" + imagen atmosférica

### 2. **Favicon**
- **Nombre:** `favicon.ico`
- **Tamaño:** 32 x 32 píxeles
- **Formato:** ICO
- **Propósito:** Ícono que aparece en la pestaña del navegador

### 3. **Apple Touch Icon**
- **Nombre:** `apple-touch-icon.png`
- **Tamaño:** 180 x 180 píxeles
- **Formato:** PNG
- **Propósito:** Ícono cuando se agrega el sitio a la pantalla de inicio en iOS

### 4. **Android Chrome Icons**
- **Nombre:** `icon-192.png`
- **Tamaño:** 192 x 192 píxeles
- **Formato:** PNG
- **Propósito:** Ícono para PWA en Android (tamaño pequeño)

- **Nombre:** `icon-512.png`
- **Tamaño:** 512 x 512 píxeles
- **Formato:** PNG
- **Propósito:** Ícono para PWA en Android (tamaño grande)

### 5. **Logo Principal**
- **Nombre:** `logo.png`
- **Tamaño:** 400 x 400 píxeles (o más, mantener cuadrado)
- **Formato:** PNG con fondo transparente
- **Propósito:** Para Schema.org y uso general

### 6. **Safari Pinned Tab**
- **Nombre:** `safari-pinned-tab.svg`
- **Formato:** SVG monocromático
- **Propósito:** Ícono para pestañas fijadas en Safari Mac

### 7. **MS Tile** (Opcional pero recomendado)
- **Nombre:** `mstile-150x150.png`
- **Tamaño:** 150 x 150 píxeles
- **Formato:** PNG
- **Propósito:** Tiles de Windows

### 8. **Screenshots para PWA** (Opcional)
- **Nombres:** 
  - `screenshot-desktop.jpg` (1920 x 1080)
  - `screenshot-mobile.jpg` (750 x 1334)
- **Propósito:** Se muestran cuando el usuario instala la PWA

## Herramientas Recomendadas

- **Para Favicon:** https://realfavicongenerator.net/
- **Para redimensionar:** https://squoosh.app/
- **Para crear SVG simple:** https://www.figma.com/ o Adobe Illustrator

## Estilo Visual Sugerido

Todas las imágenes deben mantener la identidad visual de Casa Vacía:
- Tonos oscuros, sepias, tierra
- Estética cinematográfica atmosférica
- Minimalista y elegante
- Tipografía serif como Cormorant Garamond

## Después de Crear las Imágenes

1. Coloca todas en la carpeta `public/`
2. Verifica que se vean bien en: https://metatags.io/
3. Prueba cómo se ve al compartir en: https://www.opengraph.xyz/
4. Valida con: https://search.google.com/test/rich-results

## Verificación en Google Search Console

Una vez subidas las imágenes, obtén tu código de verificación:
1. Ve a: https://search.google.com/search-console
2. Agrega la propiedad: https://vaciaestudios.com
3. Obtén el código de verificación
4. Reemplaza `'google-site-verification-code'` en `app/layout.tsx` con tu código real
