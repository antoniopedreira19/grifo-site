# GRIFO Construtora — Prompts Claude Design
## Páginas: Clientes, Áreas de Atuação, Manifesto, Fale Conosco, Trabalhe Conosco
*Usar em sequência no Claude Design, uma página por sessão*

---

> **BLOCO DE DESIGN SYSTEM — copiar no início de cada prompt**
> Substituir `[DESIGN SYSTEM]` em cada prompt pelo bloco abaixo:

```
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
    Importar colors_and_type.css para herdar todos os tokens.

  Assets disponíveis:
    assets/griffin-mark-navy.png
    assets/griffin-mark-gold.png
    assets/griffin-line-cream.png
    assets/griffin-line-gold.png
    assets/griffin-line-navy.png
    assets/logo-full-gold.png
    assets/logo-full-navy.png
    assets/logo-grifo-full.png
    assets/logo-horizontal-gold.png
    assets/logo-horizontal-navy.png
    assets/hero-canteiro-aerea.jpg

  Estrutura de arquivos:
    Cada página importa: colors_and_type.css · styles.css · [pagina].css
    · photos.jsx · nav.jsx · [pagina].jsx
    Nav e Footer idênticos à home — reutilizar componentes existentes.
```

---

# PROMPT 3 — PÁGINA CLIENTES (`clientes.html`)

