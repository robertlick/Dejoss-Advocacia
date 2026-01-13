import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloqueia a rolagem do corpo quando o menu está aberto para melhor UX
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const id = targetId.replace('#', '');
    const element = document.getElementById(id);
    
    // Fecha o menu antes de rolar
    setIsMenuOpen(false);

    if (element) {
      const headerOffset = 100; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: targetId === '#inicio' ? 0 : offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Contato', href: '#contato' },
  ];

  const whatsappNumber = "5521985044888"; 

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-dark-900/95 backdrop-blur-md shadow-lg border-b border-gold-600/30 py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#inicio" 
            onClick={(e) => handleNavClick(e, '#inicio')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <Logo className="w-10 h-10 md:w-12 md:h-12 drop-shadow-lg group-hover:scale-105 transition-transform duration-300" />
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-serif font-bold text-gray-100 tracking-wider">
                DEJOSS
              </span>
              <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-gold-500">
                Advocacia
              </span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm uppercase tracking-widest text-gray-300 hover:text-gold-400 transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-0.5 after:bg-gold-500 after:transition-all hover:after:w-full cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <a
              href={`https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20advogado.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-dark-900 transition-all duration-300 uppercase text-xs font-bold tracking-widest cursor-pointer"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden text-gold-500 z-50 relative p-2 transition-transform active:scale-90"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Alternar Menu"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay System */}
      <div 
        className={`fixed inset-0 z-[45] md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop Overlay with Blur - Efeito de desfoque ao fundo solicitado */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Menu Container - Desliza da direita para esquerda */}
        <div 
          className={`absolute top-0 right-0 w-[80%] h-full bg-dark-900 border-l border-gold-600/20 shadow-2xl flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.4, 0, 0.2, 1)] ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="p-8 pt-24 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-2xl font-serif text-gray-100 hover:text-gold-500 transition-all duration-300 py-4 border-b border-gray-800/50 transform ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
                style={{ 
                  transitionDelay: isMenuOpen ? `${(index + 1) * 100}ms` : '0ms' 
                }}
              >
                {link.name}
              </a>
            ))}
            
            <div className={`mt-8 transform transition-all duration-500 ${
              isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: isMenuOpen ? '500ms' : '0ms' }}
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20falar%20com%20um%20advogado.`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-8 py-5 bg-gold-gradient text-white font-bold uppercase tracking-widest shadow-[0_10px_30px_-10px_rgba(180,83,9,0.5)] active:scale-95 transition-transform"
              >
                Fale Conosco Agora
              </a>
              <p className="text-center text-gray-500 text-[10px] mt-8 uppercase tracking-[0.4em] italic opacity-50">
                Dejoss Advocacia
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;