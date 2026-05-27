import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, TabletSmartphone, Smartphone } from 'lucide-react';

const devices = [
  {
    label: 'موبايل',
    delay: 0.2,
    initial: { y: 80, opacity: 0 },
    className: 'w-14 h-28 md:w-28 md:h-56',
    icon: <Smartphone className="w-6 h-6 md:w-10 md:h-10 text-[#c9a84c]/40" />,
    rounded: 'rounded-2xl',
    notch: true,
  },
  {
    label: 'ديسكتوب وتلفزيون',
    delay: 0,
    initial: { y: 30, opacity: 0, scale: 0.9 },
    className: 'w-44 h-28 md:w-96 md:h-56',
    icon: <Monitor className="w-10 h-10 md:w-16 md:h-16 text-[#c9a84c]/60 relative z-10 drop-shadow-lg" />,
    rounded: 'rounded-xl',
    isMain: true,
    stand: true,
  },
  {
    label: 'تابلت',
    delay: 0.4,
    initial: { y: 80, opacity: 0 },
    className: 'w-20 h-28 md:w-44 md:h-56',
    icon: <TabletSmartphone className="w-8 h-8 md:w-12 md:h-12 text-[#c9a84c]/40" />,
    rounded: 'rounded-2xl',
  },
];

const WatchAnywhereSection = () => {
  return (
    <section className="py-20 bg-[#060f1e] border-t border-[#c9a84c]/10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full blur-[100px]"
          style={{ background: 'radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%)' }} />
      </div>

      <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase text-[#c9a84c] mb-4">في كل مكان</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
            شاهد على <span className="text-[#c9a84c]">أي جهاز</span>
          </h2>
          <p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto">
            المحتوى المفضل لديك متاح على جميع أجهزتك — من التلفزيون إلى الموبايل.
          </p>
        </motion.div>

        <div className="flex flex-row items-end justify-center gap-4 md:gap-10">
          {devices.map((d, i) => (
            <motion.div
              key={i}
              initial={d.initial}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: d.delay, type: 'spring', stiffness: 100 }}
              whileHover={{ y: -10, scale: 1.04 }}
              className="flex flex-col items-center group"
            >
              <div
                className={`${d.className} ${d.rounded} border-2 relative overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:border-[#c9a84c]/60 group-hover:shadow-[0_0_30px_rgba(201,168,76,0.15)]`}
                style={{
                  borderColor: d.isMain ? 'rgba(201,168,76,0.4)' : 'rgba(201,168,76,0.15)',
                  background: '#0a1628',
                  boxShadow: d.isMain ? '0 20px_50px_rgba(0,0,0,0.5)' : undefined,
                }}
              >
                {d.isMain && (
                  <img
                    src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=800&q=80"
                    className="opacity-20 object-cover w-full h-full absolute inset-0"
                    alt=""
                  />
                )}
                {d.notch && (
                  <div className="absolute top-1.5 w-1/3 h-1 bg-[#c9a84c]/20 rounded-full z-10" />
                )}
                {/* Scanning line animation */}
                <motion.div
                  animate={{ y: ['-100%', '200%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'linear', delay: i * 0.5 }}
                  className="absolute inset-x-0 h-[2px] opacity-0 group-hover:opacity-100"
                  style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }}
                />
                {d.icon}
              </div>
              {d.stand && (
                <>
                  <div className="w-16 md:w-28 h-1 md:h-2 bg-[#c9a84c]/20 mt-1 rounded" />
                  <div className="w-24 md:w-40 h-0.5 bg-[#c9a84c]/10 rounded" />
                </>
              )}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: d.delay + 0.4 }}
                className="mt-3 text-[#c9a84c] font-bold text-xs md:text-sm"
              >
                {d.label}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Feature pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mt-14"
        >
          {['بدون رسوم خفية', 'وصول 24/7', 'جودة عالية', 'سهل الاستخدام'].map((f, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.08, y: -2 }}
              className="px-4 py-2 rounded-full text-sm font-bold border cursor-default transition-all duration-200"
              style={{
                borderColor: 'rgba(201,168,76,0.3)',
                background: 'rgba(201,168,76,0.06)',
                color: '#c9a84c',
              }}
            >
              {f}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WatchAnywhereSection;
