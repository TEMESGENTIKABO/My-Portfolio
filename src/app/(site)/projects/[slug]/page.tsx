import ProjectDetails from "@/components/ProjectDetails";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

// src/app/(site)/projects/[slug]/page.tsx
export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();
  return <ProjectDetails project={project} />;
}