import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/noticias.json');
        if (!response.ok) throw new Error('Erro ao carregar as notícias');
        const data = await response.json();
        const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setNoticias(sortedData.slice(0, 4));
      } catch (error) {
        console.error('Erro ao buscar notícias:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="noticias" className="bg-[#DFEFA6] px-4 md:px-24 py-16 text-black w-full">
      {/* Cabeçalho */}
      <div className="flex justify-between items-center mb-20 w-full">
        <h2 className="text-3xl font-bold">Notícias</h2>
        <Link
          to="/news"
          className="text-3x1 font-semibold hover:underline flex items-center gap-2"
        >
          Ver todas as notícias <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>

      {/* Lista de notícias */}
  <div className="flex flex-col items-center gap-6 w-full">
  {noticias.length > 0 ? (
    [...noticias]
      .sort((a, b) => b.id - a.id)
      .map((noticia, index) => (
        <Link
          to={`/news/${noticia.id}`}
          key={index}
          className="bg-white rounded-2xl shadow-md p-6 min-h-[140px] transform transition duration-200 ease-in-out hover:shadow-lg hover:scale-105 cursor-pointer w-full"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-[20px] font-semibold text-black">{noticia.title}</h3>
            <p className="text-[14px] text-black font-semibold whitespace-nowrap">{noticia.date}</p>
          </div>
          <p className="text-[16px] text-black line-clamp-3">{noticia.text}</p>
        </Link>
      ))
  ) : (
    <p className="text-gray-700">Carregando notícias...</p>
  )}
</div>

    </div>
  );
};

export default Noticias;
