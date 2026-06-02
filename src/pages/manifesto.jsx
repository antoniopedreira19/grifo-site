// GRIFO Engenharia — Página Manifesto

import { createRoot } from 'react-dom/client';
import { NavFullbleed, CTABand, Footer } from '../components/sections';
import '../styles/global.css';
import '../styles/pages/manifesto.css';

const MnIcon = {
  arrow: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6"/>
    </svg>
  ),
  arrowDown: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M6 13l6 6 6-6"/>
    </svg>
  ),
};

/* ============================================================
   HERO — cinematic, full viewport
   ============================================================ */
function ManifestoHero() {
  return (
    <section className="mn-hero" data-screen-label="01 Hero Manifesto">
      <img
        src="assets/hero-canteiro-aerea.jpg"
        alt=""
        className="mn-hero__bg"
      />
      <div className="mn-hero__veil" aria-hidden="true"></div>
      <div className="frame">
        <div className="mn-hero__inner">
          <div className="eyebrow dark mn-hero__eyebrow">Manifesto</div>
          <h1 className="mn-hero__title">
            Não executamos<br/>apenas obras.<br/>
            <em>Somos parceiros na expansão de negócios.</em>
          </h1>
        </div>
      </div>
      <div className="mn-hero__scroll" aria-hidden="true">
        <span>Manifesto</span>
        <MnIcon.arrowDown size={18}/>
      </div>
    </section>
  );
}

/* ============================================================
   EDITORIAL — texto do manifesto, coluna estreita
   ============================================================ */
function ManifestoEditorial() {
  return (
    <section className="mn-editorial" data-screen-label="02 Manifesto editorial">
      <div className="frame">
        <article className="mn-editorial__text">
          <p>
            A Grifo nasceu em 2016, em Salvador, com R$ 500 e uma obra
            de 24 m². Em 10 anos virou referência nacional em Fast
            Construction. Mas a história relevante não é a do crescimento.
            É a da percepção.
          </p>
          <p>
            A empresa nasceu dentro da execução. Foi nesse terreno que
            construiu repertório e profundidade. E foi nesse terreno,
            também, que a Grifo aprendeu a coisa que mudaria o seu modelo:
            os maiores problemas da obra raramente começam na obra.
          </p>
          <p>
            Por isso o modelo deixou de ser execução e passou a ser
            integração. Localização, ponto, viabilidade, projeto,
            execução, pós-entrega e garantia técnica — sete etapas sob
            um único contrato. Não como ampliação de serviço. Como
            ampliação de responsabilidade.
          </p>
          <p>
            Cada semana de atraso é um paciente que não entra, um aluno
            que não se matricula, um restaurante que não abre. Construímos
            com método porque prazo não é promessa — é compromisso. E
            compromisso, a gente honra com sistema, não com intenção.
          </p>
          <p>
            Não somos fornecedor de obra. Somos o parceiro de engenharia
            de quem cresce e não pode esperar 6 meses por algo que
            poderia estar faturando em 60 dias.
          </p>
          <p className="mn-editorial__hit">
            Aqui, cada minuto importa.
          </p>
          <div className="mn-editorial__sig">
            <span className="rule"></span>
            <span className="sig">Grifo Engenharia</span>
          </div>
        </article>
      </div>
    </section>
  );
}

/* ============================================================
   VALUES — 4 cards 2x2
   ============================================================ */
const VALUES = [
  {
    title: "Prazo é receita",
    body: "Cada semana antecipada é dinheiro entrando mais cedo no caixa do cliente. A pergunta interna semanal não é 'a obra está avançando?' — é 'o cliente vai faturar na data certa?'",
  },
  {
    title: "Transparência radical",
    body: "Cliente acessa o sistema de gestão em tempo real. Desvio é informado antes de virar problema. Não depois de virar desculpa.",
  },
  {
    title: "Parceria de longo prazo",
    body: "A métrica de sucesso da Grifo não é a obra entregue — é o cliente que liga para a próxima expansão. Cada projeto é tratado como início de uma relação, não como contrato a cumprir e fechar.",
  },
  {
    title: "Engenharia com visão de negócio",
    body: "A Grifo calcula o custo de um pilar errado e o custo de uma inauguração atrasada com o mesmo rigor. Os dois importam.",
  },
];

