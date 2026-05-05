import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do you offer mobile detailing?',
      a: 'Yes. ShineCraft Detailing offers mobile car detailing services across Adelaide, South Australia.',
    },
    {
      q: 'Do you work on brand-new cars?',
      a: 'Yes. ShineCraft provides services for both used and brand-new vehicles.',
    },
    {
      q: 'What services do you offer?',
      a: 'Services include interior and exterior detailing, window tinting, cut and polish, paint correction, ceramic coating, Apple CarPlay installation, and DashCam installation.',
    },
    {
      q: 'How do I get a quote?',
      a: 'Call 0493 427 300 or message ShineCraft on Instagram with your vehicle details and the service you need.',
    },
    {
      q: 'Is ceramic coating worth it?',
      a: 'Ceramic coating can help add gloss, protection, and easier maintenance, especially when the paint is properly prepared first.',
    },
    {
      q: 'Do you install Apple CarPlay and DashCams?',
      a: 'Yes. ShineCraft offers Apple CarPlay and DashCam installation services.',
    },
  ];

  return (
    <section id="faq" className="py-24 bg-brand-black">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 bg-brand-red"></div>
            <span className="text-brand-red text-xs font-bold uppercase tracking-[0.3em]">Support</span>
            <div className="h-[1px] w-12 bg-brand-red"></div>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-[60px] leading-[0.9] font-black tracking-tighter uppercase mb-6"
          >
            Clear <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Answers.</span>
          </motion.h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border ${openIndex === index ? 'border-brand-red' : 'border-white/5'} bg-brand-carbon transition-colors duration-300 group hover:border-brand-red/50`}
            >
              <button
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center gap-4">
                  <span className="text-brand-red text-xs font-bold font-mono tracking-widest block w-6">{(index + 1).toString().padStart(2, '0')}</span>
                  <span className={`text-sm font-bold uppercase tracking-tight ${openIndex === index ? 'text-white' : 'text-brand-muted'} group-hover:text-white transition-colors`}>
                    {faq.q}
                  </span>
                </div>
                <div className={`shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-4 h-4 text-brand-muted group-hover:text-brand-red transition-colors" />
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 pl-[4.5rem]">
                      <p className="text-brand-muted text-xs leading-relaxed uppercase tracking-wider">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
