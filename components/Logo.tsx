import React, { useState } from 'react';
import { Scale } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12" }) => {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    // Fallback: Ícone no dourado vibrante original
    return (
      <div className={`${className} flex items-center justify-center bg-gold-500/10 rounded-full border border-gold-500/20`}>
        <Scale className="w-3/4 h-3/4 text-gold-500" />
      </div>
    );
  }

  return (
    <img 
      src="/logo.png" 
      alt="Dejoss Advocacia Logo" 
      className={`${className} object-contain`}
      onError={() => setImgError(true)}
    />
  );
};

export default Logo;