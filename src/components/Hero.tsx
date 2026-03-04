import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Download, Linkedin, Mail } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Hero: React.FC = () => {
  const { basics } = resumeData;

  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-center max-w-4xl"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs font-medium text-white/60 uppercase tracking-widest"
        >
          Available for Opportunities
        </motion.div>

        <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          {basics.name}
        </h1>
        
        <p className="text-xl md:text-2xl text-white/60 mb-8 font-light italic font-serif">
          {basics.title}
        </p>

        <p className="text-lg text-white/40 max-w-2xl mx-auto mb-12 leading-relaxed">
          {basics.summary}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToExperience}
            className="px-8 py-4 rounded-full bg-white text-black font-semibold flex items-center gap-2 transition-colors hover:bg-neutral-200"
          >
            View Experience <ArrowDown size={18} />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.print()}
            className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold flex items-center gap-2 transition-colors hover:bg-white/10"
          >
            Download Resume <Download size={18} />
          </motion.button>
        </div>

        <div className="mt-16 flex justify-center gap-6">
          {basics.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
          ))}
          <a
            href={`mailto:${basics.email}`}
            className="text-white/40 hover:text-white transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/20"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
};
