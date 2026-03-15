import { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <a href="#" className="nav-logo">
        Portfolio
      </a>
      <ul className={`nav-links ${mobileOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <a href={item.href} onClick={() => setMobileOpen(false)}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <button
        className="mobile-menu-btn"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation menu"
        id="mobile-menu-toggle"
      >
        {mobileOpen ? '✕' : '☰'}
      </button>
    </nav>
  );
}
