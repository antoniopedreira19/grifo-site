# GRIFO Construtora — Prompts Claude Design
## Páginas: Soluções e Cases
*Usar em sequência no Claude Design, uma página por sessão*

---

# PROMPT 1 — PÁGINA SOLUÇÕES (`solucoes.html`)

```xml
<context>
  Site institucional da GRIFO Construtora — construtora B2B especializada em obras
  hospitalares, educacionais e comerciais de alta complexidade.

  Posicionamento central: prazo como argumento financeiro, não técnico.
  A Grifo é parceiro de expansão de negócios, não fornecedor de obras.

  DESIGN SYSTEM (obrigatório — não alterar):
    Cores:
      --grifo-navy:        #15263A  (backgrounds escuros, texto principal)
      --grifo-navy-deep:   #0D1A2A  (backgrounds mais fundos)
      --grifo-navy-soft:   #233A56  (hover, superfícies elevadas)
      --grifo-gold:        #A07A2C  (acentos, destaques, eyebrows)
      --grifo-gold-bright: #C49A45  (hover gold)
      --grifo-bone:        #F5F1EA  (background página)
      --grifo-cream:       #E8E1D2  (cards, painéis)
      --grifo-stone:       #C9C1B2  (bordas, elementos mudos)
      --grifo-graphite:    #4A5568  (texto secundário)

    Tipografia:
      Display/headings grandes: "Disket Mono" — bold, uppercase, letter-spacing wide
      Body/headings menores: "Sarabun" — light a semibold
      Eyebrows: Disket Mono, 12px, uppercase, letter-spacing 0.18em, cor gold

    Fontes disponíveis via @font-face em fonts/ (já carregadas no projeto).
    Importar colors_and_type.css para herdar todos os tokens.

  ESTRUTURA DE ARQUIVOS:
    Cada página é um .html separado que importa:
      - colors_and_type.css (tokens de cor e tipo)
      - styles.css (componentes base)
      - [pagina].css (estilos específicos desta página)
      - photos.jsx (componente Photo com placeholders SVG)
      - nav.jsx (nav compartilhada — extrair do sections.jsx existente)
      - solucoes.jsx (componentes desta página)

  ASSETS DISPONÍVEIS:
    assets/griffin-mark-navy.png
    assets/griffin-mark-gold.png
    assets/griffin-line-cream.png
    assets/griffin-line-gold.png
    assets/griffin-line-navy.png
    assets/logo-full-gold.png
    assets/logo-full-navy.png
    assets/logo-grifo-full.png  (usado no HeroFullbleed)
    assets/logo-horizontal-gold.png
    assets/logo-horizontal-navy.png
    assets/hero-canteiro-aerea.jpg

  NAV E FOOTER:
    Idênticos à home. Reutilizar exatamente os componentes Nav e Footer
    do sections.jsx. Link ativo no menu: "Soluções".
</context>

<task>
  Construir a página /solucoes.html completa, seguindo o design system acima.
  A página apresenta as 5 soluções da Grifo com linguagem de valor de negócio,
  não de serviço técnico. Cada solução tem seu próprio bloco detalhado.
</task>

<page_structure>
  Ordem das seções, de cima para baixo:

  1. NAV (componente compartilhado)

  2. PAGE HERO
     - Fundo: navy deep (#0D1A2A)
     - Eyebrow: "O que construímos"
     - Título (Disket Mono, grande): "Soluções que entregam\nnegócios funcionando."
     - Subtítulo (Sarabun light): "Cada solução foi desenvolvida para um tipo de
       desafio específico. O ponto em comum: todas terminam com seu negócio
       operando antes do prazo que o mercado esperaria."
     - Pills de navegação âncora para cada solução:
       Fast Construction 2.0 · Construção Completa · Projetos · Financiamento · Residencial
     - Background: griffon-line-cream.png como watermark sutil (opacity 0.04),
       posicionado à direita

  3. SOLUÇÃO 1 — FAST CONSTRUCTION 2.0
     Layout: duas colunas. Esquerda: conteúdo. Direita: visual/diagrama.
     Fundo: bone (#F5F1EA)
     Âncora: id="fast-construction"

     Conteúdo esquerda:
       Eyebrow: "Método proprietário"
       Título: "Fast Construction 2.0"
       Posicionamento (lead): "Não prometemos prazo. Entregamos com sistema."
       Corpo: "Metodologia exclusiva que combina planejamento lean, gestão
               semanal de canteiro e tecnologia de acompanhamento em tempo real.
               Resultado: em média 3 a 4 semanas antes do prazo de mercado —
               comprovado nos últimos 12 projetos entregues."
       Métrica destaque: "3–4 semanas" / label: "antes do prazo médio de mercado"
       Para quem é:
         · Hospitais com data crítica de licenciamento ANVISA
         · Escolas com janela de captação de matrículas
         · Varejo e comercial com datas de campanha ou abertura
       CTA: "Quero entender o método" → #contato

     Conteúdo direita (diagrama executivo — não técnico):
       Visualização dos 4 pilares do Fast Construction 2.0 em cards empilhados:
         01 — Planejamento reverso: "Cronograma começa pela data de entrega, não de início"
         02 — Gestão semanal: "Reunião de progresso toda semana. Desvio detectado vira ação em 48h"
         03 — Tecnologia de canteiro: "BI de obra, medições digitais, painel do cliente em tempo real"
         04 — Fornecedores como sócios: "Parceiros avaliados por prazo, não só por preço"
       Estilo dos cards: fundo navy, borda esquerda gold, número em Disket Mono gold

  4. SOLUÇÃO 2 — CONSTRUÇÃO COMPLETA
     Layout: full-width com foto à direita (Photo variant="structure")
     Fundo: white (#FFFFFF)
     Âncora: id="construcao-completa"

     Eyebrow: "Do zero às chaves"
     Título: "Construção Completa"
     Posicionamento: "Uma construtora. Um cronograma. Uma responsabilidade."
     Corpo: "Execução completa de obras comerciais, institucionais e residenciais
             de alta complexidade — da fundação ao acabamento. Gestão integrada
             de todas as etapas: estrutura, instalações, acabamento e aprovações.
             Equipe própria de engenharia. Subcontratados auditados. Nenhuma
             etapa crítica terceirizada sem controle."
     Diferenciais em lista visual (ícone + texto):
       · Equipe própria de engenharia — não repassamos o que é crítico
       · Contrato único — sem guerra entre fornecedores
       · Gestão financeira aberta — cliente acessa custos em tempo real
       · Engenheiro responsável acessível — não passa por intermediário
     CTA: "Solicitar avaliação de projeto" → #contato

  5. SOLUÇÃO 3 — PROJETOS
     Layout: duas colunas simétricas
     Fundo: cream (#E8E1D2)
     Âncora: id="projetos"

     Eyebrow: "Antes do canteiro"
     Título: "Projetos"
     Posicionamento: "Projeto que nasce para construir — sem surpresas no canteiro."
     Corpo: "Arquitetura, estrutural, elétrico, hidráulico e SPDA desenvolvidos
             com foco em construtibilidade e conformidade regulatória.
             O projeto é desenvolvido pelo mesmo time que vai executar —
             eliminando a lacuna entre prancheta e canteiro."
     Especialidades em dois cards:
       Card 1 — "Compliance regulatório":
         "Projetos compatíveis com ANVISA RDC 50, CBMSP, ABNT e
          secretarias municipais — aprovação integrada ao cronograma."
       Card 2 — "Projetos integrados":
         "Arquitetura, estrutura e instalações desenvolvidas em paralelo,
          não em sequência. Reduz conflitos de projeto e comprime o prazo
          de aprovação em até 40%."
     CTA: "Solicitar viabilidade de projeto" → #contato

  6. SOLUÇÃO 4 — FINANCIAMENTO DE OBRA
     Layout: destaque central, fundo navy
     Âncora: id="financiamento"

     Eyebrow: "Estruturação financeira"
     Título: "Financiamento de Obra"
     Posicionamento: "Formas de viabilizar sua obra com mais eficiência
                      financeira e tributária."
     Corpo: "Dependendo do seu perfil jurídico e do projeto, existem formas
             de estruturar o investimento que tornam a obra mais eficiente
             financeiramente. Nosso time apresenta as opções disponíveis
             para o seu caso — sem compromisso, na primeira conversa."
     IMPORTANTE: manter propositalmente vago — gerar curiosidade e reunião,
     não explicar mecanismo publicamente.
     3 bullets visuais (ícone + texto curto, sem detalhes):
       · Redução do desembolso no período de obra
       · Possíveis benefícios tributários conforme estrutura jurídica
       · Financiamento alinhado ao cronograma de receita do projeto
     CTA destaque (botão gold grande): "Quero entender as opções financeiras" → #contato
     Abaixo do CTA: "Nosso time retorna em até 24h com uma primeira análise"

  7. SOLUÇÃO 5 — RESIDENCIAL
     Layout: duas colunas. Esquerda: foto (Photo variant="interior"). Direita: conteúdo.
     Fundo: bone (#F5F1EA)
     Âncora: id="residencial"

     Eyebrow: "Alto padrão"
     Título: "Residencial"
     Posicionamento: "Padrão técnico de obra corporativa no seu projeto residencial."
     Corpo: "Construção residencial de alto padrão com o mesmo rigor de prazo,
             qualidade e gestão aplicado às obras corporativas da Grifo.
             Para famílias e investidores que querem uma construtora com
             histórico comprovado — não apenas um empreiteiro."
     Diferenciais:
       · Acompanhamento via painel digital — você vê o que está sendo feito
       · Comunicação semanal escrita — sem surpresa no orçamento
       · Prazo contratualmente definido — com mecanismo de controle
       · Acabamento supervisionado pelo mesmo time de engenharia corporativa
     CTA: "Conversar sobre meu projeto" → #contato

  8. CTA BAND FINAL
     Idêntico ao da home. Texto: "Não sabe ainda qual solução se aplica
     ao seu projeto? Nosso time de engenharia faz a análise — sem compromisso."
     Botão: "Quero falar com um especialista"

  9. FOOTER (componente compartilhado)
     Link ativo em Soluções.
</page_structure>

<constraints>
  - Não usar o hero rotativo da home — esta página tem hero próprio e estático
  - Cada solução deve ter âncora funcional (as pills do hero devem scrollar até ela)
  - O diagrama do Fast Construction 2.0 é visual/estático — não interativo
  - Formulário de contato não está nesta página — CTA sempre leva para #contato
    que pode ser o CTABand ou um link para fale-conosco.html
  - Manter todos os data-screen-label para facilitar navegação no Claude Design
  - Foto real assets/hero-canteiro-aerea.jpg pode ser usada como background
    do Page Hero se o resultado visual for mais forte do que o fundo navy puro
  - Zero stock photos, zero renders, zero clipart — apenas Photo component
    ou assets reais disponíveis
</constraints>
```

