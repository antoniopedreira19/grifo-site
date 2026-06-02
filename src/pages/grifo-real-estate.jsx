// GRIFO Engenharia — Página Grifo Real Estate

import { createRoot } from 'react-dom/client';
import Photo from '../components/photos';
import { NavFullbleed, CTABand, Footer } from '../components/sections';
import '../styles/global.css';
import '../styles/pages/manifesto.css';
import '../styles/pages/grifo-real-estate.css';

const ReIcon = {
  arrow: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6"/>
    </svg>
  ),
};

/* ============================================================
   PAGE HERO
   ============================================================ */
function ReHero() {
  return (
    <section className="page-hero" data-screen-label="01 Hero Real Estate">
      <img src="assets/griffin-line-cream.png" alt="" className="page-hero__watermark"/>
      <div className="frame">
        <div className="page-hero__inner">
          <div className="page-hero__eyebrow eyebrow">Grifo Real Estate</div>
          <h1 className="page-hero__title">
            Desenvolvimento imobiliário e<br/><em>residencial de alto padrão.</em>
          </h1>
          <p className="page-hero__lead">
            Em 2024, a operação residencial e imobiliária consolidou-se
            em braço próprio da Grifo, com DNA de gestão da Engenharia
            adaptado à dinâmica do mercado residencial premium.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   EDITORIAL — reaproveita visual de mn-editorial
   ============================================================ */
function ReEditorial() {
  return (
    <section className="mn-editorial re-editorial" data-screen-label="02 Editorial">
      <div className="frame">
        <article className="mn-editorial__text">
          <p>
            A Grifo Real Estate nasceu de uma movimentação que aconteceu
            de forma natural dentro da trajetória da Grifo.
          </p>
          <p>
            Desde o início, a Grifo construiu sua atuação no mercado
            comercial com posicionamento forte em gestão, velocidade de
            execução e proximidade com o cliente. Ao longo dos anos,
            passou a atender redes em expansão, operações de food service,
            varejo e grandes marcas.
          </p>
          <p>
            Foi dessa relação construída no comercial que surgiu o
            movimento para o residencial.
          </p>
          <p>
            Muitos clientes que já confiavam na Grifo para tocar suas
            operações comerciais começaram a pedir que a empresa também
            assumisse seus projetos pessoais — principalmente casas de
            alto padrão.
          </p>
          <p>
            Mesmo antes de existir oficialmente como estrutura
            independente, a Grifo já executava algumas casas por ano de
            maneira extremamente seletiva. Nunca foi um volume alto. E
            isso era intencional.
          </p>
          <p className="mn-editorial__hit">
            O residencial de alto padrão exige uma lógica completamente
            diferente da obra comercial.
          </p>
          <p>
            No comercial, existe urgência operacional. No residencial,
            a dinâmica muda. A construção de uma casa envolve outro tempo,
            outro nível de detalhe e uma relação muito mais próxima com
            o cliente. O foco deixa de ser apenas velocidade e passa a
            ser também experiência, curadoria e execução refinada.
          </p>
          <p>
            Em 2024, esse movimento se consolidou oficialmente com o
            nascimento da Grifo Real Estate como braço separado da
            Grifo Engenharia.
          </p>
        </article>
      </div>
    </section>
  );
}

/* ============================================================
   FRONTS — 2 cards
   ============================================================ */
function ReFronts() {
  const fronts = [
    {
      num: "01",
      title: "Residencial de alto padrão",
      tag: "foco atual",
      body: "Construção de casas e residências premium com curadoria estética e técnica, mantendo o DNA de gestão da Grifo Engenharia adaptado à dinâmica do residencial.",
    },
    {
      num: "02",
      title: "Desenvolvimento imobiliário",
      tag: "em estruturação",
      body: "Frente em estruturação. Primeiros empreendimentos previstos para os próximos ciclos.",
    },
  ];
  return (
    <section className="re-fronts" data-screen-label="03 Frentes">
      <div className="frame">
        <div className="re-fronts__head">
          <div className="eyebrow">Como atuamos</div>
          <h2 className="re-fronts__title">
            Como a Grifo Real Estate atua.
          </h2>
        </div>
        <div className="re-fronts__grid">
          {fronts.map((f) => (
            <article key={f.num} className="re-front">
              <div className="re-front__num">{f.num}</div>
              <h3 className="re-front__title">{f.title}</h3>
              <span className="re-front__tag">{f.tag}</span>
              <p className="re-front__body">{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CASE DESTAQUE — Praia do Forte
   ============================================================ */
function ReCase() {
  return (
    <section className="re-case" data-screen-label="04 Case destaque">
      <div className="frame">
        <div className="re-case__head">
          <div className="eyebrow">Case</div>
          <h2 className="re-case__title">Case destaque.</h2>
        </div>
        <article className="re-case__card">
          <div className="re-case__photo">
            <img
              src="assets/portfolio/praia-do-forte-drone-aereo.jpg"
              alt="Praia do Forte — residencial alto padrão · vista aérea · Bahia"
              loading="lazy" />
          </div>
          <div className="re-case__body">
            <div className="re-case__pills">
              <span className="pill gold">Residencial</span>
              <span className="pill">Alto padrão</span>
            </div>
            <h3 className="re-case__name">Praia do Forte</h3>
            <p className="re-case__loc">Bahia · Litoral Norte</p>
            <p className="re-case__desc">
              Residência de alto padrão com curadoria estética e execução
              refinada.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

/* ============================================================
   PRINCIPLE — bloco navy de citação
   ============================================================ */
function RePrinciple() {
  return (
    <section className="re-principle" data-screen-label="05 Princípio">
      <img src="assets/griffin-line-gold.png" alt="" className="re-principle__watermark"/>
      <div className="frame">
        <div className="re-principle__inner">
          <span className="re-principle__mark" aria-hidden="true">“</span>
          <blockquote className="re-principle__quote">
            A lógica sempre foi muito mais construir poucas operações
            com profundidade do que crescer sem controle.
          </blockquote>
          <div className="re-principle__sig">
            <span className="rule" aria-hidden="true"></span>
            <span>Grifo Real Estate</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export {
  ReHero, ReEditorial, ReFronts, ReCase, RePrinciple,
};

function App() {
  return (
    <>
      <NavFullbleed active="real-estate" />
      <ReHero />
      <ReEditorial />
      <ReFronts />
      <ReCase />
      <RePrinciple />
      <CTABand
        title="Quer conhecer a Grifo Real Estate?"
        lead="Atendimento seletivo. Conversas começam com a engenharia responsável pela operação residencial."
      />
      <Footer />
    </>
  );
}

createRoot(document.getElementById('app')).render(<App />);
