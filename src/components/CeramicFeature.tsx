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
            <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.2)_1px,transparent_1px)] [background-size:40px_40px]" />
            
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

            <div className="absolute left-6 top-6 z-10 border border-white/10 bg-brand-black/70 px-5 py-4 backdrop-blur-md">
              <div className="mb-2 flex items-center gap-3">
                <div className="h-[1px] w-8 bg-brand-red" />
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-red">Ceramic Finish</span>
              </div>
              <p className="max-w-[220px] text-[10px] uppercase tracking-[0.24em] leading-relaxed text-white/65">
                Deep gloss, slick feel, and easier maintenance with a cleaner protected surface.
              </p>
            </div>

            <div className="absolute bottom-6 right-6 z-10 grid grid-cols-3 overflow-hidden border border-white/10 bg-brand-black/70 backdrop-blur-md">
              {[
                { label: 'Gloss', value: '01' },
                { label: 'Shield', value: '02' },
                { label: 'Slick', value: '03' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="group min-w-[86px] border-l border-white/10 bg-transparent px-4 py-4 transition-colors duration-300 first:border-l-0 hover:bg-white/[0.03]"
                >
                  <div className="mb-2 text-[10px] font-mono uppercase tracking-[0.3em] text-white/35 transition-all duration-300 group-hover:text-[#d6b16b] group-hover:[text-shadow:0_0_18px_rgba(214,177,107,0.28)]">
                    {item.value}
                  </div>
                  <div className="bg-[linear-gradient(90deg,#ffffff_0%,#f3e7c5_55%,#d6b16b_100%)] bg-[length:200%_100%] bg-[position:0%_50%] bg-clip-text text-[11px] font-bold uppercase tracking-[0.22em] text-white transition-all duration-500 group-hover:bg-[position:100%_50%] group-hover:text-transparent group-hover:[text-shadow:0_0_18px_rgba(214,177,107,0.16)]">
                    {item.label}
                  </div>
                </div>
              ))}
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
              <h2 className="text-4xl md:text-[60px] leading-[0.9] font-black tracking-tighter uppercase mb-6">Gloss That<br/><span className="display-outline">Lasts.</span></h2>
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
