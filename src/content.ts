// src/content.ts

export type ProjectTag = 'AI/ML' | 'Data' | 'Delivery'

// Full typing for projects yeahhhhh
export type FeaturedProject = {
  title: string
  subtitle: string
  problem: string
  solution: string
  impact: string
  stack: string[]
  tags: ProjectTag[]
  links: {
    demo: string
    repo: string
  }
}

export const content = {
  name: 'Aakash Chaudhary',
  location: 'Mumbai, India',
  headline: 'Building fair, explainable AI systems that earn trust.',
  intro:
    'B.Tech CSE (AI & ML) student focused on human-in-the-loop ML, data products, and robust evaluation. I turn messy data and vague requirements into clear, compliant, high-impact outcomes.',
  links: {
    email: 'aakashchy018@gmail.com',
    phone: '+91 8451848007',
    github: 'https://github.com/aakashAI1',
    linkedin: 'https://www.linkedin.com/in/aakash-chaudhary-948217391/',
    instagram: 'https://www.instagram.com/aakash_chyy',
  },
  about: {
    title: 'I build AI that is measurable, interpretable, and production-minded.',
    body: [
      'My work sits at the intersection of ML, data engineering, and product delivery—where accuracy alone is not enough.',
      'I care about bias detection, explainability, and testable decision-making. If a model can’t be explained, stress-tested, and monitored, it can’t be trusted.',
    ],
    focus: [
      'Human-in-the-loop workflows',
      'Fairness + compliance evaluation',
      'Synthetic data + edge-case testing with GenAI',
      'PDF/web extraction → structured insights',
    ],
  },
  featuredProjects: [
    {
      title: 'AI Fair Lending System (Human-in-the-Loop)',
      subtitle: 'Deloitte Industry Capstone',
      problem:
        'Loan decisions can amplify bias and fail compliance if models are opaque or untested across sensitive segments.',
      solution:
        'Built a human-in-the-loop evaluation workflow with interpretable models (e.g., EBM), dataset augmentation, and fairness/performance metrics.',
      impact:
        'Improved robustness and explainability using GenAI-driven synthetic data and edge-case test generation—making decisions auditable and easier to validate.',
      stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'SQL', 'Interpretable ML (EBM)'],
      tags: ['AI/ML'],
      links: {
        demo: '',
        repo: '',
      },
    },
    {
      title: 'Client-facing Data Product (PDF → Insights)',
      subtitle: 'Think Analytics India Pvt. Ltd (Internship)',
      problem:
        'Teams needed structured insights from unstructured PDFs across the web—manually extracting data was slow and error-prone.',
      solution:
        'Scraped sources, extracted structured fields from PDFs, and built cleaning + preprocessing pipelines for analysis-ready datasets.',
      impact:
        'Delivered actionable intelligence and client-ready reporting across the full lifecycle: collection → transformation → final deliverables.',
      stack: ['Python', 'Web scraping', 'Data wrangling', 'Analytical reporting'],
      tags: ['Data', 'Delivery'],
      links: {
        demo: '',
        repo: '',
      },
    },
  ] as FeaturedProject[],
  skills: [
    {
      label: 'Languages',
      items: ['Python', 'C', 'SQL'],
    },
    {
      label: 'AI / Data',
      items: ['Machine Learning', 'Data Science', 'Bias & fairness evaluation', 'Synthetic data testing'],
    },
    {
      label: 'Tools',
      items: ['Pandas', 'NumPy', 'Matplotlib', 'Web scraping'],
    },
    {
      label: 'Strengths',
      items: ['Problem solving', 'Critical thinking', 'Leadership', 'Negotiation', 'Communication'],
    },
  ],
  experience: [
    {
      role: 'Capstone Contributor',
      company: 'Deloitte (Industry Capstone)',
      period: 'Nov 2025 – Jan 2026',
      bullets: [
        'Developed an AI human-in-the-loop framework for fair student loan decision-making with compliance-aware evaluation.',
        'Prepared and augmented datasets; evaluated interpretable pre-trained models (e.g., EBM) using fairness and performance metrics.',
        'Used GenAI to create synthetic data, generate edge-case tests, and validate model behavior for robustness and explainability.',
      ],
    },
    {
      role: 'Data Analyst Intern',
      company: 'Think Analytics India Pvt. Ltd',
      period: 'Jun 2025 – Jul 2025',
      bullets: [
        'Built a client-facing data product by extracting structured insights from unstructured PDF data found across the web.',
        'Performed cleaning, preprocessing, and analysis to transform raw datasets into decision-ready intelligence.',
        'Contributed end-to-end—from collection and transformation to deliverables presented to clients.',
      ],
    },
  ],
} as const