"use client";
import { Button } from "@/components/ui/button";
import { HeroHighlight } from "@/components/HeroHighlight";
import { FloatingIcons } from "@/components/FloatingIcons";
import Link from "next/link";
import { motion } from "framer-motion";
import { Suspense, useState } from "react";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ResumeButton from "@/components/ResumeButton";
import {
  Sun,
  Moon,
  Globe,
  Mail,
  Menu,
  X,
  GitHub,
  Linkedin,
} from "react-feather";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <HeroHighlight>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden fixed inset-0 bg-black/90 backdrop-blur-sm z-50"
        >
          <div className="flex flex-col items-center justify-center h-full gap-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4"
            >
              <X className="h-8 w-8" />
            </Button>
            <Link
              href="/contact"
              className="text-2xl py-3 px-6 hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </motion.div>
      )}

      {/* Desktop Social Bar */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col gap-4 z-40"
      >
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full shadow-lg hover:bg-white/20"
        >
          <Link
            href="https://www.linkedin.com/in/temesgen-t-gebremariam-858483121/"
            target="_blank"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full shadow-lg hover:bg-white/20"
        >
          <Link href="https://github.com/TEMESGENTIKABO" target="_blank">
            <GitHub className="h-6 w-6" />
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full shadow-lg hover:bg-white/20"
        >
          <Link href="mailto:temesgen.letay@gmail.com">
            <Mail className="h-6 w-6" />
          </Link>
        </Button>
      </motion.div>

      {/* Mobile Social Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-4 z-40"
      >
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full shadow-lg hover:bg-white/20"
        >
          <Link
            href="https://www.linkedin.com/in/temesgen-t-gebremariam-858483121/"
            target="_blank"
          >
            <Linkedin className="h-6 w-6" />
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full shadow-lg hover:bg-white/20"
        >
          <Link href="https://github.com/TEMESGENTIKABO" target="_blank">
            <GitHub className="h-6 w-6" />
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full shadow-lg hover:bg-white/20"
        >
          <Link href="mailto:temesgen.letay@gmail.com">
            <Mail className="h-6 w-6" />
          </Link>
        </Button>
      </motion.div>

      {/* Theme and Language Controls */}
      <div className="fixed top-4 right-4 flex gap-2 z-40">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="rounded-full hover:bg-white/20"
        >
          {isDarkMode ? (
            <Moon className="h-6 w-6" />
          ) : (
            <Sun className="h-6 w-6" />
          )}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full hover:bg-white/20"
        >
          <Globe className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden rounded-full hover:bg-white/20"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Main Hero Content - Mobile Responsive Changes */}
      <div className="min-h-screen flex items-center justify-center text-center px-4 relative max-md:pt-20">
        <div className="max-w-4xl w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl xs:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight max-md:text-4xl max-md:leading-snug"
          >
            Full-Stack Developer{" "}
            <motion.span
              initial={{ backgroundPosition: "0% 50%" }}
              animate={{ backgroundPosition: "100% 50%" }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto] max-md:block"
            >
              Code. Create.
            </motion.span>{" "}
            Deliver.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-base md:text-lg lg:text-xl text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto px-4 max-md:text-sm max-md:mb-6"
          >
            Specializing in modern web development with a focus on performance,
            accessibility, and user-centric design.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col md:flex-row gap-3 justify-center w-full"
          >
            <Link href="/projects" className="w-full md:w-auto">
              <Button className="w-full md:w-auto text-sm md:text-base py-3 px-4 md:py-4 md:px-6 rounded-full hover:scale-105 transition-transform">
                Explore My Work →
              </Button>
            </Link>
            <ResumeButton />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <div className="animate-bounce w-8 h-14 rounded-full border-2 border-gray-400 flex items-center justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </div>

      {/* Sections Container */}
      <div className="px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 space-y-20 md:space-y-32">
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </div>

      {/* Floating Icons with Suspense */}
      <Suspense fallback={null}>
        <FloatingIcons />
      </Suspense>
    </HeroHighlight>
  );
}
