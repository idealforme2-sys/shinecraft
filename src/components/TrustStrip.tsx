import { motion } from 'motion/react';

export default function TrustStrip() {
  const items = [
    { type: 'Service Type', title: 'Mobile Fleet' },
    { type: 'Exterior', title: 'Paint Correction' },
    { type: 'Interior', title: 'Full Restoration' },
    { type: 'Tech', title: 'CarPlay & DashCam' },
  ];

  return (
    <section className="bg-brand-carbon border-t border-white/5 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/5 relative z-20">
      {items.map((item, index) => {
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="py-8 px-6 lg:px-10 flex items-center gap-4 group cursor-default"
          >
            <div className="w-2 h-2 rounded-full bg-brand-red group-hover:scale-150 transition-transform"></div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-brand-muted mb-1">{item.type}</div>
              <div className="text-xs font-bold uppercase tracking-tighter text-white">{item.title}</div>
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}
