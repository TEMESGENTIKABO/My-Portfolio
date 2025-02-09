"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { projects } from "@/data/projects";
import ProjectDetails from "@/components/ProjectDetails";
import ProjectsShowcase from "@/components/ProjectsShowcase";

export default function ProjectsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const projectId = searchParams.get("id");

  // Find the selected project
  const selectedProject = projects.find((p) => p.slug === projectId);

  return (
    <div>
      {/* Show project details if a project is selected */}
      {selectedProject ? (
        <ProjectDetails
          project={selectedProject}
          onBack={() => router.push("/projects")}
        />
      ) : (
        // Show the projects grid if no project is selected
        <ProjectsShowcase />
      )}
    </div>
  );
}