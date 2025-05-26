import React from 'react'


export const Cover = () => {
  return (
    <div className='flex flex-col items-start justify-start min-h-screen w-full bg-black text-white px-6 sm:px-10 lg:flex-row lg:justify-between'>
      
      <div className='mt-56 lg:ml-72 text-left lg:text-left'>
        <h1 className='text-sm tracking-wider font-light uppercase text-gray-400 mb-2'>
          Grupo de Pesquisa
        </h1>
        <div className='relative inline-block border-t border-white pt-4 pb-2 px-2'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold leading-tight'>
            Combate à Desinformação<br className='hidden sm:block' />e ao Discurso de Ódio
          </h1>
        </div>
      </div>

    </div>
  );
}
