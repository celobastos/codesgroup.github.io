import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';
import { TopBarTwo } from './TopBarTwo';

export const MenuNoticias = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/noticias.json');
        if (!response.ok) throw new Error('Erro ao carregar as notícias');
        const data = await response.json();
        const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setNoticias(sortedData);
      } catch (error) {
        console.error('Erro ao buscar as notícias:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-screen w-full text-black bg-[#DFEFA6]">
      <TopBarTwo />

      <div className="fixed top-[140px] z-10 w-full bg-[#DFEFA6] px-6">
        <div className="max-w-[1270px] mx-auto flex justify-between items-center py-6">
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="text-black hover:text-gray-700 transition"
            >
              <FontAwesomeIcon icon={faArrowLeft} size="lg" /> 
            </Link>
            <h1 className="text-3xl font-semibold">TODAS AS NOTÍCIAS</h1>
          </div>
        </div>
      </div>

      <div className="overflow-y-auto h-screen pt-[236px] px-6 pb-8 space-y-6">
        {noticias.length > 0 ? (
          noticias.map((noticia, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-4 w-full max-w-[1270px] h-[104px] mx-auto transform transition duration-200 ease-in-out hover:shadow-lg hover:scale-[1.01] cursor-pointer overflow-hidden"
            >
              <Link to={`/news/${noticia.id}`} className="h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg">{noticia.title}</h3>
                  <p className="text-xs text-gray-500 whitespace-nowrap">{noticia.date}</p>
                </div>
                <p className="text-sm text-black line-clamp-2">{noticia.text}</p>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700">Carregando notícias...</p>
        )}
      </div>
    </div>
  );
};

export default MenuNoticias;