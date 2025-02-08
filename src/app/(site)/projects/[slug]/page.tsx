// src/app/(site)/projects/[slug]/page.tsx (Server Component)
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectDetails from "@/components/ProjectDetails";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();
  return <ProjectDetails project={project} />;
}