```xml
<context>
  Site institucional da GRIFO Construtora — construtora B2B especializada em obras
  hospitalares, educacionais e comerciais de alta complexidade.

  Princípio desta página: depoimento genérico não reduz risco. O que convence
  é uma pessoa real, em cargo similar ao do decisor, dizendo que o risco que
  ele está sentindo foi o mesmo que ela sentiu — e que foi resolvido.

  [DESIGN SYSTEM]

  NAV E FOOTER: idênticos à home. Link ativo: "Clientes".

  ESTADO DOS ASSETS: depoimentos e logos reais ainda não disponíveis.
  Usar placeholders funcionais e bem estruturados — o layout deve estar
  pronto para receber conteúdo real sem redesenho.
</context>

<task>
  Construir a página /clientes.html completa. A página apresenta depoimentos
  de clientes reais com estrutura que maximiza credibilidade para o decisor
  B2B de alto nível, mais grid de logos de clientes.
</task>

<page_structure>

  1. NAV

  2. PAGE HERO
     Fundo: navy deep
     Eyebrow: "Quem confiou na Grifo"
     Título: "Decisores que arriscaram.\nE não se arrependeram."
     Subtítulo: "Cada depoimento aqui é de alguém que tinha as mesmas dúvidas
                 que você tem agora — e tomou a decisão com base nos mesmos dados
                 que estamos mostrando para você."
     Watermark: griffin-line-cream.png, opacity 0.04

  3. DEPOIMENTO DESTAQUE — full width
     Fundo: cream (#E8E1D2)
     Layout: citação grande centralizada + identidade do cliente abaixo
     Estrutura:
       - Aspas decorativas em gold (tipografia grande, Disket Mono)
       - Citação (Sarabun light, fs-24): placeholder longo e específico:
         "Tínhamos medo de parar a UTI durante a reforma. Três construtoras
          anteriores disseram que era impossível fazer sem interromper o
          atendimento. A Grifo entregou sem fechar um único leito — e ainda
          antecipou 22 dias. Hoje esse centro de diagnóstico fatura
          180 exames por dia desde o primeiro mês."
       - Avatar placeholder: círculo navy com iniciais "MA" em gold
       - Nome: "Dr. Marcos Andrade" (placeholder)
       - Cargo: "Diretor de Operações · Hospital Santa Clara" (placeholder)
       - Pill de setor: "Hospitalar"
       - Resultado em destaque: "+180 exames/dia desde o 1º mês de operação"
     Nota no código: comentário <!-- PLACEHOLDER: substituir por foto e
     depoimento real quando disponível -->

  4. GRID DE DEPOIMENTOS — 3 cards
     Fundo: bone
     Layout: 3 colunas desktop, 1 mobile
     Cada card:
       - Avatar placeholder (círculo com iniciais, fundo navy, iniciais em gold)
       - Nome + cargo + empresa
       - Pill de setor (hospitalar/educacional/comercial)
       - Citação (2-3 linhas, específica e mensurável — não elogio genérico)
       - Resultado em destaque (estilo métrica, bold, cor navy ou gold)
       - Comentário <!-- PLACEHOLDER --> em cada card

     Placeholders dos 3 cards:

     Card 1 — "APR" — Ana Paula Rezende
       Cargo: "Diretora Geral · Colégio Excellence"
       Setor: Educacional
       Citação: "A única construtora que fez o cronograma começar pela data
                 de matrícula, não pela data de início da obra.
                 Isso mudou completamente a relação com o prazo."
       Resultado: "340 matrículas no 1º semestre · Janela não perdida"

     Card 2 — "RM" — Ricardo Melo
       Cargo: "CEO · Grupo Melo Varejo"
       Setor: Comercial
       Citação: "Recebemos as chaves 18 dias antes do prazo. Abrimos
                 na Black Friday. Esse prazo valeu mais do que qualquer
                 desconto no contrato teria valido."
       Resultado: "Abertura na Black Friday · Faturamento da data capturado"

     Card 3 — "CB" — Carlos Brito
       Cargo: "Diretor Executivo · Clínica Integrada Saúde+"
       Setor: Hospitalar
       Citação: "Nosso projeto anterior tinha sido reprovado na ANVISA.
                 A Grifo redesenhou em 3 semanas e aprovou sem retificações.
                 Nunca mais contratei outra construtora."
       Resultado: "Aprovação ANVISA sem retificações · Prazo original mantido"

  5. LOGOS DE CLIENTES
     Fundo: white
     Eyebrow: "Empresas que confiam na Grifo"
     Título: "155+ obras. Clientes que voltam."
     Layout: grid de logos em escala de cinza, agrupados por setor
     Placeholder de logos: retângulos com proporção realista (160×60px),
     fundo stone (#C9C1B2), texto centrado em graphite com nome fictício
     do cliente (ex: "Hospital São Lucas", "Grupo Educacional Ânima",
     "Rede Varejo X").
     Grupos:
       Hospitalar (4 logos placeholder)
       Educacional (4 logos placeholder)
       Comercial (4 logos placeholder)
       Residencial (2 logos placeholder)
     Comentário <!-- PLACEHOLDER: substituir por logos reais com autorização -->
     Nota visual: logos ficam em escala de cinza por padrão,
     coloridos no hover — efeito sutil de reconhecimento

  6. SEÇÃO — POR QUE NOSSOS CLIENTES VOLTAM
     Fundo: navy
     Layout: 3 colunas com métricas de retenção
     Eyebrow: "Relação de longo prazo"
     Título: "Parceiro de expansão, não fornecedor de obra única."
     3 métricas:
       "68%" / "dos clientes voltam para uma segunda obra"
       "3,2" / "obras em média por cliente ativo"
       "10 anos" / "maior relação de parceria ativa"
     Abaixo: copy curto:
       "Nossa métrica de sucesso não é a obra entregue —
        é o cliente que nos liga para a próxima expansão."

  7. CTA BAND
     "Quer entender por que empresas como a sua confiam
      na Grifo para obras que não podem falhar?"
     Botão: "Quero falar com um especialista"

  8. FOOTER

</page_structure>

<constraints>
  - Todo placeholder deve ter comentário HTML <!-- PLACEHOLDER --> para
    facilitar substituição por conteúdo real
  - Avatares: círculos com iniciais — não usar foto de banco de imagens
  - Grid de logos deve estar pronto para receber imagens reais (img tags
    com src placeholder) sem precisar redesenhar o layout
  - Efeito hover nos logos (grayscale → colorido) via CSS filter
  - Manter data-screen-label em cada seção
</constraints>
```

---

# PROMPT 4 — PÁGINA ÁREAS DE ATUAÇÃO (`areas-de-atuacao.html`)

