import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle, Star, Trophy } from 'lucide-react';
import resumeData from '../data/resume.json';

export const Achievements: React.FC = () => {
  const { certifications, skills } = resumeData;

  return (
    <section className="py-24 px-6 bg-white/5 backdrop-blur-3xl">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Impact & Recognition</h2>
          <p className="text-white/40 max-w-xl mx-auto">Measurable achievements and professional certifications that define my expertise.</p>
        </motion.div>

        {/* Top 3 Impact Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {skills["Top Skills"].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/10 border border-white/20 flex flex-col items-center text-center group hover:bg-white/20 transition-all"
            >
              <div className="p-4 rounded-2xl bg-white text-black mb-6 group-hover:scale-110 transition-transform">
                <Star size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{skill}</h3>
              <p className="text-white/40 text-sm uppercase tracking-widest font-bold">Core Expertise</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="p-6 rounded-2xl border border-white/5 bg-white/5 hover:border-white/20 hover:bg-white/10 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-white/10 text-white/60 group-hover:text-white transition-colors">
                  <Trophy size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium leading-snug">{cert}</h4>
                  <div className="flex items-center gap-1.5 mt-2 text-xs text-white/30 uppercase tracking-wider font-bold">
                    <CheckCircle size={12} />
                    Verified
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
