import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { DEMO_EXPERIENCES } from '../constants/data';
import { formatDate } from '../utils/formatDate';

export default function ExperienceSection() {
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
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="section" id="experience" ref={ref}>
      <motion.div 
        className="mb-12"
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <span className="section-label">Career Journey</span>
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          A timeline of roles that shaped my expertise and engineering philosophy.
        </p>
      </motion.div>

      <motion.div 
        className="timeline"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {DEMO_EXPERIENCES.map((exp) => (
          <motion.div 
            key={exp.id} 
            className="timeline-item group"
            variants={itemVariants}
          >
            <div className="timeline-dot group-hover:bg-[#4facfe] group-hover:scale-110 transition-all duration-300"></div>
            <div className="timeline-date">
              {formatDate(exp.start_date)} — {formatDate(exp.end_date)}
            </div>
            <div className="timeline-card glass-card relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,92,252,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4facfe]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="timeline-role relative z-10">{exp.role}</div>
              <div className="timeline-company relative z-10">{exp.company}</div>
              <p className="timeline-desc relative z-10">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