```xml
<context>
  Site institucional da GRIFO Construtora.

  Princípio desta página: não falar de construção — falar do negócio do cliente.
  O decisor de hospital pensa em leitos e receita, não em m².
  O decisor de escola pensa em matrículas e calendário, não em estrutura.
  Cada setor tem sua própria linguagem de negócio e a Grifo precisa provar
  que a domina.

  [DESIGN SYSTEM]

  NAV E FOOTER: idênticos à home. Link ativo: "Áreas de Atuação".

  REFERÊNCIA: a seção Sectors da home já tem os 4 cards de setor.
  Esta página é a versão expandida e aprofundada daquela seção.
</context>

<task>
  Construir a página /areas-de-atuacao.html completa.
  Cada setor tem sua própria seção detalhada com linguagem de negócio específica,
  métricas relevantes, cases do setor e CTA setorizado.
</task>

<page_structure>

  1. NAV

  2. PAGE HERO
     Fundo: navy deep
     Eyebrow: "Onde atuamos"
     Título: "A Grifo conhece o seu negócio.\nNão só a sua obra."
     Subtítulo: "Cada setor tem seu cronograma crítico, sua norma técnica
                 e sua linguagem de receita. Não somos uma construtora genérica
                 que aceita qualquer obra — somos especialistas nos setores
                 em que cada dia de atraso tem um custo mensurável."
     4 pills de navegação âncora:
       🏥 Hospitalar · 🏫 Educacional · 🏢 Comercial · 🏠 Residencial

  3. SETOR HOSPITALAR
     Âncora: id="hospitalar"
     Layout: duas colunas — esquerda conteúdo, direita Photo variant="hospital"
     Fundo: bone

     Eyebrow: "Saúde"
     Headline: "Sua clínica atendendo pacientes na data certa."
     Copy: "Obras de saúde têm zero tolerância a atraso. Cada dia de obra
            parada é um leito que não atende, uma agenda que não abre,
            uma receita que não entra. A Grifo entende o ritmo do setor
            de saúde — e entrega antes que ele precise pedir."

     Linguagem de negócio (6 pills/tags em gold outline):
       Receita por leito · Conformidade ANVISA RDC 50 · Data de first patient
       · Licenciamento sanitário · Gases medicinais · Obra em hospital ativo

     3 diferenciais específicos (cards pequenos):
       "Obra sem fechar o hospital"
         "Setorização rigorosa, controle de pressão e logística noturna
          para manter o atendimento durante toda a reforma."
       "Compliance ANVISA integrado"
         "Engenharia clínica trabalha lado a lado com a obra —
          da viabilidade ao alvará, sem retificações."
       "ROI antecipado"
         "Cada semana adiantada são leitos faturando antes do prazo
          contratual. Calculamos isso junto com você."

     Case do setor (card compacto):
       Hospital Santa Clara · 22 dias antes · 4.200 m²
       "Ver case completo →"

     CTA setorizado: "Tenho um projeto hospitalar" → #contato

  4. SETOR EDUCACIONAL
     Âncora: id="educacional"
     Layout: duas colunas invertidas — esquerda Photo variant="school", direita conteúdo
     Fundo: white

     Eyebrow: "Educação"
     Headline: "Pronto para o início das aulas. Sem negociação."
     Copy: "Escola inaugurada fora do calendário perde um semestre inteiro
            de captação. Não é só prazo de obra — é receita de matrículas.
            A Grifo planeja a entrega pensando no seu calendário acadêmico,
            não no cronograma de construção."

     Linguagem de negócio (pills):
       Matrículas por turma · Autorização de funcionamento · Prazo de captação
       · INEP · Capacidade instalada · Campus ativo

     3 diferenciais:
       "Cronograma reverso acadêmico"
         "Planejamos a obra de trás para frente: começamos pela data
          de matrícula e construímos o cronograma até lá."
       "Obra em campus ativo"
         "Isolamento acústico, operação noturna e logística faseada
          para manter as aulas em pleno funcionamento."
       "Autorização de funcionamento integrada"
         "Documentação MEC/estadual gerenciada junto com o cronograma
          — não como etapa separada depois da obra."

     Case do setor (card compacto):
       Colégio Excellence · 340 matrículas no 1º semestre · 7.800 m²

     CTA: "Tenho um projeto educacional" → #contato

  5. SETOR COMERCIAL E CORPORATIVO
     Âncora: id="comercial"
     Layout: duas colunas — esquerda conteúdo, direita Photo variant="commercial"
     Fundo: cream

     Eyebrow: "Comercial & Corporativo"
     Headline: "Da fundação à abertura: engenharia que\npensa no seu negócio."
     Copy: "No varejo e no corporativo, metro quadrado só vale quando está
            faturando. Cada semana de obra além do prazo é receita que não
            entra. A Grifo não entrega obras — entrega condições para o
            seu negócio funcionar na data que você precisa."

     Linguagem de negócio (pills):
       Receita por m² · Data de abertura · ROI do imóvel
       · Experiência do usuário · Payback · Retrofit em operação

     3 diferenciais:
       "Data de abertura inegociável"
         "Identificamos a data crítica do seu negócio e construímos
          o cronograma para entregar antes dela — não no limite."
       "Retrofit sem fechar"
         "Reformas em operação com setorização e logística para
          manter o faturamento durante a obra."
       "Engenharia orientada a ROI"
         "Cada decisão técnica é avaliada pelo impacto no prazo
          e no retorno do seu investimento."

     Case do setor (card compacto):
       Grupo Melo Varejo · Black Friday capturada · 3.600 m²

     CTA: "Tenho um projeto comercial" → #contato

  6. SETOR RESIDENCIAL
     Âncora: id="residencial"
     Layout: duas colunas — esquerda Photo variant="interior", direita conteúdo
     Fundo: bone

     Eyebrow: "Residencial Alto Padrão"
     Headline: "Padrão técnico corporativo no\nseu projeto residencial."
     Copy: "Famílias e investidores que já tiveram problemas com empreiteiros
            sem gestão escolhem a Grifo pelo mesmo motivo que hospitais e
            escolas escolhem: prazo contratual, transparência total e
            engenharia que não improvisa."

     Linguagem de negócio (pills):
       Alto padrão · Prazo contratual · Painel digital de acompanhamento
       · Acabamento supervisionado · Custo controlado · Sem susto no orçamento

     3 diferenciais:
       "Acompanhamento digital semanal"
         "Fotos do canteiro, medições e indicadores toda semana —
          você sabe exatamente o que está sendo feito."
       "Orçamento aberto"
         "Todos os custos da obra visíveis em tempo real.
          Nenhuma surpresa no orçamento final."
       "Mesmo time das obras corporativas"
         "O engenheiro que gerencia hospitais gerencia o seu projeto.
          Não existe obra pequena demais para ter gestão séria."

     CTA: "Conversar sobre meu projeto residencial" → #contato

  7. MAPA DE ATUAÇÃO GEOGRÁFICA
     Fundo: navy
     Eyebrow: "Onde estamos"
     Título: "Levamos o mesmo padrão de prazo\npara cada canteiro do Brasil."
     Layout: duas colunas
       Esquerda: mapa do Brasil estilizado em SVG (não interativo — apenas visual)
         Estados com obras em destaque em gold. Outros em navy-soft.
         Marcar: MG (sede), SP, RJ, GO, DF, BA (ajustar conforme atuação real da Grifo)
       Direita: lista de praças principais
         Belo Horizonte, MG — Sede · 80+ obras
         São Paulo, SP — 30+ obras
         [demais cidades — preencher com dados reais]
     Copy abaixo do mapa:
       "Nossa sede é em Belo Horizonte, mas nossa responsabilidade
        vai até onde o cliente precisar."

  8. CTA BAND
     "Não encontrou seu setor? A Grifo atua em projetos de alta
      complexidade em outros segmentos também."
     Botão: "Quero conversar sobre meu projeto"

  9. FOOTER

</page_structure>

<constraints>
  - As pills de linguagem de negócio devem ter estilo consistente em todos os setores
    (outline gold, fundo transparente, hover gold sólido)
  - O mapa SVG do Brasil deve ser funcional como visual — não precisa ser interativo
  - Os CTAs setorizados ("Tenho um projeto hospitalar" etc.) são diferenciais
    importantes — preservar a especificidade, não generalizar para "Fale conosco"
  - Âncoras funcionais para as 4 pills do hero
  - data-screen-label em cada seção
</constraints>
```

