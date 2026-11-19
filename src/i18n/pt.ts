export const pt = {
  htmlLang: "pt-BR",
  meta: {
    title: "Anne Fernandes — Ciência de Dados & IA",
    description:
      "Portfólio de Anne Fernandes: pipelines RAG, busca vetorial e sistemas com LLMs.",
  },
  header: {
    contact: "Contato",
    home: "Anne Fernandes — início",
    switchLabel: "EN",
    switchAria: "English version",
  },
  hero: {
    label: "Ciência de Dados & IA",
    cta: "Ver experiência",
  },
  strip: {
    num: "Nº 02",
    range: "2021 — hoje",
    title: "Trajetória",
    panels: [
      {
        when: "2021 – 2023",
        role: "Técnico em Informática",
        org: "IFPB",
        detail: "Média 93,94 · TCC OlympiQuiz",
        speech: "Hello, world.",
      },
      {
        when: "2023 – 2025",
        role: "Full Stack",
        org: "Synchro · IDE.IA/IFPB",
        detail: "React, MobX, Spring Boot, SAP Hana",
        speech: "Funciona na minha máquina.",
      },
      {
        when: "2025 – hoje",
        role: "Applied AI",
        org: "Synchro · LASER/UFPB",
        detail: "RAG, agentes e LLMs",
        speech: "O modelo que disse.",
      },
      {
        when: "2027",
        role: "Ciência de Dados & IA",
        org: "UFPB",
        detail: "Bacharelado em andamento",
        speech: "Continua…",
      },
    ],
  },
  experience: {
    num: "Nº 03",
    range: "2023 — hoje",
    title: "Experiência",
    techLabel: "Tecnologias",
    entries: [
      {
        period: "07/2025 – hoje",
        org: "Synchro",
        role: "Applied AI Developer",
        via: "Bolsa de pesquisa · IDE.IA/IFPB → LASER/UFPB",
        about: "Líder em compliance tributário no Brasil: 400+ grupos econômicos e 14 mil usuários.",
        items: [
          {
            name: "Infraestrutura de IA",
            text: "Base que sustenta os produtos de IA da empresa: pipelines de ingestão e bases vetoriais para RAG, orquestração de agentes e ferramentas com LLMs que apoiam o dia a dia dos desenvolvedores.",
            tags: [
              "RAG",
              "Busca vetorial",
              "FastAPI",
              "Pipelines de dados",
              "LLMs",
              "Agentes",
            ],
          },
        ],
      },
      {
        period: "04/2023 – 07/2025",
        org: "Synchro",
        role: "Full Stack Developer",
        via: "Bolsa de pesquisa · IDE.IA/IFPB",
        items: [
          {
            name: "Synchro4TDF",
            text: "Módulos centrais da extensão SAP TDF/Hana usada pelos 400+ clientes da Synchro, estabilizando fluxos fiscais em produção.",
            tags: ["SAP Hana", "Fiscal"],
          },
          {
            name: "Do front ao banco",
            text: "Componentes em React + MobX e serviços em Spring Boot + JPA, com persistência em SAP Hana e versionamento via Liquibase.",
            tags: ["React", "MobX", "Spring Boot"],
          },
          {
            name: "Squads multidisciplinares",
            text: "Evolução de módulos legados e novas features ao lado de especialistas tributários.",
            tags: ["Legado", "Produto"],
          },
        ],
      },
      {
        period: "2026",
        org: "ObraPonto",
        role: "Lead Database Designer",
        via: "Voluntariado · Connecta CI – UFPB",
        items: [
          {
            name: "Banco multi-tenant",
            text: "PostgreSQL (Supabase) e pipeline FastAPI para uma plataforma de ponto com IA edge-to-cloud, estruturando vetores faciais para retreino contínuo.",
            tags: ["Supabase", "FastAPI"],
          },
          {
            name: "Segurança e borda",
            text: "Row Level Security por cliente, expurgo conforme a LGPD e sincronização idempotente para dispositivos offline.",
            tags: ["RLS", "LGPD", "Edge"],
          },
        ],
      },
    ],
  },
  academic: {
    num: "Nº 04",
    range: "IFPB · UFPB · 2023 —",
    title: "Projetos acadêmicos",
    // mesma ordem dos glifos em Academic.astro
    projects: [
      {
        course: "TCC · Técnico em Informática · IFPB",
        name: "OlympiQuiz",
        text: "Plataforma web e app mobile com banco de questões e gestão de turmas, para incluir estudantes de todas as realidades nas Olimpíadas de Matemática.",
        tags: ["Web", "Mobile", "Acessibilidade"],
      },
      {
        course: "Introdução à IA",
        name: "Detecção de Pneumonia",
        text: "Pipeline de deep learning com transfer learning em ResNet50 para classificar raios-X de tórax entre pneumonia e saudável, avaliado por recall e matriz de confusão.",
        tags: ["TensorFlow", "Keras", "ResNet50", "Docker"],
      },
      {
        course: "Introdução à Ciência de Dados",
        name: "DocAI",
        text: "Crawler feito para coletar e estruturar um dataset de PDFs de um tribunal público, extraindo metadados para análise posterior.",
        tags: ["Selenium", "BeautifulSoup", "Python"],
      },
      {
        course: "Aprendizado de Máquina",
        name: "Manutenção Preditiva",
        text: "Dois classificadores binários (MLP em Keras e Árvore de Decisão em Scikit-learn) para prever falhas de máquina a partir de sensores, comparados por validação cruzada e dimensão VC.",
        tags: ["Keras", "Scikit-learn", "Validação cruzada"],
      },
    ],
  },
  logbook: {
    num: "Nº 05",
    side: "Habilidades",
    title: "Diário de bordo",
    skills: [
      [
        "IA & Dados",
        "RAG, orquestração de LLMs, pgvector, Qdrant, Dagster, Scikit-learn, Keras/TensorFlow, Visão Computacional",
      ],
      ["Linguagens", "Python, TypeScript, JavaScript, Java, C/C++"],
      ["Ferramentas", "FastAPI, React, Spring Boot, MobX, Docker, Git, Linux"],
      ["Bancos", "PostgreSQL, Oracle, SAP Hana, MongoDB, MinIO"],
    ],
    honorsTitle: "Distinções",
    honors: [
      [
        "2022",
        "Bolsa integral de intercâmbio no Canadá — 1º lugar na seleção do campus",
      ],
      ["2023", "Cambridge English — B2"],
    ],
    stamp: "Registro · 2026",
  },
  footer: {
    label: "Contato",
    location: "João Pessoa, PB",
    tribute: "Com uma reverência a Charles M. Schulz.",
  },
};

export type Dict = typeof pt;
