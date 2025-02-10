"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { RadioGroup } from "@headlessui/react";
import { skills, SkillCategory, Skill } from "@/data/skills";

// SkillCard Component with Description on Hover
const SkillCard = ({ skill }: { skill: Skill }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="relative bg-gray-900/50 p-4 md:p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all group backdrop-blur-sm shadow-xl hover:shadow-2xl hover:shadow-purple-500/20"
  >
    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
      <i
        className={`devicon-${skill.icon}-plain text-2xl md:text-3xl text-white/90 min-w-[32px] md:min-w-[40px] transition-transform group-hover:scale-110`}
      />
      <h3 className="text-base md:text-lg font-semibold text-white truncate group-hover:text-purple-400 transition-colors">
        {skill.name}
      </h3>
    </div>

    <div className="w-full bg-white/10 rounded-full h-2 md:h-2.5 mb-2 md:mb-3 relative">
      <div
        className="bg-gradient-to-r from-blue-400 to-purple-400 h-full rounded-full transition-all duration-500 group-hover:from-purple-400 group-hover:to-blue-400"
        style={{ width: `${skill.proficiency}%` }}
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-xs text-white/80 bg-black/50 px-2 py-1 rounded-full">
          {skill.proficiency}%
        </span>
      </div>
    </div>

    <div className="flex justify-between items-center">
      <span className="text-xs text-white/60 font-medium group-hover:text-white/80 transition-colors">
        Proficiency Level
      </span>
      <span className="text-xs text-blue-400 font-mono font-bold group-hover:text-purple-400 transition-colors">
        {skill.proficiency}%
      </span>
    </div>

    {/* Description on Hover */}
    <div className="absolute inset-0 p-4 md:p-6 bg-gray-900/90 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-center">
      <p className="text-sm text-white/80">{skill.description}</p>
    </div>
  </motion.div>
);

// CategoryTab Component with Hover Effects
const CategoryTab = ({ category }: { category: SkillCategory }) => (
  <RadioGroup.Option
    value={category.title}
    className={({ checked }) =>
      `whitespace-nowrap px-4 py-2 md:px-8 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all cursor-pointer
      ${
        checked
          ? "bg-purple-600 text-white shadow-lg shadow-purple-500/70 hover:shadow-purple-500/90"
          : "text-gray-300 bg-gray-700 hover:bg-gray-600 hover:text-white shadow-md shadow-blue-500/40 hover:shadow-blue-500/60"
      }
      flex-shrink-0 border border-white/20 backdrop-blur-sm hover:scale-105 transform transition-transform hover:border-purple-400`
    }
  >
    {category.title}
  </RadioGroup.Option>
);

// SkillsSection Component
export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setSelectedCategory(skills[0]?.title || null);
  }, []);

  const handleCategoryChange = useCallback((value: string) => {
    setSelectedCategory(value);
  }, []);

  if (!isMounted) return null;

  return (
    <section className="relative py-12 md:py-20 bg-gray-950 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 md:mb-6">
              Technical Skills
            </h2>
            <div suppressHydrationWarning className="-mx-4 px-4 md:mx-0 md:px-0">
              <RadioGroup
                value={selectedCategory}
                onChange={handleCategoryChange}
                className="flex space-x-3 md:space-x-4 overflow-x-auto pb-4 scrollbar-hide"
              >
                {skills.map((category) => (
                  <CategoryTab key={category.title} category={category} />
                ))}
              </RadioGroup>
            </div>
          </motion.div>
        </div>

        <div className="relative min-h-[300px] md:min-h-[400px]">
          {skills.map((category) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0 }}
              animate={{
                opacity: category.title === selectedCategory ? 1 : 0,
              }}
              transition={{ duration: 0.2 }}
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 ${
                category.title === selectedCategory ? "block" : "hidden"
              }`}
            >
              {category.skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}