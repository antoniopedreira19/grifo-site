// GRIFO Engenharia — Página Modelo Grifo

import { createRoot } from 'react-dom/client';
import { NavFullbleed, CTABand, Footer } from '../components/sections';
import '../styles/global.css';
import '../styles/pages/manifesto.css';
import '../styles/pages/solucoes.css';
import '../styles/pages/modelo-grifo.css';

const MgIcon = {
  arrow: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6"/>
    </svg>
  ),
  arrowRight: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6"/>
    </svg>
  ),
};

/* ============================================================
   PAGE HERO
   ============================================================ */
function ModeloHero() {
  return (
    <section className="page-hero" data-screen-label="01 Hero Modelo">
      <img src="assets/griffin-line-cream.png" alt="" className="page-hero__watermark"/>
      <div className="frame">
        <div className="page-hero__inner">
          <div className="page-hero__eyebrow eyebrow">O Modelo Grifo</div>
          <h1 className="page-hero__title">
            One stop não é ampliação de serviço.<br/><em>É ampliação de responsabilidade.</em>
          </h1>
          <p className="page-hero__lead">
            Como a Grifo deixou de operar apenas na construção e
            integrou as 7 etapas que tornam uma obra um negócio em
            funcionamento.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   EDITORIAL — reaproveita visual de mn-editorial
   ============================================================ */
function ModeloEditorial() {
  return (
    <section className="mn-editorial mg-editorial" data-screen-label="02 Editorial">
      <div className="frame">
        <article className="mn-editorial__text">
          <p>
            A Grifo nasceu dentro da execução. Durante anos, a obra foi
            o centro da operação da empresa: velocidade, prazo, decisão
            rápida, gestão, resolução de problema. Essa foi a primeira
            linguagem da Grifo — e foi nela que a empresa construiu
            repertório e profundidade.
          </p>
          <p>
            Ao longo do tempo, uma percepção começou a ficar clara: na
            maioria das vezes, os maiores problemas da obra não começavam
            na obra.
          </p>
          <p>
            A execução acabava sofrendo consequências de decisões tomadas
            muito antes. Um ponto comercial escolhido sem estratégia. Um
            projeto desalinhado com a operação. Um negócio querendo
            expandir sem estrutura. E a obra acabava virando a etapa que
            precisava absorver todos esses erros anteriores.
          </p>
          <p>
            Foi quando a Grifo começou a participar cada vez mais das
            decisões dos clientes. Primeiro de forma natural — alguém
            pedindo opinião sobre um ponto, outro buscando direcionamento
            sobre operação ou expansão. Aos poucos, a relação deixou de
            ser apenas operacional.
          </p>
          <p className="mn-editorial__hit">
            E isso nunca nasceu como uma estratégia de "virar uma empresa
            que faz tudo". Nasceu da necessidade de integrar etapas que,
            no mercado tradicional, acontecem de forma desconectada.
          </p>
          <p className="mn-editorial__hit">
            O one stop nasce dessa leitura. Não como ampliação de
            serviço — como ampliação de responsabilidade.
          </p>
          <p>
            Dentro dessa visão, o Fast Construction ganha uma nova
            dimensão. Deixa de representar apenas velocidade de obra e
            passa a representar velocidade de decisão, de alinhamento e
            de execução do ecossistema inteiro. Acelerar uma expansão
            não é só construir rápido. É reduzir atrito entre todas as
            etapas do processo.
          </p>
        </article>
      </div>
    </section>
  );
}

/* ============================================================
   7 ETAPAS — timeline
   ============================================================ */
const STAGES = [
  { num: "01", name: "Localização",      body: "Busca e indicação de ponto comercial a partir da estratégia de expansão e da região definida pelo cliente." },
  { num: "02", name: "Ponto",            body: "Validação técnica, regulatória e operacional do imóvel escolhido." },
  { num: "03", name: "Viabilidade",      body: "Viabilidade técnica, regulatória e financeira do projeto. Quando o projeto não fecha, a Grifo diz na viabilidade — não no meio da obra." },
  { num: "04", name: "Projeto",          body: "Arquitetura, estrutural, elétrico, hidráulico e SPDA desenvolvidos com foco em construtibilidade. Mesmo time que vai executar." },
  { num: "05", name: "Execução",         body: "Fast Construction. Obras comerciais entregues em 60 dias contra os até 6 meses do mercado tradicional." },
  { num: "06", name: "Pós-entrega",      body: "Checklist final, mapeamento das melhorias solicitadas pelo cliente e execução dos ajustes finos do espaço." },
  { num: "07", name: "Garantia técnica", body: "Atendimento técnico pós-obra para correções e ajustes. Relacionamento de longo prazo para próximas expansões." },
];

function ModeloStages() {
  return (
    <section className="mg-stages" data-screen-label="03 Sete etapas">
      <div className="frame">
        <div className="mg-stages__head">
          <div className="eyebrow">As 7 etapas</div>
          <h2 className="mg-stages__title">Sete etapas sob um único contrato.</h2>
          <p className="mg-stages__sub">
            Localização, ponto, viabilidade, projeto, execução,
            pós-entrega e garantia técnica. Uma única responsabilidade
            técnica do começo ao fim.
          </p>
        </div>

        <ol className="mg-stages__list">
          {STAGES.map((s, i) => (
            <li key={s.num} className="mg-stage">
              <div className="mg-stage__num">{s.num}</div>
              <h3 className="mg-stage__name">{s.name}</h3>
              <p className="mg-stage__body">{s.body}</p>
              {i < STAGES.length - 1 && <span className="mg-stage__connector" aria-hidden="true"></span>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ============================================================
   TABELA PROBLEMA × SOLUÇÃO
   ============================================================ */
const RESOLVE_ROWS = [
  { problem: "Cultura de prazos estendidos como regra",         solution: "Entrega rápida e antecipada" },
  { problem: "Variação da possível data de entrega",            solution: "Previsibilidade e segurança para a operação" },
  { problem: "Payback tardio e prejuízos ao capital",           solution: "Oportunidade de geração de receita mais cedo" },
  { problem: "Altos riscos de atrasos e custos extras",         solution: "Redução de riscos de atrasos e custos" },
];

function ModeloResolve() {
  return (
    <section className="mg-resolve" data-screen-label="05 Tecnologia resolve">
      <div className="frame">
        <div className="mg-resolve__head">
          <div className="eyebrow">O que o método resolve</div>
          <h2 className="mg-resolve__title">
            Os problemas que o método elimina.
          </h2>
        </div>
        <div className="mg-resolve__table">
          <div className="mg-resolve__theader">
            <div>Problemas da obra convencional</div>
            <div>Soluções do Fast Construction</div>
          </div>
          {RESOLVE_ROWS.map((r, i) => (
            <div key={i} className="mg-resolve__row">
              <div className="mg-resolve__problem">
                <span className="mg-resolve__bullet">—</span>
                <span>{r.problem}</span>
              </div>
              <div className="mg-resolve__arrow" aria-hidden="true">
                <MgIcon.arrowRight size={20}/>
              </div>
              <div className="mg-resolve__solution">
                <span className="mg-resolve__bullet">+</span>
                <span>{r.solution}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   BHAG — bloco navy
   ============================================================ */
function ModeloBhag() {
  return (
    <section className="sol sol--navy mg-bhag" id="bhag" data-screen-label="06 BHAG">
      <img src="assets/griffin-line-gold.png" alt="" className="sol__navy-watermark"/>
      <div className="frame">
        <div className="sol__center">
          <div className="eyebrow dark">BHAG · Vetor de Crescimento</div>
          <h2 className="sol__title sol__title--light">
            Por que somos vetor de crescimento para os negócios.
          </h2>
          <p className="sol__body sol__body--light">
            A Grifo não vende obra. Vende a velocidade com que o cliente
            começa a faturar. Cada semana antecipada é dinheiro entrando
            mais cedo no caixa de quem confiou na gente.
          </p>

          <div className="mg-bhag__metric">
            <div className="num">R$ 1 bilhão</div>
            <div className="lab">Meta de faturamento gerado para clientes até 2040</div>
          </div>

          <a href="#contato" className="btn btn-gold sol__navy-cta">
            Falar com a engenharia <MgIcon.arrow size={14}/>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FECHAMENTO
   ============================================================ */
function ModeloClosure() {
  return (
    <section className="mg-closure" data-screen-label="07 Fechamento">
      <div className="frame">
        <article className="mg-closure__text">
          <p>
            No modelo tradicional, cada etapa da expansão é um fornecedor
            diferente — e cada handoff é perda de tempo, alinhamento e
            responsabilidade. Quando a obra atrasa, ninguém é dono do
            atraso.
          </p>
          <p className="mg-closure__hit">
            No modelo Grifo, o atraso não tem dono porque o atraso não
            acontece. Há um único contrato, uma única responsabilidade
            e uma única linha decisória. Não é simplificação. É
            arquitetura.
          </p>
          <div className="mg-closure__cta">
            <a href="#contato" className="btn btn-primary">
              Falar com a engenharia <MgIcon.arrow size={14}/>
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export {
  ModeloHero, ModeloEditorial, ModeloStages,
  ModeloResolve, ModeloBhag, ModeloClosure,
};

function App() {
  return (
    <>
      <NavFullbleed active="modelo" />
      <ModeloHero />
      <ModeloEditorial />
      <ModeloStages />
      <ModeloResolve />
      <ModeloBhag />
      <ModeloClosure />
      <CTABand
        title="Quer entender como o Modelo Grifo se aplica ao seu projeto?"
        lead="A primeira conversa é com um engenheiro responsável — não com um comercial. Em 24h, uma primeira análise do seu caso."
      />
      <Footer />
    </>
  );
}

createRoot(document.getElementById('app')).render(<App />);
