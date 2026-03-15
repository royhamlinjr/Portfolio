import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { DEMO_PROJECTS } from '../constants/data';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectsSection() {
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
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  const tagColor = (color) => {
    const map = {
      purple: { background: 'rgba(124,92,252,0.15)', color: '#a78bfa', border: '1px solid rgba(124,92,252,0.2)' },
      green: { background: 'rgba(0,212,170,0.15)', color: '#34d399', border: '1px solid rgba(0,212,170,0.2)' },
      pink: { background: 'rgba(255,107,157,0.15)', color: '#f472b6', border: '1px solid rgba(255,107,157,0.2)' },
    };
    return map[color] || map.purple;
  };

  return (
    <section className="section" id="projects" ref={ref}>
      <motion.div 
        className="text-center mb-16"
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="flex justify-center"><span className="section-label">Project Showcase</span></div>
        <h2 className="section-title">Projects I've Built</h2>
        <p className="section-subtitle mx-auto">
          Each project is a unique piece of development, designed to solve real problems.
        </p>
      </motion.div>

      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {DEMO_PROJECTS.map((project, i) => (
          <motion.div 
            key={project.id} 
            className="project-card glass-card relative group"
            variants={itemVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            {/* Spot light overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7c5cfc]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="project-card-banner">
              <div className="project-card-banner-bg" style={{ background: project.banner }}>
                {project.icon}
              </div>
            </div>
            
            <div className="project-card-body relative z-10">
              <div className="project-card-tags">
                {project.tags.map((tag, j) => (
                  <span key={tag} className="project-tag" style={tagColor(project.tagColors[j])}>
                    {tag.toUpperCase()}
                  </span>
                ))}
              </div>
              <h3 className="project-card-title group-hover:text-[#4facfe] transition-colors">{project.title}</h3>
              <p className="project-card-desc">{project.description}</p>
              
              <div className="project-card-links mt-6">
                {project.url && (
                  <a href={project.url} className="project-link group/link hover:text-[#4facfe] transition-colors" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt size={14} className="group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" /> Live Demo
                  </a>
                )}
                {project.repo && (
                  <a href={project.repo} className="project-link group/link hover:text-[#4facfe] transition-colors" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={16} className="group-hover/link:-translate-y-0.5 transition-transform" /> Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="text-center mt-16"
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <a href="https://github.com/royhamlinjr" target="_blank" rel="noopener noreferrer" className="btn btn-outline border-white/10 hover:border-white/30 hover:bg-white/5 inline-flex items-center gap-2 transition-all">
          View Full Project Archive <FaGithub size={18} />
        </a>
      </motion.div>
    </section>
  );
}
