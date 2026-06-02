# GRIFO Site

Site institucional da **GRIFO Engenharia**. Multi-página, React + Vite, build estático otimizado.

## Estrutura

```
grifo-site/
├── index.html                  # Home (entry HTML)
├── areas-de-atuacao.html
├── cases.html
├── clientes.html               # redirect → /cases#clientes
├── fale-conosco.html
├── grifo-real-estate.html
├── manifesto.html
├── modelo-grifo.html
├── solucoes.html
│
├── public/                     # Servido como-é (sem hash)
│   └── assets/
│       ├── fonts/              # Sarabun, Disket Mono (.ttf)
│       ├── portfolio/          # Fotos de obras, mídia, retratos
│       ├── colors_and_type.css # Tokens de cor + @font-face
│       ├── griffin-*.png       # Marcas
│       ├── logo-*.png          # Logos
│       └── ...
│
├── src/
│   ├── components/
│   │   ├── photos.jsx          # SVG placeholders compartilhados
│   │   └── sections.jsx        # Nav, Hero, Footer, CTA, etc.
│   ├── pages/                  # Entry JSX por página
│   │   ├── home.jsx                # entry de index.html
│   │   ├── areas-de-atuacao.jsx
│   │   ├── cases.jsx               # importa de clientes.jsx
│   │   ├── clientes.jsx            # módulo (sem entry)
│   │   ├── fale-conosco.jsx
│   │   ├── grifo-real-estate.jsx
│   │   ├── manifesto.jsx
│   │   ├── modelo-grifo.jsx
│   │   └── solucoes.jsx
│   └── styles/
│       ├── global.css
│       └── pages/
│
├── docs/                       # Material de referência (não publicado)
├── vite.config.js              # Multi-page entries
├── vercel.json                 # cleanUrls + cache + redirects
├── package.json
└── .gitignore
```

## Como o site é montado

Cada HTML é uma "entry" do Vite e referencia um único módulo JS:

```html
<script type="module" src="/src/pages/<pagina>.jsx"></script>
```

O entry JSX:
1. Importa o CSS (`import '../styles/global.css'`) — Vite junta tudo num bundle
2. Importa React/ReactDOM e os componentes compartilhados de `sections.jsx`
3. Define o `App` e chama `createRoot(document.getElementById('app')).render(<App/>)`

Em build de produção, o Vite:
- Pré-compila JSX (sem Babel runtime no browser → ~200KB a menos)
- Bundle + minifica + tree-shaking
- Cache-busting com hash nos JS/CSS bundleados
- Copia `public/` como-é para `dist/`

## Rodar localmente

```bash
npm install
npm run dev      # dev server com HMR (porta 5173 por padrão)
npm run build    # build de produção em dist/
npm run preview  # serve o build de dist/ pra teste local
```

Abra http://localhost:5173 após `npm run dev`.

## Deploy na Vercel

1. Faça push do repo pro GitHub.
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. Framework Preset: **Vite** (auto-detectado).
4. Build Command: `npm run build` (já configurado em `vercel.json`).
5. Output Directory: `dist` (já configurado).
6. Deploy.

O `vercel.json` cuida de URLs limpas (`/cases` em vez de `/cases.html`), cache forte em `/assets/*`, e o redirect `/clientes` → `/cases#clientes`.
