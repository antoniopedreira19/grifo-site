// GRIFO Engenharia — main page sections

import { useState, useEffect } from 'react';
import Photo from './photos';

/* ============================================================
   ICONS — sober line glyphs (Lucide-style 1.5px)
   ============================================================ */
const Icon = {
  arrow: ({ size = 16 }) =>
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>,

  arrowDown: ({ size = 16 }) =>
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>,

  hospital: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 21V8l8-5 8 5v13" />
      <path d="M9 21v-6h6v6" />
      <path d="M12 9v4M10 11h4" />
    </svg>,

  school: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-5 9 5-9 5-9-5z" />
      <path d="M7 11v5c0 1 2 2 5 2s5-1 5-2v-5" />
      <path d="M21 9v6" />
    </svg>,

  commercial: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="18" />
      <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2" />
    </svg>,

  events: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M5 21V8l7-5 7 5v13" />
      <path d="M9 21v-7h6v7" />
    </svg>,

  residential: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l9-7 9 7v10H3z" />
      <path d="M9 21v-6h6v6" />
    </svg>,

  arrowLeft: () =>
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>,

  instagram: () =>
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>,

  youtube: () =>
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.2c-.3-1-1-1.8-2-2C19.7 3.7 12 3.7 12 3.7s-7.7 0-9.5.5c-1 .3-1.7 1-2 2C0 8 0 12 0 12s0 4 .5 5.8c.3 1 1 1.8 2 2 1.8.5 9.5.5 9.5.5s7.7 0 9.5-.5c1-.3 1.7-1 2-2 .5-1.8.5-5.8.5-5.8s0-4-.5-5.8zM9.6 15.6V8.4l6.3 3.6-6.3 3.6z" />
    </svg>,

  whatsapp: () =>
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M21 12a9 9 0 11-3.5-7.1L21 4l-1 4a9 9 0 011 4z" />
      <path d="M9 10c0 4 3 7 7 7l-1-3-3 1c-1-1-2-2-3-3l1-3z" />
    </svg>,

  academy: () =>
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-5 9 5-9 5-9-5z" />
      <path d="M7 11v5c0 1 2 2 5 2s5-1 5-2v-5" />
      <path d="M21 9v6" />
    </svg>

};

/* ============================================================
   MENU LINKS — shared by NavFullbleed and HeroFullbleed
   ============================================================ */
const MENU_LINKS = [
{ id: "home", label: "Home", href: "/" },
{ id: "modelo", label: "Modelo Grifo", href: "/modelo-grifo" },
{ id: "solucoes", label: "Soluções", href: "/solucoes" },
{ id: "atuacao", label: "Setores", href: "/areas-de-atuacao" },
{ id: "cases", label: "Cases", href: "/cases" },
{ id: "real-estate", label: "Real Estate", href: "/grifo-real-estate" },
{ id: "manifesto", label: "Manifesto", href: "/manifesto" },
{ id: "contato", label: "Contato", href: "#contato" }];


/* ============================================================
   POSITIONING + METRICS
   ============================================================ */
function Position() {
  return (
    <section className="position" data-screen-label="02 Posicionamento">
      <div className="frame">
        <div className="position__top">
          <div>
            <div className="eyebrow">Posicionamento</div>
            <h2 className="position__title">
              A Grifo nasceu dentro da obra. Aprendeu que <em>os maiores problemas começam antes da obra.</em>
            </h2>
          </div>
          <div className="position__copy">
            <p>
              Um ponto comercial escolhido sem estratégia. Um projeto desalinhado com a operação. Um negócio querendo expandir sem estrutura. No mercado tradicional, cada etapa é um fornecedor diferente — e cada handoff é perda de tempo, alinhamento e velocidade.
            </p>
            <p>
              Por isso o modelo da Grifo deixou de ser execução e passou a ser integração. Não como ampliação de serviço — como ampliação de responsabilidade.
            </p>
            <div className="btn-row">
              <a href="/modelo-grifo" className="link-gold">Conhecer o Modelo Grifo →</a>
            </div>
          </div>
        </div>

        <div className="position__cards">
          <article className="pos-card">
            <div className="pos-card__lab">One stop shop</div>
            <h3 className="pos-card__title">Modelo Grifo</h3>
            <p className="pos-card__body">
              Sete etapas sob uma única responsabilidade técnica: localização, ponto, viabilidade, projeto, execução, pós-entrega e garantia técnica.
            </p>
            <a href="/modelo-grifo" className="pos-card__link">Conhecer o modelo <Icon.arrow size={14} /></a>
          </article>

          <article className="pos-card pos-card--gold">
            <div className="pos-card__lab">Método proprietário</div>
            <h3 className="pos-card__title">Fast Construction</h3>
            <p className="pos-card__body">
              Obras comerciais entregues em 60 dias — contra os até 6 meses do mercado tradicional. Sem comprimir qualidade.
            </p>
            <a href="/solucoes#fast-construction" className="pos-card__link">Conhecer o método <Icon.arrow size={14} /></a>
          </article>

          <article className="pos-card">
            <div className="pos-card__lab">Vetor de crescimento</div>
            <h3 className="pos-card__title">BHAG 2040</h3>
            <p className="pos-card__body">
              A Grifo não vende obra. Vende a velocidade com que o cliente começa a faturar. Meta: R$ 1 bilhão de faturamento para clientes até 2040.
            </p>
            <a href="/modelo-grifo#bhag" className="pos-card__link">Conhecer o BHAG <Icon.arrow size={14} /></a>
          </article>
        </div>
      </div>
    </section>);

}

