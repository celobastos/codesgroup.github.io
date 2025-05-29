import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { TopBarTwo } from './TopBarTwo';

export const MenuArtigos = () => {
  const [artigos, setArtigos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/artigos.json');
        if (!response.ok) throw new Error('Erro ao carregar os artigos');
        const data = await response.json();
        const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setArtigos(sortedData);
      } catch (error) {
        console.error('Erro ao buscar os artigos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-screen w-full bg-[#DFEFA6] text-black flex flex-col">
      <TopBarTwo />

      {/* Wrapper to offset TopBarTwo */}
      <div className="flex-1 flex flex-col pt-[80px]">
        {/* Sticky header */}
        <div className="sticky top-0 z-10 bg-[#DFEFA6] w-full max-w-[1270px] mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">TODOS OS ARTIGOS</h1>
          <Link
            to="/"
            className="text-sm font-semibold hover:underline flex items-center gap-2"
          >
            Voltar para a página inicial <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>

        {/* Scrollable article list */}
        <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">
          {artigos.length > 0 ? (
            artigos.map((artigo, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 w-full max-w-[1270px] mx-auto transform transition duration-200 ease-in-out hover:shadow-lg hover:scale-[1.01] cursor-pointer"
              >
                <Link to={`/artigos/${artigo.id}`}>
                  <h3 className="font-bold text-lg mb-1">{artigo.title}</h3>
                  <p className="text-sm font-semibold mb-2">
                    <span className="italic">{artigo.authors}</span> • {artigo.revista}, {artigo.date}
                  </p>
                  <p className="text-sm text-gray-700 line-clamp-3">{artigo.text}</p>
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center">Carregando artigos...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuArtigos;
