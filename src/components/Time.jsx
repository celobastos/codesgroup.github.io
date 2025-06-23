import React, { useState } from 'react';

// IMPORTS das imagens dos integrantes
import FotoIngryd from '../assets/fotos_integrantes/Foto_Ingryd_Vanessa.png';
import FotoGabriel from '../assets/fotos_integrantes/Foto_Gabriel_Henrique_ghds_Codes.jpg';
import FotoJohnattan from '../assets/fotos_integrantes/Foto_Johnattan_Codes.jpg';
import FotoBianca from '../assets/fotos_integrantes/foto_bianca_lima_codes.jpg';
import FotoLucasLisboa from '../assets/fotos_integrantes/Foto - Lucas Lisboa.jpg';
import FotoCamila from '../assets/fotos_integrantes/Foto_camila_vieira_cbv2.jpg';
import FotoIgor from '../assets/fotos_integrantes/Foto_Igor_Rocha_CoDes.jpg';
import FotoJose from '../assets/fotos_integrantes/Foto_Jose_Vinicius.jpeg';
import FotoLucasB from '../assets/fotos_integrantes/Foto_Lucas_Brandão_Codes.webp';
import FotoBreno from '../assets/fotos_integrantes/fotoBreno.jpg';
import FotoJoaoVictor from '../assets/fotos_integrantes/Foto_Joao_Victor.jpg';
import FotoMarcelo from '../assets/fotos_integrantes/foto_Marcelo.jpeg';
import FotoMatheus from '../assets/fotos_integrantes/Foto_Matheus.jpg';
import FotoGeorge from '../assets/fotos_integrantes/Foto_GeorgeDarminton.jpg';
import FotoErnesto from '../assets/fotos_integrantes/Foto_Ernesto.jpeg';
import FotoMaria from '../assets/fotos_integrantes/Foto_mariaLaraneirasjpeg.jpeg';
import FotoFran from '../assets/fotos_integrantes/Foto_Francimariajpeg.jpeg'

const members = {
  Professor: [
    {
      name: 'George Darmiton da Cunha Cavalcanti',
      role: 'Professor Titular do Centro de Informática da UFPE',
      link: 'http://darmiton.com',
      photo: FotoGeorge,
    },
  ],
  Doutorado: [
    {
      name: 'Ingryd Pereira',
      role: 'Doutoranda em Ciência da Computação',
      link: 'http://lattes.cnpq.br/7192547386318453',
      photo: FotoIngryd,
    },
    {
      name: 'Gabriel Henrique D. da Silva',
      role: 'Doutorando em Ciência da Computação',
      link: 'www.linkedin.com/in/gabriel-henrique-6a0050156',
      photo: FotoGabriel,
    },
    {
      name: 'Johnattan Douglas F. Viana',
      role: 'Doutorando em Ciência da Computação',
      link: 'http://lattes.cnpq.br/4244055492368435',
      photo: FotoJohnattan,
    },
  ],
  Mestrado: [
    {
      name: 'Bianca Lima',
      role: 'Mestranda em Ciência da Computação',
      link: 'https://br.linkedin.com/in/biancanathally',
      photo: FotoBianca,
    },
    { name: 'Leilane Cruz', role: 'Mestranda em Ciência da Computação' },
    {
      name: 'Maria Luiza Brito Laranjeira',
      role: 'Mestranda em Ciência da Computação',
      link: 'https://www.linkedin.com/in/malu-laranjeira/',
      photo:FotoMaria,
    },
  ],
  'Membros Associados': [
    {
      name: 'Francimaria Nascimento',
      role: 'Doutora em Ciência da Computação',
      link:'https://www.linkedin.com/in/francimaria-nascimento-674738106/',
      photo: FotoFran,
    },
    {
      name: 'Lucas A. Lisboa',
      role: 'Mestre em Ciência da Computação',
      photo: FotoLucasLisboa,
    },
    {
      name: 'Rafael Menelau Oliveira e Cruz',
      role: 'Professor Assistente em ÉTS-Montréal',
      link: 'https://scholar.google.com/citations?user=jtYFoD0AAAAJ&hl=en',
    },
  ],
  Graduação: [
    {
      name: 'Breno Mendes de Melo Uchôa Cavalcanti',
      role: 'Graduando em Engenharia da Computação',
      link: 'https://www.linkedin.com/in/breno-cavalcanti',
      photo: FotoBreno,
    },
    {
      name: 'Camila Vieira',
      role: 'Graduanda em Engenharia da Computação',
      photo: FotoCamila,
      link:'https://www.linkedin.com/in/camilab-vieira/'
    },
    {
      name: 'Ernesto Gonçalves',
      role: 'Graduando em Ciência da Computação',
      photo: FotoErnesto,
    },
    {
      name: 'Igor Rocha',
      role: 'Graduando em Ciência da Computação',
      link: 'https://www.linkedin.com/in/igorrocha28',
      photo: FotoIgor,
    },
    {
      name: 'Joao Victor Cardoso Lopes',
      role: 'Graduando em Ciência da Computação',
      link: 'https://www.linkedin.com/in/joão-victor-lopess/',
      photo: FotoJoaoVictor,
    },
    {
      name: 'Jose Vinícius de Santana Souza',
      role: 'Graduando em Engenharia da Computação',
      link: 'https://www.linkedin.com/in/jose-vinicius-souza/',
      photo: FotoJose,
    },
    {
      name: 'Lucas Nascimento Brandão',
      role: 'Graduando em Engenharia da Computação',
      link: 'https://www.linkedin.com/in/lucas-n-brandão',
      photo: FotoLucasB,
    },
    {
      name: 'Marcelo Vinicius Bastos Santos',
      role: 'Graduando em Engenharia da Computação',
      link: 'https://www.linkedin.com/in/marcelo-vinicius-bastos/',
      photo: FotoMarcelo,
    },
    {
      name: 'Matheus Julio Boncsidai de Oliveira',
      role: 'Graduando em Engenharia da Computação',
      photo: FotoMatheus,
      link:'https://www.linkedin.com/in/matheusboncsidai/'
    },
  ],
};

const tabs = ['Graduação', 'Mestrado', 'Doutorado', 'Membros Associados'];

export const TimeSection = () => {
  const [activeTab, setActiveTab] = useState('Graduação');

  const renderCard = ({ name, role, link, photo }, index) => (
    <div key={index} className="flex flex-col items-center text-center p-4">
      {photo ? (
        <img
          src={photo}
          alt={name}
          className="w-52 h-52 object-cover rounded-full mb-4 border-4 border-lime-300"
        />
      ) : (
        <div className="w-52 h-52 rounded-full bg-lime-200 mb-4" />
      )}
      <div className="text-white text-base font-bold">
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-lime-300">
            {name}
          </a>
        ) : (
          name
        )}
      </div>
      <div className="text-white text-sm mt-1">{role}</div>
    </div>
  );

  return (
    <div id="time" className="bg-black text-white px-24 py-16">
      <div className="text-3xl font-bold mb-8">TIME</div>

      {/* Professor fixo sem título */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {members['Professor'].map(renderCard)}
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-start mt-16 gap-4 text-sm">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full transition ${
              activeTab === tab
                ? 'bg-lime-200 text-black font-semibold'
                : 'text-white hover:bg-white hover:text-black'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {members[activeTab].map(renderCard)}
      </div>
    </div>
  );
};
