/* Dados de conteúdo extensíveis: cases do portfólio e ferramentas.
   Para adicionar um case, copie um objeto em CASES. Cada tópico aceita texto ou lista de parágrafos;
   tópicos null/ausentes não aparecem no popup.
   type: "launched" (produto lançado) | "concept" (estudo conceitual) | "prototype" (protótipo)
   Fonte do conteúdo: portfólio da própria Alionália no PMRadar. */

window.CASE_TOPICS = [
  ["contexto", "Contexto do produto e do negócio"],
  ["problema", "Problema ou oportunidade identificada"],
  ["publico", "Público-alvo e necessidades dos usuários"],
  ["discovery", "Processo de Product Discovery"],
  ["estrategia", "Estratégia e visão do produto"],
  ["hipoteses", "Hipóteses, validações e decisões tomadas"],
  ["roadmap", "Priorização e definição de roadmap"],
  ["delivery", "Processo de Product Delivery"],
  ["backlog", "Organização do backlog e gestão das entregas"],
  ["resultados", "Resultados e indicadores de impacto"],
  ["aprendizados", "Principais desafios e aprendizados"]
];

window.CASES = [
  {
    id: "imaginakids",
    image: "assets/img/cases/imaginakids.jpg",
    imageSmall: "assets/img/cases/imaginakids-800.jpg",
    imageAlt: "Tela inicial do app ImaginaKIDS no iPad, com a seleção de livros do aluno",
    title: "ImaginaKIDS",
    type: "launched",
    role: "Product Manager · da concepção ao mercado",
    headline: "Criação da EdTech: de 1 escola piloto a 6 escolas contratantes em 12 meses.",
    metrics: [
      { value: "+1.253%", label: "faturamento em 12 meses (R$ 8,5 mil → R$ 115 mil)" },
      { value: "65,6%", label: "conversão de pais compradores (meta: 60%)" },
      { value: "92%", label: "de professoras com alta satisfação" }
    ],
    tools: ["Design Thinking", "Miro", "Kanban", "Scrum", "Lean Startup", "Canvas de Proposta de Valor", "Canvas de Modelo de Negócios", "Amplitude", "Círculo Dourado"],
    topics: {
      contexto: [
        "O ImaginaKIDS é uma plataforma para iPads usada em sala de aula: alunos da Educação Infantil e do Ensino Fundamental I criam as próprias histórias com personagens, cenários e caixas de texto digitais. As histórias são exportadas e impressas em livros físicos, entregues às famílias em um evento de autógrafos na escola.",
        "Atuei como Product Manager desde a concepção: roadmap, pesquisas com usuários, especificação de requisitos para o time de desenvolvimento e acompanhamento de perto da operação nas escolas."
      ],
      problema: [
        "Engajar alunos na leitura e na produção textual sem gerar mais trabalho para o professor. Segundo o IDEB 2019, só 56% dos alunos do 5º ano desenvolveram adequadamente a competência leitora, e as soluções do mercado transferiam ao professor a tarefa de digitalizar desenhos, diagramar livros e buscar gráficas.",
        "Vários problemas competiam por atenção: baixo engajamento na escrita, resistência das escolas à tecnologia, esforço manual dos professores, pressão dos pais por resultados visíveis e dificuldade de escalar. Priorizei pelo impacto direto na adesão: engajamento do aluno e redução do atrito do professor viraram o núcleo do MVP."
      ],
      publico: [
        "O cliente direto é a escola de Educação Infantil e Ensino Fundamental I: diretores e coordenadores decidem a contratação, e professores operam a solução com alunos de 5 a 11 anos.",
        "Professor: perde tempo com operação em vez de pedagogia. Escola: precisa se diferenciar com tecnologia acessível e mostrar resultados às famílias. Aluno: não encontra motivação na escrita tradicional."
      ],
      discovery: [
        "Antes de construir qualquer coisa, fiz mais de 60 entrevistas com pais, coordenadores e professores (42 em shoppings e nas portas das escolas, na entrada e saída dos alunos), além de entrevistas em 12 escolas.",
        "Visitei coordenações pedagógicas de várias escolas e mapeei jobs, dores e ganhos de cada persona. Dediquei cerca de um mês conversando com todos os stakeholders para desenhar o MVP antes de escrever uma linha de código. Depois, acompanhei professores presencialmente e por WhatsApp, removendo fricções em sprints semanais."
      ],
      estrategia: [
        "As entrevistas revelaram que o verdadeiro cliente não era o pai, mas a escola. Isso levou a um pivot completo do modelo de negócios, de B2C para B2B, e à reformulação da proposta de valor com base nos jobs-to-be-done das escolas.",
        "O aplicativo foi desenhado para se adequar à metodologia da escola, e não o contrário."
      ],
      hipoteses: [
        "Pivotei de B2C para B2B depois de mais de 60 entrevistas de descoberta.",
        "Identifiquei gargalos operacionais, como solicitações manuais via WhatsApp, e propus o Portal da Escola, devolvendo autonomia às professoras.",
        "Com dados de uso no Amplitude, removi funcionalidades de baixo uso e priorizei o fluxo principal de criação de histórias.",
        "Conduzi a reestruturação completa da interface gráfica, entregue 100% no prazo."
      ],
      roadmap: [
        "Combinei MoSCoW e matriz de Impacto x Esforço, sempre conectando as demandas às necessidades das escolas e à capacidade do time: um desenvolvedor sênior e um designer.",
        "Postergei personalizações visuais pedidas por escolas específicas em favor da estabilidade da experiência de criação, que afetava todos os usuários. Resisti à pressão por gamificação e realidade aumentada antes de consolidar o fluxo central: personagens, cenários e textos até o livro impresso.",
        "O argumento: uma criança travada numa tela de erro destrói a experiência do professor, e professor insatisfeito não renova o contrato. Resultado: a nova interface saiu 100% no prazo e o acervo chegou a 173 novos elementos em 3 meses, contra uma meta de 16 por mês."
      ],
      delivery: [
        "Com o desenvolvedor e o designer, criamos protótipos iterativos em sprints semanais e construímos o MVP. Validei com 198 alunos e 13 professoras em sala de aula real e iterei com dados do Amplitude e feedback direto: removi funcionalidades de baixo uso, ampliei o acervo de cenários e personagens e construí o Portal da Escola.",
        "Ao final de 2019: 6 escolas, 1.581 alunos, 85 professores e 31.620 páginas criadas pelos próprios alunos. Essa tração sustentou a decisão de evoluir para a plataforma web."
      ],
      resultados: [
        "Piloto: conversão de pais compradores de 65,6% (meta de 60%), ticket médio de R$ 38,00, margem de 43,34%, 92% das professoras com alta satisfação e 100% das escolas renovando contrato. O produto eliminou cerca de 7 horas de trabalho não pedagógico por professor por projeto.",
        "Em 12 meses, de 1 escola piloto para 6 contratantes: faturamento de R$ 8.500 para R$ 115.000 (+1.253%), alunos ativos de 200 para 1.990 (+895%) e exemplares produzidos de 224 para 2.404 (+973%). LTV/CAC de cerca de 5x e churn zero na primeira renovação."
      ],
      aprendizados: [
        "Dado qualitativo vale tanto quanto métrica. O Amplitude mostrava que as crianças usavam todos os recursos, mas foi vendo o orgulho delas na noite de autógrafos que entendi o que de fato entregávamos.",
        "Cada erro virou insumo: o SMS que não funcionou me ensinou a testar canais com o mesmo rigor das features; o WhatsApp manual mostrou que produto não se sustenta com esforço humano onde deveria haver automação; e a queda no uso das atividades gamificadas me ensinou a questionar qualquer feature antes de colocá-la no backlog.",
        "A escola não compra um app. Compra a experiência de ver seus alunos como autores."
      ]
    }
  },
  {
    id: "imaginaweb",
    image: "assets/img/cases/imaginaweb.jpg",
    imageSmall: "assets/img/cases/imaginaweb-800.jpg",
    imageAlt: "Editor de capa do ImaginaWEB rodando no navegador",
    title: "ImaginaWEB",
    type: "launched",
    role: "Product Manager · evolução do produto",
    headline: "A mudança que parecia apenas técnica fez a receita crescer 170%.",
    metrics: [
      { value: "+170%", label: "de faturamento (R$ 85 mil → R$ 230 mil)" },
      { value: "8 → 15", label: "escolas (2020 → 2021)" }
    ],
    tools: ["Miro", "Design Thinking", "Kanban", "Scrum", "Lean Startup", "Trello", "Canvas de Modelo de Negócios"],
    topics: {
      contexto: [
        "Criamos a versão web do ImaginaKIDS, para que estudantes usassem computadores pessoais para criar histórias com os mesmos recursos do app iOS, com mais escalabilidade para o produto. Ao migrar do app para o navegador, quase dobramos o número de escolas e quase triplicamos o faturamento em 12 meses."
      ],
      problema: [
        "O app só rodava em iPad, nosso único canal de acesso. Com a pandemia, as escolas fecharam e os alunos foram para casa, a maioria sem iPad. Sem escola aberta, não havia iPad. Sem iPad, não dava para construir as histórias."
      ],
      publico: [
        "Três personas interagem com o produto, mas o comprador é diferente do usuário final: a escola (decisora), o professor (que opera em sala) e o aluno de até 11 anos (que cria a história). Os pais fazem parte da jornada ao receber o livro impresso.",
        "Professor: dor operacional, quer inserir tecnologia com o mínimo de planejamento. Escola: diferenciação e relacionamento com as famílias. Aluno: engajamento com tecnologia próxima da sua realidade."
      ],
      discovery: [
        "Entrevistei escolas para entender o cenário real e as necessidades surgidas com a pandemia, e mapeei a jornada completa de cada persona: diretor/coordenador, professor, aluno e pais. Isso mostrou, por exemplo, que as professoras precisavam de acompanhamento mais próximo no início do uso.",
        "Quando a COVID-19 chegou, em abril de 2020, acompanhei as escolas e professoras já contratadas para entender a necessidade real de cada uma naquele momento. Isso ajudou a manter contratos, trouxe segurança aos clientes e originou o ImaginaWEB."
      ],
      hipoteses: [
        "Segurei contratos e renegociei, em vez de deixar a base evaporar. Em 2020, muitas escolas pediram prorrogação; conduzi a negociação entendendo que reter a relação de longo prazo valia mais que forçar uma cobrança imediata que poderia quebrar a parceria."
      ],
      roadmap: [
        "Pivotar rápido: com as escolas fechadas, o modelo baseado em iPads parou de funcionar. Em vez de esperar um cenário mais claro, decidi adaptar o produto, visual e tecnicamente, para rodar em navegador. Sem isso, a empresa perderia a base de alunos ativos.",
        "Operar o MVP mesmo assim: o ImaginaWEB nasceu sobre uma infraestrutura de banco de dados que não foi pensada para ele. Decidi seguir operando e comercializando, priorizando entregar valor primeiro e assumindo o custo de manutenção depois, sabendo onde estava o risco. Depois, o MVP virou produto, com o banco de dados estruturado, e iniciamos a venda para novos clientes."
      ],
      delivery: [
        "Conduzi a adaptação do produto para o navegador, repensando interface e fluxos que dependiam do iPad. Nasceu o ImaginaWEB: bastava um computador, iPad ou tablet com internet."
      ],
      resultados: [
        "Em 2020 fechamos com 8 escolas e R$ 85 mil de faturamento. Em 2021, já com o ImaginaWEB no ar, chegamos a 15 escolas e R$ 230 mil: quase o dobro de escolas e o faturamento quase triplicado (+170%).",
        "A proposta pedagógica não mudou. Mudou o canal de acesso, e isso destravou a escala."
      ],
      aprendizados: [
        "Migrar de app para web não foi sobre tecnologia por tecnologia. Foi sobre remover a barreira que impedia mais escolas de chegarem até nós."
      ]
    }
  },
  {
    id: "imaginashopping",
    image: "assets/img/cases/imaginashopping.jpg",
    imageSmall: "assets/img/cases/imaginashopping-800.jpg",
    imageAlt: "Página de compra de livros do ImaginaShopping, com os combos disponíveis",
    title: "ImaginaShopping",
    type: "launched",
    role: "Product Manager · e-commerce de livros",
    headline: "Do balcão da secretaria ao e-commerce: 180 → 2.800 exemplares vendidos.",
    metrics: [
      { value: "+1.455%", label: "em volume de vendas (180 → 2.800 exemplares)" },
      { value: "+55%", label: "de livros comprados por aluno" },
      { value: "90%", label: "de conversão no primeiro ciclo (MVP)" }
    ],
    tools: ["Lean Startup", "Miro", "Scrum", "Design Thinking", "Trello", "RICE", "Canvas de Modelo de Negócios"],
    topics: {
      contexto: [
        "E-commerce responsivo para os pais comprarem pacotes de livros, aplicarem códigos de desconto e pagarem com cartão ou Pix, integrado a serviços gráficos parceiros para impressão e envio."
      ],
      problema: [
        "O desafio central era evitar que o crescimento quebrasse a experiência do cliente. Saímos de 1 escola com 200 alunos para 8 escolas com 2.000 alunos. Com média de 1,5 exemplar por criança, eram cerca de 3.000 transações por ciclo geridas manualmente pelas secretarias: receber o pagamento, registrar o nome do pai e a quantidade, prestar contas.",
        "Esse problema tinha uma característica que os outros não tinham: uma data de vencimento. O período de compras era previsível e chegaria antes de qualquer outra entrega. Priorizei o ImaginaShopping não por ser o mais pedido, mas por ter o maior risco de impacto negativo se não fosse resolvido a tempo."
      ],
      publico: [
        "Os pais estavam do outro lado da experiência mais emocionante do produto: o filho tinha escrito um livro e o evento de autógrafos estava chegando. Eram clientes com alta intenção de compra, só faltava um canal para comprar.",
        "Enxerguei três lados: pais que precisavam de praticidade, escolas que não podiam desviar a secretaria para filas e pagamentos, e a operação interna, que precisava de dados confiáveis para fechar os pedidos com a gráfica."
      ],
      discovery: [
        "Percebi o problema antes que virasse crise: o modelo de compra presencial na recepção não escalava. Não esperei reclamação formal, antecipei o gargalo e propus a solução.",
        "Nas formas de pagamento, priorizei o que os pais de fato usam: Pix, cartão à vista e parcelado."
      ],
      hipoteses: [
        "Quando a primeira escola começou a usar o sistema, avisei proativamente que 50% dos pais já tinham comprado. A escola respondeu pedindo a lista de quem já havia comprado, para lembrar os demais. Incluí a listagem como entrega imediata, sem esperar o próximo ciclo de planejamento.",
        "Fluxo de simplificação radical: link, cadastro mínimo, código alfanumérico do aluno, confirmação de nome, ano e escola, e só então a compra, com unidade avulsa ou combos com desconto.",
        "A carta de boas-vindas com o passo a passo e o código foi iniciativa nossa: um código sem contexto leva ao abandono."
      ],
      roadmap: [
        "Usei RICE para priorizar. Estávamos no meio da reestruturação de uma nova versão da plataforma, e dev e design questionaram a mudança de prioridade. Defendi o ImaginaShopping porque uma falha na compra comprometeria ao mesmo tempo os dois decisores, escola e pais, em um ciclo que não dá para refazer no mesmo ano.",
        "Assumi o trade-off de atrasar parte do cronograma para proteger a operação de escolas de médio e grande porte, que toleram menos improviso. As demais entregas foram reajustadas e saíram no prazo."
      ],
      delivery: [
        "Uma página de compras integrada ao sistema de geração de livros, com layout limpo e fluxo simples, pensando em pais acessando pelo celular. Antes de abrir aos clientes, rodamos testes internos de simulação de compra e de integração, do acesso à confirmação do pagamento.",
        "A iteração usou as escolas como canal de escuta: após cada ciclo, colhíamos feedback das coordenações sobre como os pais se saíram, e a escola funcionou como sensor de usabilidade."
      ],
      resultados: [
        "No primeiro ciclo (MVP), com uma escola e 200 alunos, foram 180 exemplares: 90% de conversão. No ano seguinte, com o ImaginaShopping em todas as escolas, 2.800 exemplares para 2.000 alunos: +1.455% em volume (15,6x) e +55% de livros por aluno, reflexo dos combos com desconto.",
        "Eliminamos o atrito de compra na secretaria de 8 escolas: nenhuma precisou de um funcionário dedicado a receber pagamento e prestar contas. Nenhuma reclamação de fluxo e nenhuma solicitação de mudança."
      ],
      aprendizados: [
        "Confiança vem da simplicidade: o que fazia os pais completarem a compra não era um sistema sofisticado, e sim um claro. Simplicidade é a forma mais alta de respeito pelo tempo do usuário.",
        "O lembrete é cuidado, não cobrança: quando a escola avisava os pais que ainda não tinham comprado, as aquisições aumentavam expressivamente.",
        "A compra era afetiva, não transacional: os pais compravam um momento, a presença no evento e a memória do filho autor. Por isso os combos e a mensagem \"compre para toda a família\" funcionavam tão bem."
      ]
    }
  }
];

window.TOOLS = ["Jira", "Figma", "Miro", "ChatGPT", "Claude"];
