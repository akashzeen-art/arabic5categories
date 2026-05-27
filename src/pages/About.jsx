import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Users, ShieldCheck, Smartphone, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-[#0a1628] min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#c9a84c]/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1a3a5c]/30 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2"></div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              منصة ترفيهية <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] to-[#f0a500]">متكاملة</span>
            </h1>
            <p className="text-xl text-slate-300 md:text-2xl leading-relaxed mb-10">
              منصة ترفيهية متكاملة تجمع العائلة — طبخ ، كوميديا ، ألعاب ، لياقة بدنية ، ومجلة إلكترونية.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link to="/" className="bg-gradient-to-r from-[#c9a84c] to-[#f0a500] text-[#0a1628] font-bold px-8 py-4 rounded-full text-lg flex items-center gap-2 shadow-lg shadow-[#c9a84c]/30">
                  <Play className="w-5 h-5" /> ابدأ المشاهدة
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Image Split */}
      <section className="py-20 bg-[#060f1e]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:w-1/2 space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6">منصة للجميع<br/>تحبها العائلة</h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  نؤمن بأن الترفيه يجب أن يكون ممتعاً وآمناً. منصتنا مصممة بعناية لتقديم أفضل تجربة ترفيهية لكل أفراد العائلة.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <motion.div whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(201,168,76,0.15)' }} className="bg-[#0d1f3c] p-6 rounded-2xl border border-[#c9a84c]/20 transition-all duration-300">
                  <div className="text-4xl font-black text-[#c9a84c] mb-2">10k+</div>
                  <div className="text-white font-bold">محتوى</div>
                </motion.div>
                <motion.div whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(201,168,76,0.15)' }} className="bg-[#0d1f3c] p-6 rounded-2xl border border-[#c9a84c]/20 transition-all duration-300">
                  <div className="text-4xl font-black text-[#c9a84c] mb-2">5</div>
                  <div className="text-white font-bold">التصنيفات</div>
                </motion.div>
                <motion.div whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(201,168,76,0.15)' }} className="bg-[#0d1f3c] p-6 rounded-2xl border border-[#c9a84c]/20 transition-all duration-300">
                  <div className="text-4xl font-black text-[#c9a84c] mb-2">0</div>
                  <div className="text-white font-bold">رسوم خفية</div>
                </motion.div>
                <motion.div whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(201,168,76,0.15)' }} className="bg-[#0d1f3c] p-6 rounded-2xl border border-[#c9a84c]/20 transition-all duration-300">
                  <div className="text-4xl font-black text-[#c9a84c] mb-2">24/7</div>
                  <div className="text-white font-bold">وصول دائم</div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="lg:w-1/2 w-full h-[600px] rounded-3xl overflow-hidden relative shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80" 
                alt="Family laughing" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060f1e] via-[#0a1628]/40 to-transparent"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Watch Anywhere Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0a1628] to-[#060f1e]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">في أي وقت ، في أي مكان</h2>
            <p className="text-xl text-slate-400">محتواك المفضل متاح على جميع أجهزتك بسلاسة تامة.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Smartphone className="w-10 h-10 text-[#c9a84c]" />, title: 'موبايل وتابلت', desc: 'حمّل التطبيق واستمتع بالمحتوى في أي مكان وزمان.' },
              { icon: <ShieldCheck className="w-10 h-10 text-[#c9a84c]" />, title: 'تصفح آمن', desc: 'محتوى مناسب لجميع أفراد العائلة بأمان تام.' },
              { icon: <Users className="w-10 h-10 text-[#c9a84c]" />, title: 'للعائلة كلها', desc: 'محتوى متنوع يناسب جميع الأعمار والاهتمامات.' },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 16px_40px_rgba(201,168,76,0.12)' }}
                className="bg-[#0d1f3c] border border-[#c9a84c]/15 p-10 rounded-3xl text-center hover:border-[#c9a84c]/40 transition-all duration-300"
              >
                <div className="w-20 h-20 mx-auto bg-[#c9a84c]/10 rounded-full flex items-center justify-center mb-6">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-slate-400">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
