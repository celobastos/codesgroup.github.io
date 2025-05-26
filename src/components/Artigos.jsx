import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Artigos = () => {
  const [artigos, setArtigos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/artigos.json');
        if (!response.ok) throw new Error('Erro ao carregar os artigos');
        const data = await response.json();
        const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setArtigos(sortedData.slice(0, 4));
      } catch (error) {
        console.error('Erro ao buscar artigos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="artigos" className="bg-[#DFEFA6] px-6 md:px-24 py-16 text-black w-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-20 w-full max-w-[1270px] mx-auto">
        <h2 className="text-3xl font-bold">Artigos</h2>
        <Link
          to="/artigos"
          className="text-sm font-semibold hover:underline flex items-center gap-2"
        >
          Ver todos os artigos <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>

      {/* Lista de artigos */}
      <div className="flex flex-col items-center gap-6">
        {artigos.length > 0 ? (
          artigos.map((artigo, index) => (
            <Link
              to={`/artigos/${artigo.id}`}
              key={index}
              className="bg-white rounded-xl shadow-md p-6 transform transition duration-200 ease-in-out hover:shadow-lg hover:scale-105 cursor-pointer w-full max-w-[1270px]"
            >
              <h3 className="font-bold text-lg mb-1">{artigo.title}</h3>
              <p className="text-sm font-semibold mb-2">
                <span className="italic">{artigo.authors}</span> • {artigo.revista}
              </p>
              <p className="text-sm text-gray-700 line-clamp-3">{artigo.text}</p>
            </Link>
          ))
        ) : (
          <p className="text-gray-700">Carregando artigos...</p>
        )}
      </div>
    </div>
  );
};

export default Artigos;