---

# PROMPT 5 — PÁGINA MANIFESTO (`manifesto.html`)

```xml
<context>
  Site institucional da GRIFO Construtora.

  Princípio desta página: o manifesto não é sobre missão/visão/valores genéricos.
  É a declaração de posicionamento da Grifo no mercado — o que a diferencia em
  nível de crença, não apenas de serviço. Para o decisor que chegou até aqui,
  é o momento de identificação emocional máxima.

  [DESIGN SYSTEM]

  NAV E FOOTER: idênticos à home. Link ativo: "Manifesto".

  REFERÊNCIA: o componente Manifesto da home já tem a estrutura de accordion
  com os 6 itens (O que nos move, Nosso método, Time de sócios, Transparência,
  Trabalhe, Cultura). Esta página é a versão standalone e expandida.
</context>

<task>
  Construir a página /manifesto.html completa.
  Três blocos principais: (1) manifesto editorial, (2) valores como comportamentos
  observáveis, (3) time de sócios com humanização.
</task>

<page_structure>

  1. NAV

  2. MANIFESTO HERO — cinematográfico
     Fundo: navy deep, full viewport height
     Foto de fundo: hero-canteiro-aerea.jpg com overlay navy opacity 0.75
     Layout: conteúdo centralizado, texto grande
     Eyebrow: "Por que existimos"
     Título (Disket Mono, muito grande, clamp 3.5rem a 7rem):
       "No Brasil, obra atrasada\nvirou normal.\nA gente não aceita."
     Sem subtítulo — o título respira sozinho
     Scroll indicator (seta animada para baixo) na base da seção

  3. MANIFESTO EDITORIAL — o texto completo
     Fundo: white
     Layout: coluna central estreita (max-width 680px), tipografia editorial
     Sem headers — texto corrido em parágrafos com espaçamento generoso

     Texto do manifesto (Sarabun, fs-20, lh-loose):
       "A Grifo existe porque no Brasil, obra atrasada virou normal.
        E normal virou aceitável.

        Nós não aceitamos.

        Cada semana de atraso é um paciente que não entra,
        um aluno que não se matricula, um negócio que não abre.
        Uma família que esperava e não recebeu.
        Um investimento que financia sem retornar.

        Construímos com método porque prazo não é promessa — é compromisso.
        E compromisso, a gente honra com sistema, não com intenção.

        Não somos fornecedor de obras.
        Somos o parceiro de engenharia de quem cresce
        e não pode parar para esperar."

     Após o texto: linha decorativa em gold + assinatura estilizada "Grifo Construtora"
     em Disket Mono

  4. OS VALORES — traduzidos em comportamento
     Fundo: bone
     Eyebrow: "Como operamos"
     Título: "Valores não são palavras. São comportamentos."
     Subtítulo: "Não listamos 'excelência' e 'comprometimento'.
                 Descrevemos o que fazemos quando ninguém está vendo."

     4 cards em grid 2x2 (desktop), 1 coluna (mobile):
     Cada card: fundo white, borda esquerda gold (4px), padding generoso

       Card 1 — "Prazo é receita"
         "Cada semana que antecipamos é dinheiro que entra mais cedo no
          caixa do nosso cliente. Não gerenciamos obras — gerenciamos
          resultados. A pergunta que fazemos toda semana não é 'a obra
          está avançando?' — é 'o cliente vai faturar na data certa?'"

       Card 2 — "Transparência radical"
         "O cliente tem acesso ao sistema de gestão em tempo real.
          Não esperamos o relatório mensal para dizer o que está
          acontecendo. Se tem um desvio, o cliente sabe antes de
          virar problema. Não depois de virar desculpa."

       Card 3 — "Parceria de longo prazo"
         "Nossa métrica de sucesso não é a obra entregue — é o
          cliente que nos liga para a próxima expansão. Tratamos
          cada projeto como o início de uma relação, não como
          um contrato a cumprir e fechar."

       Card 4 — "Engenharia com visão de negócio"
         "Sabemos calcular o custo de um pilar errado. Sabemos
          também calcular o custo de uma inauguração atrasada.
          Os dois importam — e nossa cultura interna é construída
          para não tratar nenhum dos dois como detalhe."

  5. MÉTODO — Fast Construction 2.0 (versão editorial)
     Fundo: navy
     Eyebrow: "Nosso método"
     Título: "Planejamento lean, gestão semanal,\ntecnologia de canteiro."
     Copy: "Compactamos o cronograma sem comprimir a qualidade.
            O Fast Construction 2.0 não é uma promessa de velocidade —
            é uma arquitetura de controle que detecta desvio antes
            de virar atraso."

     4 pilares em cards horizontais (ícone + título + texto):
       01 — Planejamento reverso
            "Cronograma começa pela data de entrega, não de início"
       02 — Gestão semanal
            "Reunião de progresso toda semana. Desvio vira ação em 48h"
       03 — Tecnologia de canteiro
            "BI de obra, medições digitais, painel do cliente em tempo real"
       04 — Fornecedores como sócios
            "Parceiros avaliados por prazo, não só por preço"

     Métrica destaque: "3–4 semanas antes" / "do prazo médio de mercado"

  6. TIME DE SÓCIOS
     Fundo: white
     Eyebrow: "Quem decide"
     Título: "Engenheiros que entendem balanço.\nEmpresários que entendem obra."
     Subtítulo: "Cada projeto é acompanhado de perto por um sócio.
                 Você fala com quem decide — não com quem só executa."

     3 cards de sócio (layout: foto + nome + cargo + frase pessoal):
       Avatar placeholder: retângulo proporção 3:4, fundo navy-soft,
       iniciais em gold — comentário <!-- PLACEHOLDER: foto real do sócio -->

       Sócio 1 — [Nome Sócio 1] — placeholder
         Cargo: "Sócio-fundador · Diretor de Engenharia"
         Frase: "Entrei nesse setor porque queria construir coisas que
                 importam. Fiquei porque aprendi que o que mais importa
                 é entregar no prazo — o resto, a engenharia resolve."

       Sócio 2 — [Nome Sócio 2] — placeholder
         Cargo: "Sócio · Diretor Comercial"
         Frase: "Vendemos prazo. Não prometemos — entregamos dados.
                 A diferença entre construtora e parceiro está em
                 quem aparece quando a obra complica."

       Sócio 3 — [Nome Sócio 3] — placeholder
         Cargo: "Sócio · Diretor de Operações"
         Frase: "Canteiro não mente. Ou você tem sistema ou tem desculpa.
                 A Grifo construiu o sistema para não precisar da desculpa."

     Comentário <!-- PLACEHOLDER: substituir nomes, fotos e frases reais -->

  7. NÚMEROS QUE PROVAM
     Fundo: cream
     Layout: 4 métricas em linha, estilo igual ao hero da home
     155+ obras · 144k m² · 97% no prazo · 26 anos
     Cada métrica com label explicativo (mesmo padrão do HeroFullbleed)

  8. CTA BAND
     "Você conheceu quem somos e o que acreditamos.
      O próximo passo é ver se faz sentido para o seu projeto."
     Botão: "Quero falar com um especialista"

  9. FOOTER

</page_structure>

<constraints>
  - O hero da página deve ter impacto cinematográfico — priorizar espaço em branco
    e tipografia grande sobre qualquer elemento decorativo
  - O texto do manifesto editorial é sagrado — não cortar, não resumir,
    não colocar em bullets
  - Frases dos sócios devem soar humanas, não corporativas —
    são o principal elemento de humanização da marca
  - Avatares dos sócios: retângulos 3:4, não círculos — mais formal e profissional
  - data-screen-label em cada seção
</constraints>
```

