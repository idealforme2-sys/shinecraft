import { useEffect, useState } from 'react';
import type { Attributes } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type GalleryCardData = {
  title: string;
  description: string;
  span: string;
  images: string[];
};

type CarouselCardProps = {
  card: GalleryCardData;
  index: number;
} & Attributes;

function loadImages(globResult: Record<string, string>) {
  return Object.entries(globResult)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([, src]) => src);
}

const paintCorrectionImages = loadImages(
  import.meta.glob('../../Paint correction/*.{jpg,jpeg,JPG,JPEG,png,PNG}', {
    eager: true,
    import: 'default',
  }) as Record<string, string>
);

const interiorDetailingImages = loadImages(
  import.meta.glob('../../Interior Detailing/*.{jpg,jpeg,JPG,JPEG,png,PNG}', {
    eager: true,
    import: 'default',
  }) as Record<string, string>
);

const ceramicCoatingImages = loadImages(
  import.meta.glob('../../Ceramic Coating/*.{jpg,jpeg,JPG,JPEG,png,PNG}', {
    eager: true,
    import: 'default',
  }) as Record<string, string>
);

const cutAndPolishImages = loadImages(
  import.meta.glob('../../Cut & polish/*.{jpg,jpeg,JPG,JPEG,png,PNG}', {
    eager: true,
    import: 'default',
  }) as Record<string, string>
);

const techUpgradeImages = loadImages(
  import.meta.glob('../../Dash cam etc/*.{jpg,jpeg,JPG,JPEG,png,PNG}', {
    eager: true,
    import: 'default',
  }) as Record<string, string>
);

function CarouselCard({ card, index }: CarouselCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (card.images.length <= 1 || isPaused) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % card.images.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, [card.images.length, isPaused]);

  useEffect(() => {
    setActiveIndex(0);
  }, [card.title]);

  const goToSlide = (nextIndex: number) => {
    const total = card.images.length;
    setActiveIndex((nextIndex + total) % total);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative overflow-hidden group bg-brand-black border border-white/5 ${card.span}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={card.images[activeIndex]}
          src={card.images[activeIndex]}
          alt={card.title}
          initial={{ opacity: 0.35, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0.35, scale: 0.985 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-brand-black/15 group-hover:bg-brand-black/5 transition-colors duration-300" />

      {card.images.length > 1 && (
        <>
          <button
            type="button"
            aria-label={`Previous ${card.title} image`}
            onClick={() => goToSlide(activeIndex - 1)}
            className="absolute left-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white/80 backdrop-blur-sm transition hover:border-brand-red hover:text-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label={`Next ${card.title} image`}
            onClick={() => goToSlide(activeIndex + 1)}
            className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/45 text-white/80 backdrop-blur-sm transition hover:border-brand-red hover:text-white"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </>
      )}

      <div className="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.3em] text-white/75 backdrop-blur-sm">
        {String(activeIndex + 1).padStart(2, '0')} / {String(card.images.length).padStart(2, '0')}
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 p-6 md:p-8">
        <div className="w-12 h-[2px] bg-brand-red mb-4" />
        <h3 className="text-white font-bold uppercase tracking-tight text-xl mb-3">{card.title}</h3>
        <p className="max-w-md text-[10px] uppercase tracking-[0.24em] text-white/65 leading-relaxed">
          {card.description}
        </p>

        {card.images.length > 1 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {card.images.map((image, dotIndex) => (
              <button
                key={image}
                type="button"
                aria-label={`Show ${card.title} image ${dotIndex + 1}`}
                onClick={() => goToSlide(dotIndex)}
                className={`h-1.5 rounded-full transition-all ${
                  dotIndex === activeIndex ? 'w-8 bg-brand-red' : 'w-3 bg-white/30 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        )}
      </div>
      
      <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 transition-colors duration-500 pointer-events-none" />
    </motion.div>
  );
}

export default function Gallery() {
  const cards: GalleryCardData[] = [
    {
      title: 'Paint Correction',
      description: 'Swirl reduction, clarity recovery, and gloss brought back across multiple finishes.',
      span: 'col-span-1 md:col-span-2 row-span-2',
      images: paintCorrectionImages,
    },
    {
      title: 'Interior Detailing',
      description: 'Deep interior refreshes that lift grime, reset surfaces, and restore that clean-cabin feel.',
      span: 'col-span-1 row-span-1',
      images: interiorDetailingImages,
    },
    {
      title: 'Ceramic Coating',
      description: 'Protected paintwork with slicker gloss, tighter beading, and a cleaner finished look.',
      span: 'col-span-1 row-span-1',
      images: ceramicCoatingImages,
    },
    {
      title: 'Cut & Polish',
      description: 'Gloss enhancement work that sharpens reflections and lifts tired, weathered paint.',
      span: 'col-span-1 row-span-1',
      images: cutAndPolishImages,
    },
    {
      title: 'Tech Upgrades',
      description: 'CarPlay installation, reverse camera installation, dashcam installation, touchscreen upgrades.',
      span: 'col-span-1 md:col-span-2 row-span-1',
      images: techUpgradeImages,
    },
  ];

  return (
    <section id="results" className="py-24 bg-brand-carbon relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-[1px] w-12 bg-brand-red"></div>
            <span className="text-brand-red text-xs font-bold uppercase tracking-[0.3em]">Real Results</span>
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-[60px] leading-[0.9] font-black tracking-tighter uppercase mb-6"
          >
            Clean <span className="display-outline">Finish.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-brand-muted max-w-2xl font-light leading-relaxed"
          >
            A look at some of the vehicles we've finished across Adelaide.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {cards.map((card, index) => (
            <CarouselCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
