import React from 'react';
import { MessageCircle, Calendar, Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const whatsappNumber = "5521985044888";
  const contactEmail = "dejossadvocacia@gmail.com";
  
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o.`;
  const emailLink = `mailto:${contactEmail}?subject=Agendamento%20de%20Consulta`;

  return (
    <section id="contato" className="py-24 bg-dark-800 relative overflow-hidden scroll-mt-20">
      {/* Luz ambiente dourada de fundo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Info Side */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-[1px] bg-gold-500"></div>
              <h4 className="text-gold-500 uppercase tracking-widest font-bold text-xs">Atendimento Especializado</h4>
            </div>
            <h2 className="text-4xl font-serif font-bold text-white mb-6 leading-tight">
              Vamos Conversar Sobre <br/>o Seu Caso
            </h2>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed max-w-md">
              Nossa equipe está preparada para oferecer o suporte jurídico que seu caso exige com total discrição e agilidade.
            </p>

            <div className="space-y-4">
              {[
                { Icon: Phone, label: "WhatsApp / Telefone", value: "(21) 98504-4888" },
                { Icon: Mail, label: "E-mail", value: contactEmail },
                { Icon: MapPin, label: "Localização", value: "Atendimento Presencial ou Online" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                  <div className="p-2 bg-gold-500/10 rounded-lg text-gold-500">
                    <item.Icon size={18} />
                  </div>
                  <div>
                    <h5 className="text-white font-semibold text-sm">{item.label}</h5>
                    <p className="text-gray-400 text-sm">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Area - Alinhamento ajustado para PC (lg:ml-auto) */}
          <div className="flex flex-col gap-6 w-full max-w-md mx-auto lg:ml-auto">
            {/* Botão Principal: WhatsApp */}
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-6 bg-dark-900 border border-gold-500/40 rounded-2xl transition-all duration-500 hover:border-gold-500 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] hover:-translate-y-1 cursor-pointer shimmer-subtle"
            >
              <div className="flex items-center gap-5 z-10">
                <div className="p-4 bg-gold-500/10 rounded-xl text-gold-500 group-hover:bg-gold-500 group-hover:text-dark-900 transition-all duration-500">
                  <MessageCircle size={28} className="animate-pulse" />
                </div>
                <div className="text-left">
                  <span className="block text-xl text-white font-bold group-hover:text-gold-400 transition-colors">Mande uma mensagem</span>
                </div>
              </div>
              <div className="text-gold-500/50 group-hover:text-gold-500 group-hover:translate-x-1 transition-all z-10">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </a>

            {/* Botão Secundário: Agendamento */}
            <a 
              href={emailLink}
              className="group relative flex items-center justify-between p-6 bg-transparent border border-white/10 rounded-2xl transition-all duration-500 hover:border-gold-500/40 cursor-pointer overflow-hidden"
            >
              <div className="absolute left-0 top-0 w-1 h-full bg-gold-500/0 group-hover:bg-gold-500 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-white/[0.02] group-hover:bg-gold-500/[0.03] transition-colors duration-500"></div>

              <div className="flex items-center gap-4 relative z-10">
                <div className="p-3 bg-dark-900 border border-white/5 rounded-xl text-gold-500 group-hover:border-gold-500/30 transition-all duration-300 shadow-inner">
                  <Calendar size={22} />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg text-gray-300 font-bold group-hover:text-white transition-colors leading-none">Agende sua consulta</span>
                  <span className="text-[10px] uppercase tracking-widest text-gold-500/60 group-hover:text-gold-500 transition-colors mt-1">Via E-mail Profissional</span>
                </div>
              </div>
              
              <div className="text-gray-700 group-hover:text-gold-500 group-hover:translate-x-1 transition-all z-10">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </a>

            {/* Rodapé da seção "Dejoss Advocacia" */}
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-[1px] w-8 bg-gradient-to-l from-gold-500/60 to-transparent"></div>
              <span className="text-[11px] uppercase tracking-[0.5em] text-gold-500 font-bold drop-shadow-sm">Dejoss Advocacia</span>
              <div className="h-[1px] w-8 bg-gradient-to-r from-gold-500/60 to-transparent"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;