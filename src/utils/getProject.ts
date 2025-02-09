import { projects, Project } from "@/data/projects";

// Fetch a single project by slug
export async function getProject(slug: string): Promise<Project | null> {
  await new Promise((resolve) => setTimeout(resolve, 100)); // Simulate async delay
  return projects.find((p) => p.slug === slug) || null;
}