/* ============================================================
   SECTORS
   ============================================================ */
function Sectors() {
  const sectors = [
  { num: "01", icon: <Icon.school />, name: "Educacional", copy: "Cronograma reverso amarrado ao calendário acadêmico. Inauguração antes da janela de matrícula." },
  { num: "02", icon: <Icon.hospital />, name: "Saúde", copy: "Obra em hospital ativo, ROI por leito. Cada dia parado é leito que não fatura." },
  { num: "03", icon: <Icon.commercial />, name: "Corporativo", copy: "Operações de empresas em expansão. Sede pronta antes do crescimento exigir." },
  { num: "04", icon: <Icon.events />, name: "Eventos", copy: "Arenas e estruturas de grande porte com coordenação técnica multidisciplinar." }];

  return (
    <section className="sectors" id="atuacao" data-screen-label="03 Setores">
      <div className="frame">
        <div className="sectors__head">
          <div>
            <div className="eyebrow">Setores</div>
            <h2 className="sectors__title">A Grifo conhece o seu negócio. Não só a sua obra.</h2>
          </div>
          <p className="sectors__sub">
            Cada setor tem seu cronograma crítico, sua norma técnica e sua linguagem de receita.
          </p>
        </div>
        <div className="sectors__grid">
          {sectors.map((s) =>
          <article key={s.num} className="sector">
              <div className="sector__num">{s.num}</div>
              <div className="sector__icon">{s.icon}</div>
              <h3 className="sector__name">{s.name}</h3>
              <p className="sector__copy">{s.copy}</p>
              <a href="/cases" className="sector__more">
                Ver cases <span className="arr"><Icon.arrow size={14} /></span>
              </a>
            </article>
          )}
        </div>
        <div className="sectors__more-row">
          <span>Atendemos também Food Service, Hotelaria, Varejo e Logística.</span>
          <a href="/areas-de-atuacao" className="link-gold">Ver todos os 8 setores →</a>
        </div>
      </div>
    </section>);

}

/* ============================================================
   SHOWCASE — dark cases band (3 destaques)
   ============================================================ */
