// GRIFO Engenharia — Página Fale Conosco

import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { NavFullbleed, Footer } from '../components/sections';
import '../styles/global.css';
import '../styles/pages/fale-conosco.css';

const FcIcon = {
  arrow: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6"/>
    </svg>
  ),
  phone: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.8a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.9.35 1.84.59 2.8.72a2 2 0 011.72 2.01z"/>
    </svg>
  ),
  whatsapp: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
      <path d="M21 12a9 9 0 11-3.5-7.1L21 4l-1 4a9 9 0 011 4z"/>
      <path d="M9 10c0 4 3 7 7 7l-1-3-3 1c-1-1-2-2-3-3l1-3z"/>
    </svg>
  ),
  mail: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2"/>
      <path d="M3 7l9 6 9-6"/>
    </svg>
  ),
  pin: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-7 8-13a8 8 0 10-16 0c0 6 8 13 8 13z"/>
      <circle cx="12" cy="9" r="3"/>
    </svg>
  ),
  bolt: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>
    </svg>
  ),
};

/* ============================================================
   HERO — compact
   ============================================================ */
function FaleHero() {
  return (
    <section className="page-hero fc-hero" data-screen-label="01 Hero Fale Conosco">
      <img src="assets/griffin-line-cream.png" alt="" className="page-hero__watermark"/>
      <div className="frame">
        <div className="page-hero__inner">
          <div className="page-hero__eyebrow eyebrow">Vamos conversar</div>
          <h1 className="page-hero__title">
            Conversas sobre projeto<br/><em>começam na altura técnica.</em>
          </h1>
          <p className="page-hero__lead">
            O primeiro contato é com um dos engenheiros responsáveis pela
            operação — não com um time comercial intermediário.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FORM + CONTATOS DIRETOS
   ============================================================ */
function FaleForm() {
  useEffect(() => {
    if (!document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://link.msgsndr.com/js/form_embed.js';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="fc-main" data-screen-label="02 Formulário">
      <div className="frame">
        <div className="fc-main__grid">

          {/* FORM */}
          <div className="fc-form">
            <h2 className="fc-form__title">Sobre o seu projeto</h2>
            <p className="fc-form__sub">
              Preenchimento qualificado nos ajuda a chegar na primeira
              ligação já com contexto do seu projeto.
            </p>

            <div className="fc-form__embed">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/P5RYHaTKE4rfE0lcJRCp"
                style={{width:'100%', height:'100%', border:'none', borderRadius:'3px'}}
                id="inline-P5RYHaTKE4rfE0lcJRCp"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Grifo Engenharia - Contato"
                data-height="1592"
                data-layout-iframe-id="inline-P5RYHaTKE4rfE0lcJRCp"
                data-form-id="P5RYHaTKE4rfE0lcJRCp"
                title="Grifo Engenharia - Contato"
              />
            </div>
          </div>

          {/* CONTATOS DIRETOS */}
          <aside className="fc-contacts">
            <h3 className="fc-contacts__title">Prefere contato direto?</h3>

            <ul className="fc-contacts__list">
              <li>
                <span className="fc-contacts__icon"><FcIcon.phone/></span>
                <div>
                  <span className="lab">Telefone</span>
                  <a href="tel:+557197420802">+55 71 9742-0802</a>
                </div>
              </li>
              <li>
                <span className="fc-contacts__icon"><FcIcon.whatsapp/></span>
                <div>
                  <span className="lab">WhatsApp</span>
                  <a href="https://wa.me/557197420802" target="_blank" rel="noopener noreferrer">+55 71 9742-0802</a>
                  <a className="fc-contacts__cta" href="https://wa.me/557197420802" target="_blank" rel="noopener noreferrer">
                    Abrir no WhatsApp <FcIcon.arrow size={12}/>
                  </a>
                </div>
              </li>
              <li>
                <span className="fc-contacts__icon"><FcIcon.mail/></span>
                <div>
                  <span className="lab">E-mail</span>
                  <a href="mailto:contato@grifoengenharia.com.br">contato@grifoengenharia.com.br</a>
                </div>
              </li>
              <li>
                <span className="fc-contacts__icon"><FcIcon.pin/></span>
                <div>
                  <span className="lab">Sede</span>
                  <span>Rua Jacobina, 66 · 3º andar · Salvador, BA</span>
                </div>
              </li>
              <li>
                <span className="fc-contacts__icon"><FcIcon.pin/></span>
                <div>
                  <span className="lab">Escritório SP</span>
                  <span>Rua Funchal, 263 · Vila Olímpia, SP</span>
                </div>
              </li>
            </ul>

            <div className="fc-contacts__hours">
              <span className="lab">Horário de atendimento</span>
              <p>Segunda a sexta, 8h às 17h<br/>Retorno fora do horário no próximo dia útil.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   POR QUE ENGENHEIRO PRIMEIRO — 3 cards navy
   ============================================================ */
function FaleWhy() {
  const cards = [
    {
      title: "Análise técnica imediata",
      body: "Na primeira ligação, o engenheiro já identifica os principais riscos técnicos e regulatórios do seu projeto.",
    },
    {
      title: "Sem reunião de apresentação",
      body: "Não usamos a primeira hora pra falar de nós. A conversa começa pelo seu projeto.",
    },
    {
      title: "Estimativa preliminar em 48h",
      body: "Após o primeiro contato, enviamos estimativa preliminar de prazo e custo por m² para o seu segmento.",
    },
  ];
  return (
    <section className="fc-why" data-screen-label="03 Por que engenheiro primeiro">
      <div className="frame">
        <div className="fc-why__head">
          <div className="eyebrow dark">Por que falar com engenheiro primeiro</div>
          <h2 className="fc-why__title">
            Conversas com a Grifo começam pela engenharia.<br/><em>Não pelo comercial.</em>
          </h2>
        </div>
        <div className="fc-why__grid">
          {cards.map((c, i) => (
            <article key={i} className="fc-why__card">
              <div className="fc-why__num">{String(i + 1).padStart(2, "0")}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ENDEREÇO + MAPA
   ============================================================ */
function FaleAddress() {
  return (
    <section className="fc-address" data-screen-label="04 Endereço e mapa">
      <div className="frame">
        <div className="fc-address__head">
          <div className="eyebrow">Onde estamos</div>
          <h2 className="fc-address__title">Sede em Salvador. Escritório em São Paulo.</h2>
        </div>
        <div className="fc-address__maps">
          <div className="fc-address__map" aria-label="Mapa da sede em Salvador">
            <div className="fc-address__map-inner">
              <FcIcon.pin/>
              <span>Sede Grifo Engenharia</span>
              <span className="meta">Rua Jacobina, 66 · Rio Vermelho ·<br/>Salvador, BA</span>
            </div>
          </div>
          <div className="fc-address__map" aria-label="Mapa do escritório em São Paulo">
            <div className="fc-address__map-inner">
              <FcIcon.pin/>
              <span>Escritório São Paulo</span>
              <span className="meta">Rua Funchal, 263 · Vila Olímpia ·<br/>São Paulo, SP</span>
            </div>
          </div>
        </div>
        <div className="fc-address__details">
          <div>
            <span className="lab">Sede</span>
            <strong>Rua Jacobina, 66 · 3º andar</strong>
            <span>Rio Vermelho · Salvador, BA · CEP 41940-160</span>
          </div>
          <div>
            <span className="lab">Escritório São Paulo</span>
            <strong>Rua Funchal, 263 · bloco 01 · sala 61</strong>
            <span>Vila Olímpia · São Paulo, SP · CEP 04551-060</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export { FaleHero, FaleForm, FaleWhy, FaleAddress };

function App() {
  return (
    <>
      <NavFullbleed active="contato" />
      <FaleHero />
      <FaleForm />
      <FaleWhy />
      <FaleAddress />
      <Footer />
    </>
  );
}

createRoot(document.getElementById('app')).render(<App />);
