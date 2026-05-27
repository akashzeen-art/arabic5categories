import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#060f1e] pt-16 pb-8 border-t border-[#c9a84c]/20 text-slate-400">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          {/* Brand */}
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/logo/35.png" alt="Global Funzone" className="h-10 w-auto" />
            </Link>
            <p>منصة ترفيهية متكاملة – طبخ ، كوميديا ، ألعاب ، لياقة بدنية ، ومجلة إلكترونية!</p>
          </div>

        </div>

        <div className="text-center pt-8 border-t border-[#c9a84c]/20 text-sm">
          <p>&copy; {new Date().getFullYear()} جلوبل فنزون للترفيه. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
