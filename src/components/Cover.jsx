import React from 'react';
import lupa from '../assets/lupa.svg'; // or .png if preferred

export const Cover = () => {
  return (
    <div className="relative min-h-screen w-full bg-black text-white px-6 sm:px-10 overflow-hidden">
      
      {/* Text Block */}
      <div className="mt-56 lg:ml-72 text-left max-w-xl z-10 relative">
        <h1 className="text-[32px] tracking-wider font-thin uppercase mb-2">
          Grupo de Pesquisa
        </h1>
        <div className="relative inline-block border-t border-white pt-4 pb-2 px-2">
          <h1 className="text-[32px] font-bold leading-tight">
            Combate à Desinformação
            <br className="hidden sm:block" />
            e ao Discurso de Ódio
          </h1>
        </div>
      </div>

      {/* Lupa Image Positioned Bottom Right (lifted up) */}
      <img
        src={lupa}
        alt="Lupa"
        className="absolute bottom-[160px] right-0 w-[220px] sm:w-[300px] lg:w-[420px] z-0 opacity-90 pointer-events-none"
      />
    </div>
  );
};
