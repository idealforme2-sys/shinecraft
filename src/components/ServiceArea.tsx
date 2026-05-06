import { motion } from 'motion/react';
import { MapPin, Phone, Instagram } from 'lucide-react';

export default function ServiceArea() {
  return (
    <section className="py-24 bg-brand-black relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold font-heading mb-6"
            >
              Mobile Detailing Across Adelaide
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-brand-muted mb-8 max-w-xl leading-relaxed"
            >
              Based in Adelaide, South Australia, ShineCraft Detailing brings professional car detailing and automotive services directly to you.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-3 text-white">
                <MapPin className="w-5 h-5 text-brand-red" />
                <span className="font-medium">Adelaide, SA</span>
              </div>
              <div className="flex items-center gap-3 text-white">
                <div className="w-5 h-5 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-brand-red" />
                </div>
                <span className="font-medium">Fully Mobile Service</span>
              </div>
              <div className="flex items-center gap-3 text-white mt-4">
                <a href="tel:0493427300" className="inline-flex items-center gap-2 hover:text-brand-red transition-colors">
                  <Phone className="w-5 h-5" />
                  <span className="font-bold">0493 427 300</span>
                </a>
              </div>
              <div className="flex items-center gap-3 text-white">
                <a href="https://www.instagram.com/shinecraft_au" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-brand-red transition-colors">
                  <Instagram className="w-5 h-5" />
                  <span className="font-bold">@shinecraft_au</span>
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] bg-brand-carbon border border-white/5 rounded-sm overflow-hidden"
          >
            <iframe
              title="ShineCraft service area map"
              src="https://www.google.com/maps?q=Adelaide%20SA&z=10&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-carbon via-brand-carbon/40 to-transparent" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
