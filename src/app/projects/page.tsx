"use client";
import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectDetails from "@/components/ProjectDetails";
import ProjectsShowcase from "@/components/ProjectsShowcase";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<{ slug: string; image: string; title: string; categories: string[]; description: string; tech: string[]; demoUrl: string; githubUrl: string; problem: string; solution: string; metrics: string[]; } | null>(null);

  // Show project details if a project is selected
  if (selectedProject) {
    return (
      <ProjectDetails
        project={selectedProject}
        onBack={() => setSelectedProject(null)}
      />
    );
  }

  // Show the projects grid if no project is selected
  return <ProjectsShowcase onSelectProject={setSelectedProject} />;
}