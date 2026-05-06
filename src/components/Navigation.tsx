import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import shineCraftLogo from '../../shinecraft_logo.jpg';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Results', href: '#results' },
    { name: 'Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-brand-black/90 backdrop-blur-md shadow-[0_18px_40px_rgba(0,0,0,0.45)] py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 z-50">
          <img
            src={shineCraftLogo}
            alt="ShineCraft logo"
            className="h-10 md:h-11 w-auto object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.2em] font-medium text-white/60 hover:text-white transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="#estimate"
            className="border border-white/15 hover:border-brand-red text-white px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] transition-all inline-block"
          >
            Get Estimate
          </a>
          <a
            href="tel:0493427300"
            className="bg-brand-red hover:bg-brand-darkred text-white px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all inline-block"
          >
            Call 0493 427 300
          </a>
        </div>

        <button
          className="md:hidden z-50 text-white p-2 -mr-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-brand-black flex items-center justify-center flex-col px-6"
          >
            <nav className="flex flex-col items-center gap-8 w-full">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-semibold text-white hover:text-brand-red transition-colors font-heading"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#estimate"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center border border-white/15 text-white py-4 text-lg font-semibold hover:border-brand-red transition-colors"
              >
                Get Estimate
              </a>
              <a
                href="tel:0493427300"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-brand-red text-white py-4 rounded-sm text-lg font-semibold hover:bg-brand-darkred transition-colors"
              >
                Call 0493 427 300
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
