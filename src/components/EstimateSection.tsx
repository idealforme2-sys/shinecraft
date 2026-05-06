import { motion } from 'motion/react';
import { ArrowRight, CarFront, MapPin, MessageSquareText, Phone, ShieldCheck, Sparkles } from 'lucide-react';

export default function EstimateSection() {
  const highlights = [
    {
      icon: CarFront,
      label: 'Vehicle',
      value: 'Daily driver, prestige, SUV, or fleet',
    },
    {
      icon: Sparkles,
      label: 'Service',
      value: 'Detailing, correction, coating, or installs',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Adelaide suburb for mobile arrival',
    },
    {
      icon: ShieldCheck,
      label: 'Finish Goal',
      value: 'Refresh, protection, gloss, or restoration',
    },
  ];

  return (
    <section id="estimate" className="py-24 bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(217,4,22,0.05),transparent_24%,transparent_76%,rgba(217,4,22,0.05))]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-[1px] w-10 bg-brand-red" />
              <span className="text-brand-red text-[10px] font-bold uppercase tracking-[0.3em]">Estimate Request</span>
            </div>

            <h2 className="text-4xl md:text-[62px] leading-[0.9] font-black tracking-tighter uppercase mb-6">
              Get A Clear <span className="display-outline">Quote.</span>
            </h2>

            <p className="max-w-2xl text-lg text-brand-muted font-light leading-relaxed mb-10">
              Share the vehicle, the service you want, and where you are in Adelaide. We&apos;ll point you toward the right package and a realistic estimate.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    className="border border-white/8 bg-brand-carbon px-5 py-5"
                  >
                    <Icon className="w-5 h-5 text-brand-red mb-4" />
                    <div className="text-[10px] uppercase tracking-[0.28em] text-brand-muted mb-2">{item.label}</div>
                    <div className="text-sm font-bold uppercase tracking-tight text-white leading-snug">{item.value}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="border border-white/8 bg-brand-carbon p-6 md:p-8"
          >
            <div className="mb-6">
              <div className="text-[10px] uppercase tracking-[0.3em] text-brand-red font-bold mb-3">Fast Estimate</div>
              <h3 className="text-2xl md:text-[34px] leading-none font-black tracking-tighter uppercase text-white mb-4">
                Ready When You Are
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                Bring the essentials and we can size up the job quickly.
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-white/10 bg-brand-black px-4 py-4 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-brand-red"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full border border-white/10 bg-brand-black px-4 py-4 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-brand-red"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Vehicle"
                  className="w-full border border-white/10 bg-brand-black px-4 py-4 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-brand-red"
                />
                <input
                  type="text"
                  placeholder="Suburb"
                  className="w-full border border-white/10 bg-brand-black px-4 py-4 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-brand-red"
                />
              </div>

              <input
                type="text"
                placeholder="Service Needed"
                className="w-full border border-white/10 bg-brand-black px-4 py-4 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-brand-red"
              />

              <textarea
                placeholder="Tell us the condition, finish goal, or install details"
                rows={5}
                className="w-full resize-none border border-white/10 bg-brand-black px-4 py-4 text-sm text-white placeholder:text-white/30 outline-none transition focus:border-brand-red"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0493427300"
                className="flex-1 bg-brand-red px-6 py-4 text-center text-xs font-bold uppercase tracking-[0.22em] text-white transition hover:bg-brand-darkred"
              >
                <span className="inline-flex items-center gap-3">
                  <Phone className="w-4 h-4" />
                  Call For Estimate
                </span>
              </a>
              <a
                href="https://www.instagram.com/shinecraft_au"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 border border-white/15 px-6 py-4 text-center text-xs font-bold uppercase tracking-[0.22em] text-white transition hover:border-brand-red"
              >
                <span className="inline-flex items-center gap-3">
                  <MessageSquareText className="w-4 h-4" />
                  Message Estimate
                </span>
              </a>
            </div>

            <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-brand-muted">
              <ArrowRight className="w-4 h-4 text-brand-red" />
              Adelaide mobile service for detailing, correction, ceramic coating, and tech installs.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