---

# PROMPT 2 — PÁGINA CASES (`cases.html`)

```xml
<context>
  Site institucional da GRIFO Construtora — construtora B2B especializada em obras
  hospitalares, educacionais e comerciais de alta complexidade.

  Posicionamento central: cases não são portfólio de obras — são provas de
  transformação de negócio. Modelo PARE: Problema → Ação → Resultado → Evidência.

  DESIGN SYSTEM (obrigatório — não alterar):
    [repetir o mesmo bloco de cores e tipografia do Prompt 1]

  ESTRUTURA DE ARQUIVOS:
    Cada página é um .html separado que importa:
      - colors_and_type.css
      - styles.css
      - cases.css (estilos específicos desta página)
      - photos.jsx
      - nav.jsx
      - cases.jsx

  NAV E FOOTER:
    Idênticos à home. Link ativo no menu: "Cases".
</context>

<task>
  Construir a página /cases.html completa, seguindo o design system.
  A página apresenta cases da Grifo no modelo PARE — cada case prova
  transformação de negócio, não apenas entrega de obra.
  O decisor deve sair com convicção, não com impressão visual.
</task>

<page_structure>
  Ordem das seções, de cima para baixo:

  1. NAV (componente compartilhado)

  2. PAGE HERO
     Fundo: navy deep (#0D1A2A)
     Eyebrow: "Resultados comprovados"
     Título (Disket Mono): "Cases que provam\ntransformação de negócio."
     Subtítulo: "Um case Grifo não conta uma história de construção.
                 Conta uma história de como um hospital passou a faturar antes,
                 uma escola não perdeu o semestre, um varejo abriu na data certa."
     Métricas rápidas em linha (3):
       · "155+" / "obras entregues"
       · "97%" / "no prazo ou antes"
       · "R$ 0" / "custo de atraso nos últimos 24 meses"
     Watermark: griffin-line-gold.png, opacity 0.05, lado direito

  3. FILTROS + GRID DE CASES
     Fundo: bone (#F5F1EA)

     Barra de filtros:
       Todos · Hospitalar · Educacional · Comercial · Residencial
       Estilo: pills com estado ativo em navy/gold (igual ao Showcase da home)

     Grid de cases (3 colunas em desktop, 1 em mobile):
       Os 2 cases da home (Hospital Santa Clara e Colégio Excellence) já existem
       — expandir para 6 cases no total, 2 por setor principal.

       ESTRUTURA DE CADA CARD (modelo PARE expandido):
         - Foto do projeto (Photo component, variant por setor)
         - Pill de setor (cor: gold para hospitalar, navy para educacional,
           stone para comercial)
         - Pill de solução usada (Fast Construction / Construção Completa / Projetos)
         - Nome do projeto + localização + metragem
         - PROBLEMA (1 linha, itálico, cor graphite):
           Label "Desafio:" + texto
         - AÇÃO (1 linha, cor navy):
           Label "O que fizemos:" + texto
         - RESULTADO (destaque visual, fonte maior, cor gold ou navy bold):
           Número/frase de impacto — o mais forte do case
         - Link: "Ver case completo →" (leva para #, por ora)

       Os 6 cases:

       Case 1 — Hospital Santa Clara (featured, ocupa 2 colunas)
         Setor: Hospitalar | Solução: Fast Construction 2.0
         Local: Belo Horizonte, MG · 4.200 m² · 2025
         Desafio: "Centro de diagnóstico parado 14 meses por falta de construtora confiável"
         Ação: "Obra executada sem interromper UTI adjacente — setorização noturna"
         Resultado: "Inaugurado 22 dias antes · 180 exames/dia desde o 1º mês"
         Variant: hospital

       Case 2 — Colégio Excellence
         Setor: Educacional | Solução: Construção Completa
         Local: Contagem, MG · 7.800 m² · 2024
         Desafio: "Atraso perderia janela de captação de matrículas do semestre"
         Ação: "Cronograma reverso a partir da data de matrícula — não da data de início"
         Resultado: "340 matrículas no 1º semestre · Janela de captação preservada"
         Variant: school

       Case 3 — Clínica Integrada Saúde+
         Setor: Hospitalar | Solução: Projetos + Construção Completa
         Local: Uberlândia, MG · 2.100 m² · 2024
         Desafio: "Projeto anterior reprovado na ANVISA — obra já licitada"
         Ação: "Redesenho do projeto técnico em 3 semanas com aprovação integrada"
         Resultado: "Aprovação ANVISA sem retificações · Inauguração no prazo original"
         Variant: interior

       Case 4 — Faculdade IBM — Campus Sul
         Setor: Educacional | Solução: Fast Construction 2.0
         Local: Belo Horizonte, MG · 12.400 m² · 2023
         Desafio: "Campus novo precisava estar pronto para o MEC antes do ano letivo"
         Ação: "Obra faseada — blocos entregues em ordem de prioridade do MEC"
         Resultado: "Autorização de funcionamento obtida 31 dias antes do prazo"
         Variant: school

       Case 5 — Grupo Melo Varejo — Flagship Store
         Setor: Comercial | Solução: Construção Completa
         Local: Nova Lima, MG · 3.600 m² · 2025
         Desafio: "Abertura planejada para Black Friday — margem de atraso zero"
         Ação: "Cronograma de acabamento em turnos duplos nas últimas 3 semanas"
         Resultado: "Abertura 18 dias antes · Faturamento da Black Friday capturado"
         Variant: commercial

       Case 6 — Residência Alto das Pedras
         Setor: Residencial | Solução: Construção Completa
         Local: Belo Horizonte, MG · 680 m² · 2024
         Desafio: "Cliente com experiência ruim anterior — desconfiança total de prazo"
         Ação: "Painel de acompanhamento semanal com fotos e medições abertas ao cliente"
         Resultado: "Entregue no prazo · NPS 10 · Indicou 3 novos clientes"
         Variant: interior

  4. SEÇÃO — COMO LEMOS UM CASE
     Layout: fundo navy, texto centralizado
     Objetivo: educar o decisor sobre o modelo PARE antes de ler os cases
     (colocar entre o hero e o grid, ou como interlúdio após os 6 cards)

     Eyebrow: "Nossa metodologia de prova"
     Título: "Um case não é portfólio. É prova de entrega de negócio."
     4 colunas com os passos PARE:
       P — Problema: "O que o cliente enfrentava antes de nos contratar"
       A — Ação: "O que fizemos além do escopo padrão de obra"
       R — Resultado: "O número que prova que o negócio do cliente evoluiu"
       E — Evidência: "Depoimento verificável de quem viveu o projeto"

  5. DEPOIMENTO DESTAQUE
     1 depoimento em full-width, fundo cream, citação grande
     Usar o depoimento do Dr. Marcos Andrade (Hospital Santa Clara)
     Foto placeholder + nome + cargo + empresa visíveis
     Resultado da obra em destaque abaixo da citação

  6. CTA BAND FINAL
     Texto: "Seu projeto tem características parecidas com algum desses cases?
             Vamos conversar sobre como aplicar o mesmo método."
     Botão: "Quero falar com um especialista"

  7. FOOTER (componente compartilhado)
</page_structure>

<constraints>
  - O card featured do Case 1 deve ocupar 2 colunas em desktop para dar
    o peso visual correto ao case mais forte
  - Os filtros devem funcionar (estado ativo visual) mesmo sem backend —
    filtrar os cards visíveis via React state, exatamente como o Showcase da home
  - Cada card deve ter o modelo PARE completo — não simplificar para só resultado
  - A seção "Como lemos um case" pode vir antes ou depois do grid —
    posicionar onde o fluxo visual fizer mais sentido
  - Manter data-screen-label em cada seção
  - Todos os "Ver case completo" linkam para # por ora
  - Não criar página de case individual neste momento
  - Photo component: usar variants existentes (hospital, school, commercial,
    interior, structure, rebar, team, site) — não criar novos SVGs
</constraints>
```

---

## Ordem das próximas páginas (após Soluções e Cases)

| Prioridade | Página | Complexidade | Observação |
|---|---|---|---|
| 3 | `/clientes` | Baixa | Depoimentos + logos — depende de assets reais |
| 4 | `/areas-de-atuacao` | Média | Cards por setor + mapa — setor já existe na home |
| 5 | `/manifesto` | Média | Manifesto standalone — componente já existe na home |
| 6 | `/fale-conosco` | Baixa | Formulário qualificado — componente já criado no CTABand |
| 7 | `/trabalhe-conosco` | Baixa | Cultura + vagas — conteúdo mais simples |

*Cada página segue o mesmo padrão: prompt XML com context + task + page_structure + constraints.*
*O bloco de design system (cores + tipografia + assets) é idêntico em todos — copiar e colar.*
