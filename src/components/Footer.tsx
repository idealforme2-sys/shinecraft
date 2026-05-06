import { Facebook, Instagram } from 'lucide-react';
import shineCraftLogo from '../../shinecraft_logo.jpg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black border-t border-white/5 pt-16 pb-24 md:pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 border-b border-white/5 pb-16">
          <div className="md:col-span-12 lg:col-span-4">
            <div className="mb-6 flex w-max items-center border border-white/10 p-4 transition-colors hover:border-brand-red">
              <img
                src={shineCraftLogo}
                alt="ShineCraft logo"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-brand-muted text-sm leading-relaxed max-w-sm font-light mb-8">
              A premium mobile car detailing service operating throughout Adelaide. We bring the showroom finish to your driveway.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/shinecraft_au" target="_blank" rel="noopener noreferrer" aria-label="ShineCraft Instagram" className="w-10 h-10 border border-white/5 flex items-center justify-center hover:border-brand-red text-white/50 hover:text-white transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://web.facebook.com/people/ShineCraft-Detailing/61554683288508/" target="_blank" rel="noopener noreferrer" aria-label="ShineCraft Facebook" className="w-10 h-10 border border-white/5 flex items-center justify-center hover:border-brand-red text-white/50 hover:text-white transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-12 lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-white font-bold uppercase tracking-tight text-sm mb-6 flex items-center gap-2">
                <div className="w-1 h-1 bg-brand-red" />
                Services
              </h4>
              <ul className="space-y-4">
                <li><a href="#services" className="text-xs uppercase tracking-wider text-brand-muted hover:text-brand-red transition-colors block w-max">Interior Detailing</a></li>
                <li><a href="#services" className="text-xs uppercase tracking-wider text-brand-muted hover:text-brand-red transition-colors block w-max">Exterior Detailing</a></li>
                <li><a href="#services" className="text-xs uppercase tracking-wider text-brand-muted hover:text-brand-red transition-colors block w-max">Paint Correction</a></li>
                <li><a href="#services" className="text-xs uppercase tracking-wider text-brand-muted hover:text-brand-red transition-colors block w-max">Ceramic Coating</a></li>
                <li><a href="#services" className="text-xs uppercase tracking-wider text-brand-muted hover:text-brand-red transition-colors block w-max">Window Tinting</a></li>
                <li><a href="#services" className="text-xs uppercase tracking-wider text-brand-muted hover:text-brand-red transition-colors block w-max">Tech Installs</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold uppercase tracking-tight text-sm mb-6 flex items-center gap-2">
                <div className="w-1 h-1 bg-brand-red" />
                Contact Info
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <a href="tel:0493427300" className="text-xs uppercase tracking-wider text-brand-muted hover:text-white transition-colors">
                    0493 427 300
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-xs uppercase tracking-wider text-brand-muted leading-relaxed">
                    Mobile Service<br />
                    Adelaide, SA
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-brand-muted uppercase tracking-widest font-bold">
            &copy; {currentYear} ShineCraft Detailing. All rights reserved.
          </p>
          <p className="luxury-credit text-[10px] uppercase tracking-[0.35em] font-bold">
            Made By Creative Webflow Co.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[10px] text-brand-muted hover:text-white uppercase tracking-widest transition-colors font-bold">Privacy Policy</a>
            <a href="#" className="text-[10px] text-brand-muted hover:text-white uppercase tracking-widest transition-colors font-bold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
