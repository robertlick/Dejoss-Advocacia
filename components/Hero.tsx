import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  // Função auxiliar para scroll suave manual
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Ajustado para garantir centralização melhor (mesmo valor da Navbar)
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const whatsappNumber = "5521985044888";

  return (
    <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden scroll-mt-28">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/1920/1080?grayscale&blur=2"
          alt="Escritório de Advocacia"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/60 to-dark-900"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="mb-6 inline-block">
          <div className="h-1 w-24 bg-gold-500 mx-auto mb-6"></div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
          Justiça com <br />
          <span className="text-gold-gradient italic">Excelência & Integridade</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 font-light mb-10 max-w-2xl mx-auto">
          A defesa dos seus direitos é a nossa prioridade absoluta. 
          Soluções jurídicas estratégicas para casos complexos.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <a
            href={`https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-gold-gradient text-white font-bold uppercase tracking-widest shadow-[0_15px_35px_-10px_rgba(180,83,9,0.6)] hover:shadow-[0_20px_45px_-10px_rgba(180,83,9,0.7)] hover:-translate-y-1 active:scale-95 transition-all duration-300 rounded-sm text-sm flex items-center justify-center cursor-pointer min-w-[240px]"
          >
            Agendar Consulta
          </a>
          <a
            href="#sobre-conteudo"
            onClick={(e) => scrollToSection(e, 'sobre-conteudo')}
            className="px-10 py-5 border border-white/30 text-white font-bold tracking-wider hover:bg-white hover:text-dark-900 transition-all duration-300 rounded-sm uppercase text-sm flex items-center justify-center cursor-pointer min-w-[240px]"
          >
            Conheça o Escritório
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 w-full flex justify-center z-20">
        <a 
          href="#sobre-conteudo" 
          onClick={(e) => scrollToSection(e, 'sobre-conteudo')}
          className="animate-bounce text-gold-500/70 hover:text-gold-500 cursor-pointer transition-colors"
        >
          <ArrowDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;