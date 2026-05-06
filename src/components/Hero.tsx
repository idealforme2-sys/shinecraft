import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import heroCardImage from '../../hero card image.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-brand-black">
        <div className="absolute inset-0 opacity-20 bg-dot-pattern"></div>
        <div className="absolute top-[-100px] right-[-100px] lg:right-[-200px] w-[500px] lg:w-[600px] h-[500px] lg:h-[600px] bg-brand-red opacity-10 blur-[120px] rounded-full pointer-events-none z-0"></div>
        <div className="absolute bottom-[-50px] left-[-50px] w-[300px] lg:w-[400px] h-[300px] lg:h-[400px] bg-brand-darkred opacity-10 blur-[100px] rounded-full pointer-events-none z-0"></div>
        
        {/* Right side background image placeholder */}
        <div className="absolute inset-0 right-0 w-[80%] ml-auto z-0 flex items-center justify-end pr-10 lg:pr-20 opacity-30 lg:opacity-100">
           <div className="hidden md:block w-full max-w-[350px] lg:max-w-[450px] xl:max-w-[500px] aspect-[4/5] bg-[#111111] border border-white/5 relative overflow-hidden group shadow-2xl">
              <img
                src={heroCardImage}
                alt="Ceramic coating feature"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10 z-10"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-red/15 via-transparent to-transparent z-10"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[40%] bg-white/10 rotate-[-35deg] blur-3xl z-10"></div>
              
              <div className="absolute bottom-8 left-8 right-8 z-20">
                 <div className="text-[10px] uppercase tracking-[0.4em] text-brand-red font-black mb-2">Featured Service</div>
                 <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-0">Ceramic Coating</h3>
                 <div className="h-[2px] w-12 bg-brand-red my-4"></div>
                 <p className="text-xs text-brand-muted leading-relaxed uppercase tracking-wider">Ultimate protection and hydrophobic depth for high-end paintwork.</p>
              </div>
              <div className="absolute top-0 right-0 p-8 z-20">
                 <span className="text-6xl font-black text-white/5 leading-none tracking-tighter">01</span>
              </div>
           </div>
        </div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="h-[1px] w-12 bg-brand-red"></div>
              <span className="text-brand-red text-xs font-bold uppercase tracking-[0.3em]">Premium Mobile Detailing</span>
            </div>
            
            <h1 className="text-5xl lg:text-[84px] leading-[0.9] font-black tracking-tighter uppercase mb-6 text-white pb-2 relative z-10">
              Showroom<br />
              <span className="display-outline">Shine,</span><br />
              Brought To <span className="text-brand-red">You.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-lg text-brand-muted mb-10 max-w-lg font-light leading-relaxed">
              Professional car care across Adelaide. We specialize in deep detailing, ceramic coating, and paint correction for those who demand a properly finished vehicle.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            <a
              href="tel:0493427300"
              className="group relative bg-white text-black px-10 py-5 font-bold uppercase text-xs tracking-[0.2em] overflow-hidden inline-block w-full sm:w-auto text-center"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Call Now</span>
              <div className="absolute inset-0 bg-brand-red translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            <a
              href="#services"
              className="border border-white/20 hover:border-brand-red px-10 py-5 font-bold uppercase text-xs tracking-[0.2em] transition-colors inline-block text-white w-full sm:w-auto text-center"
            >
              View Services
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex gap-10 opacity-60 flex-wrap"
          >
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest mb-1 text-brand-muted">Location</span>
              <span className="text-xs font-bold uppercase text-white">Adelaide, SA</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest mb-1 text-brand-muted">Experience</span>
              <span className="text-xs font-bold uppercase text-white">Master Finish</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest mb-1 text-brand-muted">Booking</span>
              <span className="text-xs font-bold uppercase text-white">Available Now</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
