import React, { useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

import HeroSlider from '../components/home/HeroSlider';
import CookingSection from '../components/home/CookingSection';
import ComedySection from '../components/home/ComedySection';
import GamesSection from '../components/home/GamesSection';
import YogaSection from '../components/home/YogaSection';
import EbooksSection from '../components/home/EbooksSection';
import WatchAnywhereSection from '../components/home/WatchAnywhereSection';

import { allVideos } from '../data/mockData';

const Home = () => {
  const geoRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: geoRef, offset: ["start end", "end start"] });
  const clipPath = useTransform(scrollYProgress, [0, 0.5, 1], ['polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', 'polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%)', 'polygon(0% 20%, 100% 0%, 100% 80%, 0% 100%)']);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 1.1]);

  const shuffleArray = (arr) => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const shuffledSections = useMemo(() => {
    const sectionConfigs = [
      { key: 'comedy', Component: ComedySection, categoryId: '2' },
      { key: 'cooking', Component: CookingSection, categoryId: '1' },
      { key: 'games', Component: GamesSection, categoryId: '4' },
      { key: 'yoga', Component: YogaSection, categoryId: '9' },
      {
        key: 'ebooks',
        Component: EbooksSection,
        categoryId: '10',
        extraProps: {
          title: "مجلة إلكترونية",
          subtitle: "كوميكس عربية رائعة – باتمان ودونالد داك وميكي ماوس"
        }
      }
    ];

    return shuffleArray(sectionConfigs).map(section => {
      const items = allVideos.find(v => v.categoryId === section.categoryId)?.items || [];
      return {
        ...section,
        items: shuffleArray(items)
      };
    });
  }, []);

  return (
    <div className="bg-[#0a1628] w-full overflow-hidden">
      <HeroSlider />
      {shuffledSections.slice(0, 2).map(({ key, Component, items, extraProps }) => (
        <Component key={key} items={items} {...(extraProps || {})} />
      ))}

      {/* Transition Section */}
      <section ref={geoRef} className="py-32 relative min-h-[80vh] flex items-center justify-center overflow-hidden w-full">
        <motion.div
          style={{ clipPath, scale }}
          className="absolute inset-0 bg-gradient-to-br from-[#c9a84c] to-[#1a3a5c] z-0 flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80')] mix-blend-overlay opacity-30 object-cover w-full h-full"></div>
        </motion.div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white mb-8 drop-shadow-2xl"
          >
            منصة واحدة.<br/>عوالم لا تعد.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 font-medium mb-10 drop-shadow-lg"
          >
            استمتع بمحتوى متنوع يشمل عوالم تفاعلية مختلفة صممت خصيصاً لك.
          </motion.p>
        </div>
      </section>

      {shuffledSections.slice(2).map(({ key, Component, items, extraProps }) => (
        <Component key={key} items={items} {...(extraProps || {})} />
      ))}

      <WatchAnywhereSection />
    </div>
  );
};

export default Home;
