import { motion } from 'motion/react';
import { MessageSquare, ListChecks, MapPin, Sparkles } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: '01',
      title: 'Get in touch',
      description: 'Call or message ShineCraft with your vehicle and the service you need.',
      icon: MessageSquare,
    },
    {
      num: '02',
      title: 'Choose your service',
      description: 'Pick from detailing, coating, tinting, polishing, or installation services.',
      icon: ListChecks,
    },
    {
      num: '03',
      title: 'We come to you',
      description: 'Mobile service available across Adelaide for a more convenient experience.',
      icon: MapPin,
    },
    {
      num: '04',
      title: 'Your car gets finished properly',
      description: 'Your vehicle is cleaned, refined, protected, and returned looking sharper.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="process" className="py-24 bg-brand-black relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-[60px] leading-[0.9] font-black tracking-tighter uppercase mb-6">How It <span className="display-outline">Works</span></h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto font-light leading-relaxed">
            A simple, professional process designed around convenience without sacrificing the finish.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Desktop connecting line */}
          <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-white/5">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="h-full bg-brand-red origin-left"
            />
          </div>

          {steps.map((step, index) => {
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center group"
              >
                {/* Mobile connecting line */}
                {index !== steps.length - 1 && (
                  <div className="lg:hidden absolute top-[80px] bottom-[-32px] left-1/2 -translate-x-1/2 w-[1px] bg-brand-red/30" />
                )}

                <div className="w-20 h-20 mb-6 relative z-10 flex items-center justify-center">
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-brand-red" />
                  <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[1px] bg-brand-red" />
                  <div className="absolute inset-2 bg-brand-black flex items-center justify-center border border-white/10 group-hover:border-brand-red transition-colors">
                    <span className="text-white font-black text-xl tracking-tighter">{step.num}</span>
                  </div>
                </div>

                <div className="bg-brand-carbon p-8 w-full border border-white/5 hover:border-brand-red/50 transition-colors relative z-10 text-left">
                  <h3 className="text-lg font-bold uppercase tracking-tight mb-3 text-white">{step.title}</h3>
                  <div className="h-[2px] w-8 bg-brand-red mb-4"></div>
                  <p className="text-xs text-brand-muted uppercase tracking-wider leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
