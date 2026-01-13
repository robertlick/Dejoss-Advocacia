import React from 'react';
import { ShieldCheck, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-dark-800 relative scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          {/* Image/Visual Side - Tamanho reduzido e controlado */}
          <div className="w-full lg:w-5/12 relative flex justify-center">
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-gold-500 hidden md:block"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-gold-500 hidden md:block"></div>
            
            <div className="relative overflow-hidden rounded-lg shadow-2xl w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gold-600/10 z-10 pointer-events-none mix-blend-overlay"></div>
              <img 
                src="https://picsum.photos/id/1015/600/800?grayscale" 
                alt="Escritório de Advocacia" 
                className="w-full h-[500px] object-cover object-center filter brightness-90 contrast-110 hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Text Side - Adicionado ID para scroll direto */}
          <div id="sobre-conteudo" className="w-full lg:w-1/2 flex flex-col justify-center scroll-mt-32">
            <div className="inline-flex items-center gap-2 mb-2">
              <div className="w-8 h-[1px] bg-gold-500"></div>
              <h4 className="text-gold-500 uppercase tracking-widest font-bold text-sm">Sobre Nós</h4>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 leading-tight">
              Compromisso e <span className="text-gold-gradient">Excelência Jurídica</span>
            </h2>
            
            <p className="text-gray-300 mb-6 text-base md:text-lg leading-relaxed font-light">
              Na <strong>Dejoss Advocacia</strong>, entendemos que por trás de cada processo existe uma história de vida, um negócio ou um patrimônio a ser preservado. Prezamos por trazer o nosso melhor até o cliente, combinando conhecimento técnico aprofundado com um atendimento humanizado.
            </p>
            
            <p className="text-gray-400 mb-8 text-base leading-relaxed border-l-2 border-gold-600/30 pl-4">
              Nossa equipe é formada por especialistas dedicados a encontrar as soluções mais eficazes e ágeis. Atuamos com transparência total, mantendo você informado em cada etapa do caminho jurídico.
            </p>

            {/* Grid ajustado para 3 colunas fixas desde o mobile */}
            <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-6 border-t border-gray-800">
              <div className="flex flex-col items-center sm:items-start gap-2 group">
                <ShieldCheck className="text-gold-500 w-5 h-5 sm:w-6 sm:h-6 group-hover:text-white transition-colors" />
                <h3 className="font-bold text-gray-100 text-[10px] sm:text-sm uppercase tracking-tighter sm:tracking-normal">Segurança</h3>
              </div>
              <div className="flex flex-col items-center sm:items-start gap-2 group">
                <Target className="text-gold-500 w-5 h-5 sm:w-6 sm:h-6 group-hover:text-white transition-colors" />
                <h3 className="font-bold text-gray-100 text-[10px] sm:text-sm uppercase tracking-tighter sm:tracking-normal">Estratégia</h3>
              </div>
              <div className="flex flex-col items-center sm:items-start gap-2 group">
                <Award className="text-gold-500 w-5 h-5 sm:w-6 sm:h-6 group-hover:text-white transition-colors" />
                <h3 className="font-bold text-gray-100 text-[10px] sm:text-sm uppercase tracking-tighter sm:tracking-normal">Excelência</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;