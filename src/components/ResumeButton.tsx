'use client';
import { motion } from 'framer-motion';
import { Download } from 'react-feather';
import { cn } from '@/lib/utils';

interface ResumeButtonProps {
  className?: string;
}

export default function ResumeButton({ className }: ResumeButtonProps) {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'YourName_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      onClick={handleDownload}
      className={cn(
        'w-full md:w-auto flex items-center justify-center gap-2',
        'bg-gradient-to-r from-blue-500 to-purple-500 text-white',
        'rounded-full shadow-lg hover:shadow-xl transition-all duration-300',
        'text-xs md:text-sm px-4 py-2 md:px-6 md:py-3', // Smaller padding and text
        'hover:scale-105',
        className
      )}
    >
      <Download className="h-3 w-3 md:h-4 md:w-4" /> {/* Smaller icon */}
      <span className="font-semibold">Download Resume</span>
    </motion.button>
  );
}