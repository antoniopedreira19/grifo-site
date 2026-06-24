import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { existsSync } from 'fs';

// Em dev: mapeia URLs limpas (/modelo-grifo) para o arquivo (.html) correspondente.
// Em produção, a Vercel cuida disso via `cleanUrls: true`.
function cleanUrlsDev() {
  return {
    name: 'clean-urls-dev',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url || '/';
        // Não mexe em raiz, paths internos do Vite, módulos, assets, ou URLs que já têm extensão.
        if (
          url === '/' ||
          url.startsWith('/@') ||
          url.startsWith('/src/') ||
          url.startsWith('/node_modules/') ||
          url.startsWith('/assets/')
        ) {
          return next();
        }
        const [pathOnly, ...rest] = url.split(/(?=[?#])/);
        if (pathOnly.includes('.')) return next();
        const candidate = resolve(__dirname, `.${pathOnly}.html`);
        if (existsSync(candidate)) {
          req.url = `${pathOnly}.html${rest.join('')}`;
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), cleanUrlsDev()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        areas: resolve(__dirname, 'areas-de-atuacao.html'),
        cases: resolve(__dirname, 'cases.html'),
        clientes: resolve(__dirname, 'clientes.html'),
        realEstate: resolve(__dirname, 'grifo-real-estate.html'),
        manifesto: resolve(__dirname, 'manifesto.html'),
        modelo: resolve(__dirname, 'modelo-grifo.html'),
        solucoes: resolve(__dirname, 'solucoes.html'),
      },
    },
  },
});
