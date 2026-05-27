import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, ChefHat, Smile, Tv, Gamepad2, Swords, Activity, BookOpen, Dumbbell } from 'lucide-react';
import { categories, allVideos } from '../data/mockData';
import VideoCard from '../components/VideoCard';
import PdfModal from '../components/PdfModal';

const IconMap = {
  cooking: ChefHat,
  comedy: Smile,
  cartoon: Tv,
  games: Gamepad2,
  fight: Swords,
  yoga: Activity,
  fitness: Dumbbell,
  emagazine: BookOpen,
  ebooks: BookOpen
};

const ThemeMap = {
  cooking:    { bg: "bg-[#0a1628] text-white", banner: "bg-gradient-to-r from-orange-700 to-yellow-600",          animation: { initial: { x: -50, opacity: 0 },        animate: { x: 0, opacity: 1, rotate: 0,   transition: { type: 'spring' } } },              mood: 'وصفات شهية' },
  comedy:     { bg: "bg-[#0a1628] text-white", banner: "bg-gradient-to-r from-pink-700 to-fuchsia-600",           animation: { initial: { scale: 0.5, opacity: 0, rotate: -10 }, animate: { scale: 1, opacity: 1, rotate: 0, transition: { type: 'spring', bounce: 0.6 } } }, mood: 'ضحك بلا حدود' },
  cartoon:    { bg: "bg-[#0a1628] text-white", banner: "bg-gradient-to-r from-blue-900 to-purple-900",            animation: { initial: { y: 20, opacity: 0 },         animate: { y: 0, opacity: 1,              transition: { duration: 1.2 } } },              mood: 'مغامرات سحرية' },
  games:      { bg: "bg-[#060f1e] text-white", banner: "bg-gradient-to-r from-[#060f1e] to-[#0d1f3c] border-b-4 border-[#c9a84c]", animation: { initial: { scale: 0.9, opacity: 0 }, animate: { scale: 1, opacity: 1, transition: { duration: 0.2 } } }, mood: 'العب واستمتع' },
  fight:      { bg: "bg-[#0a1628] text-white", banner: "bg-gradient-to-r from-red-900 to-[#0a1628]",              animation: { initial: { x: -100, skewX: -20, opacity: 0 }, animate: { x: 0, skewX: 0, opacity: 1, transition: { type: 'spring' } } }, clip: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)', mood: 'إثارة وتشويق' },
  yoga:       { bg: "bg-[#0a1628] text-white", banner: "bg-gradient-to-r from-teal-800 to-emerald-700",           animation: { initial: { opacity: 0 },                animate: { opacity: 1,                    transition: { duration: 2 } } },                mood: 'تنفس وتدفق' },
  fitness:    { bg: "bg-[#0a1628] text-white", banner: "bg-gradient-to-r from-green-800 to-emerald-600",          animation: { initial: { x: -50, opacity: 0 },        animate: { x: 0, opacity: 1,              transition: { type: 'spring' } } },             mood: 'تمارين احترافية' },
  emagazine:  { bg: "bg-[#0a1628] text-white", banner: "bg-gradient-to-r from-[#c9a84c] to-[#f0a500]",            animation: { initial: { y: -20, opacity: 0 },        animate: { y: 0, opacity: 1,              transition: { duration: 0.6 } } },              mood: 'كوميكس عربي' },
  ecookbooks: { bg: "bg-[#0a1628] text-white", banner: "bg-gradient-to-r from-orange-700 to-yellow-600",          animation: { initial: { y: -20, opacity: 0 },        animate: { y: 0, opacity: 1,              transition: { duration: 0.6 } } },              mood: 'وصفات شهية' },
  eyogabooks: { bg: "bg-[#0a1628] text-white", banner: "bg-gradient-to-r from-teal-800 to-emerald-700",           animation: { initial: { y: -20, opacity: 0 },        animate: { y: 0, opacity: 1,              transition: { duration: 0.6 } } },              mood: 'مكتبة العافية' },
  ebooks:     { bg: "bg-[#0a1628] text-white", banner: "bg-gradient-to-r from-[#0d1f3c] to-[#1a3a5c]",            animation: { initial: { y: -20, opacity: 0 },        animate: { y: 0, opacity: 1,              transition: { duration: 0.6 } } },              mood: 'المكتبة' },
};

