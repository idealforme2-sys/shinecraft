import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function WhyChoose() {
  const points = [
    'Mobile convenience brings the service to you.',
    'Professional car-care finish every time.',
    'Interior and exterior attention to detail.',
    'Paint correction and ceramic protection options.',
    'Services for used and brand-new vehicles.',
    'Clean tech installation options.',
    'Easy contact by phone or Instagram.',
  ];

  return (
    <section className="py-24 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-[1px] w-12 bg-brand-red"></div>
              <span className="text-brand-red text-xs font-bold uppercase tracking-[0.3em]">The Difference</span>
            </div>
            <h2 className="text-4xl md:text-[60px] leading-[0.9] font-black tracking-tighter uppercase mb-8">
              Why Adelaide<br/>Chooses <span className="text-brand-red">Us.</span>
            </h2>
            <p className="text-brand-muted text-lg mb-10 max-w-lg font-light leading-relaxed">
              We don't do quick washes. We do professional detailing designed to make your vehicle feel appropriately premium, all without you having to leave your home or office.
            </p>
            <a
              href="tel:0493427300"
              className="bg-brand-red hover:bg-brand-darkred text-white px-10 py-5 font-bold uppercase text-xs tracking-[0.2em] overflow-hidden inline-block transition-colors"
            >
              Book Your Detail
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-1/2 w-full"
          >
            <div className="bg-brand-carbon border border-white/5 p-8 md:p-12">
              <ul className="space-y-6">
                {points.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-brand-red mt-1.5" />
                    </div>
                    <span className="text-white text-sm md:text-base font-bold uppercase tracking-tight leading-relaxed">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