---

# PROMPT 6 — PÁGINA FALE CONOSCO (`fale-conosco.html`)

```xml
<context>
  Site institucional da GRIFO Construtora.

  Princípio desta página: o formulário de contato de uma construtora B2B não é
  um campo "deixe sua mensagem". É o primeiro filtro da jornada comercial —
  deve qualificar o lead para que o time de engenharia chegue na primeira
  conversa já com contexto suficiente para ser útil imediatamente.

  [DESIGN SYSTEM]

  NAV E FOOTER: idênticos à home. Link ativo: "Contato".
</context>

<task>
  Construir a página /fale-conosco.html completa.
  Página focada em conversão qualificada — não em volume de leads,
  mas em qualidade do primeiro contato.
</task>

<page_structure>

  1. NAV

  2. PAGE HERO — compacto (não full-height)
     Fundo: navy deep
     Eyebrow: "Vamos conversar"
     Título: "Fale com um especialista.\nNão com um vendedor."
     Subtítulo: "Nosso time de engenharia retorna em até 24h com uma
                 primeira análise do seu projeto. O engenheiro responsável
                 faz o primeiro contato — não um assistente comercial."

  3. SEÇÃO PRINCIPAL — formulário + contatos
     Fundo: bone
     Layout: duas colunas (60/40)

     Coluna esquerda — FORMULÁRIO QUALIFICADO:
       Título da seção (h3): "Sobre o seu projeto"
       Campos obrigatórios:
         - Nome completo (text, required)
         - Empresa (text, required)
         - Cargo (text, required)
         - Setor do projeto (select, required):
             Hospitalar / Educacional / Comercial / Residencial / Outro
         - Estágio do projeto (select, required):
             Em fase de ideia / Projeto em desenvolvimento /
             Pronto para iniciar / Urgente — preciso de resposta rápida
         - WhatsApp com DDD (tel, required)
             Label: "WhatsApp" — não "Telefone"
         - Como prefere ser contatado (radio):
             WhatsApp · Ligação telefônica · E-mail
         - Conte brevemente sobre o projeto (textarea, opcional):
             Placeholder: "Tipo de obra, metragem estimada, prazo desejado,
             localidade... quanto mais contexto, mais útil será nossa
             primeira conversa."

       CTA do botão (full-width, gold):
         "Quero falar com um especialista →"

       Abaixo do botão (texto pequeno, graphite):
         "Retorno garantido em até 24h · Sem compromisso · Engenheiro
          responsável faz o primeiro contato"

     Coluna direita — CONTATOS DIRETOS:
       Título: "Prefere contato direto?"
       Blocos de contato (ícone + label + dado):
         📞 Telefone: +55 31 3500-2200
         💬 WhatsApp: +55 31 99500-2200
            (botão: "Abrir no WhatsApp →" linkando wa.me)
         ✉️ E-mail: contato@grifo.eng.br
         📍 Sede: Av. Afonso Pena, 1500 — Belo Horizonte, MG

       Horário de atendimento:
         "Segunda a sexta, 8h às 18h
          Retorno fora do horário em até 2h no próximo dia útil"

       Separador

       Bloco "Atendimento de emergência":
         "Obra em andamento com situação crítica?
          Nosso time de suporte atende fora do horário comercial."
         WhatsApp direto para emergências

  4. SEÇÃO — POR QUE FALAR COM ENGENHEIRO PRIMEIRO
     Fundo: navy
     Layout: 3 cards horizontais
     Eyebrow: "Nossa diferença no primeiro contato"

     Card 1: "Análise técnica imediata"
       "Na primeira ligação, o engenheiro já identifica os principais
        riscos técnicos e regulatórios do seu projeto."
     Card 2: "Sem reunião de apresentação da empresa"
       "Não perdemos sua hora mostrando quem somos.
        Começamos falando do seu projeto."
     Card 3: "Estimativa preliminar em 48h"
       "Após o primeiro contato, enviamos uma estimativa preliminar
        de prazo e custo por m² para o seu segmento."

  5. ENDEREÇO + MAPA
     Fundo: white
     Google Maps embed (placeholder — div com estilo de mapa, fundo cream,
     texto centralizado "Google Maps — Sede Grifo Construtora")
     Endereço completo abaixo do mapa
     Comentário <!-- TODO: substituir por embed real do Google Maps -->

  6. FOOTER

</page_structure>

<constraints>
  - O campo "Estágio do projeto" é o mais estratégico — preservar a opção
    "Urgente — preciso de resposta rápida" que qualifica leads quentes
  - O formulário é estático por ora (sem backend) — mas deve ter
    estrutura de form com action="#" e todos os atributos corretos
    para futura integração
  - Não usar "Telefone" como label — usar "WhatsApp" porque tem mais
    conversão B2B no Brasil
  - O mapa é placeholder por ora — div estilizado com comentário TODO
  - Botão WhatsApp deve abrir wa.me/5531995002200 em nova aba
  - data-screen-label em cada seção
  - Esta página não tem CTA Band — ela mesma é a conversão
</constraints>
```

