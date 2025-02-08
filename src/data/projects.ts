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
    description: "Scalable Next.js e-commerce solution handling 50k+ monthly users",
    tech: ["Next.js", "TypeScript", "Node.js", "Redis", "GraphQL", "PostgreSQL"],
    metrics: [
      "⚡ 300ms page loads with ISR",
      "📈 25% conversion rate increase",
      "🛒 40% cart completion boost",
      "🔒 PCI-DSS compliant checkout"
    ],
    demoUrl: "https://demo-ecommerce.vercel.app",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    image: "/projects/ecommerce.jpg",
    categories: ['E-Commerce', 'Full-Stack'],
    problem: "Traditional e-commerce platforms struggled with real-time inventory management and poor mobile performance during peak traffic periods.",
    solution: "Built a headless commerce solution with Next.js for SSR/ISR, Redis for real-time caching, and GraphQL for efficient data fetching. Implemented a mobile-first responsive design with optimized Web Vitals scores."
  },
  {
    slug: "saas-analytics",
    title: "Real-Time Business Intelligence Dashboard",
    description: "Enterprise-grade analytics platform for SaaS metrics",
    tech: ["React", "WebSocket", "D3.js", "Express", "MongoDB", "Kubernetes"],
    metrics: [
      "📊 50+ real-time tracked metrics",
      "⏱️ 70% reduction in decision-making time",
      "🔔 Custom alert system with 99.9% uptime",
      "📈 30% MRR growth through insights"
    ],
    demoUrl: "https://analytics-demo.vercel.app",
    githubUrl: "https://github.com/yourusername/saas-analytics",
    image: "/projects/analytics.jpg",
    categories: ['Analytics', 'SaaS'],
    problem: "Companies lacked actionable insights from their SaaS metrics due to delayed reporting and limited visualization capabilities.",
    solution: "Developed a real-time dashboard with WebSocket integration for live updates, D3.js for advanced visualizations, and custom alerting system. Implemented role-based access control and enterprise-grade security."
  },
  {
    slug: "ai-content-generator",
    title: "AI-Powered Content Generation Suite",
    description: "Enterprise content automation using GPT-4 and NLP",
    tech: ["Python", "GPT-4", "FastAPI", "React", "Tailwind CSS", "AWS Lambda"],
    metrics: [
      "🤖 90% content creation time reduction",
      "📝 150+ customizable templates",
      "🌐 Multi-language support (EN/ES/FR/DE)",
      "🔄 100k+ weekly API requests"
    ],
    demoUrl: "https://ai-content-generator.vercel.app",
    githubUrl: "https://github.com/yourusername/ai-content-generator",
    image: "/projects/ai-content.jpg",
    categories: ['AI/ML', 'Automation'],
    problem: "Marketing teams wasted hundreds of hours monthly on repetitive content creation with inconsistent quality and brand voice.",
    solution: "Created an AI-powered platform with GPT-4 integration for high-quality content generation, template system for brand consistency, and collaborative workflow features. Implemented rate limiting and content moderation APIs."
  },
  {
    slug: "healthcare-platform",
    title: "Telemedicine Healthcare Platform",
    description: "Secure patient-doctor communication and EHR management",
    tech: ["React Native", "TypeScript", "Firebase", "HIPAA", "WebRTC"],
    metrics: [
      "👩⚕️ 500+ daily consultations",
      "📈 40% patient retention increase",
      "🔒 HIPAA/GDPR compliant",
      "⏱️ 2-minute appointment setup"
    ],
    demoUrl: "https://healthcare-demo.vercel.app",
    githubUrl: "https://github.com/yourusername/healthcare-platform",
    image: "/projects/healthcare.jpg",
    categories: ['Healthcare', 'Mobile'],
    problem: "Patients faced long wait times for basic consultations while doctors struggled with inefficient EHR management systems.",
    solution: "Developed a secure telemedicine platform with WebRTC video calls, EHR integration, and AI-powered symptom checker. Implemented end-to-end encryption and compliance with healthcare regulations."
  }
];