import { motion } from 'motion/react';

export default function Gallery() {
  const images = [
    { src: '/assets/detailing-before-after-1.jpg', label: 'Paint Correction', span: 'col-span-1 md:col-span-2 row-span-2' },
    { src: '/assets/interior-detail.jpg', label: 'Interior Detailing', span: 'col-span-1 row-span-1' },
    { src: '/assets/ceramic-coating.jpg', label: 'Ceramic Coating', span: 'col-span-1 row-span-1' },
    { src: '/assets/paint-correction.jpg', label: 'Cut & Polish', span: 'col-span-1 row-span-1' },
    { src: '/assets/window-tinting.jpg', label: 'Window Tinting', span: 'col-span-1 md:col-span-2 row-span-1' },
  ];

  return (
    <section id="results" className="py-24 bg-brand-carbon relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-[1px] w-12 bg-brand-red"></div>
            <span className="text-brand-red text-xs font-bold uppercase tracking-[0.3em]">Real Results</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-[60px] leading-[0.9] font-black tracking-tighter uppercase mb-6"
          >
            Clean <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Finish.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-muted max-w-2xl font-light leading-relaxed"
          >
            A look at some of the vehicles we've finished across Adelaide.
          </motion.p>
        </div>

        {/* Note about placeholders */}
        <p className="text-xs text-brand-red font-mono mb-6 uppercase tracking-widest">
          Developer Note: Replace placeholders with real ShineCraft project photos
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden group bg-brand-black border border-white/5 ${img.span}`}
            >
              <div className="absolute inset-0 bg-[#0a0a0a] flex items-center justify-center p-8">
                <span className="text-brand-muted/30 font-mono text-xs tracking-widest uppercase">Image Placeholder</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-12 h-[2px] bg-brand-red mb-4" />
                <h3 className="text-white font-bold uppercase tracking-tight text-xl">{img.label}</h3>
              </div>
              
              {/* Subtle hover effect lines */}
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