const Category = () => {
  const { slug } = useParams();
  const [category, setCategory] = useState(null);
  const [videos, setVideos] = useState([]);
  const [activePdf, setActivePdf] = useState(null);
  const theme = ThemeMap[slug] || ThemeMap.cartoon;
  const CategoryIcon = IconMap[slug] || PlayCircle;

  useEffect(() => {
    window.scrollTo(0, 0); 
    const foundCat = categories.find(c => c.slug === slug);
    if (foundCat) {
      setCategory(foundCat);
      const catVideos = allVideos.find(v => v.categoryId === foundCat.id);
      setVideos(catVideos ? catVideos.items : []);
    }
  }, [slug]);

  if (!category) return <div className="min-h-screen bg-[#0a1628] flex items-center justify-center"><div className="text-[#c9a84c] text-2xl font-bold">جارٍ التحميل...</div></div>;

  return (
    <div className={`min-h-screen ${theme.bg}`}>
      {/* Dynamic Themed Hero */}
      <div 
        className={`relative pt-32 pb-24 overflow-hidden ${theme.banner}`}
        style={theme.clip ? { clipPath: theme.clip } : {}}
      >
        <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={theme.animation.initial}
            animate={theme.animation.animate}
            className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left"
          >
            <div className="w-28 h-28 rounded-[2rem] bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center flex-shrink-0 shadow-2xl">
              <CategoryIcon size={56} className="text-white" />
            </div>
            <div>
              <span className="font-black tracking-widest uppercase text-sm mb-2 block text-white/60">
                {theme.mood}
              </span>
              <h1 className="text-6xl md:text-8xl font-black mb-4 drop-shadow-xl text-white">
                {category.name}
              </h1>
              <p className="text-xl font-medium max-w-2xl text-white/90 drop-shadow">
                {category.description}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center mb-8 border-b border-[#c9a84c]/10 pb-4">
             <div className="text-sm font-bold opacity-70">
                <Link to="/" className="hover:underline">الرئيسية</Link>
                <span className="mx-2">/</span>
                <span>{category.name}</span>
             </div>
          </div>

          {(slug === 'ecookbooks' || slug === 'eyogabooks' || slug === 'emagazine') ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-8 gap-y-10 pt-4 pb-12">
              {videos.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.5) }}
                  whileHover={{ y: -20 }}
                  className="w-full sm:w-48 shadow-[15px_15px_30px_rgba(0,0,0,0.1)] relative group cursor-pointer"
                  onClick={() => item.pdfUrl && setActivePdf(item)}
                >
                  <div className="absolute inset-y-0 left-0 w-2 bg-gradient-to-r from-white/40 to-transparent z-10"></div>
                  <div className="absolute -right-3 top-2 bottom-2 w-3 bg-[#c9a84c]/20 rounded-r-md skew-y-[45deg] origin-left group-hover:bg-[#c9a84c]/40 transition-colors"></div>
                  <div className="aspect-[2/3] relative rounded-l-sm rounded-r-md overflow-hidden border-2 border-[#c9a84c]/20 bg-[#0d1f3c]">
                    {item.thumbnail ? (
                      <img src={item.thumbnail} className="w-full h-full object-cover relative z-0" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#0d1f3c]">
                        <BookOpen className="w-12 h-12 text-[#c9a84c]/40" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-slate-900/90 flex flex-col justify-center items-center p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <h3 className="text-white font-bold mb-2 line-clamp-3 text-xs">{item.title}</h3>
                      <span className="text-[#c9a84c] text-sm font-bold bg-white/10 px-3 py-1 rounded-full">اقرأ</span>
                    </div>
                  </div>
                  <div className="mt-4 opacity-100 group-hover:opacity-0 transition-opacity">
                    <h4 className="font-bold text-slate-300 text-sm line-clamp-1">{item.title}</h4>
                    <span className="text-[#c9a84c] text-xs">{item.duration}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
              <AnimatePresence>
                {videos.map((video, idx) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (idx % 8) * 0.06, type: 'spring', stiffness: 120, damping: 14 }}
                    className="h-full"
                  >
                    <VideoCard item={video} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>
      <PdfModal item={activePdf} onClose={() => setActivePdf(null)} />
    </div>
  );
};

export default Category;