function Showcase() {
  const [filter, setFilter] = useState("Todos");
  return (
    <section className="showcase" id="cases" data-screen-label="04 Cases">
      <img src="assets/griffin-line-gold.png" alt="" className="showcase__bg" />
      <div className="frame">
        <div className="showcase__head">
          <div>
            <div className="eyebrow dark">Cases em destaque</div>
            <h2 className="showcase__title">
              Cases que provam negócios em funcionamento — não obras concluídas.
            </h2>
          </div>
          <p className="showcase__sub">
            Cada case é uma operação que entrou em receita antes do que o mercado considerava possível.
          </p>
        </div>

        <div className="showcase__bar">
          <div className="filters">
            {["Todos", "Educacional", "Saúde", "Corporativo", "Eventos"].map((f) =>
            <button key={f} onClick={() => setFilter(f)} className={filter === f ? "is-active" : ""}>{f}</button>
            )}
          </div>
          <div className="showcase__nav">
            <button aria-label="Anterior"><Icon.arrowLeft /></button>
            <button aria-label="Próximo"><Icon.arrow size={16} /></button>
          </div>
        </div>

        <div className="showcase__grid">
          <article className="case-card featured">
            <img
              src="assets/portfolio/lapidare-entrada.jpg"
              alt="Lapidare — centro de educação médica em São Paulo"
              loading="lazy" />
            <div className="case-card__overlay"></div>
            <div className="case-card__content">
              <div className="case-card__tags">
                <span className="pill gold">Saúde / Educação Médica</span>
                <span className="pill">60 dias</span>
              </div>
              <h3 className="case-card__title">Lapidare — Centro de educação médica</h3>
              <p className="case-card__loc">São Paulo, SP (Jardins) · 2.500 m² · 2024</p>
              <span className="case-card__metric">Primeira obra de <strong>alto padrão</strong> da Grifo em SP</span>
            </div>
          </article>
          <article className="case-card">
            <img
              src="assets/portfolio/community-auditorio.jpg"
              alt="Community Anima — centro educacional em São Paulo"
              loading="lazy" />
            <div className="case-card__overlay"></div>
            <div className="case-card__content">
              <div className="case-card__tags">
                <span className="pill gold">Educacional</span>
                <span className="pill">70 dias</span>
              </div>
              <h3 className="case-card__title">Community — Anima Educação</h3>
              <p className="case-card__loc">São Paulo, SP · 15.000 m² · 2025</p>
              <span className="case-card__metric">Marco da expansão Grifo em <strong>São Paulo</strong></span>
            </div>
          </article>
          <article className="case-card">
            <img
              src="assets/portfolio/ftc-unex-drone.jpg"
              alt="FTC UNEX — faculdade em Jequié, BA"
              loading="lazy" />
            <div className="case-card__overlay"></div>
            <div className="case-card__content">
              <div className="case-card__tags">
                <span className="pill gold">Saúde / Educação Médica</span>
                <span className="pill">30 dias</span>
              </div>
              <h3 className="case-card__title">FTC / UNEX</h3>
              <p className="case-card__loc">Jequié, BA · 20.000 m² · 2022</p>
              <span className="case-card__metric">Recorde de velocidade do <strong>portfólio Grifo</strong></span>
            </div>
          </article>
        </div>
      </div>
    </section>);

}

/* ============================================================
   MANIFESTO — get to know us (home version)
   ============================================================ */
