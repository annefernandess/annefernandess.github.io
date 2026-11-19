import type { Dict } from "./pt";

export const en: Dict = {
  htmlLang: "en",
  meta: {
    title: "Anne Fernandes — Data Science & AI",
    description:
      "Anne Fernandes' portfolio: RAG pipelines, vector search and LLM-based systems.",
  },
  header: {
    contact: "Contact",
    home: "Anne Fernandes — home",
    switchLabel: "PT",
    switchAria: "Versão em português",
  },
  hero: {
    label: "Data Science & AI",
    cta: "See experience",
  },
  strip: {
    num: "No. 02",
    range: "2021 — today",
    title: "Journey",
    panels: [
      {
        when: "2021 – 2023",
        role: "IT Technician",
        org: "IFPB",
        detail: "GPA 93.94/100 · Capstone: OlympiQuiz",
        speech: "Hello, world.",
      },
      {
        when: "2023 – 2025",
        role: "Full Stack",
        org: "Synchro · IDE.IA/IFPB",
        detail: "React, MobX, Spring Boot, SAP Hana",
        speech: "Works on my machine.",
      },
      {
        when: "2025 – today",
        role: "Applied AI",
        org: "Synchro · LASER/UFPB",
        detail: "RAG, agents and LLMs",
        speech: "The model said so.",
      },
      {
        when: "2027",
        role: "Data Science & AI",
        org: "UFPB",
        detail: "B.S. in progress",
        speech: "To be continued…",
      },
    ],
  },
  experience: {
    num: "No. 03",
    range: "2023 — today",
    title: "Experience",
    techLabel: "Technologies",
    entries: [
      {
        period: "07/2025 – present",
        org: "Synchro",
        role: "Applied AI Developer",
        via: "Research scholarship · IDE.IA/IFPB → LASER/UFPB",
        about: "Brazil's leading tax compliance provider: 400+ economic groups and 14,000+ users.",
        items: [
          {
            name: "AI infrastructure",
            text: "The foundation behind the company's AI products: ingestion pipelines and vector stores for RAG, agent orchestration, and LLM-powered tools that support developers' day-to-day work.",
            tags: [
              "RAG",
              "Vector search",
              "FastAPI",
              "Data pipelines",
              "LLMs",
              "Agents",
            ],
          },
        ],
      },
      {
        period: "04/2023 – 07/2025",
        org: "Synchro",
        role: "Full Stack Developer",
        via: "Research scholarship · IDE.IA/IFPB",
        items: [
          {
            name: "Synchro4TDF",
            text: "Core modules of the SAP TDF/Hana extension used by Synchro's 400+ clients, stabilizing tax workflows in production.",
            tags: ["SAP Hana", "Tax"],
          },
          {
            name: "Front to back",
            text: "React + MobX components and Spring Boot + JPA services, with SAP Hana persistence and Liquibase versioning.",
            tags: ["React", "MobX", "Spring Boot"],
          },
          {
            name: "Cross-functional squads",
            text: "Evolved legacy modules and shipped new features alongside tax specialists.",
            tags: ["Legacy", "Product"],
          },
        ],
      },
      {
        period: "2026",
        org: "ObraPonto",
        role: "Lead Database Designer",
        via: "Volunteer · Connecta CI – UFPB",
        items: [
          {
            name: "Multi-tenant database",
            text: "PostgreSQL (Supabase) and a FastAPI pipeline for an edge-to-cloud AI time-tracking platform, structuring facial vectors for continuous retraining.",
            tags: ["Supabase", "FastAPI"],
          },
          {
            name: "Security at the edge",
            text: "Per-tenant Row Level Security, LGPD-compliant data deletion and idempotent sync for offline devices.",
            tags: ["RLS", "LGPD", "Edge"],
          },
        ],
      },
    ],
  },
  academic: {
    num: "No. 04",
    range: "IFPB · UFPB · 2023 —",
    title: "Academic projects",
    projects: [
      {
        course: "Capstone · Technical High School · IFPB",
        name: "OlympiQuiz",
        text: "Web platform and mobile app with question banks and classroom management, bringing students from every background into Math Olympiads.",
        tags: ["Web", "Mobile", "Accessibility"],
      },
      {
        course: "Intro to AI",
        name: "Pneumonia Detection",
        text: "Deep learning pipeline using ResNet50 transfer learning to classify chest X-rays as pneumonia or healthy, evaluated with recall and confusion matrices.",
        tags: ["TensorFlow", "Keras", "ResNet50", "Docker"],
      },
      {
        course: "Intro to Data Science",
        name: "DocAI",
        text: "Crawler built to collect and structure a dataset of PDFs from a public court system, extracting metadata for later analysis.",
        tags: ["Selenium", "BeautifulSoup", "Python"],
      },
      {
        course: "Machine Learning",
        name: "Predictive Maintenance",
        text: "Two binary classifiers (Keras MLP and Scikit-learn Decision Tree) predicting machine failure from sensor data, compared via cross-validation and VC dimension.",
        tags: ["Keras", "Scikit-learn", "Cross-validation"],
      },
    ],
  },
  logbook: {
    num: "No. 05",
    side: "Skills",
    title: "Logbook",
    skills: [
      [
        "AI & Data",
        "RAG, LLM orchestration, pgvector, Qdrant, Dagster, Scikit-learn, Keras/TensorFlow, Computer Vision",
      ],
      ["Languages", "Python, TypeScript, JavaScript, Java, C/C++"],
      ["Tools", "FastAPI, React, Spring Boot, MobX, Docker, Git, Linux"],
      ["Databases", "PostgreSQL, Oracle, SAP Hana, MongoDB, MinIO"],
    ],
    honorsTitle: "Honors",
    honors: [
      [
        "2022",
        "Fully funded exchange scholarship to Canada — 1st place in campus selection",
      ],
      ["2023", "Cambridge English — B2 (Upper-Intermediate)"],
    ],
    stamp: "Log · 2026",
  },
  footer: {
    label: "Contact",
    location: "João Pessoa, Brazil",
    tribute: "With a bow to Charles M. Schulz.",
  },
};
