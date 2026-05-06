import { motion } from 'motion/react';
import { Phone, ArrowRight, Instagram } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 bg-brand-carbon relative overflow-hidden">
      {/* Light sweep animation bg */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity, repeatDelay: 5 }}
          className="w-1/2 h-full bg-gradient-to-r from-transparent via-brand-red/10 to-transparent skew-x-[-30deg]"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="relative"
        >
          {/* Abstract background shapes behind CTA content */}
          <div className="absolute inset-0 overflow-hidden mix-blend-overlay opacity-30 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-brand-red/20 blur-[120px] rounded-full" />
          </div>

          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-[1px] w-6 bg-brand-red"></div>
            <span className="text-brand-red text-[10px] font-bold uppercase tracking-[0.3em]">Mobile Service</span>
            <div className="h-[1px] w-6 bg-brand-red"></div>
          </div>

          <h2 className="text-5xl md:text-[80px] leading-[0.85] font-black tracking-tighter uppercase mb-8 text-white relative z-10">
            Ready For A<br />
            <span className="display-outline display-outline-thick">Better Finish?</span>
          </h2>

          <p className="text-brand-muted text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed relative z-10">
            Book your professional mobile detailing service today. We bring the showroom shine directly to you, anywhere in Adelaide.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a
              href="tel:0493427300"
              className="bg-brand-red text-white px-12 py-6 font-bold uppercase text-xs tracking-[0.2em] hover:bg-brand-darkred transition-colors flex items-center justify-center gap-3 w-full sm:w-auto"
            >
              <Phone className="w-4 h-4 ml-1" />
              Call 0493 427 300
            </a>
            <a
              href="https://www.instagram.com/shinecraft_au"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 hover:border-brand-red px-12 py-6 font-bold uppercase text-xs tracking-[0.2em] transition-colors flex items-center justify-center gap-3 w-full sm:w-auto text-white group"
            >
              <Instagram className="w-4 h-4" />
              Message on Instagram
            </a>
          </div>

          <div className="mt-12 relative z-10">
             <a href="#services" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-brand-muted hover:text-white transition-colors group font-bold">
               View Services
               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </a>
          </div>
        </motion.div>
      </div>

      {/* Sticky mobile call bar (only visible on small screens) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-brand-black/90 backdrop-blur-md border-t border-white/5 z-50">
         <a
            href="tel:0493427300"
            className="w-full flex items-center justify-center gap-3 bg-brand-red text-white py-5 font-bold uppercase tracking-wider text-xs"
          >
            <Phone className="w-4 h-4" />
            Call ShineCraft Now
          </a>
      </div>
    </section>
  );
}