function Manifesto() {
  const items = [
  {
    key: "move",
    title: "O que nos move",
    lab: "Propósito",
    heading: "A obra nunca foi só a obra. Sempre foi consequência de tudo o que veio antes.",
    body: "A transformação mais importante da Grifo em 10 anos não foi de escala — foi de modelo. A empresa deixou de operar apenas na execução e passou a integrar as 7 etapas que tornam uma obra um negócio em funcionamento.",
    cta: "Conhecer o Modelo Grifo",
    href: "/modelo-grifo"
  },
  {
    key: "metodo",
    title: "Nosso método",
    lab: "Fast Construction",
    heading: "60 dias contra os até 6 meses do mercado tradicional.",
    body: "Planejamento reverso, gestão semanal de canteiro, tecnologia em tempo real e fornecedores tratados como sócios do prazo. Não é promessa de velocidade — é arquitetura de controle que detecta desvio antes de virar atraso.",
    cta: "Ver o método",
    href: "/solucoes#fast-construction"
  },
  {
    key: "socios",
    title: "Quem decide",
    lab: "Liderança",
    heading: "Engenheiros que entendem balanço. Empresários que entendem obra.",
    body: "Daniel Gedeon (Sócio Fundador), Caio Bernardes (CEO) e Arnoldo Neves (COO). Engenheiros civis. Cada projeto é acompanhado por um sócio — você fala com quem decide, não com quem só executa.",
    cta: "Conhecer o time",
    href: "/manifesto#socios"
  },
  {
    key: "transparencia",
    title: "Transparência",
    lab: "Governança",
    heading: "Cronograma aberto, custo aberto, riscos abertos.",
    body: "Cliente acessa o painel de obra em tempo real: medições, fotos do canteiro, indicadores de desvio. Atualizações semanais por escrito. Desvio é informado antes de virar problema.",
    cta: "Ver compromissos",
    href: "/manifesto"
  },
  {
    key: "credenciais",
    title: "Credenciais",
    lab: "Pioneirismo",
    heading: "Pioneiros em Fast Construction no Brasil.",
    body: "Criadores do Grifo Cast. Membros do G4 Educação. Especialistas em tecnologias para gestão de obras. NPS 9.7 nos últimos 24 meses.",
    cta: "Saber mais",
    href: "/manifesto"
  },
  {
    key: "cultura",
    title: "Cultura",
    lab: "Filosofia",
    heading: "Engenharia com visão de negócio.",
    body: "A Grifo calcula o custo de um pilar errado e o custo de uma inauguração atrasada com o mesmo rigor. Os dois importam — e a cultura interna é construída para não tratar nenhum dos dois como detalhe.",
    cta: "Saber mais",
    href: "/manifesto"
  }];


  const [active, setActive] = useState(null);
  const current = active !== null ? items[active] : null;

  return (
    <section className="manifesto" id="manifesto" data-screen-label="05 Manifesto">
      <div className="frame">
        <div className="manifesto__grid">
          <div className="manifesto__lhs">
            <div className="eyebrow">Conheça a Grifo</div>
            <h2 className="manifesto__title">
              A Grifo nasceu em 2016 com R$ 500 e uma obra de 24 m². Em 10 anos, virou referência nacional em Fast Construction.
            </h2>
            <ul className="manifesto__list">
              {items.map((it, i) =>
              <li
                key={it.key}
                className={"manifesto__item" + (i === active ? " is-active" : "")}>
                  <button
                  type="button"
                  onClick={() => setActive(i === active ? null : i)}
                  aria-pressed={i === active}>
                    <span>{it.title}</span>
                    <span className="arr"><Icon.arrow size={14} /></span>
                  </button>
                </li>
              )}
            </ul>
            <div style={{ marginTop: 32 }}>
              <a href="/manifesto" className="btn btn-ghost">Ler manifesto completo</a>
            </div>
          </div>

          {current ?
          <div className="manifesto__rhs manifesto__rhs--panel">
              <article key={current.key} className="manifesto__panel">
                <div className="manifesto__panel-meta">
                  <span className="lab">{current.lab}</span>
                  <button
                  type="button"
                  className="manifesto__panel-close"
                  onClick={() => setActive(null)}
                  aria-label="Fechar e voltar ao mosaico">
                    <span className="idx">{String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <h3 className="manifesto__panel-title">{current.heading}</h3>
                <p className="manifesto__panel-body">{current.body}</p>
                <a href={current.href} className="link-gold">{current.cta} →</a>
              </article>
            </div> :

          <div className="manifesto__rhs manifesto__rhs--mosaic">
              <div className="manifesto__photo manifesto__photo--tall">
                <img
                src="assets/portfolio/ftc-unex-patio.jpg"
                alt="Equipe Grifo em obra"
                loading="lazy" />
              </div>
              <div className="manifesto__photo">
                <img
                src="assets/portfolio/emec-armacao.jpg"
                alt="Obra em execução — estrutura industrial"
                loading="lazy" />
              </div>
              <div className="manifesto__photo">
                <img
                src="assets/portfolio/praia-do-forte-sala-adega.jpg"
                alt="Acabamento interno premium"
                loading="lazy" />
              </div>
            </div>
          }
        </div>
      </div>
    </section>);

}

/* ============================================================
   NEWS / GRIFO NA MÍDIA
   ============================================================ */
function News() {
  const items = [
  { variant: "commercial", img: "assets/portfolio/midia-editora-alma.jpg", badge: "Editora ALMA", date: "ABR · 2023", title: "Empresa de engenharia baiana, Grifo, tem crescimento exponencial", excerpt: "Cobertura sobre execução ágil e foco em excelência." },
  { variant: "rebar", img: "assets/portfolio/midia-casas-conceito-2023.jpg", badge: "Casas Conceito", date: "OUT · 2023", title: "Grifo Engenharia, construtora responsável pela Casas Conceito 2023", excerpt: "5ª edição da Mostra em Salvador. Tema: Memórias." },
  { variant: "interior", img: "assets/portfolio/midia-alo-alo-bahia.jpg", badge: "Alô Alô Bahia", date: "FEV · 2024", title: "Fundada na Bahia, Grifo Engenharia inaugura obra de alto padrão em São Paulo", excerpt: "Centro de treinamento Instituto Lapidare. Jardins, SP. 2.500 m². 60 dias." }];

  return (
    <section className="news" data-screen-label="06 Grifo na mídia">
      <div className="frame">
        <div className="news__head">
          <div className="lhs">
            <div className="eyebrow">Imprensa</div>
            <h2>Grifo na mídia</h2>
            <p>O que a imprensa especializada diz sobre o nosso modelo.</p>
          </div>
          <a href="#" className="btn btn-primary">Ver todas as menções <Icon.arrow size={14} /></a>
        </div>
        <div className="news__grid">
          {items.map((it, i) =>
          <a key={i} href="#" className="news-card">
              <div className="news-card__img">
                <img src={it.img} alt={it.title} loading="lazy" />
              </div>
              <div className="news-card__body">
                <div className="news-card__meta">{it.date}</div>
                <h3 className="news-card__title">{it.title}</h3>
                <p className="news-card__excerpt">{it.excerpt}</p>
                <span className="news-card__more">Ler matéria <Icon.arrow size={12} /></span>
              </div>
            </a>
          )}
        </div>
        <div className="news__dots">
          <span className="is-active"></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>);

}

/* ============================================================
   FINAL CTA BAND
   ============================================================ */
function CTABand({ title, lead } = {}) {
  const finalTitle = title || "Conversas sobre projeto começam na altura técnica.";
  const finalLead = lead || "O primeiro contato é com um dos engenheiros responsáveis pela operação. Sem intermediário comercial.";
  return (
    <section className="ctaband" id="contato" data-screen-label="07 Contato">
      <img src="assets/griffin-line-cream.png" alt="" className="ctaband__watermark" />
      <div className="frame">
        <div className="ctaband__grid">
          <div>
            <div className="eyebrow dark">Fale com a Grifo</div>
            <h2 className="ctaband__title">{finalTitle}</h2>
            <p className="ctaband__lead">{finalLead}</p>
            <div className="ctaband__actions">
              <a
                href="https://inlead.digital/grifo-orcamento/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold">
                Solicite seu orçamento <span className="arr"><Icon.arrow size={14} /></span>
              </a>
              <a
                href="https://inlead.digital/grifo-projeto/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost-light">
                Tire o seu projeto do papel
              </a>
            </div>
          </div>

          <div className="ctaband__rhs">
            <div className="lab">Prefere contato direto?</div>
            <h3>Comercial e Engenharia falando com você na primeira ligação.</h3>
            <p>Não passamos seu projeto entre departamentos. O engenheiro responsável retorna o contato.</p>
            <ul className="ctaband__contacts">
              <li>
                <span className="lab">Telefone</span>
                <a href="tel:+557197420802">+55 71 9742-0802</a>
              </li>
              <li>
                <span className="lab">WhatsApp</span>
                <a href="https://wa.me/557197420802" target="_blank" rel="noopener noreferrer">+55 71 9742-0802</a>
              </li>
              <li>
                <span className="lab">E-mail</span>
                <a href="mailto:contato@grifoengenharia.com.br">contato@grifoengenharia.com.br</a>
              </li>
              <li>
                <span className="lab">Sede</span>
                <span>Rua Jacobina, 66 · 3º andar · Salvador, BA</span>
              </li>
              <li>
                <span className="lab">Escritório SP</span>
                <span>Rua Funchal, 263 · Vila Olímpia, SP</span>
              </li>
              <li>
                <span className="lab">Horário</span>
                <span>Seg–sex, 8h às 17h · Retorno no próximo dia útil fora do horário</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>);

}

/* ============================================================
   FOOTER TAGLINE — sober closing line above the footer
   ============================================================ */
function FooterTagline() {
  return (
    <div
      className="footer-tagline"
      style={{
        background: "var(--grifo-navy-deep)",
        color: "var(--grifo-gold-bright)",
        textAlign: "center",
        padding: "56px 24px 48px",
        fontFamily: "var(--font-display)",
        fontStyle: "italic",
        fontSize: "clamp(20px, 2.2vw, 28px)",
        letterSpacing: "0.01em",
        lineHeight: 1.3,
        borderTop: "1px solid rgba(245, 241, 234, 0.06)"
      }}>
      A obra nunca foi só a obra.
    </div>);

}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer() {
  return (
    <>
      <FooterTagline />
      <footer className="footer" data-screen-label="08 Footer">
        <div className="frame">
          <div className="footer__top">
            <div className="footer__brand">
              <img src="assets/logo-full-gold.png" alt="GRIFO Engenharia" />
              <p>Construtora especializada em Fast Construction. Modelo integrado de engenharia para obras comerciais, com responsabilidade técnica única em todas as etapas. Pioneira no Brasil desde 2016.</p>
              <div className="signature">CREA-BA nº 0010129995 · Desde 2016 · 10 anos</div>
            </div>
            <div className="footer__cols">
              <div>
                <div className="footer__h">Soluções</div>
                <ul>
                  <li><a href="/modelo-grifo">Modelo Grifo</a></li>
                  <li><a href="/solucoes#fast-construction">Fast Construction</a></li>
                  <li><a href="/solucoes#construcao-completa">Construção completa</a></li>
                  <li><a href="/solucoes#projetos">Projetos</a></li>
                  <li><a href="/solucoes#financiamento">Engenharia Financeira</a></li>
                  <li><a href="/grifo-real-estate">Residencial alto padrão</a></li>
                </ul>
              </div>
              <div>
                <div className="footer__h">Atuação</div>
                <ul>
                  <li><a href="/areas-de-atuacao#educacional">Educacional</a></li>
                  <li><a href="/areas-de-atuacao#saude">Saúde</a></li>
                  <li><a href="/areas-de-atuacao#food-service">Food Service</a></li>
                  <li><a href="/areas-de-atuacao#hotelaria">Hotelaria</a></li>
                  <li><a href="/areas-de-atuacao#varejo">Varejo</a></li>
                  <li><a href="/areas-de-atuacao#logistica">Logística</a></li>
                  <li><a href="/areas-de-atuacao#corporativo">Corporativo</a></li>
                  <li><a href="/areas-de-atuacao#eventos">Eventos</a></li>
                </ul>
              </div>
              <div>
                <div className="footer__h">Empresa</div>
                <ul>
                  <li><a href="/manifesto">Manifesto</a></li>
                  <li><a href="/cases">Cases</a></li>
                  <li><a href="/cases#clientes">Quem confia na Grifo</a></li>
                  <li><a href="/grifo-real-estate">Grifo Real Estate</a></li>
                </ul>
              </div>
              <div>
                <div className="footer__h">Contato</div>
                <ul>
                  <li>contato@grifoengenharia.com.br</li>
                  <li>+55 71 9742-0802</li>
                  <li>Rua Jacobina, 66 · 3º andar · Rio Vermelho</li>
                  <li>Salvador, BA · CEP 41940-160</li>
                  <li style={{ marginTop: 12, opacity: 0.85 }}>Escritório SP: Rua Funchal, 263 · bloco 01 · sala 61 · Vila Olímpia · São Paulo, SP · CEP 04551-060</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <span>© 2026 GRIFO ENGENHARIA LTDA — CNPJ 25.313.018/0001-74 — Todos os direitos reservados</span>
            <div className="social">
              <a href="https://instagram.com/grifoengenharia" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Icon.instagram /></a>
              <a href="https://youtube.com/@DanielGedeon" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Icon.youtube /></a>
              <a href="https://wa.me/557197420802" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><Icon.whatsapp /></a>
              <a href="https://grifoacademy.com.br" target="_blank" rel="noopener noreferrer" aria-label="Grifo Academy"><Icon.academy /></a>
            </div>
          </div>
        </div>
      </footer>
    </>);

}

/* ============================================================
   MOBILE NAV — hamburger + slide-in drawer (shared)
   ============================================================ */
function MobileNav({ active = "home" }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={"nav-burger" + (open ? " is-open" : "")}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}>
        <span></span><span></span><span></span>
      </button>

      <div
        className={"nav-drawer" + (open ? " is-open" : "")}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}>
        <div className="nav-drawer__backdrop" onClick={() => setOpen(false)}></div>
        <nav className="nav-drawer__panel" aria-label="Menu principal">
          {MENU_LINKS.map((l) =>
          <a
            key={l.id}
            href={l.href}
            className={l.id === active ? "active" : ""}
            onClick={() => setOpen(false)}>{l.label}</a>
          )}
          <a href="#contato" className="nav-drawer__cta" onClick={() => setOpen(false)}>
            Falar com a Grifo <Icon.arrow size={16} />
          </a>
        </nav>
      </div>
    </>);

}