function ManifestoValues() {
  return (
    <section className="mn-values" data-screen-label="03 Valores">
      <div className="frame">
        <div className="mn-values__head">
          <div className="eyebrow">Como operamos</div>
          <h2 className="mn-values__title">Valores não são palavras. <em>São comportamentos.</em></h2>
          <p className="mn-values__sub">
            A Grifo não lista "excelência" e "comprometimento". Descreve
            o que faz quando ninguém está vendo.
          </p>
        </div>
        <div className="mn-values__grid">
          {VALUES.map((v, i) => (
            <article key={i} className="mn-value">
              <div className="mn-value__num">{String(i + 1).padStart(2, "0")}</div>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   METHOD — Fast Construction editorial
   ============================================================ */
const PILLARS = [
  { num: "01", title: "Planejamento reverso",     body: "Cronograma começa pela data de entrega, não de início." },
  { num: "02", title: "Gestão semanal",            body: "Reunião de progresso toda semana. Desvio vira ação rápida." },
  { num: "03", title: "Tecnologia de canteiro",    body: "BI próprio, medições digitais, painel do cliente em tempo real." },
  { num: "04", title: "Fornecedores como sócios",  body: "Parceiros avaliados por prazo, não só por preço." },
];

function ManifestoMethod() {
  return (
    <section className="mn-method" data-screen-label="04 Método">
      <div className="frame">
        <div className="mn-method__head">
          <div className="eyebrow dark">Nosso método</div>
          <h2 className="mn-method__title">
            60 dias contra os <em>até 6 meses do mercado tradicional.</em>
          </h2>
          <p className="mn-method__sub">
            O Fast Construction não é uma promessa de velocidade — é uma
            arquitetura de controle que detecta desvio antes de virar
            atraso.
          </p>
        </div>

        <div className="mn-method__pillars">
          {PILLARS.map((p) => (
            <article key={p.num} className="mn-pillar">
              <div className="mn-pillar__num">{p.num}</div>
              <div>
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mn-method__metric">
          <div className="num">60</div>
          <div className="lab">dias contra até 6 meses do mercado</div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PARTNERS — 3 sócios + 1 card credenciais
   ============================================================ */
const PARTNERS = [
  {
    initials: "DG",
    name: "Daniel Gedeon",
    cargo: "Sócio Fundador",
    photo: "assets/portfolio/daniel-gedeon.jpg",
  },
  {
    initials: "CB",
    name: "Caio Bernardes",
    cargo: "CEO",
    photo: "assets/portfolio/caio-bernardes.jpg",
  },
  {
    initials: "AN",
    name: "Arnoldo Neves",
    cargo: "COO",
    photo: "assets/portfolio/arnoldo-neves.jpg",
  },
];

function ManifestoPartners() {
  return (
    <section className="mn-partners" data-screen-label="05 Sócios">
      <div className="frame">
        <div className="mn-partners__head">
          <div className="eyebrow">Quem decide</div>
          <h2 className="mn-partners__title">
            Engenheiros que entendem balanço.<br/>
            <em>Empresários que entendem obra.</em>
          </h2>
          <p className="mn-partners__sub">
            Cada projeto é acompanhado por um sócio. Você fala com quem
            decide — não com quem só executa.
          </p>
        </div>

        <div className="mn-partners__grid">
          {PARTNERS.map((p, i) => (
            <article key={i} className="mn-partner">
              <div className="avatar-init avatar-init--rect mn-partner__avatar">
                {p.photo ? (
                  <img src={p.photo} alt={p.name} loading="lazy" />
                ) : (
                  <span>{p.initials}</span>
                )}
              </div>
              <div className="mn-partner__body">
                <strong className="mn-partner__name">{p.name}</strong>
                <span className="mn-partner__cargo">{p.cargo}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   NUMBERS — 4 metrics em cream
   ============================================================ */
function ManifestoNumbers() {
  const metrics = [
    { num: "250",   suffix: "+",   label: "Obras entregues" },
    { num: "500k",  suffix: "m²",  label: "Área construída" },
    { num: "100",   suffix: "%",   label: "Prazos cumpridos" },
    { num: "R$ 1bi", suffix: "",   label: "Meta para clientes até 2040" },
  ];
  return (
    <section className="mn-numbers" data-screen-label="06 Números">
      <div className="frame">
        <div className="mn-numbers__head">
          <div className="eyebrow">10 anos. Os números.</div>
        </div>
        <div className="mn-numbers__grid">
          {metrics.map((m, i) => (
            <div key={i} className="mn-number">
              <div className="num">{m.num}{m.suffix && <span>{m.suffix}</span>}</div>
              <div className="lab">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export {
  ManifestoHero, ManifestoEditorial, ManifestoValues,
  ManifestoMethod, ManifestoPartners, ManifestoNumbers,
};

function App() {
  return (
    <>
      <NavFullbleed active="manifesto" />
      <ManifestoHero />
      <ManifestoEditorial />
      <ManifestoValues />
      <ManifestoMethod />
      <ManifestoPartners />
      <ManifestoNumbers />
      <CTABand
        title="Engenharia parceira da expansão do seu negócio. Vamos conversar."
        lead="O próximo passo é ver se faz sentido para o seu projeto. Nosso time de engenharia retorna em 24h — sem compromisso."
      />
      <Footer />
    </>
  );
}

createRoot(document.getElementById('app')).render(<App />);
