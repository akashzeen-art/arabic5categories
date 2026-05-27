import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Play, Heart, Share2, Bookmark } from 'lucide-react';
import { allVideos, categories } from '../data/mockData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import VideoCard from '../components/VideoCard';
import 'swiper/css';
import 'swiper/css/navigation';

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [category, setCategory] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    for (const cat of allVideos) {
      const found = cat.items.find(i => i.id === id);
      if (found) {
        setVideo(found);
        const videoCat = categories.find(c => c.id === found.categoryId);
        setCategory(videoCat);
        setRelatedVideos(cat.items.filter(i => i.id !== id).slice(0, 8));
        break;
      }
    }
  }, [id]);

  if (!video) return (
    <div className="min-h-screen bg-[#0a1628] text-white flex items-center justify-center">
      <div className="text-[#c9a84c] text-2xl font-bold">جارٍ التحميل...</div>
    </div>
  );

  const isEbook = category?.slug === 'ebooks';

  return (
    <div className="bg-[#0a1628] min-h-screen pt-20">
      <div className="container mx-auto px-4 md:px-8 py-8">

        {/* Player */}
        <div className="bg-[#060f1e] w-full rounded-2xl overflow-hidden shadow-2xl relative mb-8 border border-[#c9a84c]/15">
          {isEbook ? (
            <div className="w-full flex">
              <div className="hidden md:block w-1/3 p-8 bg-[#0d1f3c]">
                <img src={video.thumbnail} className="w-full h-auto rounded-lg shadow-xl" alt="غلاف" />
              </div>
              <div className="w-full md:w-2/3 min-h-[60vh] flex flex-col items-center justify-center bg-[#060f1e] p-12 text-center">
                <Bookmark className="w-16 h-16 text-[#c9a84c] mb-6 opacity-80" />
                <h2 className="text-3xl font-bold text-white mb-4">اقرأ: {video.title}</h2>
                <p className="text-slate-400 max-w-md mb-8">اضغط للقراءة والاستمتاع بالمحتوى.</p>
                <button className="bg-gradient-to-r from-[#c9a84c] to-[#f0a500] text-[#0a1628] px-8 py-3 rounded-full font-bold">
                  ابدأ القراءة
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full aspect-video bg-[#060f1e]">
              {video.videoUrl ? (
                <video
                  src={video.videoUrl}
                  poster={video.thumbnail}
                  controls
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="relative w-full h-full flex items-center justify-center">
                  <img src={video.thumbnail} alt={video.title} className="absolute inset-0 w-full h-full object-cover opacity-30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060f1e] to-transparent"></div>
                  <div className="relative z-10 w-24 h-24 bg-gradient-to-br from-[#c9a84c] to-[#f0a500] rounded-full flex items-center justify-center cursor-pointer hover:scale-105 pl-2 shadow-[0_0_50px_rgba(201,168,76,0.5)] transition-transform">
                    <Play className="w-10 h-10 text-[#0a1628]" />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          <div className="lg:w-2/3">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded text-xs font-bold text-white ${category?.color}`}>
                {category?.name}
              </span>
              <span className="text-slate-400 text-sm font-medium">{video.duration}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">{video.title}</h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 text-right">
              {video.description}
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-2 bg-[#0d1f3c] hover:border-[#c9a84c]/50 border border-[#c9a84c]/20 text-white px-6 py-3 rounded-xl font-bold transition-all">
                <Heart className="w-5 h-5 text-[#c9a84c]" /> إعجاب
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-2 bg-[#0d1f3c] hover:border-[#c9a84c]/50 border border-[#c9a84c]/20 text-white px-6 py-3 rounded-xl font-bold transition-all">
                <Share2 className="w-5 h-5 text-[#c9a84c]" /> مشاركة
              </motion.button>
            </div>
          </div>

          {/* Up Next */}
          <div className="lg:w-1/3 bg-[#0d1f3c] rounded-2xl p-6 border border-[#c9a84c]/15">
            <h3 className="text-[#c9a84c] font-bold text-xl mb-6">التالي</h3>
            <div className="flex flex-col gap-4">
              {relatedVideos.slice(0, 3).map(rv => (
                <Link to={`/video/${rv.id}`} key={rv.id} className="flex gap-4 group">
                  <div className="w-32 aspect-video rounded-lg overflow-hidden flex-shrink-0 relative border border-[#c9a84c]/10">
                    <img src={rv.thumbnail} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold group-hover:text-[#c9a84c] transition-colors line-clamp-2 text-sm">{rv.title}</h4>
                    <p className="text-slate-400 text-xs mt-1">{category?.name}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* More */}
        <hr className="border-[#c9a84c]/10 mb-12" />
        <h2 className="text-3xl font-bold text-white mb-8">المزيد من <span className="text-[#c9a84c]">{category?.name}</span></h2>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 }
          }}
          className="pb-10"
        >
          {relatedVideos.map(vid => (
            <SwiperSlide key={vid.id} className="h-auto">
              <VideoCard item={vid} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default VideoDetail;
