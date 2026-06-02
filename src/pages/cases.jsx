// GRIFO Engenharia — Página Cases

import { useState as useStateCases, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Photo from '../components/photos';
import { NavFullbleed, CTABand, Footer } from '../components/sections';
import { ClientesLogos, ClientesGrid, ClientesRetention } from './clientes';
import '../styles/global.css';
import '../styles/pages/cases.css';
import '../styles/pages/clientes.css';

const CaseIcon = {
  arrow: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6"/>
    </svg>
  ),
  problem: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/>
      <path d="M12 8v5M12 16v.5"/>
    </svg>
  ),
  action: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18M3 12h18M7 7l10 10M17 7L7 17"/>
    </svg>
  ),
  result: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l6-6 4 4 8-8"/>
      <path d="M14 7h7v7"/>
    </svg>
  ),
  evidence: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.4 8.4 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.5 8.5 0 01-3.8-.9L3 21l1.9-5.7a8.5 8.5 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.4 8.4 0 013.8-.9h.5a8.5 8.5 0 018 8v.5z"/>
    </svg>
  ),
};

/* ============================================================
   PAGE HERO — cases
   ============================================================ */
function CasesHero() {
  return (
    <section className="page-hero page-hero--cases" data-screen-label="01 Hero Cases">
      <img src="assets/griffin-line-gold.png" alt="" className="page-hero__watermark"/>
      <div className="frame">
        <div className="page-hero__inner">
          <div className="page-hero__eyebrow eyebrow">Resultados comprovados</div>
          <h1 className="page-hero__title">
            Cases que provam negócios em funcionamento<br/><em>— não obras concluídas.</em>
          </h1>
          <p className="page-hero__lead">
            Cada case Grifo é uma operação que entrou em receita antes do
            que o mercado considerava possível.
          </p>

          <div className="cases-hero__quickmetrics">
            <div>
              <div className="num">250<span>+</span></div>
              <div className="lab">Obras entregues</div>
            </div>
            <div>
              <div className="num">100<span>%</span></div>
              <div className="lab">Prazos cumpridos</div>
            </div>
            <div>
              <div className="num">NPS 9.7</div>
              <div className="lab">Satisfação do cliente</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PARE — "Como lemos um case"
   ============================================================ */
function ParePrinciple() {
  const steps = [
    { letter: "P", title: "Problema",  body: "O que o cliente enfrentava antes de contratar a Grifo.", icon: <CaseIcon.problem/> },
    { letter: "A", title: "Ação",      body: "O que foi feito além do escopo padrão de obra.", icon: <CaseIcon.action/> },
    { letter: "R", title: "Resultado", body: "O número que prova que o negócio evoluiu.", icon: <CaseIcon.result/> },
    { letter: "E", title: "Evidência", body: "Depoimento ou métrica verificável que confirma o resultado. Quando o cliente autoriza, publicamos o depoimento direto.", icon: <CaseIcon.evidence/> },
  ];
  return (
    <section className="pare" data-screen-label="02 Como lemos um case">
      <div className="frame">
        <div className="pare__head">
          <div className="eyebrow dark">Metodologia</div>
          <h2 className="pare__title">Como lemos um case: <em>P · A · R · E</em></h2>
        </div>
        <div className="pare__grid">
          {steps.map((s) => (
            <article key={s.letter} className="pare__step">
              <div className="pare__step-letter">{s.letter}</div>
              <div className="pare__step-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CASES — 6 destaques
   ============================================================ */
const CASES = [
  {
    id: "lapidare",
    sector: "saude",
    sectorLabel: "Saúde / Educação Médica",
    solution: "60 dias",
    name: "Lapidare",
    sub: "Centro de educação médica",
    location: "São Paulo, SP (Jardins) · 2.500 m² · 2024",
    photoSrc: "assets/portfolio/lapidare-entrada.jpg",
    photoAlt: "Case Lapidare · São Paulo · 2.500m² · 60 dias",
    gallery: ["assets/portfolio/lapidare-entrada.jpg", "assets/portfolio/lapidare-corredor.jpg"],
    problem: "Operação precisava de espaço de alto padrão em endereço premium de SP, com prazo incompatível com construtora tradicional.",
    action: "Aplicação completa do Fast Construction. Estreia da Grifo em São Paulo.",
    result: "Entregue em 60 dias. Marco da expansão nacional.",
    featured: true,
  },
  {
    id: "community-anima",
    sector: "educacional",
    sectorLabel: "Educacional",
    solution: "70 dias",
    name: "Community · Anima",
    sub: "Centro educacional",
    location: "São Paulo, SP · 15.000 m² · 2025",
    photoSrc: "assets/portfolio/community-auditorio.jpg",
    photoAlt: "Case Community Anima · São Paulo · 15.000m² · 70 dias",
    gallery: ["assets/portfolio/community-auditorio.jpg"],
    problem: "Anima precisava entregar centro educacional dentro da janela do calendário acadêmico.",
    action: "Cronograma reverso amarrado à data de início letivo, coordenação em escala SP.",
    result: "15.000 m² entregues em 70 dias. Maior obra do portfólio SP.",
  },
  {
    id: "ftc-unex",
    sector: "saude",
    sectorLabel: "Saúde / Educação Médica",
    solution: "30 dias",
    name: "FTC / UNEX",
    sub: "Faculdade",
    location: "Jequié, BA · 20.000 m² · 2022",
    photoSrc: "assets/portfolio/ftc-unex-drone.jpg",
    photoAlt: "Case FTC UNEX · Jequié · 20.000m² · 30 dias",
    gallery: ["assets/portfolio/ftc-unex-drone.jpg", "assets/portfolio/ftc-unex-patio.jpg"],
    problem: "Faculdade precisava entregar campus em prazo apertado para aprovação do MEC.",
    action: "Coordenação em escala com mobilização integral do método Fast Construction.",
    result: "20.000 m² em 30 dias. Recorde de velocidade do portfólio Grifo.",
  },
  {
    id: "rembrandt",
    sector: "educacional",
    sectorLabel: "Educacional",
    solution: "70 dias",
    name: "Escola Rembrandt",
    sub: "Educação básica",
    location: "Salvador, BA · 10.000 m² · 2023",
    photoSrc: "assets/portfolio/rembrandt-fachada.jpg",
    photoAlt: "Case Escola Rembrandt · Salvador · 10.000m² · 70 dias",
    gallery: ["assets/portfolio/rembrandt-fachada.jpg"],
    problem: "Entregar campus novo dentro da janela do calendário letivo.",
    action: "Cronograma reverso amarrado à data de matrícula.",
    result: "10.000 m² entregues no prazo do calendário escolar.",
  },
  {
    id: "antonio-vieira",
    sector: "educacional",
    sectorLabel: "Educacional",
    solution: "45 dias",
    name: "Colégio Antônio Vieira",
    sub: "Educação básica",
    location: "Salvador, BA · 8.000 m² · 2024",
    photoSrc: "assets/portfolio/antonio-vieira-corredor-amarelo.jpg",
    photoAlt: "Case Colégio Antônio Vieira · Salvador · 8.000m² · 45 dias",
    gallery: ["assets/portfolio/antonio-vieira-corredor-amarelo.jpg", "assets/portfolio/antonio-vieira-sala-azul.jpg", "assets/portfolio/antonio-vieira-sala-aula.jpg", "assets/portfolio/antonio-vieira-corredor.jpg"],
    problem: "Ampliação de campus tradicional sem interromper as aulas.",
    action: "Obra em campus ativo com setorização noturna e logística faseada.",
    result: "8.000 m² entregues em 45 dias sem interrupção das aulas.",
  },
  {
    id: "fly51",
    sector: "eventos",
    sectorLabel: "Eventos",
    solution: "Grande porte",
    name: "Fly 51",
    sub: "Maior arena de eventos do Brasil",
    location: "Porto Alegre, RS · 27.000 m² · 2026",
    photoSrc: "assets/portfolio/fly51.jpg",
    photoAlt: "Case Fly 51 · Porto Alegre · 27.000m² · maior arena de eventos do Brasil",
    gallery: ["assets/portfolio/fly51.jpg"],
    problem: "Erguer arena de grande porte com coordenação multidisciplinar em escala industrial.",
    action: "Coordenação multidisciplinar em escala industrial.",
    result: "27.000 m². Maior obra do portfólio Grifo.",
  },
];

function CasesGrid() {
  const [filter, setFilter] = useStateCases("todos");
  const [openId, setOpenId] = useStateCases(null);
  const [lightbox, setLightbox] = useStateCases(null);
  const filters = [
    { id: "todos",        label: "Todos" },
    { id: "educacional",  label: "Educacional" },
    { id: "saude",        label: "Saúde" },
    { id: "food-service", label: "Food Service" },
    { id: "hotelaria",    label: "Hotelaria" },
    { id: "varejo",       label: "Varejo" },
    { id: "logistica",    label: "Logística" },
    { id: "corporativo",  label: "Corporativo" },
    { id: "eventos",      label: "Eventos" },
  ];
  const visible = CASES.filter(c => filter === "todos" || c.sector === filter);
  const openCase = CASES.find(c => c.id === openId) || null;

  useEffect(() => {
    const locked = openId || lightbox;
    document.body.style.overflow = locked ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [openId, lightbox]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      if (lightbox) setLightbox(null);
      else if (openId) setOpenId(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openId, lightbox]);

  return (
    <section className="cases" id="cases" data-screen-label="03 Cases">
      <div className="frame">
        <div className="cases__head">
          <div className="eyebrow">Portfólio</div>
          <h2 className="cases__title">Cases em destaque.</h2>
        </div>

        <div className="cases__filters">
          {filters.map(f => (
            <button
              key={f.id}
              className={"cases__filter" + (filter === f.id ? " is-active" : "")}
              onClick={() => setFilter(f.id)}>
              {f.label}
              <span className="count">{f.id === "todos" ? CASES.length : CASES.filter(c => c.sector === f.id).length}</span>
            </button>
          ))}
        </div>

        <div className="cases__grid">
          {visible.map((c) => (
            <article key={c.id} className={"case" + (c.featured && filter === "todos" ? " case--featured" : "")}>
              <button type="button" className="case__photo" onClick={() => setOpenId(c.id)} aria-label={"Abrir case " + c.name}>
                {c.photoSrc ? (
                  <img src={c.photoSrc} alt={c.photoAlt} loading="lazy" />
                ) : (
                  <Photo variant={c.photo}/>
                )}
                <div className="case__pills">
                  <span className={"case__pill case__pill--" + c.sector}>{c.sectorLabel}</span>
                  <span className="case__pill case__pill--ghost">{c.solution}</span>
                </div>
              </button>
              <div className="case__body">
                <header className="case__header">
                  <h3>{c.name} <span className="case__sub">— {c.sub}</span></h3>
                  <p className="case__loc">{c.location}</p>
                </header>

                <div className="case__pare">
                  <div className="case__pare-row">
                    <span className="case__pare-lab">Desafio</span>
                    <p>{c.problem}</p>
                  </div>
                  <div className="case__pare-row">
                    <span className="case__pare-lab">O que fizemos</span>
                    <p>{c.action}</p>
                  </div>
                </div>

                <div className="case__result">
                  <span className="case__result-lab">Resultado</span>
                  <p>{c.result}</p>
                </div>

                <button type="button" className="case__more" onClick={() => setOpenId(c.id)}>
                  Ver case completo <CaseIcon.arrow size={14}/>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {openCase && (
        <CaseModal
          c={openCase}
          onClose={() => setOpenId(null)}
          onOpenPhoto={(src) => setLightbox(src)}
        />
      )}
      {lightbox && (
        <div className="case-lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <button type="button" className="case-lightbox__close" aria-label="Fechar imagem" onClick={() => setLightbox(null)}>×</button>
          <img src={lightbox} alt="" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}

/* ============================================================
   CASE MODAL — full detail + photo gallery
   ============================================================ */
function CaseModal({ c, onClose, onOpenPhoto }) {
  const gallery = c.gallery || (c.photoSrc ? [c.photoSrc] : []);
  return (
    <div className="case-modal" role="dialog" aria-modal="true" aria-label={"Case " + c.name}>
      <div className="case-modal__backdrop" onClick={onClose}></div>
      <div className="case-modal__panel">
        <button type="button" className="case-modal__close" aria-label="Fechar" onClick={onClose}>×</button>

        <div className="case-modal__hero">
          {c.photoSrc ? <img src={c.photoSrc} alt={c.photoAlt}/> : <Photo variant={c.photo}/>}
          <div className="case-modal__hero-pills">
            <span className={"case__pill case__pill--" + c.sector}>{c.sectorLabel}</span>
            <span className="case__pill case__pill--ghost">{c.solution}</span>
          </div>
        </div>

        <div className="case-modal__body">
          <header className="case-modal__head">
            <h3>{c.name} <span className="case__sub">— {c.sub}</span></h3>
            <p className="case__loc">{c.location}</p>
          </header>

          <div className="case-modal__pare">
            <div className="case__pare-row">
              <span className="case__pare-lab">Desafio</span>
              <p>{c.problem}</p>
            </div>
            <div className="case__pare-row">
              <span className="case__pare-lab">O que fizemos</span>
              <p>{c.action}</p>
            </div>
          </div>

          <div className="case__result">
            <span className="case__result-lab">Resultado</span>
            <p>{c.result}</p>
          </div>

          {gallery.length > 1 && (
            <div className="case-modal__gallery">
              <span className="case-modal__gallery-lab">Galeria da obra</span>
              <div className="case-modal__thumbs">
                {gallery.map((src, i) => (
                  <button key={i} type="button" className="case-modal__thumb" onClick={() => onOpenPhoto(src)} aria-label={"Ampliar foto " + (i + 1)}>
                    <img src={src} alt={c.name + " — foto " + (i + 1)} loading="lazy"/>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   GALERIA — portfolio completo, agrupado por setor
   ============================================================ */
const GALLERY_GROUPS = [
  {
    sector: "educacional",
    label: "Educacional",
    items: [
      { name: "Escola Girassol", meta: "9.000 m² · 60 dias" },
      { name: "Escola Park" },
      { name: "Colégio Anglo-Brasileiro", meta: "4.300 m² · 60 dias" },
    ],
  },
  {
    sector: "saude",
    label: "Saúde / Educação Médica",
    items: [
      { name: "Sá & Chieppe" },
      { name: "IOA" },
      { name: "Life Unic" },
      { name: "HJV" },
    ],
  },
  {
    sector: "food-service",
    label: "Food Service",
    items: [
      { name: "Cantina Volpi" },
      { name: "Healthy" },
      { name: "Sushi Real" },
      { name: "Café Selecta" },
    ],
  },
  {
    sector: "hotelaria",
    label: "Hotelaria",
    items: [
      { name: "Refúgio da Vila", meta: "2.200 m² · 70 dias" },
    ],
  },
  {
    sector: "varejo",
    label: "Varejo",
    items: [
      { name: "Agromix", meta: "1.600 m² · 75 dias" },
    ],
  },
  {
    sector: "logistica",
    label: "Logística",
    items: [
      { name: "Tecmar" },
      { name: "Emec" },
    ],
  },
  {
    sector: "corporativo",
    label: "Corporativo",
    items: [
      { name: "Caffeine Army" },
      { name: "Petroreconcavo" },
    ],
  },
  {
    sector: "eventos",
    label: "Eventos",
    items: [
      { name: "Welucci", meta: "500 m² · 45 dias · 2026" },
    ],
  },
  {
    sector: "real-estate",
    label: "Real Estate",
    items: [
      { name: "Praia do Forte", meta: "Bahia", href: "/grifo-real-estate" },
    ],
  },
];

function CasesGallery() {
  return (
    <section className="cases-gallery" id="galeria" data-screen-label="04 Galeria de obras">
      <div className="frame">
        <div className="cases-gallery__head">
          <div className="eyebrow">Portfólio completo</div>
          <h2 className="cases-gallery__title">Galeria de obras por setor</h2>
        </div>

        <div className="cases-gallery__groups">
          {GALLERY_GROUPS.map((g) => (
            <div key={g.sector} className="cases-gallery__group">
              <div className="cases-gallery__group-lab">{g.label}</div>
              <ul className="cases-gallery__list">
                {g.items.map((it, i) => {
                  const Tag = it.href ? "a" : "div";
                  return (
                    <li key={i}>
                      <Tag {...(it.href ? { href: it.href } : {})} className="cases-gallery__item">
                        <strong>{it.name}</strong>
                        {it.meta && <span>{it.meta}</span>}
                      </Tag>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   GRIFO NA MÍDIA — 3 press cards
   ============================================================ */
const PRESS_ITEMS = [
  { variant: "commercial", img: "assets/portfolio/midia-editora-alma.jpg",       badge: "Editora ALMA",   date: "ABR · 2023", title: "Empresa de engenharia baiana, Grifo, tem crescimento exponencial", excerpt: "Cobertura sobre execução ágil e foco em excelência." },
  { variant: "rebar",      img: "assets/portfolio/midia-casas-conceito-2023.jpg", badge: "Casas Conceito", date: "OUT · 2023", title: "Grifo Engenharia, construtora responsável pela Casas Conceito 2023", excerpt: "5ª edição da Mostra em Salvador. Tema: Memórias." },
  { variant: "interior",   img: "assets/portfolio/midia-alo-alo-bahia.jpg",       badge: "Alô Alô Bahia",  date: "FEV · 2024", title: "Fundada na Bahia, Grifo Engenharia inaugura obra de alto padrão em São Paulo", excerpt: "Centro de treinamento Instituto Lapidare · Jardins, SP · 2.500 m² · 60 dias." },
];

function CasesPress() {
  return (
    <section className="cases-press" data-screen-label="05 Grifo na mídia">
      <div className="frame">
        <div className="cases-press__head">
          <div>
            <div className="eyebrow">Imprensa</div>
            <h2>Grifo na mídia</h2>
            <p>O que a imprensa especializada diz sobre o nosso modelo.</p>
          </div>
        </div>
        <div className="cases-press__grid">
          {PRESS_ITEMS.map((it, i) => (
            <a key={i} href="#" className="cases-press__card">
              <div className="cases-press__img">
                <img src={it.img} alt={it.title} loading="lazy" />
              </div>
              <div className="cases-press__body">
                <div className="cases-press__meta">{it.date}</div>
                <h3 className="cases-press__title">{it.title}</h3>
                <p className="cases-press__excerpt">{it.excerpt}</p>
                <span className="cases-press__more">Ler matéria <CaseIcon.arrow size={12}/></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FEATURED TESTIMONIAL
   ============================================================ */
function TestimonialFeature() {
  return (
    <section className="testimonial" data-screen-label="06 Depoimento destaque">
      <div className="frame">
        <div className="testimonial__card">
          <div className="testimonial__avatar">
            <img src="assets/portfolio/flavia-del-vale.jpg" alt="Flávia Del Vale — Lapidare" className="testimonial__avatar-img" loading="lazy" />
          </div>
          <div className="testimonial__content">
            <div className="testimonial__lab">Depoimento de cliente</div>
            <blockquote className="testimonial__quote">
              <span className="quote-mark">“</span>
              Pessoas diferentes, com ótimo coração e também com uma
              agilidade incrível. Não podíamos ter feito parceria melhor.
            </blockquote>
            <div className="testimonial__person">
              <strong>Flávia Del Vale</strong>
              <span>Lapidare</span>
              <span className="testimonial__sector">Saúde / Educação Médica</span>
            </div>
            <div className="testimonial__result">
              <span className="lab">Resultado da obra:</span>
              <span className="val">60 dias · 2.500 m² · alto padrão</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CasesNav() {
  const links = [
    { href: "#cases",       label: "Cases" },
    { href: "#clientes",    label: "Clientes" },
    { href: "#depoimentos", label: "Depoimentos" },
  ];
  return (
    <nav className="cases-nav" aria-label="Navegação interna">
      <div className="frame cases-nav__inner">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="cases-nav__pill">{l.label}</a>
        ))}
      </div>
    </nav>
  );
}

export {
  CasesHero, CasesNav, ParePrinciple, CasesGrid, CasesGallery, CasesPress, TestimonialFeature, CASES,
};

function App() {
  return (
    <>
      <NavFullbleed active="cases" />
      <CasesHero />
      <CasesNav />
      <ParePrinciple />
      <CasesGrid />
      <div id="clientes"><ClientesLogos /></div>
      <div id="depoimentos"><ClientesGrid /></div>
      <div id="retencao"><ClientesRetention /></div>
      <CTABand title="Cada case começou por uma conversa com a engenharia." />
      <Footer />
    </>
  );
}

createRoot(document.getElementById('app')).render(<App />);
