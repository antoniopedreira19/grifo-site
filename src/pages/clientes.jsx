// GRIFO Engenharia — Página Clientes (módulo: importado por cases.jsx)

import Photo from '../components/photos';

const ClIcon = {
  arrow: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6"/>
    </svg>
  ),
};

/* ============================================================
   PAGE HERO
   ============================================================ */
function ClientesHero() {
  return (
    <section className="page-hero" data-screen-label="01 Hero Clientes">
      <img src="assets/griffin-line-cream.png" alt="" className="page-hero__watermark"/>
      <div className="frame">
        <div className="page-hero__inner">
          <div className="page-hero__eyebrow eyebrow">Clientes</div>
          <h1 className="page-hero__title">
            Quem confiou<br/><em>na Grifo.</em>
          </h1>
          <p className="page-hero__lead">
            Decisores em projetos que não podiam falhar.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FEATURED TESTIMONIAL
   ============================================================ */
function ClientesFeatured() {
  return (
    <section className="cl-featured" data-screen-label="02 Depoimento destaque">
      <div className="frame">
        <div className="cl-featured__inner">
          <div className="cl-featured__quote-mark" aria-hidden="true">“</div>
          <blockquote className="cl-featured__quote">
            Pessoas diferentes, com ótimo coração e também com uma
            agilidade incrível. Não podíamos ter feito parceria melhor
            do que com a Grifo Engenharia.
          </blockquote>

          <div className="cl-featured__person">
            <div className="avatar-init avatar-init--circle cl-featured__avatar">
              <img src="assets/portfolio/flavia-del-vale.jpg" alt="Flávia Del Vale" loading="lazy" />
            </div>
            <div className="cl-featured__person-meta">
              <strong>Flávia Del Vale</strong>
              <span className="cargo">Lapidare</span>
              <span className="setor-pill">Saúde / Educação Médica</span>
            </div>
          </div>

          <div className="cl-featured__result">
            <span className="lab">Resultado da obra</span>
            <span className="val">60 dias · 2.500 m² · 1ª obra de alto padrão Grifo em SP</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   GRID DE 3 DEPOIMENTOS
   ============================================================ */
const TESTIMONIALS = [
  {
    init: "FDV",
    img: "assets/portfolio/flavia-del-vale.jpg",
    name: "Flávia Del Vale",
    cargo: "Lapidare",
    sector: "saude",
    sectorLabel: "Saúde",
    quote: "Pessoas diferentes, com ótimo coração e também com uma agilidade incrível.",
    result: "60 dias · 2.500 m²",
  },
  {
    init: "DV",
    img: "assets/portfolio/daniel-vianna.jpg",
    name: "Daniel Vianna",
    cargo: "UNIFTC",
    sector: "educacional",
    sectorLabel: "Educacional",
    quote: "Não podíamos ter feito parceria melhor do que com a Grifo Engenharia.",
    result: "Janela acadêmica preservada",
  },
  {
    init: "CN",
    img: "assets/portfolio/christiane-nogara.jpg",
    name: "Christiane Nogara",
    cargo: "Jovié",
    sector: "saude",
    sectorLabel: "Saúde / Educação",
    quote: "Na velocidade praticamente da luz; em pouco tempo a escola já está totalmente na finalização.",
    result: "Operação aberta no prazo",
  },
];

function ClientesGrid() {
  return (
    <section className="cl-grid" data-screen-label="03 Grid depoimentos">
      <div className="frame">
        <div className="cl-grid__head">
          <div className="eyebrow">Mais depoimentos</div>
          <h2 className="cl-grid__title">Decisores como você, em projetos que não podiam falhar.</h2>
        </div>

        <div className="cl-grid__cards">
          {TESTIMONIALS.map((t, i) => (
            <article key={i} className="cl-card">
              <div className="cl-card__head">
                <div className="avatar-init avatar-init--circle cl-card__avatar">
                  <img src={t.img} alt={t.name} loading="lazy" />
                </div>
                <span className={"cl-card__sector cl-card__sector--" + t.sector}>{t.sectorLabel}</span>
              </div>
              <blockquote className="cl-card__quote">{t.quote}</blockquote>
              <div className="cl-card__person">
                <strong>{t.name}</strong>
                <span>{t.cargo}</span>
              </div>
              <div className="cl-card__result">
                <span className="lab">Resultado</span>
                <span className="val">{t.result}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   LOGOS GRID — agrupados por setor
   ============================================================ */
const LOGO_GROUPS = [
  {
    sector: "saude",
    label: "Saúde / Educação Médica",
    logos: [
      "Lapidare", "Hospital Jorge Valente", "Clínica Dr. Veit",
      "Instituto Orofacial das Américas", "Instituto Jovie",
      "Sá & Chieppe", "IOA", "Life Unic", "HJV",
    ],
  },
  {
    sector: "educacional",
    label: "Educacional",
    logos: [
      "Community/Anima", "Colégio Antônio Vieira", "UNEX/FTC", "UNIFTC",
      "IDEA", "Escola Rembrandt", "Escola Girassol", "Escola Park",
      "Colégio Anglo-Brasileiro",
    ],
  },
  {
    sector: "corporativo",
    label: "Corporativo",
    logos: ["Caffeine Army", "Petroreconcavo", "Fullsales"],
  },
  {
    sector: "eventos",
    label: "Eventos",
    logos: ["Fly 51", "Welucci"],
  },
  {
    sector: "food-service",
    label: "Food Service",
    logos: ["Cantina Volpi", "Healthy", "Sushi Real", "Café Selecta"],
  },
  {
    sector: "hotelaria",
    label: "Hotelaria",
    logos: ["Refúgio da Vila"],
  },
  {
    sector: "varejo",
    label: "Varejo",
    logos: ["Agromix", "Forza"],
  },
  {
    sector: "logistica",
    label: "Logística",
    logos: ["Tecmar", "Emec"],
  },
];

function ClientesLogos() {
  return (
    <section className="cl-logos" data-screen-label="04 Logos clientes">
      <div className="frame">
        <div className="cl-logos__head">
          <div className="eyebrow">Empresas que confiam na Grifo</div>
          <h2 className="cl-logos__title">250+ obras. Clientes que voltam.</h2>
        </div>

        {LOGO_GROUPS.length > 0 && (
          <div className="cl-logos__groups">
            {LOGO_GROUPS.map(g => (
              <div key={g.sector} className="cl-logos__group">
                <div className="cl-logos__group-lab">{g.label}</div>
                <ul className="cl-logos__list">
                  {g.logos.map((name, i) => (
                    <li key={i} className="cl-logos__item" aria-label={name}>
                      <span>{name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ============================================================
   RETENÇÃO — 3 métricas em navy
   ============================================================ */
function ClientesRetention() {
  return (
    <section className="cl-retention" data-screen-label="05 Retenção">
      <img src="assets/griffin-line-gold.png" alt="" className="cl-retention__watermark"/>
      <div className="frame">
        <div className="cl-retention__inner">
          <div className="eyebrow dark">Relação de longo prazo</div>
          <h2 className="cl-retention__title">
            Parceiro de expansão, <em>não fornecedor de obra única.</em>
          </h2>

          <div className="cl-retention__metrics">
            <div className="cl-retention__metric">
              <div className="num">200<span>+</span></div>
              <div className="lab">Clientes atendidos</div>
            </div>
            <div className="cl-retention__metric">
              <div className="num">NPS 9.7</div>
              <div className="lab">Satisfação</div>
            </div>
            <div className="cl-retention__metric">
              <div className="num">10 <span>anos</span></div>
              <div className="lab">Desde 2016</div>
            </div>
          </div>

          <p className="cl-retention__quote">
            A métrica de sucesso da Grifo não é a obra entregue — é o
            cliente que liga para a próxima expansão.
          </p>
        </div>
      </div>
    </section>
  );
}

export {
  ClientesHero, ClientesFeatured, ClientesGrid, ClientesLogos, ClientesRetention,
};
