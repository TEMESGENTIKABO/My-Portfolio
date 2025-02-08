export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon: string;
  proficiency: number; 
  description: string;
}

export const skills: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      {
        name: 'React',
        icon: 'react',
        proficiency: 90,
        description: 'Building dynamic and responsive UIs with React and Next.js.',
      },
      {
        name: 'Angular',
        icon: 'angular',
        proficiency: 80,
        description: 'Developing enterprise-scale applications with Angular framework.',
      },
      {
        name: 'Vue.js',
        icon: 'vue.js',
        proficiency: 75,
        description: 'Creating lightweight interactive UIs using Vue.js.',
      },
      {
        name: 'TypeScript',
        icon: 'typescript',
        proficiency: 85,
        description: 'Implementing type-safe applications with TypeScript.',
      },
      {
        name: 'Tailwind CSS',
        icon: 'tailwindcss',
        proficiency: 95,
        description: 'Crafting modern, utility-first designs with Tailwind.',
      },
      {
        name: 'Redux',
        icon: 'redux',
        proficiency: 85,
        description: 'Managing application state with Redux state container.',
      },
      {
        name: 'Jest',
        icon: 'jest',
        proficiency: 80,
        description: 'Writing comprehensive unit tests with Jest.',
      },
      {
        name: 'Cypress',
        icon: 'cypress',
        proficiency: 75,
        description: 'Developing end-to-end tests using Cypress.',
      }
    ],
  },
  {
    title: 'Backend',
    skills: [
      {
        name: 'Node.js',
        icon: 'nodejs',
        proficiency: 90,
        description: 'Building RESTful APIs and microservices with Node.js.',
      },
      {
        name: 'Express',
        icon: 'express',
        proficiency: 85,
        description: 'Developing server-side applications with Express.',
      },
      {
        name: 'PostgreSQL',
        icon: 'postgresql',
        proficiency: 80,
        description: 'Designing relational databases with PostgreSQL.',
      },
      {
        name: 'MongoDB',
        icon: 'mongodb',
        proficiency: 75,
        description: 'Working with NoSQL databases using MongoDB.',
      },
      {
        name: 'GraphQL',
        icon: 'graphql',
        proficiency: 70,
        description: 'Implementing GraphQL APIs for efficient data querying.',
      },
      {
        name: 'Django',
        icon: 'django',
        proficiency: 65,
        description: 'Building Python web applications with Django framework.',
      },
      {
        name: 'Passport.js',
        icon: 'passport',
        proficiency: 70,
        description: 'Implementing authentication strategies with Passport.js.',
      }
    ],
  },
  {
    title: 'DevOps',
    skills: [
      {
        name: 'Docker',
        icon: 'docker',
        proficiency: 85,
        description: 'Containerizing applications using Docker.',
      },
      {
        name: 'Kubernetes',
        icon: 'kubernetes',
        proficiency: 75,
        description: 'Orchestrating containers with Kubernetes.',
      },
      {
        name: 'AWS',
        icon: 'amazonwebservices',
        proficiency: 80,
        description: 'Deploying and managing cloud infrastructure on AWS.',
      },
      {
        name: 'Terraform',
        icon: 'terraform',
        proficiency: 70,
        description: 'Implementing infrastructure as code with Terraform.',
      },
      {
        name: 'GitHub Actions',
        icon: 'githubactions',
        proficiency: 85,
        description: 'Automating CI/CD pipelines with GitHub Actions.',
      },
      {
        name: 'Prometheus',
        icon: 'prometheus',
        proficiency: 65,
        description: 'Monitoring systems with Prometheus and Grafana.',
      },
      {
        name: 'Jenkins',
        icon: 'jenkins',
        proficiency: 70,
        description: 'Configuring build pipelines using Jenkins.',
      },
      {
        name: 'Nginx',
        icon: 'nginx',
        proficiency: 75,
        description: 'Setting up reverse proxies and load balancers with Nginx.',
      }
    ],
  },
];