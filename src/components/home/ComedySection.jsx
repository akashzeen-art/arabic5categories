import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smile } from 'lucide-react';
import VideoPopup from '../VideoPopup';

const ComedySection = ({ items }) => {
  const [activeVideo, setActiveVideo] = useState(null);
  return (
    <section className="py-24 relative overflow-hidden bg-[#0d1f3c]">
      <VideoPopup item={activeVideo} onClose={() => setActiveVideo(null)} />
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(rgba(201,168,76,1)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.div
           initial={{ scale: 0 }}
           whileInView={{ scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ type: "spring", bounce: 0.6, duration: 1 }}
           className="w-20 h-20 mx-auto bg-gradient-to-br from-[#c9a84c] to-[#f0a500] text-white rounded-[2rem] rotate-12 flex items-center justify-center mb-6 shadow-2xl shadow-[#c9a84c]/30"
        >
          <Smile size={40} className="-rotate-12" />
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">كوميديا <span className="text-[#c9a84c]">بلا حدود</span></h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-14">
          أفضل المقاطع الكوميدية العربية في مكان واحد — اضحك مع العائلة والأصدقاء.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.slice(0, 4).map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.5, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 150, damping: 10 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="bg-[#0a1628] border border-[#c9a84c]/20 p-3 rounded-2xl shadow-xl cursor-pointer group"
              onClick={() => setActiveVideo(item)}
            >
              <div className="rounded-xl overflow-hidden aspect-square relative">
                <img src={item.thumbnail} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-[#c9a84c]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="font-bold text-slate-200 mt-3 text-sm line-clamp-1 text-right">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComedySection;
