import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Link from "next/link";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="container py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className="flex gap-4 mb-6">
            <Link
              href={project.demoUrl}
              target="_blank"
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700"
            >
              Live Demo
            </Link>
            <Link
              href={project.githubUrl}
              target="_blank"
              className="px-4 py-2 rounded-lg border border-gray-600 hover:border-gray-400"
            >
              View Code
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Section title="Challenge">
              <p className="text-gray-400">{project.problem}</p>
            </Section>
            
            <Section title="Solution">
              <p className="text-gray-400">{project.solution}</p>
            </Section>
          </div>

          <div className="space-y-8">
            <Section title="Impact">
              <ul className="space-y-4">
                {project.metrics.map((metric, index) => (
                  <li 
                    key={index}
                    className="flex items-center p-4 bg-gray-900 rounded-lg"
                  >
                    {metric}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title="Tech Stack">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="flex items-center px-3 py-1 rounded-full bg-gray-800 text-sm"
                  >
                    <i className={`devicon-${tech.toLowerCase()}-plain mr-2`} />
                    {tech}
                  </span>
                ))}
              </div>
            </Section>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      {children}
    </div>
  );
}