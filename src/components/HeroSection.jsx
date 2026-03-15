import { motion } from 'framer-motion';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { BsBriefcaseFill } from 'react-icons/bs';
import { BiFileBlank } from 'react-icons/bi';
import { MdChatBubbleOutline } from 'react-icons/md';
import { FaReact } from 'react-icons/fa';
import { SiDjango, SiPostgresql, SiPython } from 'react-icons/si';

export default function HeroSection() {

  const typedText = useTypingEffect([
    'Full Stack Web Developer',
    'React Developer',
    'Software Developer',
    'B.E in Computer Science',
  ]);

  return (
    <section className="hero relative" id="hero">

      <div className="hero-inner relative z-10">
        
        {/* Left Content Column */}
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-badge">
            <span className="dot"></span>
            Open to opportunities
          </div>
          
          <h1 className="hero-name text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
            Hi, I'm <br />
            <span className="gradient-text-1">Roy Hamlin A</span>
          </h1>
          
          <p className="hero-typing text-2xl md:text-3xl text-slate-200">
            {typedText}
          </p>
          
          <p className="hero-desc text-lg md:text-xl text-slate-400 mt-6 mb-10 max-w-2xl leading-relaxed">
            Bridging complex backend logic with pixel-perfect frontend design. I build full-stack web applications using Django and React, focusing on clean REST APIs and robust database architecture.
          </p>
          
          <div className="hero-actions flex flex-wrap gap-4">
            <a href="#projects" className="btn btn-primary shadow-[0_0_20px_rgba(124,92,252,0.4)] hover:shadow-[0_0_30px_rgba(124,92,252,0.6)] transition-shadow">
              <BsBriefcaseFill /> View My Work
            </a>
            <a href="/RoyHamlin_Resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline border-white/20 hover:border-[#4facfe] hover:bg-[#4facfe]/10 transition-colors">
              <BiFileBlank /> Download Resume
            </a>
            <a href="#contact" className="btn btn-outline border-white/20 hover:border-emerald-400 hover:bg-emerald-400/10 transition-colors">
              <MdChatBubbleOutline /> Let's Talk
            </a>
          </div>
        </motion.div>

        {/* Right Visual Column */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-avatar-container">
            <div className="hero-avatar-ring-outer"></div>
            <div className="hero-avatar-ring-mid"></div>
            <div className="hero-avatar-ring"></div>
            <div className="hero-avatar-main">
              <div className="avatar-bg-glow"></div>
              <img src="/profile.jpg" alt="Roy Hamlin" className="profile-img-blend" />
              <div className="hero-avatar-text">RH</div>
            </div>
            
            {/* Tech badges float around the avatar */}
            <motion.div className="hero-float-card" style={{ '--delay': '0s' }} whileHover={{ scale: 1.1 }}>
              <span className="icon"><FaReact color="#61DAFB" /></span> React.js
            </motion.div>
            <motion.div className="hero-float-card" style={{ '--delay': '1s' }} whileHover={{ scale: 1.1 }}>
              <span className="icon"><SiDjango color="#0dd082" /></span> Django
            </motion.div>
            <motion.div className="hero-float-card" style={{ '--delay': '2s' }} whileHover={{ scale: 1.1 }}>
              <span className="icon"><SiPostgresql color="#336791" /></span> PostgreSQL
            </motion.div>
            <motion.div className="hero-float-card" style={{ '--delay': '3s' }} whileHover={{ scale: 1.1 }}>
              <span className="icon"><SiPython color="#3776ab" /></span> Python
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

