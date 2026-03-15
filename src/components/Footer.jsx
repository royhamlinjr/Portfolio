import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24" id="footer">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[rgba(124,92,252,0.3)] to-transparent" />

      <div className="bg-[rgba(6,6,8,0.5)] backdrop-blur-sm">
        <div className="max-w-[1240px] mx-auto px-[5%]">

          {/* ── Main row ── */}
          <div className="relative flex items-center justify-between py-12 border-b border-white/[0.05]">
            
            {/* Left: Brand */}
            <div className="flex-1 flex justify-start">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08] flex items-center justify-center shadow-lg relative overflow-hidden group hover:border-[#4facfe]/30 transition-colors duration-300">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#7c5cfc]/20 to-[#4facfe]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="text-white font-black text-lg tracking-tighter relative z-10 font-mono">
                    RH
                  </span>
                </div>
                <div className="hidden md:flex flex-col justify-center">
                  <span className="text-[0.95rem] font-extrabold text-slate-200 tracking-wide leading-none mb-1.5">
                    Roy Hamlin
                  </span>
                  <span className="text-[0.65rem] text-slate-500 font-bold tracking-[0.1em] uppercase">
                    Full Stack Web Developer
                  </span>
                </div>
              </div>
            </div>

            {/* Center: Status (Absolutely positioned to guarantee perfect centering) */}
            <div className="absolute left-1/2 -translate-x-1/2 hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#22c55e] animate-pulse" />
              <span className="text-[0.72rem] font-bold text-emerald-400/80 tracking-widest uppercase">
                Open to work
              </span>
            </div>

            {/* Right: Socials */}
            <div className="flex-1 flex justify-end items-center gap-2">
              <a href="https://github.com/royhamlinjr7" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-slate-500 transition-all duration-300 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.12] hover:-translate-y-0.5">
                <FaGithub size={16} />
              </a>
              <a href="https://linkedin.com/in/royhamlin" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-slate-500 transition-all duration-300 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.12] hover:-translate-y-0.5">
                <FaLinkedin size={16} />
              </a>
              <a href="mailto:royhamlinjr7@gmail.com" aria-label="Email"
                className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-slate-500 transition-all duration-300 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.12] hover:-translate-y-0.5">
                <FaEnvelope size={16} />
              </a>
              <div className="w-px h-5 bg-white/[0.06] mx-1.5 hidden sm:block" />
              <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"
                className="hidden sm:flex w-9 h-9 rounded-lg bg-white/[0.03] border border-white/[0.06] items-center justify-center text-slate-500 transition-all duration-300 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.12] hover:-translate-y-0.5 cursor-pointer">
                <FaArrowUp size={13} />
              </button>
            </div>
          </div>

          {/* ── Bottom bar ── */}
          <div className="flex flex-col sm:flex-row items-center justify-between py-6 text-[0.75rem] text-slate-500 font-medium">
            <span>© {currentYear} All rights reserved.</span>
            <div className="mt-4 sm:mt-0 flex items-center gap-4 text-slate-600 font-semibold tracking-wide">
              <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
              <span className="w-1 h-1 rounded-full bg-slate-700" />
              <a href="#projects" className="hover:text-white transition-colors duration-300">Work</a>
              <span className="w-1 h-1 rounded-full bg-slate-700" />
              <a href="#experience" className="hover:text-white transition-colors duration-300">Experience</a>
              <span className="w-1 h-1 rounded-full bg-slate-700" />
              <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
