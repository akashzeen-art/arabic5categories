import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChefHat } from 'lucide-react';
import VideoPopup from '../VideoPopup';

const CookingSection = ({ items }) => {
  const [activeVideo, setActiveVideo] = useState(null);
  return (
    <section className="py-24 relative overflow-hidden bg-[#0a1628] text-white">
      <VideoPopup item={activeVideo} onClose={() => setActiveVideo(null)} />
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-64 h-64 bg-[#c9a84c]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 w-64 h-64 bg-[#1a3a5c]/60 rounded-full blur-3xl"
      />
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/3"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-[#c9a84c] to-[#f0a500] rounded-2xl flex items-center justify-center text-white mb-6 shadow-xl shadow-[#c9a84c]/30">
              <ChefHat size={32} />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-[#c9a84c]">وصفات شهية!</h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              اكتشف أروع الوصفات العربية الشهية من مطبخك البيتي — وصفات سهلة ولذيذة للجميع.
            </p>
            <Link to="/category/cooking" className="inline-block bg-gradient-to-r from-[#c9a84c] to-[#f0a500] hover:opacity-90 text-[#0a1628] font-bold py-3 px-8 rounded-full shadow-lg shadow-[#c9a84c]/30 transition-all hover:-translate-y-1">
              شاهد الكل
            </Link>
          </motion.div>
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.slice(0, 3).map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.15, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.03 }}
                className="bg-[#0d1f3c] rounded-2xl p-4 shadow-xl border border-[#c9a84c]/15 group"
              >
                <div className="rounded-xl overflow-hidden aspect-[4/3] mb-4 relative cursor-pointer" onClick={() => setActiveVideo(item)}>
                  <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute top-2 right-2 bg-[#c9a84c] text-[#0a1628] font-bold px-2 py-1 rounded text-xs">طبخ</div>
                </div>
                <h3 className="font-bold text-slate-200 line-clamp-2 leading-tight text-right">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CookingSection;
