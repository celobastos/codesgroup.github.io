import React from 'react'
import logoCin from '../assets/cin.png'
import logoCodes from '../assets/LogoCodes.svg'
import lupa from '../assets/lupa.svg'

export const Footer = () => {
  return (
    <div id='contato' className='relative bg-white text-black pt-24 pb-40 px-6 sm:px-12'>

      {/* Logo CIn e endereço */}
      <div className='flex flex-col lg:flex-row items-start gap-10'>
        <div className='ml-4 sm:ml-12 md:ml-24 w-full max-w-[324px]'>
          <img src={logoCin} alt="CIN Logo" className='w-full max-w-[324px] h-auto sm:h-[113px]' />
          <p className='mt-4 text-[20px] leading-relaxed'>
            Av. Jornalista Anibal Fernandes, s/n <br />
            Centro de Informática da UFPE <br />
            Cidade Universitária (Campus Recife) <br />
            50740-560 <br />
            Recife, PE - Brazil <br />
          </p>
          <p className='font-semibold mt-2 text-[20px]'>codes@cin.ufpe.br</p>
        </div>
      </div>

      {/* Centered CoDes logo - visible only on lg and up */}
      <div className='hidden lg:block absolute left-1/2 top-[45%] w-[220px] h-[72px] -translate-x-1/2 -translate-y-1/2'>
        <img
          src={logoCodes}
          alt="Logo CoDes"
          className='w-full h-full object-contain'
        />
      </div>

      {/* Lupa bottom-right */}
      <div className='absolute bottom-0 right-0 w-[180px] sm:w-[230px] md:w-[270px] h-[180px] sm:h-[250px] md:h-[290px]'>
        <img
          src={lupa}
          alt="Lupa decorativa"
          className='w-full h-full object-contain'
        />
      </div>
    </div>
  )
}
