import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, RotateCcw } from 'lucide-react';

export default function ServiceSelector() {
  const [step, setStep] = useState(1);
  const [condition, setCondition] = useState('');
  const [goal, setGoal] = useState('');

  const conditionOptions = [
    'Brand-new car',
    'Lightly used',
    'Daily driver',
    'Heavily used',
    'Preparing for sale'
  ];

  const goalOptions = [
    'Deep clean',
    'Better shine',
    'Paint protection',
    'Privacy/comfort',
    'Tech upgrade'
  ];

  const handleReset = () => {
    setStep(1);
    setCondition('');
    setGoal('');
  };

  const getRecommendation = () => {
    if (goal === 'Paint protection' || condition === 'Brand-new car') {
      return 'Recommended: Paint Correction + Ceramic Coating';
    }
    if (goal === 'Deep clean' || condition === 'Heavily used') {
      return 'Recommended: Interior + Exterior Detail';
    }
    if (goal === 'Privacy/comfort' || goal === 'Tech upgrade') {
      return 'Recommended: Window Tinting or Tech Installation';
    }
    if (goal === 'Better shine') {
      return 'Recommended: Cut & Polish + Exterior Detail';
    }
    return 'Recommended: Interior + Exterior Detail'; // default
  };

  return (
    <section className="py-24 bg-brand-carbon relative">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-[60px] leading-[0.9] font-black tracking-tighter uppercase mb-4 text-white">Not <span className="text-brand-red">Sure?</span></h2>
          <p className="text-brand-muted text-lg font-light">Use our quick selector to find the right service path.</p>
        </div>

        <div className="bg-brand-black border border-white/10 p-8 relative overflow-hidden">
          {/* Progress bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-white/5">
            <motion.div 
              className="h-full bg-brand-red"
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <div className="min-h-[300px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="w-full"
                >
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-6 text-center text-white">Select Vehicle Condition</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {conditionOptions.map(opt => (
                      <button
                        key={opt}
                        onClick={() => { setCondition(opt); setStep(2); }}
                        className="p-6 border border-white/10 bg-brand-carbon hover:border-brand-red text-white transition-colors text-xs font-bold uppercase tracking-widest text-left"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="w-full"
                >
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-6 text-center text-white">What is your main goal?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {goalOptions.map(opt => (
                      <button
                        key={opt}
                        onClick={() => { setGoal(opt); setStep(3); }}
                        className="p-6 border border-white/10 bg-brand-carbon hover:border-brand-red text-white transition-colors text-xs font-bold uppercase tracking-widest text-left"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                  <button 
                    onClick={() => setStep(1)}
                    className="mt-6 text-xs text-brand-muted hover:text-white flex items-center justify-center gap-1 mx-auto uppercase tracking-wider"
                  >
                    <RotateCcw className="w-3 h-3" /> Back
                  </button>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="w-full text-center"
                >
                  <div className="w-12 h-1 bg-brand-red mx-auto mb-6" />
                  <h3 className="text-3xl md:text-[40px] leading-tight font-black tracking-tighter uppercase mb-4 text-white">
                    {getRecommendation()}
                  </h3>
                  <p className="text-brand-muted mb-8 max-w-sm mx-auto text-xs uppercase tracking-wider leading-relaxed">
                    Based on your vehicle's condition "{condition.toLowerCase()}" and your goal for "{goal.toLowerCase()}".
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href="tel:0493427300"
                      className="bg-brand-red hover:bg-brand-darkred text-white px-10 py-5 font-bold uppercase text-xs tracking-[0.2em] overflow-hidden inline-block transition-colors"
                    >
                      Call for a Quote
                    </a>
                    <button 
                      onClick={handleReset}
                      className="border border-white/20 hover:border-brand-red px-10 py-5 font-bold uppercase text-xs tracking-[0.2em] transition-colors inline-block text-white"
                    >
                      Start Over
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
