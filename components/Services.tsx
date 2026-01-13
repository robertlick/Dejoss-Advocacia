import React from 'react';
import { Users, HardHat, Briefcase } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="group p-8 bg-dark-900 border border-gray-800 hover:border-gold-500/50 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_50px_-12px_rgba(217,119,6,0.15)] flex flex-col items-center text-center h-full relative overflow-hidden">
    {/* Efeito de brilho sutil no fundo ao passar o mouse */}
    <div className="absolute inset-0 bg-gold-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div className="p-4 bg-dark-800 rounded-full mb-6 group-hover:bg-gold-500 group-hover:text-dark-900 text-gold-500 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] z-10">
      {icon}
    </div>
    
    <h3 className="text-xl font-serif font-bold text-white mb-4 group-hover:text-gold-400 transition-colors z-10">
      {title}
    </h3>
    
    <p className="text-gray-400 text-sm leading-relaxed z-10">
      {description}
    </p>

    {/* Detalhe decorativo no canto do card */}
    <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-gold-600/0 group-hover:w-4 group-hover:h-4 group-hover:border-gold-600/50 transition-all duration-500"></div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-neutral-950 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-gold-500 uppercase tracking-widest font-bold text-sm mb-2">Áreas de Atuação</h4>
          <h2 className="text-4xl font-serif font-bold text-white">Nossos Serviços Especializados</h2>
          <div className="w-20 h-1 bg-gold-600 mx-auto mt-6"></div>
        </div>

        {/* Grid ajustado para 3 colunas (lg:grid-cols-3) para centralizar os 3 itens restantes */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <ServiceCard 
            icon={<Briefcase size={32} />}
            title="Previdenciário"
            description="Planejamento de aposentadoria, auxílio-doença, pensão por morte e revisões de benefícios junto ao INSS."
          />
          <ServiceCard 
            icon={<Users size={32} />}
            title="Consumidor"
            description="Defesa contra práticas abusivas, negativação indevida, problemas com voos e contratos bancários."
          />
          <ServiceCard 
            icon={<HardHat size={32} />}
            title="Trabalhista"
            description="Assessoria para empregados e empregadores. Rescisões, horas extras, acidentes de trabalho e compliance."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;