---

# PROMPT 7 — PÁGINA TRABALHE CONOSCO (`trabalhe-conosco.html`)

```xml
<context>
  Site institucional da GRIFO Construtora.

  Princípio desta página: não recrutamos quem quer "uma oportunidade".
  Recrutamos quem trata prazo e qualidade como inegociáveis e quer
  fazer carreira em uma construtora que cresce porque entrega.

  [DESIGN SYSTEM]

  NAV E FOOTER: idênticos à home. Link ativo: nenhum (não está no menu principal).
  Footer deve ter link "Trabalhe Conosco" na coluna Empresa.
</context>

<task>
  Construir a página /trabalhe-conosco.html completa.
  Página de employer branding que atrai o perfil certo pelo que a Grifo
  acredita — não pela lista de benefícios genéricos.
</task>

<page_structure>

  1. NAV

  2. PAGE HERO
     Fundo: navy deep com foto de fundo hero-canteiro-aerea.jpg,
     overlay navy opacity 0.7
     Eyebrow: "Carreira na Grifo"
     Título: "Construtora que cresce precisa de\ngente que quer crescer junto."
     Subtítulo: "Na Grifo, você não gerencia obras.
                 Você resolve problemas que têm impacto direto no
                 negócio do cliente. Se isso faz sentido, a gente quer conversar."

  3. POR QUE TRABALHAR NA GRIFO
     Fundo: bone
     Eyebrow: "O que nos diferencia como empregador"
     Título: "Carreira em uma construtora que trata prazo como cultura,\nnão como cobrança."

     4 cards em grid 2x2:
       Card 1 — "Você fala com quem decide"
         "Na Grifo, o engenheiro tem acesso direto à diretoria.
          Não existe camada de aprovação que torna boas ideias lentas."

       Card 2 — "Remuneração variável real"
         "Bônus atrelado a entregas no prazo — não a métricas abstratas.
          Quem entrega, ganha mais. Simples assim."

       Card 3 — "Formação técnica continuada"
         "Acesso a cursos, certificações e treinamentos em gestão lean,
          BIM e tecnologia de canteiro pagos pela empresa."

       Card 4 — "Projeto de verdade desde o início"
         "Não alocamos engenheiros novos em apoio administrativo.
          Você gerencia canteiro desde o primeiro projeto."

  4. O QUE BUSCAMOS
     Fundo: white
     Eyebrow: "Perfil Grifo"
     Título: "Buscamos pessoas que tratam prazo como inegociável."

     Texto editorial (não lista de requisitos):
       "Não estamos buscando o currículo mais longo.
        Estamos buscando o engenheiro que perde o sono quando
        a obra ameaça atrasar — e que sabe o que fazer quando isso acontece.

        A Grifo cresce porque entrega. E entrega porque as pessoas
        que fazem parte dela entendem que cada semana de antecipação
        é receita no caixa do cliente — não só uma data no cronograma."

     3 pills de perfil em gold outline:
       Engenheiros · Arquitetos · Encarregados de obras

     3 pills complementares em navy outline:
       Administração · Financeiro · Comercial técnico

  5. DEPOIMENTO DE COLABORADOR
     Fundo: cream
     Layout: igual ao depoimento destaque da página Clientes
     Avatar placeholder com iniciais
     Nome: "[Nome do colaborador]" — placeholder
     Cargo: "Engenheiro de Obras · 4 anos na Grifo" — placeholder
     Citação: "Vim de uma grande construtora onde eu era mais um número.
               Na Grifo, meu nome está no projeto. Quando a obra atrasa,
               eu sinto. Quando entrega antes, todo mundo ganha.
               Essa cultura muda como você trabalha."
     Comentário <!-- PLACEHOLDER: substituir por depoimento real -->

  6. VAGAS ABERTAS
     Fundo: bone
     Eyebrow: "Oportunidades"
     Título: "Vagas abertas"

     Lista de vagas (cards simples com: título + área + cidade + tipo):
       Engenheiro Civil Sênior · Obras · BH · CLT
       Arquiteto de Projetos · Projetos · BH · CLT
       Encarregado de Obras · Operações · BH e região · CLT
       Assistente Administrativo · Administrativo · BH · CLT

     Cada card tem botão: "Ver vaga →" (leva para #, por ora)
     Abaixo da lista: "Não encontrou sua vaga? Envie seu currículo →"

     Nota: estrutura preparada para receber vagas reais via CMS ou
     integração futura com sistema de RH.
     Comentário <!-- TODO: integrar com sistema de vagas -->

  7. FORMULÁRIO DE CANDIDATURA ESPONTÂNEA
     Fundo: navy
     Eyebrow: "Candidatura espontânea"
     Título: "Não tem vaga aberta para você agora.\nMas pode ter amanhã."

     Formulário compacto:
       - Nome completo
       - Área de interesse (select): Engenharia · Arquitetura · Operações
         · Administração · Comercial · Outro
       - Cidade onde mora
       - LinkedIn ou link do currículo (url)
       - Mensagem breve (textarea, opcional):
           Placeholder: "O que te fez querer trabalhar na Grifo?"
       Botão: "Enviar candidatura"
       Texto abaixo: "Analisamos todas as candidaturas.
                      Retornamos quando surgir uma oportunidade compatível."

  8. FOOTER

</page_structure>

<constraints>
  - Nenhum benefício genérico (plano de saúde, vale-refeição) —
    o foco é cultura e crescimento profissional
  - O texto editorial da seção "O que buscamos" não vira lista de requisitos —
    manter formato de parágrafo
  - Vagas são placeholders — estrutura preparada para conteúdo real
  - Formulário estático por ora (action="#")
  - Avatar do depoimento: círculo com iniciais, não foto de banco
  - data-screen-label em cada seção
</constraints>
```

---

## Resumo — Todas as páginas

| # | Página | Prompt | Status |
|---|--------|--------|--------|
| 1 | `index.html` (Home) | — | ✅ Concluído |
| 2 | `solucoes.html` | Prompt 1 | ✅ Concluído |
| 3 | `cases.html` | Prompt 2 | ✅ Concluído |
| 4 | `clientes.html` | Prompt 3 | ⬜ Próximo |
| 5 | `areas-de-atuacao.html` | Prompt 4 | ⬜ |
| 6 | `manifesto.html` | Prompt 5 | ⬜ |
| 7 | `fale-conosco.html` | Prompt 6 | ⬜ |
| 8 | `trabalhe-conosco.html` | Prompt 7 | ⬜ |

*Após todas as páginas: prompt de revisão de navegação (links entre páginas,
estados ativos do menu, meta tags SEO por página).*
