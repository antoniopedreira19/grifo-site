// GRIFO Engenharia — Página Áreas de Atuação

import { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import Photo from '../components/photos';
import { NavFullbleed, CTABand, Footer } from '../components/sections';
import '../styles/global.css';
import '../styles/pages/areas-de-atuacao.css';

const ArIcon = {
  arrow: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6"/>
    </svg>
  ),
  hospital: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 21V8l8-5 8 5v13"/><path d="M9 21v-6h6v6"/><path d="M12 9v4M10 11h4"/>
    </svg>
  ),
  school: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-5 9 5-9 5-9-5z"/><path d="M7 11v5c0 1 2 2 5 2s5-1 5-2v-5"/><path d="M21 9v6"/>
    </svg>
  ),
  commercial: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="18"/>
      <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2"/>
    </svg>
  ),
  events: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18"/>
      <path d="M5 21V8l7-5 7 5v13"/>
      <path d="M9 21v-7h6v7"/>
    </svg>
  ),
  foodservice: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11h18"/>
      <path d="M5 11a7 7 0 0114 0"/>
      <path d="M3 14h18l-2 6H5z"/>
    </svg>
  ),
  hotel: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18V8M21 18v-6a3 3 0 00-3-3H9v9"/>
      <path d="M3 18h18"/>
      <circle cx="6.5" cy="12.5" r="1.5"/>
    </svg>
  ),
  retail: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 8h12l-1 12H7z"/>
      <path d="M9 8V5a3 3 0 016 0v3"/>
    </svg>
  ),
  logistics: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7h12v10H3z"/>
      <path d="M15 10h4l2 3v4h-6"/>
      <circle cx="7" cy="19" r="1.5"/>
      <circle cx="17" cy="19" r="1.5"/>
    </svg>
  ),
};

/* ============================================================
   PAGE HERO — 8 sector pills
   ============================================================ */
