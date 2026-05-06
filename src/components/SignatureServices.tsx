import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function SignatureServices() {
  const services = [
    {
      title: 'Ceramic Coating',
      tag: 'Best for: Long-term protection',
      description: 'Long-lasting gloss and protection designed to help your paint stay cleaner, slicker, and easier to maintain.',
      image: '/assets/ceramic-coating.png',
    },
    {
      title: 'Paint Correction',
      tag: 'Best for: Dull or swirled paint',
      description: 'Refines swirl marks, haze, and dull paint to restore depth, clarity, and reflection.',
      image: '/assets/paint-correction.png',
    },
    {
      title: 'Interior & Exterior Detailing',
      tag: 'Best for: Daily drivers',
      description: 'A complete clean inside and out, built to bring back that fresh, cared-for feeling.',
      image: '/assets/detailing.png',
    },
    {
      title: 'Window Tinting',
      tag: 'Best for: Privacy & comfort',
      description: 'Cleaner looks, added privacy, and improved comfort with professional tinting.',
      image: '/assets/window-tinting.png',
    },
    {
      title: 'Tech Install',
      tag: 'Best for: Modern convenience',
      description: 'Modern upgrades installed cleanly so your car feels more practical, connected, and protected.',
      image: '/assets/tech-install.png',
    },
  ];

  return (
    <section className="py-24 bg-brand-carbon relative overflow-hidden">
      <div className="absolute inset-0 right-0 w-[50%] bg-gradient-to-l from-brand-red/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-[60px] leading-[0.9] font-black tracking-tighter uppercase mb-4">Signature <span className="text-brand-red">Services</span></h2>
            <p className="text-brand-muted text-lg font-light">Specialized treatments for drivers who demand more.</p>
          </div>
          <a href="#services" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-white hover:text-brand-red transition-colors group font-bold">
            See all services
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="space-y-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-brand-black border border-white/5 overflow-hidden flex flex-col md:flex-row"
            >
              {/* Glossy sweep effect */}
              <div className="absolute inset-0 transform -translate-x-[150%] skew-x-[-30deg] bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-[sweep_1.5s_ease-in-out_forwards]" />
              
              <div className="md:w-2/5 h-64 md:h-auto relative bg-brand-carbon border-r border-white/5 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-brand-black to-transparent z-10" />
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-20" />
              </div>
              
              <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center relative z-20">
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-red font-black mb-4 block">
                  {service.tag}
                </span>
                <h3 className="text-3xl md:text-[40px] leading-none font-black tracking-tighter uppercase mb-6 text-white group-hover:text-brand-red transition-colors">
                  {service.title}
                </h3>
                <div className="h-[1px] w-12 bg-brand-red mb-6"></div>
                <p className="text-brand-muted leading-relaxed font-light text-base max-w-xl text-xs tracking-wider uppercase">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
