import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dumbbell } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoPopup from '../VideoPopup';
const YogaSection = ({ items }) => {
  const [activeVideo, setActiveVideo] = useState(null);
  return (
    <section className="py-32 relative bg-[#0d1f3c] overflow-hidden text-white">
      <VideoPopup item={activeVideo} onClose={() => setActiveVideo(null)} />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#c9a84c]/10 rounded-full blur-3xl z-0"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -left-20 w-[500px] h-[500px] bg-[#1a3a5c]/60 rounded-full blur-3xl z-0"
      />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-[#c9a84c] mb-6"
          >
            <Dumbbell className="w-12 h-12 mx-auto" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.3 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-wide text-[#c9a84c]"
          >
            لياقة بدنية
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="text-slate-400 text-xl font-light leading-relaxed"
          >
            تمارين احترافية لبناء جسم قوي وصحي — مناسبة للرجال والنساء.
          </motion.p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.slice(0, 3).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.8 + (idx * 0.3), ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="group block cursor-pointer" onClick={() => setActiveVideo(item)}>
                <div className="relative overflow-hidden rounded-2xl aspect-video mb-4 shadow-xl shadow-black/40 transition-transform duration-500 group-hover:-translate-y-2 border border-[#c9a84c]/10">
                  <img src={item.thumbnail} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-[#c9a84c] text-[#0a1628] font-bold px-4 py-1 rounded-full text-sm">شاهد</span>
                  </div>
                </div>
                <div className="px-1">
                  <h3 className="text-slate-200 font-semibold text-base mb-1 group-hover:text-[#c9a84c] transition-colors line-clamp-2">{item.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YogaSection;
