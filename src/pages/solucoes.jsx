// GRIFO Engenharia — Página Soluções

import { createRoot } from 'react-dom/client';
import Photo from '../components/photos';
import { NavFullbleed, CTABand, Footer } from '../components/sections';
import '../styles/global.css';
import '../styles/pages/solucoes.css';

/* Local mini-icon set — reuses navy/gold tokens via currentColor */
const SolIcon = {
  arrow: ({ size = 16 }) =>
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>,

  arrowDown: ({ size = 16 }) =>
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>,

  check: () =>
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12l5 5L20 7" />
    </svg>,

  team: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="9" r="3" />
      <path d="M2 21c0-3.3 3.1-6 7-6s7 2.7 7 6" />
      <circle cx="17" cy="8" r="2.5" />
      <path d="M22 18c0-2.5-1.8-4.5-4-5" />
    </svg>,

  contract: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 3h10l3 4v14H4V7z" />
      <path d="M17 3v4h3" />
      <path d="M8 11h8M8 15h8M8 19h5" />
    </svg>,

  finance: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6" width="18" height="13" rx="1.5" />
      <path d="M3 10h18" />
      <circle cx="16" cy="14.5" r="1.5" />
    </svg>,

  engineer: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="9" r="3" />
      <path d="M5 21c0-3.5 3-6 7-6s7 2.5 7 6" />
      <path d="M9 4h6l-1 2H10z" />
    </svg>,

  shield: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>,

  layers: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l9 5-9 5-9-5z" />
      <path d="M3 13l9 5 9-5" />
      <path d="M3 17l9 5 9-5" />
    </svg>,

  trending: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M14 7h7v7" />
    </svg>,

  receipt: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 3v18l2-2 2 2 2-2 2 2 2-2 2 2V3" />
      <path d="M9 8h6M9 12h6M9 16h4" />
    </svg>,

  calendar: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="16" rx="1.5" />
      <path d="M3 9h18M8 3v4M16 3v4" />
    </svg>,

  monitor: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="13" rx="1.5" />
      <path d="M8 21h8M12 17v4" />
      <path d="M7 11l2 2 3-3 3 3 2-2" />
    </svg>,

  message: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a8 8 0 01-12.5 6.6L3 20l1.4-5.5A8 8 0 1121 12z" />
    </svg>,

  handshake: () =>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 14l-2-2-3 3 2 2 3-1 2 2 3-1 2-3-3-3-2 2" />
      <path d="M3 12l4-4M21 12l-4-4" />
    </svg>

};

/* ============================================================
   PAGE HERO — soluções
   ============================================================ */