/* ============================================================
   NAV FULLBLEED — top nav for internal pages (dark navy band)
   ============================================================ */
function NavFullbleed({ active = "home" } = {}) {
  return (
    <div className="site-topnav" data-screen-label="00 Nav">
      <div className="site-topnav__ribbon">
        <div className="frame">
          <span><span className="dot"></span>Mais de 250 obras entregues no Brasil</span>
          <span><a href="https://wa.me/557197420802" target="_blank" rel="noopener noreferrer">Atendimento: +55 71 9742-0802</a></span>
        </div>
      </div>
      <header className="hero-fb__nav">
        <a className="hero-fb__logo hero-fb__logo--png" href="/" aria-label="GRIFO Engenharia — Home">
          <img src="assets/logo-grifo-header.png" alt="GRIFO Engenharia" />
        </a>
        <nav className="hero-fb__menu" aria-label="Principal">
          {MENU_LINKS.map((l) =>
          <a key={l.id} href={l.href} className={l.id === active ? "active" : ""}>{l.label}</a>
          )}
        </nav>
        <a href="#contato" className="hero-fb__cta">
          Falar com a Grifo <Icon.arrow size={14} />
        </a>
        <MobileNav active={active} />
      </header>
    </div>);

}

/* ============================================================
   HERO FULLBLEED — photo-centric hero used by the home page
   ============================================================ */
