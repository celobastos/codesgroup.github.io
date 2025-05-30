import React, { useState } from 'react';

const members = {
  Professor: [
    {
      name: 'George Darmiton da Cunha Cavalcanti',
      role: 'Professor Titular do Centro de Informática da UFPE',
      link: 'http://darmiton.com',
    },
  ],
  Doutorado: [
    { name: 'Ingryd Pereira', 
      role: 'Doutoranda em Ciência da Computação' ,
      link: 'http://lattes.cnpq.br/7192547386318453'
    },
    {
      name: 'Gabriel Henrique D. da Silva',
      role: 'Doutorando em Ciência da Computação',
      link: 'www.linkedin.com/in/gabriel-henrique-6a0050156',
    },
     {
      name: 'Johnattan Douglas F. Viana',
      role: 'Doutorando em Ciência da Computação',
      link: 'http://lattes.cnpq.br/4244055492368435',
    },
  ],
  Mestrado: [
    { name: 'Bianca Lima', role: 'Mestranda em Ciência da Computação', link:'https://br.linkedin.com/in/biancanathally'},
    { name: 'Leilane Cruz', role: 'Mestranda em Ciência da Computação' },
    { name: 'Lucas A. Lisboa', role: 'Mestrando em Ciência da Computação' },
    { name: 'Maria Luiza Brito Laranjeira', role: 'Mestranda em Ciência da Computação', link:'https://www.linkedin.com/in/malu-laranjeira/ '}
  ],
  'Membros Associados': [
    { name: 'Francimaria Nascimento', role: 'Doutoranda em Ciência da Computação' },
    {
      name: 'Rafael Menelau Oliveira e Cruz',
      role: 'Professor Assistente em ÉTS-Montréal',
      link: 'https://scholar.google.com/citations?user=jtYFoD0AAAAJ&hl=en',
    },
  ],
  Graduação: [
    { name: 'Breno Mendes de Melo Uchôa Cavalcanti', role: 'Graduando em Engenharia da Computação',link:'https://www.linkedin.com/in/breno-cavalcanti' },
    { name: 'Camila Vieira', role: 'Graduanda em Engenharia da Computação' },
    { name: 'Ernesto Gonçalves', role: 'Graduando em Ciência da Computação' },
    {
      name: 'Igor Rocha',
      role: 'Graduando em Ciência da Computação',
      link: 'https://www.linkedin.com/in/igorrocha28',
    },
    { name: 'Joao Victor Cardoso Lopes', role: 'Graduando em Ciência da Computação',link:'https://www.linkedin.com/in/joão-victor-lopess/' },
    { name: 'Jose Vinícius de Santana Souza', role: 'Graduando em Engenharia da Computação', link:'https://www.linkedin.com/in/jose-vinicius-souza/' },
    {
      name: 'Lucas Nascimento Brandão',
      role: 'Graduando em Engenharia da Computação',
      link: 'https://www.linkedin.com/in/lucas-n-brandão',
    },
    { name: 'Marcelo Vinicius Bastos Santos', role: 'Graduando em Engenharia da Computação', link:'https://www.linkedin.com/in/marcelo-vinicius-bastos/ '},
    { name: 'Matheus Julio Boncsidai de Oliveira', role: 'Graduando em Engenharia da Computação' },
  ],
};

const tabs = ['Graduação', 'Mestrado', 'Doutorado', 'Membros Associados'];

export const TimeSection = () => {
  const [activeTab, setActiveTab] = useState('Graduação');

  const renderCard = ({ name, role, link }, index) => (
    <div key={index} className="flex flex-col items-center text-center p-4">
      <div className="w-52 h-52 rounded-full bg-lime-200 mb-4" />
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
      {/* Increased text size and weight for "O TIME" */}
      <div className="text-3xl font-bold mb-8">
        TIME
      </div>

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
