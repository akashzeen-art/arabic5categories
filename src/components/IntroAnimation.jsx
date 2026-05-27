import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GOLD = '#c9a84c';
const NAVY = '#0a1628';

const categories = [
  { label: 'طبخ',              emoji: '🍳' },
  { label: 'كوميديا',           emoji: '😂' },
  { label: 'ألعاب',             emoji: '🎮' },
  { label: 'لياقة بدنية',      emoji: '💪' },
  { label: 'مجلة إلكترونية',   emoji: '📖' },
];

const IntroAnimation = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);
  const [shouldUnmount, setShouldUnmount] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 1600);
    const t3 = setTimeout(() => setPhase(3), 2800);
    const t4 = setTimeout(() => setShouldUnmount(true), 4800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!shouldUnmount && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: NAVY }}
        >
          {/* Sweeping gold line top */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="absolute top-0 left-0 w-full h-[3px] origin-left"
            style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }}
          />

          {/* Sweeping gold line bottom */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeInOut' }}
            className="absolute bottom-0 right-0 w-full h-[3px] origin-right"
            style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }}
          />

          {/* Background radial glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
            style={{ background: `radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)` }}
          />

          {/* Logo reveal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.3, type: 'spring', stiffness: 120, damping: 12 }}
            className="relative z-10 mb-8"
          >
            {/* Spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 -m-4 rounded-full border-2 border-dashed"
              style={{ borderColor: `${GOLD}40` }}
            />
            {/* Pulsing glow */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-full blur-2xl"
              style={{ background: GOLD, opacity: 0.2 }}
            />
            <div
              className="relative w-28 h-28 rounded-full flex items-center justify-center border-2"
              style={{ borderColor: `${GOLD}60`, background: '#0d1f3c' }}
            >
              <img src="/logo/35.png" alt="Logo" className="w-20 h-20 object-contain" />
            </div>
          </motion.div>

          {/* Brand name — letter by letter */}
          <motion.div className="relative z-10 flex gap-[2px] mb-3">
            {'Global Fun Zone'.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.04, duration: 0.4 }}
                className="text-3xl md:text-5xl font-black"
                style={{ color: char === ' ' ? 'transparent' : i < 6 ? GOLD : i < 10 ? '#e8c96d' : '#f0a500' }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.div>

          {/* Gold divider */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 200 }}
            transition={{ delay: 1.6, duration: 0.7, ease: 'easeOut' }}
            className="h-[2px] rounded-full mb-8 relative z-10"
            style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }}
          />

          {/* Category pills — staggered slide up */}
          <motion.div className="relative z-10 flex flex-wrap justify-center gap-3 max-w-sm px-4">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={{ opacity: phase >= 1 ? 1 : 0, y: phase >= 1 ? 0 : 30, scale: phase >= 1 ? 1 : 0.8 }}
                transition={{ delay: i * 0.12, type: 'spring', stiffness: 200, damping: 15 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-bold"
                style={{
                  borderColor: `${GOLD}40`,
                  background: 'rgba(201,168,76,0.08)',
                  color: GOLD,
                }}
              >
                <span>{cat.emoji}</span>
                <span>{cat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Loading bar */}
          <motion.div
            className="absolute bottom-10 w-48 h-1 rounded-full overflow-hidden"
            style={{ background: 'rgba(201,168,76,0.15)' }}
          >
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              transition={{ duration: 3.5, ease: 'easeInOut' }}
              className="h-full w-full rounded-full"
              style={{ background: `linear-gradient(90deg, ${GOLD}, #f0a500)` }}
            />
          </motion.div>

          {/* Corner decorations */}
          {[
            'top-4 left-4 border-t-2 border-l-2',
            'top-4 right-4 border-t-2 border-r-2',
            'bottom-4 left-4 border-b-2 border-l-2',
            'bottom-4 right-4 border-b-2 border-r-2',
          ].map((cls, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
              className={`absolute w-8 h-8 ${cls}`}
              style={{ borderColor: `${GOLD}50` }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroAnimation;
