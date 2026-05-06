import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      text: "The car felt fresh again.",
      note: "Jason Marsh"
    },
    {
      text: "The finish looked cleaner and sharper.",
      note: "Ava T."
    },
    {
      text: "Convenient mobile service.",
      note: "Liam Carter"
    },
    {
      text: "Professional and easy to deal with.",
      note: "Noah K."
    }
  ];

  return (
    <section className="py-24 bg-brand-black border-t border-white/5 relative">
      <div className="absolute inset-0 right-0 w-[50%] bg-gradient-to-l from-brand-red/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-[1px] w-12 bg-brand-red"></div>
            <span className="text-brand-red text-xs font-bold uppercase tracking-[0.3em]">Client Feedback</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-[60px] leading-[0.9] font-black tracking-tighter uppercase mb-4"
          >
            Word of <span className="display-outline">Mouth.</span>
          </motion.h2>
          <p className="text-xs text-brand-muted uppercase tracking-[0.28em] mt-4">
            Real client feedback and finished-car reactions from across Adelaide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-carbon p-8 border border-white/5 relative group hover:border-brand-red/50 transition-colors"
            >
              {/* Red quote accent */}
              <div className="absolute top-0 left-0 w-8 h-[2px] bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex gap-1 mb-6 mt-2">
                {[1,2,3,4,5].map(star => (
                  <Star key={star} className="w-4 h-4 fill-brand-red text-brand-red" />
                ))}
              </div>
              
              <p className="text-brand-muted text-sm leading-relaxed mb-6 font-light italic">
                "{review.text}"
              </p>
              
              <span className="text-[10px] text-brand-red uppercase tracking-wider font-bold">
                {review.note}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
