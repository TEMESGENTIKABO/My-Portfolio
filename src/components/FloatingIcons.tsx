'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export const FloatingIcons = () => {
  const [positions, setPositions] = useState<{ left: string; top: string }[]>([]);
  const icons = ['react', 'nextjs', 'nodejs', 'typescript'];

  // Generate random positions for icons
  useEffect(() => {
    setPositions(
      icons.map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }))
    );
  }, []);

  if (!positions.length) return null; // Don't render on server

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, index) => (
        <motion.div
          key={icon}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{
            delay: 0.5 + index * 0.2,
            type: 'spring',
            stiffness: 100,
            damping: 20,
          }}
          className="absolute text-6xl"
          style={positions[index]}
        >
          <i className={`devicon-${icon}-plain`} />
        </motion.div>
      ))}
    </div>
  );
};