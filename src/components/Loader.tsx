import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import shineCraftLogo from '../../shinecraft_logo.jpg';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Keep it short, not gimmicky, as requested
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }} // smooth cinematic lift out
          className="fixed inset-0 z-[100] bg-brand-black flex items-center justify-center overflow-hidden"
        >
           {/* Subtle red light streaks bg */}
           <motion.div 
             initial={{ opacity: 0, scale: 1.1 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1.5 }}
             className="absolute inset-0 flex justify-center items-center pointer-events-none"
           >
             <div className="w-[120%] h-px bg-gradient-to-r from-transparent via-brand-red/40 to-transparent rotate-[-15deg] opacity-60" />
             <div className="w-[120%] h-px bg-gradient-to-r from-transparent via-brand-red/20 to-transparent rotate-[15deg] opacity-60 mix-blend-screen" />
           </motion.div>

             <div className="relative z-10 flex flex-col items-center">
             <motion.img
               initial={{ opacity: 0, scale: 0.9, y: 10, filter: 'blur(10px)' }}
               animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
               transition={{ duration: 0.9, delay: 0.1 }}
               src={shineCraftLogo}
               alt="ShineCraft logo"
               className="h-24 md:h-28 w-auto object-contain mb-4"
             />
             
             <motion.span
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
               className="text-brand-muted text-[10px] tracking-[0.4em] font-bold uppercase"
             >
               Premium Mobile Detailing
             </motion.span>
             
             {/* Red sweeping reflection line */}
             <div className="mt-8 w-48 h-[2px] bg-white/5 relative overflow-hidden">
               <motion.div 
                 initial={{ x: '-100%' }}
                 animate={{ x: '100%' }}
                 transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.2 }}
                 className="absolute inset-0 bg-brand-red w-1/3"
               />
             </div>
           </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
