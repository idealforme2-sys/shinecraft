import { motion } from 'motion/react';
import { Settings, Sparkles, Droplet, Sun, Smartphone, Video, Shield } from 'lucide-react';
import { cn } from '../lib/utils';

export default function ServicesOverview() {
  const services = [
    {
      title: 'Window Tinting',
      description: 'Cleaner looks, added privacy, and improved comfort.',
      icon: Sun,
    },
    {
      title: 'Interior Detailing',
      description: 'Deep cleans to bring back that fresh, cared-for feeling.',
      icon: Sparkles,
    },
    {
      title: 'Exterior Detailing',
      description: 'Safe, thorough washing to maintain your paint.',
      icon: Droplet,
    },
    {
      title: 'Cut & Polish',
      description: 'Enhances gloss and removes deep stains and oxidation.',
      icon: Settings, // using a placeholder icon here
    },
    {
      title: 'Paint Correction',
      description: 'Refines swirl marks, haze, and dull paint.',
      icon: Sparkles,
    },
    {
      title: 'Ceramic Coating',
      description: 'Long-lasting gloss and protection for your paint.',
      icon: Shield,
    },
    {
      title: 'Apple CarPlay',
      description: 'Modern upgrades installed cleanly.',
      icon: Smartphone,
    },
    {
      title: 'DashCam Install',
      description: 'Professional hardwired dashcam installations.',
      icon: Video,
    },
  ];

  return (
    <section id="services" className="py-24 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-[60px] leading-[0.9] font-black tracking-tighter uppercase mb-6"
          >
            Everything Your Car <span className="display-outline">Needs.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-muted leading-relaxed font-light"
          >
            From deep interior cleans to long-term paint protection, ShineCraft handles the details that make your car feel fresh again.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative bg-brand-carbon p-8 border border-white/5 hover:border-brand-red transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-8 h-[2px] bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
                <Icon className="w-6 h-6 text-brand-red mb-6" />
                <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-3">{service.title}</h3>
                <p className="text-xs text-brand-muted leading-relaxed uppercase tracking-wider">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


