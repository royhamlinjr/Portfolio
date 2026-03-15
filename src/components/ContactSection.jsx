import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const form = useRef();
  const [status, setStatus] = useState(''); // '' | 'sending' | 'success' | 'error'

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

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] } },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    const SERVICE_ID = 'service_vzmrios';
    const TEMPLATE_ID = 'template_4updcsr';
    const PUBLIC_KEY = 'HYil7pzmxZehW4gYv';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, { publicKey: PUBLIC_KEY })
      .then(
        () => {
          setStatus('success');
          form.current.reset();
          setTimeout(() => setStatus(''), 5000);
        },
        (error) => {
          console.error('FAILED...', error.text);
          setStatus('error');
          setTimeout(() => setStatus(''), 5000);
        },
      );
  };

  return (
    <section className="section" id="contact" ref={ref}>
      <motion.div 
        className="mb-12"
        variants={itemVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <span className="section-label">Get In Touch</span>
        <h2 className="section-title">Let's Build Something Together</h2>
      </motion.div>

      <div className="contact-container">
        <motion.div 
          className="contact-info"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.p variants={itemVariants}>
            I'm always excited to collaborate on innovative projects, discuss new opportunities, 
            or just have a chat about the latest in web development. Don't hesitate to reach out!
          </motion.p>
          <div className="contact-links mt-8">
            <motion.a variants={itemVariants} whileHover={{ x: 10 }} href="mailto:royhamlinjr7@gmail.com" className="contact-link-item group" id="contact-email">
              <div className="contact-link-icon-box group-hover:bg-[#4facfe]/20 transition-colors"><FaEnvelope color="#4facfe" /></div>
              <div className="contact-link-text">
                <span className="contact-link-label">Email</span>
                <span className="contact-link-value group-hover:text-[#4facfe] transition-colors">royhamlinjr7@gmail.com</span>
              </div>
            </motion.a>
            <motion.a variants={itemVariants} whileHover={{ x: 10 }} href="https://wa.me/918754128075" className="contact-link-item group" target="_blank" rel="noopener noreferrer" id="contact-phone">
              <div className="contact-link-icon-box group-hover:bg-[#25D366]/20 transition-colors"><FaWhatsapp color="#25D366" /></div>
              <div className="contact-link-text">
                <span className="contact-link-label">Phone</span>
                <span className="contact-link-value group-hover:text-[#25D366] transition-colors">+91 87541 28075</span>
              </div>
            </motion.a>
            <motion.a variants={itemVariants} whileHover={{ x: 10 }} href="https://linkedin.com/in/royhamlin" className="contact-link-item group" target="_blank" rel="noopener noreferrer" id="contact-linkedin">
              <div className="contact-link-icon-box group-hover:bg-[#0077b5]/20 transition-colors"><FaLinkedin color="#0077b5" /></div>
              <div className="contact-link-text">
                <span className="contact-link-label">LinkedIn</span>
                <span className="contact-link-value group-hover:text-[#0077b5] transition-colors">linkedin.com/in/royhamlin</span>
              </div>
            </motion.a>
            <motion.a variants={itemVariants} whileHover={{ x: 10 }} href="https://github.com/royhamlinjr7" className="contact-link-item group" target="_blank" rel="noopener noreferrer" id="contact-github">
              <div className="contact-link-icon-box group-hover:bg-white/20 transition-colors"><FaGithub color="#fff" /></div>
              <div className="contact-link-text">
                <span className="contact-link-label">GitHub</span>
                <span className="contact-link-value group-hover:text-white transition-colors">github.com/royhamlinjr7</span>
              </div>
            </motion.a>
          </div>
        </motion.div>

        <motion.form 
          className="contact-form glass-card relative overflow-hidden" 
          ref={form} 
          onSubmit={handleSubmit} 
          id="contact-form"
          variants={formVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#7c5cfc]/10 to-transparent blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#00d4aa]/10 to-transparent blur-3xl -z-10" />

          <div className="form-group relative z-10">
            <label className="form-label">Your Name</label>
            <input className="form-input focus:ring-2 focus:ring-[#7c5cfc]/50 transition-all" type="text" name="user_name" placeholder="Full Name" required />
          </div>
          <div className="form-group relative z-10">
            <label className="form-label">Your Email</label>
            <input className="form-input focus:ring-2 focus:ring-[#7c5cfc]/50 transition-all" type="email" name="user_email" placeholder="hello@company.com" required />
          </div>
          <div className="form-group relative z-10">
            <label className="form-label">Message</label>
            <textarea className="form-textarea focus:ring-2 focus:ring-[#7c5cfc]/50 transition-all" name="message" placeholder="Briefly describe your project or inquiry..." required></textarea>
          </div>
          <motion.button 
            type="submit" 
            className="btn btn-primary submit-btn relative z-10 overflow-hidden group" 
            disabled={status === 'sending'} 
            id="submit-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300 ease-in-out" />
            <span className="relative z-10">
              {status === 'sending' ? 'Sending...' : status === 'success' ? '✅ Message Sent!' : status === 'error' ? '❌ Error' : '🚀 Send Message'}
            </span>
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
