export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  metrics: string[];
  demoUrl: string;
  githubUrl: string;
  image: string;
  categories: string[];
  problem: string;
  solution: string;
}

export const projects: Project[] = [
  {
    slug: "ecommerce-platform",
    title: "High-Performance E-Commerce Platform",
    description:
      "Scalable Next.js e-commerce solution handling 50k+ monthly users",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Redis",
      "GraphQL",
      "PostgreSQL",
    ],
    metrics: [
      "⚡ 300ms page loads with ISR",
      "📈 25% conversion rate increase",
      "🛒 40% cart completion boost",
      "🔒 PCI-DSS compliant checkout",
    ],
    demoUrl: "https://akeza.vercel.app",
    githubUrl: "https://github.com/TEMESGENTIKABO/E-COMMERCE",
    image: "/projects/ecommerce.jpg",
    categories: ["E-Commerce", "Full-Stack"],
    problem:
      "Traditional e-commerce platforms struggled with real-time inventory management and poor mobile performance during peak traffic periods.",
    solution:
      "Built a headless commerce solution with Next.js for SSR/ISR, Redis for real-time caching, and GraphQL for efficient data fetching. Implemented a mobile-first responsive design with optimized Web Vitals scores.",
  },
  {
    "slug": "inventory-management",
    "title": "Akeza Inventory Management System",
    "description": "A real-time inventory tracking and analytics platform for businesses.",
    "tech": ["React", "WebSocket", "D3.js", "Express", "MongoDB", "Kubernetes"],
    "metrics": [
      "📦 10,000+ inventory items managed daily",
      "⏱️ 70% reduction in stock reconciliation time",
      "🔔 Automated alerts for low stock and anomalies",
      "📊 Real-time tracking with 99.9% uptime"
    ],
    "demoUrl": "https://akeza-inventory.onrender.com/",
    "githubUrl": "https://github.com/TEMESGENTIKABO/",
    "image": "/projects/inventory.jpg",
    "categories": ["Inventory Management", "Business Analytics", "Automation"],
    "problem": "Businesses struggled with inaccurate inventory tracking, delayed reporting, and stock discrepancies, leading to inefficiencies and revenue loss.",
    "solution": "Built a real-time inventory management system with WebSocket integration for instant updates, D3.js for interactive analytics, and an automated alert system for proactive stock management. Implemented role-based access control and enterprise-grade security for data protection."
  },  
  {
    slug: "ai-note-taking-bot",
    title: "AI-Powered Note-Taking Chatbot",
    description:
      "A smart and intuitive chatbot for effortless note-taking, summarization, and organization.",
    tech: ["Next.js", "GPT-4", "Pinecone", "React", "Tailwind CSS", "MongoDB"],
    metrics: [
      "📝 10,000+ notes processed daily",
      "⚡ 70% faster note organization",
      "🌍 Multi-language support (EN/ES/FR/DE)",
      "🔄 100k+ weekly API requests",
    ],
    demoUrl: "https://akeza-ai.vercel.app/",
    githubUrl: "https://github.com/TEMESGENTIKABO/NOTE-TAKING-AI",
    image: "/projects/ai-content.jpg",
    categories: ["AI/ML", "Productivity", "Automation"],
    problem:
      "Users struggle with organizing, retrieving, and summarizing notes efficiently, leading to information overload and lost productivity.",
    solution:
      "Developed an AI-powered chatbot that transcribes, summarizes, and categorizes notes in real-time. Integrated GPT-4 for intelligent text processing, Pinecone for semantic search, and collaborative features for seamless organization.",
  },

  {
    slug: "resume-builder",
    title: "Automated Resume Builder",
    description:
      "A smart and efficient platform for crafting professional resumes effortlessly.",
    tech: ["React Native", "TypeScript", "Firebase", "Next.js", "Tailwind CSS"],
    metrics: [
      "📄 10,000+ resumes generated",
      "🚀 80% faster resume creation process",
      "🎯 AI-powered content suggestions",
      "🔒 Secure cloud storage for resumes",
    ],
    demoUrl: "https://resume-maker-vert.vercel.app/",
    githubUrl: "https://github.com/TEMESGENTIKABO/Resume-maker",
    image: "/projects/resume.png",
    categories: ["Career Development", "Productivity", "SaaS"],
    problem:
      "Job seekers often struggle to create well-structured, ATS-friendly resumes quickly and efficiently.",
    solution:
      "Developed an AI-driven resume builder with customizable templates, real-time editing, and ATS optimization. Integrated Firebase for cloud storage and Next.js for a seamless web experience.",
  },
];
