import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, MapPin, ChevronDown, Award } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Professional Journey</h2>
        <div className="h-1 w-20 bg-white/20 rounded-full" />
      </motion.div>

      <div className="space-y-6">
        {resumeData.experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 ${
                expandedIndex === index
                  ? 'bg-white/10 border-white/20 shadow-2xl'
                  : 'bg-white/5 border-white/5 hover:border-white/10'
              } backdrop-blur-md`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${expandedIndex === index ? 'bg-white text-black' : 'bg-white/10 text-white'} transition-colors`}>
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-white/60 font-medium">{exp.company}</p>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-white/40">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {exp.dates}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} />
                    {exp.location}
                  </div>
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    className="ml-2"
                  >
                    <ChevronDown size={20} />
                  </motion.div>
                </div>
              </div>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 mt-6 border-t border-white/10">
                      <ul className="space-y-3">
                        {exp.bullets.map((bullet, bIndex) => (
                          <li key={bIndex} className="flex items-start gap-3 text-white/70 leading-relaxed">
                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-white/30 flex-shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      
                      {/* Impact Highlights Panel */}
                      <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="flex items-center gap-2 mb-3 text-xs font-bold uppercase tracking-widest text-white/40">
                          <Award size={14} />
                          Impact Highlight
                        </div>
                        <p className="text-sm text-white/80 italic">
                          {exp.bullets[0]}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
