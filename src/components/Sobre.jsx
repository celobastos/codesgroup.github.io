import React from 'react';
import { ReactComponent as GrupoPesquisaSVG } from '../assets/O GRUPO DE PESQUISA.svg';

export const Sobre = () => {
  return (
    <section id="sobre" className="w-full bg-black text-white px-6 py-20 sm:px-10 md:px-20 lg:px-32">
      <div className="flex justify-end">
        {/* Container principal alinhado à direita */}
        <div className="max-w-[800px] max-h-[375px] overflow-auto text-left">
          {/* Agrupar SVG e texto com alinhamento bem à esquerda */}
          <div className="w-full">
            {/* SVG com alinhamento à esquerda absoluto */}
            <GrupoPesquisaSVG className="mb-6 max-w-none" />
          </div>

          {/* Texto alinhado à esquerda e sem recuo */}
          <div className="space-y-6 text-[14px] leading-relaxed">
            <p>
              O grupo de pesquisa CoDes (Combate à Desinformação e ao Discurso de Ódio) tem como objetivo estudar, projetar e desenvolver estratégias para combater desinformação, fake news e discurso de ódio. Utilizamos estratégias de Inteligência Artificial, com foco em Aprendizagem de Máquina e Processamento de Linguagem Natural.
            </p>
            <p>
              Nosso trabalho pretende envolver a avaliação de diferentes máquinas de aprendizagem e a combinação de classificadores, além da construção de bancos de dados em português e a geração de dados sintéticos. Para além disso, também propor arquiteturas para lidar com esses desafios, discutindo questões cruciais como ética, IA e desinformação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
