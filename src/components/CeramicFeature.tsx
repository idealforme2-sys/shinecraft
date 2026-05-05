import { motion } from 'motion/react';
import { Droplets, ShieldCheck, Sparkles } from 'lucide-react';

export default function CeramicFeature() {
  const benefits = [
    {
      icon: Sparkles,
      title: 'Deeper Gloss',
      desc: 'Enhances the natural reflection of your paint.'
    },
    {
      icon: Droplets,
      title: 'Easier Cleaning',
      desc: 'Hydrophobic properties repel water and dirt.'
    },
    {
      icon: ShieldCheck,
      title: 'Added Protection',
      desc: 'Helps protect against environmental contaminants.'
    }
  ];

  return (
    <section className="py-24 bg-brand-carbon relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 right-0 w-[80%] bg-gradient-to-l from-brand-red/5 to-transparent pointer-events-none" />
      <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-brand-red/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Visual / Silhouette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative aspect-square lg:aspect-auto lg:h-[600px] bg-brand-black border border-white/5 overflow-hidden group rounded-sm"
          >
            {/* Simulation of a car surface with a coating layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-black" />
            
            {/* The "coating" reflection that moves on hover/scroll */}
            <motion.div 
              animate={{ 
                x: ['-200%', '200%'],
              }}
              transition={{ 
                duration: 4, 
                ease: 'linear', 
                repeat: Infinity,
                repeatDelay: 2
              }}
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]"
            />
            
            {/* Subtle red reflection */}
            <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-brand-red/20 to-transparent mix-blend-screen" />

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <span className="text-white/20 font-mono tracking-widest uppercase text-sm border border-white/10 px-4 py-2">Paint Surface Simulation</span>
            </div>
          </motion.div>

          {/* Right: Copy */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="h-[1px] w-12 bg-brand-red"></div>
                <span className="text-brand-red text-xs font-bold uppercase tracking-[0.3em]">Protection</span>
              </div>
              <h2 className="text-4xl md:text-[60px] leading-[0.9] font-black tracking-tighter uppercase mb-6">Gloss That<br/><span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Lasts.</span></h2>
              <p className="text-lg text-brand-muted mb-10 font-light leading-relaxed max-w-xl">
                Ceramic coating adds a slick protective layer designed to help your car maintain a deeper shine, resist dirt buildup, and make maintenance easier.
              </p>
            </motion.div>

            <div className="space-y-6 mb-10">
              {benefits.map((benefit, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-6 border border-white/5 bg-brand-black"
                  >
                    <div className="shrink-0 mt-1.5">
                      <div className="w-2 h-2 bg-brand-red" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-tight mb-2 text-sm">{benefit.title}</h4>
                      <p className="text-[10px] uppercase tracking-wider text-brand-muted leading-relaxed">{benefit.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-xs text-brand-muted/70 italic max-w-md"
            >
              *Results and durability depend on paint condition, preparation, product used, and maintenance.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}