function SolucoesHero() {
  const pills = [
  { id: "modelo-grifo", label: "Modelo Grifo" },
  { id: "fast-construction", label: "Fast Construction" },
  { id: "construcao-completa", label: "Construção Completa" },
  { id: "projetos", label: "Projetos" },
  { id: "financiamento", label: "Engenharia Financeira" }];

  return (
    <section className="page-hero" data-screen-label="01 Hero Soluções">
      <img src="assets/griffin-line-cream.png" alt="" className="page-hero__watermark" />
      <div className="frame">
        <div className="page-hero__inner">
          <div className="page-hero__eyebrow eyebrow">Soluções</div>
          <h1 className="page-hero__title">
            Um fornecedor. Sete etapas.<br /><em>Uma única responsabilidade.</em>
          </h1>
          <p className="page-hero__lead">
            As soluções da Grifo são as expressões operacionais do Modelo
            one stop shop. Cada uma resolve uma parte; juntas, entregam o
            negócio operando.
          </p>
          <div className="page-hero__pills">
            {pills.map((p) =>
            <a key={p.id} href={p.id === "modelo-grifo" ? "#" : "#" + p.id} className="page-hero__pill">
                <span className="dot"></span>{p.label}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>);

}

/* ============================================================
   SECTION 1 — FAST CONSTRUCTION
   ============================================================ */
function SolutionFast() {
  const pillars = [
  { num: "01", title: "Planejamento reverso", body: "Cronograma começa pela data de entrega, não pela de início. Cada semana com entregáveis amarrados à data de operação do cliente." },
  { num: "02", title: "Gestão semanal", body: "Reunião de progresso toda semana. Desvio detectado vira ação corretiva rápida, não relatório mensal." },
  { num: "03", title: "Tecnologia de canteiro", body: "BI próprio, medições digitais, painel do cliente em tempo real." },
  { num: "04", title: "Fornecedores como sócios", body: "Parceiros avaliados por prazo, não só por preço. Rede nacional alinhada." }];

  return (
    <section className="sol sol--bone" id="fast-construction" data-screen-label="02 Fast Construction">
      <div className="frame">
        <div className="sol__grid sol__grid--2col">
          <div className="sol__copy">
            <div className="eyebrow">Método proprietário</div>
            <h2 className="sol__title">Fast Construction</h2>
            <p className="sol__lead">60 dias contra os até 6 meses do mercado tradicional.</p>
            <p className="sol__body">
              Combina planejamento lean, gestão semanal, tecnologia em
              tempo real e fornecedores tratados como sócios do prazo.
              Não é promessa de velocidade — é arquitetura de controle
              que detecta desvio antes de virar atraso.
            </p>

            <div className="sol__metric">
              <div className="sol__metric-num">60 <span className="unit">dias</span></div>
              <div className="sol__metric-lab">Prazo médio de entrega</div>
            </div>

            <div className="sol__forwhom">
              <div className="sol__forwhom-lab">Para quem é</div>
              <ul>
                <li><SolIcon.check /> Saúde com data crítica de licenciamento ANVISA</li>
                <li><SolIcon.check /> Educacional com janela de matrícula</li>
                <li><SolIcon.check /> Varejo, corporativo e logística com data de abertura</li>
              </ul>
            </div>

            <div className="sol__cta">
              <a href="#contato" className="btn btn-primary">Conhecer o método em detalhe <SolIcon.arrow size={14} /></a>
            </div>
          </div>

          <aside className="sol__diagram">
            <div className="sol__diagram-head">
              <span className="lab">4 pilares</span>
              <span className="ttl">Como o método funciona</span>
            </div>
            <ol className="sol__pillars">
              {pillars.map((p) =>
              <li key={p.num} className="sol__pillar">
                  <div className="sol__pillar-num">{p.num}</div>
                  <div className="sol__pillar-body">
                    <h4>{p.title}</h4>
                    <p>{p.body}</p>
                  </div>
                </li>
              )}
            </ol>
          </aside>
        </div>
      </div>
    </section>);

}

/* ============================================================
   SECTION 2 — CONSTRUÇÃO COMPLETA
   ============================================================ */
function SolutionComplete() {
  const features = [
  { icon: <SolIcon.team />, title: "Equipe própria de engenharia", body: "Pilar, estrutura, fundação, instalações: time interno." },
  { icon: <SolIcon.contract />, title: "Contrato único", body: "Você assina com a Grifo. A Grifo responde por tudo." },
  { icon: <SolIcon.finance />, title: "Gestão financeira aberta", body: "Cliente acessa custos em tempo real. Cada medição validada antes do pagamento." },
  { icon: <SolIcon.engineer />, title: "Engenheiro responsável acessível", body: "Quem decide tem o seu telefone. Sem intermediário." }];

  return (
    <section className="sol sol--white" id="construcao-completa" data-screen-label="03 Construção Completa">
      <div className="frame">
        <div className="sol__grid sol__grid--photo-right">
          <div className="sol__copy">
            <div className="eyebrow">Execução</div>
            <h2 className="sol__title">Construção Completa</h2>
            <p className="sol__lead">Uma construtora. Um cronograma. Uma responsabilidade.</p>
            <p className="sol__body">
              Execução completa de obras comerciais — da
              fundação ao acabamento. Equipe própria de engenharia.
              Subcontratados auditados. Nenhuma etapa crítica
              terceirizada sem controle.
            </p>

            <ul className="sol__features">
              {features.map((f, i) =>
              <li key={i}>
                  <span className="sol__feature-icon">{f.icon}</span>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.body}</p>
                  </div>
                </li>
              )}
            </ul>

            <div className="sol__cta">
              <a href="#contato" className="btn btn-primary">Apresentar projeto para avaliação <SolIcon.arrow size={14} /></a>
            </div>
          </div>

          <div className="sol__photo">
            <img
              src="assets/portfolio/ftc-unex-drone.jpg"
              alt="Execução em escala — FTC/UNEX"
              loading="lazy" />
            <div className="sol__photo-caption">
              <span className="lab">Execução</span>
              <span className="ttl">Estrutura · acabamento · entrega</span>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

/* ============================================================
   SECTION 3 — PROJETOS
   ============================================================ */
function SolutionProjects() {
  return (
    <section className="sol sol--cream" id="projetos" data-screen-label="04 Projetos">
      <div className="frame">
        <div className="sol__grid sol__grid--2col">
          <div className="sol__copy">
            <div className="eyebrow">Antes do canteiro</div>
            <h2 className="sol__title">Projetos</h2>
            <p className="sol__lead">Projeto que nasce para construir — sem surpresas no canteiro.</p>
            <p className="sol__body">
              Arquitetura, estrutural, elétrico, hidráulico e SPDA
              desenvolvidos com foco em construtibilidade. Projeto
              desenvolvido pelo mesmo time que vai executar — eliminando
              a lacuna entre prancheta e canteiro.
            </p>
            <div className="sol__cta">
              <a href="#contato" className="btn btn-primary">Apresentar projeto para parecer técnico <SolIcon.arrow size={14} /></a>
            </div>
          </div>

          <div className="sol__specs">
            <article className="sol__spec-card sol__spec-card--accent">
              <div className="sol__spec-icon"><SolIcon.layers /></div>
              <div className="lab">Projetos integrados</div>
              <h3>Aprovação mais rápida</h3>
              <p>
                Arquitetura, estrutura e instalações desenvolvidas em
                paralelo. Reduz conflito de projeto e o prazo de aprovação.
              </p>
              <ul className="sol__spec-tags">
                <li>BIM</li><li>Compatibilização</li><li>Arquitetura</li><li>Estrutural</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>);

}

/* ============================================================
   SECTION 4 — ENGENHARIA FINANCEIRA (dark, central)
   ============================================================ */
function SolutionFinance() {
  const bullets = [
  { icon: <SolIcon.trending />, text: "Redução do desembolso no período de obra" },
  { icon: <SolIcon.receipt />, text: "Possíveis benefícios tributários conforme estrutura jurídica" },
  { icon: <SolIcon.calendar />, text: "Cronograma financeiro alinhado ao cronograma de receita do projeto" }];

  return (
    <section className="sol sol--navy" id="financiamento" data-screen-label="05 Engenharia Financeira">
      <img src="assets/griffin-line-gold.png" alt="" className="sol__navy-watermark" />
      <div className="frame">
        <div className="sol__center">
          <div className="eyebrow dark">Estruturação do investimento</div>
          <h2 className="sol__title sol__title--light">VIABILIDADE FINANCEIRA</h2>
          <p className="sol__lead sol__lead--light">
            Formas de viabilizar a obra com mais eficiência financeira.
          </p>
          <p className="sol__body sol__body--light">
            Avaliamos com o cliente as opções de estruturação financeira
            disponíveis para o porte e o perfil do projeto. Na primeira
            conversa, apresentamos os cenários aplicáveis — incluindo
            formatos que reduzem o desembolso durante a obra e alinham o
            cronograma financeiro ao cronograma de receita.
          </p>

          <ul className="sol__navy-bullets">
            {bullets.map((b, i) =>
            <li key={i}>
                <span className="sol__navy-bullet-icon">{b.icon}</span>
                <span>{b.text}</span>
              </li>
            )}
          </ul>

          <a href="#contato" className="btn btn-gold sol__navy-cta">
            Conhecer as estruturas de financiamento <SolIcon.arrow size={14} />
          </a>
          <p className="sol__navy-note">Nosso time retorna em até 24h com uma primeira análise.</p>
        </div>
      </div>
    </section>);

}

/* ============================================================
   SECTION 5 — GRIFO REAL ESTATE (photo left, copy right)
   ============================================================ */
function SolutionResidential() {
  const features = [
  { icon: <SolIcon.monitor />, text: "Acompanhamento via painel digital semanal" },
  { icon: <SolIcon.message />, text: "Comunicação semanal por escrito" },
  { icon: <SolIcon.calendar />, text: "Prazo contratualmente definido" },
  { icon: <SolIcon.handshake />, text: "Acabamento supervisionado pelo time corporativo" }];

  return (
    <section className="sol sol--bone" id="residencial" data-screen-label="06 Grifo Real Estate">
      <div className="frame">
        <div className="sol__grid sol__grid--photo-left">
          <div className="sol__photo">
            <img
              src="assets/portfolio/praia-do-forte-piscina-infinita.jpg"
              alt="Residencial alto padrão — Praia do Forte"
              loading="lazy" />
            <div className="sol__photo-caption">
              <span className="lab">Residencial</span>
              <span className="ttl">Alto padrão · curadoria · entrega</span>
            </div>
          </div>
          <div className="sol__copy">
            <div className="eyebrow">Grifo Real Estate</div>
            <h2 className="sol__title">Residencial alto padrão</h2>
            <p className="sol__lead">Padrão técnico de obra corporativa aplicado a residências premium.</p>
            <p className="sol__body">
              Em 2024, a Grifo consolidou a operação residencial em braço
              próprio: a Grifo Real Estate. Construção de casas de alto
              padrão com curadoria estética e técnica, mantendo o mesmo
              DNA de gestão da Grifo Engenharia.
            </p>

            <ul className="sol__features sol__features--compact">
              {features.map((f, i) =>
              <li key={i}>
                  <span className="sol__feature-icon">{f.icon}</span>
                  <p>{f.text}</p>
                </li>
              )}
            </ul>

            <div className="sol__cta">
              <a href="#" className="btn btn-primary">Conhecer a Grifo Real Estate <SolIcon.arrow size={14} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

export {
  SolucoesHero,
  SolutionFast,
  SolutionComplete,
  SolutionProjects,
  SolutionFinance,
  SolutionResidential
};

function App() {
  return (
    <>
      <NavFullbleed active="solucoes" />
      <SolucoesHero />
      <SolutionFast />
      <SolutionComplete />
      <SolutionProjects />
      <SolutionFinance />
      <SolutionResidential />
      <CTABand
        title="Não sabe ainda qual solução se aplica ao seu projeto?"
        lead="Nosso time de engenharia faz a análise — sem compromisso. Você sai da primeira conversa sabendo qual solução cabe no seu cronograma."
      />
      <Footer />
    </>
  );
}

createRoot(document.getElementById('app')).render(<App />);