function HeroFullbleed() {
  return (
    <section className="hero-fb" data-screen-label="01 Hero">
      {/* Photo bg */}
      <div className="hero-fb__bg">
        <img
          src="assets/hero-canteiro-aerea.jpg"
          alt="Vista aérea de canteiro de obras com equipe da Grifo"
          className="hero-fb__photo" />
        
        <div className="hero-fb__veil" aria-hidden="true"></div>
        <div className="hero-fb__grain" aria-hidden="true"></div>
      </div>

      {/* Internal nav bar */}
      <header className="hero-fb__nav">
        <a className="hero-fb__logo hero-fb__logo--png" href="/" aria-label="GRIFO Engenharia — Home">
          <img src="assets/logo-grifo-header.png" alt="GRIFO Engenharia" />
        </a>
        <nav className="hero-fb__menu" aria-label="Principal">
          {MENU_LINKS.map((l) =>
          <a key={l.id} href={l.href} className={l.id === "home" ? "active" : ""}>{l.label}</a>
          )}
        </nav>
        <a href="#contato" className="hero-fb__cta">
          Falar com a Grifo <Icon.arrow size={14} />
        </a>
        <MobileNav active="home" />
      </header>

      {/* Content overlay */}
      <div className="hero-fb__inner">
        <div className="hero-fb__left">
          <div className="hero-fb__eyebrow">
            <span className="hero-fb__star">★</span>
            <span>Engenharia comercial integrada</span>
          </div>
          <h1 className="hero-fb__title">
            Engenharia parceira<br />
            <em>da expansão de negócios.</em>
          </h1>
          <p className="hero-fb__lead">
            A Grifo opera obras comerciais como parte da estratégia de
            crescimento dos seus clientes — não como serviço isolado.
            Modelo integrado em Fast Construction, com responsabilidade
            técnica única em todas as etapas. Pioneira no Brasil desde 2016.
          </p>
          <div className="hero-fb__actions">
            <a href="/modelo-grifo" className="hero-fb__btn hero-fb__btn--gold">
              Conhecer o Modelo Grifo <Icon.arrow size={16} />
            </a>
            <a href="#contato" className="hero-fb__btn hero-fb__btn--ghost">
              Falar com a Grifo <Icon.arrow size={16} />
            </a>
          </div>
        </div>
      </div>

    </section>);

}

/* ============================================================
   HERO METRICS — faixa de prova social (logo abaixo do hero)
   ============================================================ */
function HeroMetrics() {
  return (
    <section className="hero-metrics" data-screen-label="01b Métricas">
      <div className="frame hero-metrics__frame">
        <div className="hero-metrics__item">
          <div className="hero-metrics__num">250<span>+</span></div>
          <div className="hero-metrics__lab">Obras entregues</div>
        </div>
        <div className="hero-metrics__item">
          <div className="hero-metrics__num">500<span>k m²</span></div>
          <div className="hero-metrics__lab">Área construída</div>
        </div>
        <div className="hero-metrics__item">
          <div className="hero-metrics__num">NPS<span> 9.7</span></div>
          <div className="hero-metrics__lab">Satisfação do cliente</div>
        </div>
      </div>
    </section>);

}

export { NavFullbleed, HeroFullbleed, HeroMetrics, Position, Sectors, Showcase, Manifesto, News, CTABand, Footer };