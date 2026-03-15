import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AboutSection() {
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
    <section className="section" id="about" ref={ref}>
      <motion.div 
        className="text-center md:text-left mb-12"
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <span className="section-label">About Me</span>
        <h2 className="section-title">With Clean Architecture</h2>
      </motion.div>

      <div className="about-grid">
        <motion.div 
          className="about-text"
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <p>
            I'm a full-stack web developer with hands-on experience in building web applications
            using <strong className="text-white">Django, React, and PostgreSQL</strong>. I hold a B.E. in Computer Science
            from Mar Ephraem College of Engineering and Technology.
          </p>
          <p>
            I specialize in <strong className="text-white">Django REST Framework, React, and relational database design</strong>,
            with a focus on creating RESTful APIs, responsive UIs, and optimized database queries.
            I'm passionate about writing clean, maintainable code.
          </p>
          <p>
            Currently pursuing a Full Stack Web Development program at CCS, Marthandam, 
            to further strengthen my skills in modern web technologies.
          </p>
        </motion.div>

        <motion.div 
          className="about-stats"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="stat-card glass-card relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4facfe]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="stat-number color-accent relative z-10">B.E.</div>
            <div className="stat-label relative z-10">Computer Science</div>
          </motion.div>
          <motion.div variants={itemVariants} className="stat-card glass-card relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-br from-[#4facfe]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="stat-number color-accent relative z-10">2</div>
            <div className="stat-label relative z-10">Internships</div>
          </motion.div>
          <motion.div variants={itemVariants} className="stat-card glass-card relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-br from-[#4facfe]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="stat-number color-accent relative z-10">5+</div>
            <div className="stat-label relative z-10">Projects Built</div>
          </motion.div>
          <motion.div variants={itemVariants} className="stat-card glass-card relative overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-br from-[#4facfe]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="stat-number color-accent relative z-10">10+</div>
            <div className="stat-label relative z-10">Technologies</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
