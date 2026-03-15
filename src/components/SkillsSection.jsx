import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SKILLS } from '../constants/data';

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="section" id="skills" ref={ref}>
      <motion.div 
        className="text-center mb-16"
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="flex justify-center"><span className="section-label">Technical Proficiency</span></div>
        <h2 className="section-title">Technologies I Work With</h2>
        <p className="section-subtitle mx-auto">
          A curated toolkit refined over years of building production-grade applications.
        </p>
      </motion.div>

      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {SKILLS.map((cat, i) => (
          <motion.div 
            key={cat.title} 
            className="skill-category glass-card relative overflow-hidden group"
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#7c5cfc]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <div className="skill-category-icon group-hover:scale-110 group-hover:text-[#4facfe] transition-all duration-300 relative z-10">{cat.icon}</div>
            <div className="skill-category-title relative z-10">{cat.title}</div>
            <div className="skill-tags relative z-10">
              {cat.tags.map((tag) => (
                <span key={tag} className={`skill-tag text-slate-300 group-hover:border-white/20 transition-colors ${cat.colorClass}`}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