function AreasHero() {
  const pills = [
    { id: "educacional",   label: "Educacional",  icon: <ArIcon.school/> },
    { id: "saude",         label: "Saúde",        icon: <ArIcon.hospital/> },
    { id: "corporativo",   label: "Corporativo",  icon: <ArIcon.commercial/> },
    { id: "eventos",       label: "Eventos",      icon: <ArIcon.events/> },
    { id: "food-service",  label: "Food Service", icon: <ArIcon.foodservice/> },
    { id: "hotelaria",     label: "Hotelaria",    icon: <ArIcon.hotel/> },
    { id: "varejo",        label: "Varejo",       icon: <ArIcon.retail/> },
    { id: "logistica",     label: "Logística",    icon: <ArIcon.logistics/> },
  ];
  return (
    <section className="page-hero" data-screen-label="01 Hero Áreas">
      <img src="assets/griffin-line-cream.png" alt="" className="page-hero__watermark"/>
      <div className="frame">
        <div className="page-hero__inner">
          <div className="page-hero__eyebrow eyebrow">Onde atuamos</div>
          <h1 className="page-hero__title">
            A Grifo conhece o seu negócio.<br/><em>Não só a sua obra.</em>
          </h1>
          <p className="page-hero__lead">
            Cada setor tem seu cronograma crítico, sua norma técnica e sua
            linguagem de receita. A Grifo opera dentro do vocabulário de cada um.
          </p>
          <div className="page-hero__pills">
            {pills.map(p => (
              <a key={p.id} href={"#" + p.id} className="page-hero__pill ar-hero__pill">
                <span className="ar-hero__pill-icon">{p.icon}</span>
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SECTOR BLOCK — generic, config-driven
   ============================================================ */
function SectorBlock({ data, photoPosition, bg, screenLabel }) {
  return (
    <section
      className={"ar-sector ar-sector--" + bg + " ar-sector--photo-" + photoPosition}
      id={data.id}
      data-screen-label={screenLabel}>
      <div className="frame">
        <div className="ar-sector__grid">
          {photoPosition === "left" && (
            <div className="ar-sector__photo">
              <img src={data.photoSrc} alt={data.photoAlt} loading="lazy" />
              <span className="ar-sector__photo-tag">{data.label}</span>
            </div>
          )}

          <div className="ar-sector__copy">
            <div className="eyebrow">{data.eyebrow}</div>
            <h2 className="ar-sector__title">{data.headline}</h2>
            <p className="ar-sector__body">{data.body}</p>

            <ul className="ar-sector__taglist">
              {data.tags.map((t, i) => (
                <li key={i} className="ar-sector__tag">{t}</li>
              ))}
            </ul>

            <div className="ar-sector__diffs">
              {data.diffs.map((d, i) => (
                <article key={i} className="ar-sector__diff">
                  <h4>{d.title}</h4>
                  <p>{d.body}</p>
                </article>
              ))}
            </div>

            {data.miniCase && (
              <a href="/cases" className="ar-sector__minicase">
                <div className="ar-sector__minicase-lab">Case do setor</div>
                <div className="ar-sector__minicase-body">
                  <strong>{data.miniCase.name}</strong>
                  <span>{data.miniCase.result}</span>
                  <span className="meta">{data.miniCase.meta}</span>
                </div>
                <span className="ar-sector__minicase-arrow"><ArIcon.arrow size={16}/></span>
              </a>
            )}

            <div className="ar-sector__cta">
              <a href="#contato" className="btn btn-primary">{data.cta} <ArIcon.arrow size={14}/></a>
            </div>
          </div>

          {photoPosition === "right" && (
            <div className="ar-sector__photo">
              <img src={data.photoSrc} alt={data.photoAlt} loading="lazy" />
              <span className="ar-sector__photo-tag">{data.label}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SECTOR DATA
   ============================================================ */
const EDUCACIONAL = {
  id: "educacional",
  label: "Educacional",
  eyebrow: "Educacional",
  headline: "Inauguração antes da janela de matrícula.",
  body: "Escola fora do calendário acadêmico perde um semestre inteiro de captação. A Grifo planeja a entrega a partir do calendário do cliente — não do cronograma de construção.",
  tags: [
    "Calendário acadêmico", "Janela de matrícula", "MEC",
    "Capacidade instalada", "Campus ativo", "Educação básica",
  ],
  diffs: [
    { title: "Cronograma reverso acadêmico", body: "Planejamento de trás para frente: começa pela data de matrícula e constrói o cronograma até lá." },
    { title: "Obra em campus ativo", body: "Isolamento acústico, operação noturna e logística faseada para manter as aulas em pleno funcionamento." },
  ],
  miniCase: { name: "Community · Anima Educação", result: "15.000 m² entregues em 70 dias — marco da expansão SP", meta: "São Paulo, SP · 2025" },
  cta: "Conversar com o time de engenharia",
  photoSrc: "assets/portfolio/antonio-vieira-sala-azul.jpg",
  photoAlt: "Colégio Antônio Vieira — sala de aula",
};

const SAUDE = {
  id: "saude",
  label: "Saúde / Educação Médica",
  eyebrow: "Saúde / Educação Médica",
  headline: "Cada dia de obra parada é leito que não fatura.",
  body: "Obras de saúde têm zero tolerância a atraso. A Grifo opera dentro desse vocabulário — atende clínicas, hospitais e centros de educação médica.",
  tags: [
    "Receita por leito", "ANVISA RDC 50", "First patient",
    "Licenciamento sanitário", "Gases medicinais", "Educação médica",
  ],
  diffs: [
    { title: "Obra sem fechar o hospital", body: "Setorização rigorosa, controle de pressão e logística noturna para manter atendimento durante toda a reforma." },
    { title: "ROI antecipado", body: "Cada semana adiantada são leitos faturando antes do prazo contratual. Calculamos junto com você." },
  ],
  miniCase: { name: "Lapidare · Centro de educação médica", result: "Primeira obra de alto padrão da Grifo em SP — 60 dias · 2.500 m²", meta: "São Paulo, SP (Jardins) · 2024" },
  cta: "Conversar com o time de engenharia",
  photoSrc: "assets/portfolio/saude-recepcao.jpg",
  photoAlt: "Setor saúde — recepção clínica",
};

const CORPORATIVO = {
  id: "corporativo",
  label: "Corporativo",
  eyebrow: "Corporativo",
  headline: "Empresa em expansão precisa de sede pronta — não de obra atrasando o crescimento.",
  body: "Operações corporativas, sedes de empresas em expansão, retrofit de escritórios. A Grifo entrega condição para o negócio do cliente funcionar na data prevista.",
  tags: [
    "Sede corporativa", "Escritório", "Retrofit",
    "Operação em expansão", "Payback", "Data de abertura",
  ],
  diffs: [
    { title: "Data de abertura como parâmetro contratual", body: "A data crítica do negócio entra no contrato como cláusula, não como expectativa." },
    { title: "Retrofit sem fechar", body: "Reformas em operação com setorização e logística para manter o faturamento durante a obra." },
    { title: "Engenharia orientada a ROI", body: "Cada decisão técnica avaliada pelo impacto no prazo e no retorno do investimento." },
  ],
  miniCase: { name: "Caffeine Army", result: "Sede corporativa entregue dentro do cronograma de expansão", meta: "Brasil · 2024" },
  cta: "Apresentar projeto corporativo",
  photoSrc: "assets/portfolio/caffeine-army-escritorio.jpg",
  photoAlt: "Caffeine Army — escritório corporativo",
};

const EVENTOS = {
  id: "eventos",
  label: "Eventos",
  eyebrow: "Eventos",
  headline: "Arenas e estruturas de grande porte com coordenação técnica multidisciplinar.",
  body: "Espaços de eventos, arenas e estruturas industriais que exigem coordenação de múltiplas disciplinas em escala. A Grifo aplica o mesmo rigor de gestão do Fast Construction proporcional ao porte do projeto.",
  tags: [
    "Arena", "Espaço de eventos", "Estrutura industrial",
    "Grande porte", "Logística complexa", "Coordenação multidisciplinar",
  ],
  diffs: [
    { title: "Fly 51 · Maior arena de eventos do Brasil", body: "27.000 m² · Porto Alegre, RS · 2026" },
    { title: "Welucci · Espaço de eventos", body: "500 m² · Sorocaba, SP · 45 dias · 2026" },
    { title: "Coordenação multidisciplinar", body: "Múltiplas disciplinas em paralelo: estrutura, instalações, acabamento e logística de canteiro." },
    { title: "Gestão de grande porte", body: "O mesmo rigor do Fast Construction aplicado proporcionalmente ao porte do projeto." },
  ],
  cta: "Apresentar projeto de eventos",
  photoSrc: "assets/portfolio/fly51.jpg",
  photoAlt: "Setor eventos — Fly 51, maior arena de eventos do Brasil",
};

const FOODSERVICE = {
  id: "food-service",
  label: "Food Service",
  eyebrow: "Food Service",
  headline: "Restaurante precisava abrir para ter retorno no Natal.",
  body: "No food service, cada semana de obra é uma temporada de receita perdida. A Grifo entrega antes da próxima campanha do cliente — Natal, festas, alta temporada.",
  tags: ["Restaurante", "Cafeteria", "Sushi", "Operação contínua"],
  diffs: [
    { title: "Cronograma amarrado à campanha", body: "Não entregamos quando termina — entregamos antes da data que faz diferença pro negócio." },
    { title: "Obra com setorização", body: "Operações vizinhas continuam funcionando durante a obra." },
    { title: "Acabamento de food service", body: "Cozinha, exaustão, bancada, refrigeração — tudo dentro da norma sanitária." },
  ],
  cta: "Apresentar projeto de food service",
  photoSrc: "assets/portfolio/cantina-volpi.jpg",
  photoAlt: "Cantina Volpi — restaurante italiano",
};

const HOTELARIA = {
  id: "hotelaria",
  label: "Hotelaria",
  eyebrow: "Hotelaria",
  headline: "Diária bloqueada é receita morta.",
  body: "Operação hoteleira tem janela de receita. Cada dia parado é diária perdida. A Grifo entrega com a complexidade técnica de obra premium e a velocidade que protege o calendário de reservas.",
  tags: ["Spa", "Hospedagem", "Refúgio", "Alta temporada"],
  diffs: [
    { title: "Janela de baixa temporada", body: "Cronograma planejado para caber na janela de menor ocupação do cliente." },
    { title: "Acabamento de hospitalidade", body: "Iluminação, acústica, climatização e detalhes de UX premium." },
    { title: "Acompanhamento até a reabertura", body: "Não saímos no dia da entrega. Acompanhamos até a primeira reserva." },
  ],
  miniCase: { name: "Refúgio da Vila", result: "2.200 m² entregues em 70 dias", meta: "Bahia" },
  cta: "Apresentar projeto de hotelaria",
  photoSrc: "assets/portfolio/refugio-da-vila-piscina.jpg",
  photoAlt: "Refúgio da Vila — hotel boutique",
};

const VAREJO = {
  id: "varejo",
  label: "Varejo",
  eyebrow: "Varejo",
  headline: "Metro quadrado só vale faturando.",
  body: "No varejo, cada semana de obra além do prazo é receita que não entra. A Grifo entrega condição para o negócio do cliente abrir na data prevista.",
  tags: ["Loja", "Retrofit", "Inauguração", "Pet"],
  diffs: [
    { title: "Data de inauguração contratual", body: "A data crítica do negócio entra no contrato como cláusula." },
    { title: "Retrofit em loja aberta", body: "Setorização e logística para manter o faturamento durante a reforma." },
    { title: "Padrão de visual merchandising", body: "Acabamento que respeita o conceito de loja e a operação visual." },
  ],
  miniCase: { name: "Agromix", result: "1.600 m² entregues em 75 dias · 15.000 m² em retrofit", meta: "Brasil · 2024" },
  cta: "Apresentar projeto de varejo",
  photoSrc: "assets/portfolio/agromix-fachada.jpg",
  photoAlt: "Agromix Pet Center — fachada",
};

const LOGISTICA = {
  id: "logistica",
  label: "Logística",
  eyebrow: "Logística",
  headline: "Galpão pronto é CD operando.",
  body: "A Grifo aplica o Fast Construction a obras logísticas e galpões industriais, antecipando o início da operação.",
  tags: ["Galpão", "CD", "Trial industrial", "Ramp-up"],
  diffs: [
    { title: "Engenharia de grande porte", body: "Coordenação de múltiplas disciplinas em escala industrial." },
    { title: "Antecipação de operação", body: "Cada semana adiantada é um CD entrando em operação antes." },
    { title: "Compatibilidade com a operação logística", body: "Layout, pé-direito, fluxo e capacidade pensados para a operação real do cliente." },
  ],
  cta: "Apresentar projeto logístico",
  photoSrc: "assets/portfolio/tecmar-galpao.jpg",
  photoAlt: "Tecmar — galpão logístico",
};

/* ============================================================
   MAP — Brazil SVG (real cartography) + state list, with
   bidirectional hover between list and map.
   ============================================================ */
function AreasMap() {
  const STATES = [
    { sigla: "BA", name: "Bahia",             cities: "Salvador · Jequié · Vitória da Conquista · Mata de São João" },
    { sigla: "SP", name: "São Paulo",         cities: "São Paulo (capital) · Ribeirão Preto · Sorocaba · Região Metropolitana" },
    { sigla: "MA", name: "Maranhão",          cities: "São Luís" },
    { sigla: "CE", name: "Ceará",             cities: "Fortaleza" },
    { sigla: "MG", name: "Minas Gerais",      cities: "Belo Horizonte" },
    { sigla: "GO", name: "Goiás",             cities: "Goiânia" },
    { sigla: "SC", name: "Santa Catarina",    cities: "Joinville" },
    { sigla: "RS", name: "Rio Grande do Sul", cities: "Porto Alegre" },
  ];

  const mapRef = useRef(null);
  const [svg, setSvg] = useState("");
  const [hoverUf, setHoverUf] = useState(null);

  // Load the SVG once at mount
  useEffect(() => {
    let cancelled = false;
    fetch("assets/grifo-brasil-mapa.svg")
      .then((r) => r.text())
      .then((text) => { if (!cancelled) setSvg(text); })
      .catch(() => {});
    return () => { cancelled = true; };
  }, []);

  // Wire hover state into the inlined SVG (and back from SVG to list)
  useEffect(() => {
    const root = mapRef.current;
    if (!root) return;
    root.querySelectorAll("[data-uf]").forEach((el) => {
      el.classList.toggle("is-hover", hoverUf != null && el.dataset.uf === hoverUf);
    });
  }, [hoverUf, svg]);

  // Mouse handlers on the SVG container — let any [data-uf] ancestor trigger
  const onMapEnter = (e) => {
    const node = e.target.closest && e.target.closest("[data-uf]");
    if (node && node.dataset && node.dataset.uf) setHoverUf(node.dataset.uf);
  };
  const onMapLeave = () => setHoverUf(null);

  return (
    <section className="ar-map" data-screen-label="10 Mapa atuação">
      <div className="frame">
        <div className="ar-map__head">
          <div className="eyebrow dark">Onde atuamos</div>
          <h2 className="ar-map__title">
            19 cidades · 8 estados ·<br/><em>uma única linha decisória.</em>
          </h2>
        </div>

        <div className="ar-map__grid">
          <div className="ar-map__viz">
            <div
              ref={mapRef}
              className="ar-map__brasil"
              aria-label="Mapa do Brasil — estados de atuação da Grifo"
              onMouseOver={onMapEnter}
              onMouseOut={onMapLeave}
              dangerouslySetInnerHTML={{ __html: svg }}
            />
          </div>

          <div className="ar-map__list">
            <div className="ar-map__list-lab">Estados de atuação</div>
            <ul>
              {STATES.map((s) => (
                <li
                  key={s.sigla}
                  data-uf={s.sigla}
                  className={"ar-map__state" + (hoverUf === s.sigla ? " is-hover" : "")}
                  onMouseEnter={() => setHoverUf(s.sigla)}
                  onMouseLeave={() => setHoverUf(null)}>
                  <div className="ar-map__state-head">
                    <strong>{s.name}</strong>
                    <span className="ar-map__state-sigla">{s.sigla}</span>
                  </div>
                  <div className="ar-map__state-cities">{s.cities}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="ar-map__quote">
          Origem em Salvador. Atuação em 19 cidades e 8 estados — com a
          mesma linha decisória e o mesmo método.
        </p>
      </div>
    </section>
  );
}

function AreasSectors() {
  return (
    <>
      <SectorBlock data={EDUCACIONAL} photoPosition="right" bg="bone"  screenLabel="02 Educacional"/>
      <SectorBlock data={SAUDE}       photoPosition="left"  bg="white" screenLabel="03 Saúde"/>
      <SectorBlock data={CORPORATIVO} photoPosition="right" bg="cream" screenLabel="04 Corporativo"/>
      <SectorBlock data={EVENTOS}     photoPosition="left"  bg="bone"  screenLabel="05 Eventos"/>
      <SectorBlock data={FOODSERVICE} photoPosition="right" bg="white" screenLabel="06 Food Service"/>
      <SectorBlock data={HOTELARIA}   photoPosition="left"  bg="cream" screenLabel="07 Hotelaria"/>
      <SectorBlock data={VAREJO}      photoPosition="right" bg="bone"  screenLabel="08 Varejo"/>
      <SectorBlock data={LOGISTICA}   photoPosition="left"  bg="white" screenLabel="09 Logística"/>
    </>
  );
}

export { AreasHero, AreasSectors, AreasMap };

function App() {
  return (
    <>
      <NavFullbleed active="atuacao" />
      <AreasHero />
      <AreasSectors />
      <AreasMap />
      <CTABand
        title="Não encontrou seu setor?"
        lead="A Grifo atua em projetos comerciais em outros segmentos também — industrial leve, espaços culturais, galpões logísticos. Conta pra gente o que você precisa."
      />
      <Footer />
    </>
  );
}

createRoot(document.getElementById('app')).render(<App />);
