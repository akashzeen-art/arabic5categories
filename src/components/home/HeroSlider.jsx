import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { teasers } from '../../data/mockData';

const HeroSlider = () => {
  return (
    <div className="relative h-[100vh] w-full overflow-hidden bg-[#0a1628] pt-16">
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#c9a84c]/10 rounded-full blur-[80px] z-0 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#1a3a5c]/40 rounded-full blur-[100px] z-0 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full z-10"
      >
        {teasers.map((teaser) => (
          <SwiperSlide key={teaser.id}>
            <div className="relative w-full h-full">
              <video
                src={teaser.video}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-50"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/40 to-transparent z-10"></div>

              {/* Text overlay */}
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-3xl"
                >
                  <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#c9a84c] mb-4">
                    {teaser.subtitle}
                  </span>
                  <h1 className="text-4xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
                    {teaser.title}
                  </h1>
                  <Link
                    to={teaser.link}
                    className="inline-block bg-gradient-to-r from-[#c9a84c] to-[#f0a500] text-[#0a1628] font-black px-8 py-3 rounded-full text-lg shadow-lg shadow-[#c9a84c]/30 hover:scale-105 transition-transform"
                  >
                    {teaser.cta}
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0a1628] to-transparent z-20"></div>
    </div>
  );
};

export default HeroSlider;
