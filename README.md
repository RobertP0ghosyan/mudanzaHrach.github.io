# Web de mudanzas

Web Next.js sin base de datos. El formulario de cuatro pasos prepara un mensaje de WhatsApp con los detalles de la mudanza; el visitante debe pulsar «Enviar» dentro de WhatsApp. No se almacenan solicitudes en la web ni existe panel de administración en esta versión.

## Iniciar

1. Instala Node.js 20 o posterior.
2. Ejecuta `npm install` y después `npm run dev`.
3. Abre `http://localhost:3000`.

`npm run build` genera la web estática en `out/`. Puedes alojar esa carpeta en GitHub Pages u otro hosting estático. La web no necesita servidor ni base de datos; el formulario abre WhatsApp con el mensaje preparado.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub y sube el contenido de este proyecto: `.github/`, `public/`, `src/`, `.gitignore`, `next.config.ts`, `package.json`, `package-lock.json`, `tsconfig.json`, `next-env.d.ts` y `README.md`. La carpeta `.github` puede estar oculta en el explorador; no la omitas.
2. No subas `node_modules/`, `.next/`, `out/` ni archivos `.env` con datos privados. El flujo de GitHub genera `out/` automáticamente.
3. Usa `main` como rama principal. En **Settings → Pages → Build and deployment → Source**, elige **GitHub Actions**.
4. Al subir los archivos, el flujo `.github/workflows/deploy-pages.yml` construirá y publicará la web. La URL aparecerá en **Settings → Pages**.

El flujo detecta si el repositorio es `usuario.github.io` o un repositorio normal y ajusta las rutas. Si añades un dominio propio, configura el dominio en GitHub Pages y actualiza `SITE_URL` del flujo para que las etiquetas SEO apunten a él.

## Personalizar

Edita `src/lib/business.ts` para cambiar nombre, teléfono, WhatsApp, zonas y servicios. El WhatsApp inicial es **+34 655 71 11 62**. La imagen `public/images/mudanza-ilustrativa.png` es ilustrativa y debe sustituirse por fotografías autorizadas si se quieren mostrar trabajos reales. No se han inventado testimonios, precios ni certificaciones.

Antes de publicar, completa los datos comerciales y revisa las páginas de privacidad, cookies y aviso legal. El formulario no guarda datos en el sitio: crea un mensaje que el usuario envía voluntariamente en WhatsApp. Si más adelante se necesita historial de solicitudes, estados o métricas, se podrá añadir una base de datos y un panel.
