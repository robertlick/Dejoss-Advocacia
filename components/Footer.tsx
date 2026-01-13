import React from 'react';
import Logo from './Logo';
import { Instagram, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          
          {/* Logo e Nome */}
          <div className="flex items-center gap-3 group">
            <Logo className="w-10 h-10 transition-transform duration-500 group-hover:rotate-[360deg]" />
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold text-gray-100 tracking-wider">
                DEJOSS
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-gold-500 font-bold">
                Advocacia
              </span>
            </div>
          </div>

          {/* Redes Sociais - Dourado Original */}
          <div className="flex items-center gap-5">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Facebook, label: "Facebook" }
            ].map((social, idx) => (
              <a 
                key={idx}
                href="#" 
                className="p-3 rounded-xl bg-gold-500/5 text-gold-500 hover:text-dark-900 hover:bg-gold-500 transition-all duration-500 border border-gold-500/20 shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:-translate-y-1" 
                aria-label={social.label}
              >
                <social.Icon size={20} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm font-medium">
              © {new Date().getFullYear()} Dejoss Advocacia.
            </p>
            <p className="text-gold-500 text-[10px] uppercase tracking-[0.3em] mt-1 font-bold">
              Excelência Jurídica
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;