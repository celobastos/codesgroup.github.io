import React, { useState } from 'react';
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
import FotoJuscimara from '../assets/fotos_integrantes/Foto_Juscimara_Avelino.png';
import FotoKaren from '../assets/fotos_integrantes/Foto_Karen.jpg';
import FotoLucasCouri from '../assets/fotos_integrantes/foto_LucasCouri.jpg';
import FotoGabriela from '../assets/fotos_integrantes/Foto_Gabriela_Holanda.jpg';
import FotoErnesto from '../assets/fotos_integrantes/Foto_Ernesto.jpeg';
import FotoMariana from '../assets/fotos_integrantes/Foto_Mariana_Beatriz.jpg';

const members = {
  Professor: [
    {
      name: 'George Darmiton da Cunha Cavalcanti',
      role: 'Professor Titular do Centro de Informática da UFPE',
      link: 'http://darmiton.com',
      photo: FotoGeorge,
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
      name: 'Camila Barbosa Vieira',
      role: 'Graduanda em Engenharia da Computação',
      link: 'https://www.linkedin.com/in/camilab-vieira/',
      photo: FotoCamila,
    },
    {
      name: 'Ernesto Gonçalves',
      role: 'Graduando em Ciência da Computação',
      photo: FotoErnesto,
    },
    {
      name: 'Gabriela Correia Holanda Freitas',
      role: 'Graduanda em Engenharia da Computação',
      link: 'https://www.linkedin.com/in/gabriela-holanda135/',
      photo: FotoGabriela,
    },
    {
      name: 'Igor Domingos da Rocha e Silva',
      role: 'Graduando em Ciência da Computação',
      link: 'https://www.linkedin.com/in/igorrocha28/',
      photo: FotoIgor,
    },
    {
      name: 'João Victor Cardoso Lopes',
      role: 'Graduando em Ciência da Computação',
      link: 'https://www.linkedin.com/in/jo%C3%A3o-victor-lopess/',
      photo: FotoJoaoVictor,
    },
    {
      name: 'Jose Vinicius de Santana Souza',
      role: 'Graduando em Engenharia da Computação',
      link: 'https://www.linkedin.com/in/jose-vinicius-souza/',
      photo: FotoJose,
    },
    {
      name: 'Ligia Padilha',
      role: 'Graduanda em Engenharia da Computação',
      link: 'https://www.linkedin.com/in/l%C3%ADgia-ferro-padilha-324479214/',
    },
    {
      name: 'Lucas Nascimento Brandão',
      role: 'Graduando em Engenharia da Computação',
      link: 'https://www.linkedin.com/in/lucas-n-brand%C3%A3o/',
      photo: FotoLucasB,
    },
    {
      name: 'Marcelo Bastos',
      role: 'Graduando em Engenharia da Computação',
      link: 'https://www.linkedin.com/in/marcelo-vinicius-bastos/',
      photo: FotoMarcelo,
    },
    {
      name: 'Mariana Beatriz Campelo Ferreira',
      role: 'Graduanda em Ciência da Computação',
      link: 'https://www.linkedin.com/in/mariana-beatriz-cin/',
      photo: FotoMariana,
    },
    {
      name: 'Sarah Leitao Melo',
      role: 'Graduanda em Engenharia da Computação',
      link: 'https://www.linkedin.com/in/sarah-melo-091596185/',
    },
  ],
  Mestrado: [
    {
      name: 'Bianca Lima',
      role: 'Mestranda em Ciência da Computação',
      link: 'https://www.linkedin.com/in/biancanathally/',
      photo: FotoBianca,
    },
    {
      name: 'Karen Lima Macedo',
      role: 'Mestranda em Ciência da Computação',
      link: 'https://www.linkedin.com/in/karen-lima-86964121a/',
      photo: FotoKaren,
    },
    {
      name: 'Lucas Natan Correia Couri',
      role: 'Mestrando em Ciência da Computação',
      photo: FotoLucasCouri,
    },
  ],
  Doutorado: [
    {
      name: 'Gabriel Henrique Daniel da Silva',
      role: 'Doutorando em Ciência da Computação',
      link: 'https://www.linkedin.com/in/gabriel-henrique-6a0050156',
      photo: FotoGabriel,
    },
    {
      name: 'Johnattan Douglas F. Viana',
      role: 'Doutorando em Ciência da Computação',
      link: 'http://lattes.cnpq.br/4244055492368435',
      photo: FotoJohnattan,
    },
  ],
  'Membros Associados': [
    {
      name: 'Francimaria Nascimento',
      role: 'Membro Associado',
      link: 'https://www.linkedin.com/in/francimaria-nascimento-674738106/',
    },
    {
      name: 'Ingryd Pereira',
      role: 'Membro Associado',
      link: 'http://lattes.cnpq.br/7192547386318453',
      photo: FotoIngryd,
    },
    {
      name: 'Juscimara Avelino',
      role: 'Membro Associado',
      link: 'https://www.linkedin.com/in/juscimara-avelino-2962a112b/',
      photo: FotoJuscimara,
    },
    {
      name: 'Leilane Cruz',
      role: 'Membro Associado',
    },
    {
      name: 'Lucas A. Lisboa',
      role: 'Membro Associado',
      photo: FotoLucasLisboa,
    },
    {
      name: 'Rafael Menelau Oliveira e Cruz',
      role: 'Membro Associado',
      link: 'https://scholar.google.com/citations?user=jtYFoD0AAAAJ&hl=en',
    },
  ],
  'Former members': [
    { name: 'Sara Bandeira Coutinho', role: 'Former member' },
    { name: 'Matheus Julio Boncsidai de Oliveira', role: 'Former member', photo: FotoMatheus },
  ],
};

const tabs = ['Graduação', 'Mestrado', 'Doutorado', 'Membros Associados', 'Former members'];

export const TimeSection = () => {
  const [activeTab, setActiveTab] = useState('Graduação');

  const renderCard = ({ name, role, link, photo }, index) => (
    <div key={`${name}-${index}`} className="flex flex-col items-center text-center p-4">
      {photo ? (
        <img
          src={photo}
          alt={`Foto de ${name}`}
          className="w-52 h-52 object-cover rounded-full mb-4 border-4 border-lime-300"
          loading="lazy"
        />
      ) : (
        <div className="w-52 h-52 rounded-full bg-lime-200 mb-4" />
      )}
      <div className="text-white text-base font-bold">
        {link ? (
          <a
            href={link.startsWith('http') ? link : `https:${link}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-lime-300"
          >
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
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {members['Professor'].map(renderCard)}
      </div>
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
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {members[activeTab].map(renderCard)}
      </div>
    </div>
  );
};
