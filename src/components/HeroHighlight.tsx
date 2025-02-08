'use client';
import { motion } from 'framer-motion';
import { ParticlesBackground } from './ParticlesBackground';
import { FloatingIcons } from './FloatingIcons';

export function HeroHighlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Floating Tech Icons */}
      <FloatingIcons />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        {children}
      </motion.div>
    </div>
  );
}