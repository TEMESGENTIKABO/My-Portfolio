"use client";
import Link from "next/link";
import Image from "next/image";
import { FiArrowUpRight, FiGithub, FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";

interface ProjectDetailsProps {
  project: {
    title: string;
    demoUrl: string;
    githubUrl: string;
    problem: string;
    solution: string;
    metrics: string[];
    tech: string[];
    image: string;
  };
  onBack: () => void; // Add a back handler
}

export default function ProjectDetails({ project, onBack }: ProjectDetailsProps) {
  return (
    <div className="container py-20">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 mb-12 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors group"
        >
          <FiArrowLeft className="text-xl group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Projects</span>
        </motion.button>

        {/* Hero Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-16">
          <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-xl">
            <Image src={project.image} alt={project.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
              <div className="flex flex-wrap gap-4">
                <Link href={project.demoUrl} target="_blank" className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-colors">
                  <FiArrowUpRight className="text-xl" />
                  <span>Live Demo</span>
                </Link>
                <Link href={project.githubUrl} target="_blank" className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-colors">
                  <FiGithub className="text-xl" />
                  <span>Source Code</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-12">
            <Section title="Challenge">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">{project.problem}</p>
            </Section>

            <Section title="Solution">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">{project.solution}</p>
            </Section>
          </div>

          {/* Right Column */}
          <div className="space-y-12">
            <Section title="Impact">
              <ul className="space-y-4">
                {project.metrics.map((metric, index) => (
                  <motion.li key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                    <span className="text-blue-600 dark:text-blue-400 text-lg">▹</span>
                    <span className="ml-3 text-gray-700 dark:text-gray-300">{metric}</span>
                  </motion.li>
                ))}
              </ul>
            </Section>

            <Section title="Tech Stack">
              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <motion.span key={tech} whileHover={{ scale: 1.05 }} className="flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium">
                    <i className={`devicon-${tech.toLowerCase()}-plain text-lg mr-2`} />
                    {tech}
                  </motion.span>
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
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative">
      <div className="absolute -left-4 -top-2 h-8 w-8 bg-blue-500/10 rounded-full" />
      <h2 className="text-3xl font-bold mb-6 relative">
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{title}</span>
      </h2>
      {children}
    </motion.div>
  );
}