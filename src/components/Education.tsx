import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Education: React.FC = () => {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Education</h2>
        <div className="h-1 w-20 bg-white/20 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 gap-8">
        {resumeData.education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 border-l border-white/10"
          >
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-neutral-900" />
            
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-white/40 mb-2">
                    <GraduationCap size={18} />
                    <span className="text-sm font-medium uppercase tracking-widest">{edu.degree}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{edu.institution}</h3>
                </div>
                
                <div className="flex items-center gap-2 text-white/40 text-sm">
                  <Calendar size={16} />
                  {edu.dates}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
