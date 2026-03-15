import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Ambient Background Layers */}
      <div className="bg-mesh" aria-hidden="true"></div>
      <div className="grid-overlay" aria-hidden="true"></div>
      <div className="noise" aria-hidden="true"></div>

      {/* Content */}
      <div className="content-layer">
        <Navbar />
        <HeroSection />
        <div className="section-divider"></div>
        <AboutSection />
        <div className="section-divider"></div>
        <SkillsSection />
        <div className="section-divider"></div>
        <ProjectsSection />
        <div className="section-divider"></div>
        <ExperienceSection />
        <div className="section-divider"></div>
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
