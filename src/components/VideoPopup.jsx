import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

const VideoPopup = ({ item, onClose }) => {
  const videoRef = useRef(null);

  if (!item) return null;

  const handleCanPlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play()
      .then(() => {
        video.muted = false;
        video.volume = 1;
      })
      .catch(() => {});
  };

  return ReactDOM.createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.85, opacity: 0, y: 40 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
        className="relative w-full max-w-3xl mx-4 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(201,168,76,0.2)] border border-[#c9a84c]/20"
        style={{ background: '#060f1e' }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 flex items-center justify-center text-white hover:bg-[#c9a84c] hover:text-[#0a1628] transition-all duration-200 hover:scale-110"
        >
          <X className="w-4 h-4" />
        </button>
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
        <div className="p-3 bg-[#0d1f3c] border-t border-[#c9a84c]/20">
          <h3 className="text-[#c9a84c] font-bold text-sm">{item.title}</h3>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
};

export default VideoPopup;
