import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import { Play, X } from 'lucide-react';
import { categories } from '../data/mockData';

const VideoCard = ({ item }) => {
  const [popup, setPopup] = useState(false);
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef(null);
  const category = categories.find(c => c.id === item.categoryId);
  const isEbook = category?.slug === 'ebooks';
  const isGame = category?.slug === 'games';

  const handleClick = (e) => {
    e.preventDefault();
    if (!isEbook && (item.videoUrl || item.gameUrl)) {
      setPopup(true);
    }
  };

  const handleCanPlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.volume = 1;
    video.play().catch(() => {});
  };

  return (
    <>
      <motion.div
        whileHover={{ y: -8, scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.25, type: 'spring', stiffness: 300, damping: 20 }}
        className="group relative rounded-xl overflow-hidden bg-[#0d1f3c] border border-[#c9a84c]/15 shadow-xl h-full flex flex-col cursor-pointer hover:border-[#c9a84c]/50 hover:shadow-[0_8px_30px_rgba(201,168,76,0.15)] transition-all duration-300"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleClick}
      >
        <div className="flex-grow flex flex-col">
          <div className={`relative ${isEbook ? 'aspect-[3/4]' : 'aspect-video'} overflow-hidden flex-shrink-0`}>
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 flex items-center justify-center ${hovered ? 'opacity-100' : 'opacity-0'}`}>
              <motion.div
                animate={{ scale: hovered ? 1 : 0.6, opacity: hovered ? 1 : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="w-14 h-14 rounded-full flex items-center justify-center pl-1 text-[#0a1628] shadow-lg shadow-[#c9a84c]/50"
                style={{ background: 'linear-gradient(135deg, #c9a84c, #f0a500)' }}
              >
                <Play className="w-6 h-6" />
              </motion.div>
            </div>
            <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-1 rounded text-xs font-bold text-white backdrop-blur-sm">
              {item.duration}
            </div>
            {category && (
              <div className={`absolute top-2 left-2 ${category.color} px-2 py-1 rounded text-xs font-bold text-white shadow-md`}>
                {category.name}
              </div>
            )}
          </div>
          <div className="p-3 flex-grow flex flex-col">
            <h3 className="text-slate-100 font-bold mb-1 line-clamp-2 leading-tight text-sm group-hover:text-[#c9a84c] transition-colors duration-300">{item.title}</h3>
            <p className="text-slate-500 text-xs line-clamp-2 mt-auto">{item.description}</p>
          </div>
        </div>
      </motion.div>

      {popup && ReactDOM.createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={() => setPopup(false)}>
          <div className="relative w-full max-w-3xl mx-4 rounded-2xl overflow-hidden shadow-2xl bg-black" onClick={e => e.stopPropagation()}>
            <button onClick={() => setPopup(false)} className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-[#c9a84c] hover:text-[#0a1628] transition-all duration-200">
              <X className="w-4 h-4" />
            </button>
            {isGame ? (
              <iframe src={item.gameUrl} className="w-full aspect-video border-none" title={item.title} allowFullScreen />
            ) : (
              <video
                ref={videoRef}
                key={item.videoUrl}
                src={item.videoUrl}
                controls
                autoPlay
                muted
                controlsList="nodownload"
                onCanPlay={handleCanPlay}
                className="w-full aspect-video"
              />
            )}
            <div className="p-3 bg-[#0d1f3c] border-t border-[#c9a84c]/20">
              <h3 className="text-white font-bold text-sm">{item.title}</h3>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default VideoCard;
