import React from 'react';
import { motion } from 'motion/react';
import resumeData from '../data/resume.json';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Technical Arsenal</h2>
        <div className="h-1 w-20 bg-white/20 rounded-full mx-auto" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-8">Core Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {resumeData.skills.Technical.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.02 }}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.15)' }}
                className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white/80 text-sm font-medium transition-colors"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-8">Additional Context</h3>
          <div className="space-y-4">
            {resumeData.extra.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-4 rounded-xl bg-white/5 border border-white/5 text-white/60 text-sm leading-relaxed"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
