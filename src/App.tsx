/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Splash } from './components/Splash';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-neutral-950 text-white selection:bg-white selection:text-black overflow-x-hidden">
      {showSplash && <Splash onComplete={() => setShowSplash(false)} />}
      
      {!showSplash && (
        <>
          <AnimatedBackground />
          <Navbar />
          
          {/* Scroll Progress Indicator */}
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-white z-50 origin-left"
            style={{ scaleX }}
          />

          <main>
            <Hero />
            
            <section id="experience">
              <Experience />
            </section>

            <section id="achievements">
              <Achievements />
            </section>

            <section id="education">
              <Education />
            </section>

            <section id="skills">
              <Skills />
            </section>
          </main>

          <footer className="py-12 px-6 border-t border-white/5 bg-neutral-950/50 backdrop-blur-md">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left">
                <div className="text-2xl font-bold tracking-tighter mb-2">SK.</div>
                <p className="text-white/40 text-sm">© 2026 Shahnawaz Khan. Built with precision.</p>
              </div>
              
              <div className="flex gap-8">
                <a href="#experience" className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">Experience</a>
                <a href="#achievements" className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">Impact</a>
                <a href="#education" className="text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors">Education</a>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
