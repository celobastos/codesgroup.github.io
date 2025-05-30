import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TopBarTwo } from './TopBarTwo';
import { FaArrowLeft } from 'react-icons/fa';

const NoticiasDetalhadas = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [noticia, setNoticia] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/noticias.json');
        if (!response.ok) throw new Error('Erro ao carregar as notícias');
        const data = await response.json();
        const noticiaEncontrada = data.find(n => n.id === parseInt(id));
        setNoticia(noticiaEncontrada);
      } catch (error) {
        console.error('Erro ao buscar a notícia:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!noticia) {
    return <p className="text-center mt-20">Carregando notícia...</p>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#DFEFA6] text-black">
      {/* Make sure TopBarTwo does not override the background visually */}
      <TopBarTwo />

      <div className="flex-1 pt-[160px] pb-16 px-4 sm:px-8">
        <div className="max-w-[900px] mx-auto bg-white rounded-2xl px-8 py-10 shadow-md">
          {/* Back arrow and title */}
          <div className="flex items-center gap-4 mb-4">
            <FaArrowLeft
              className="text-2xl cursor-pointer hover:text-gray-600"
              onClick={() => navigate('/news')}
            />
            <h1 className="text-2xl font-bold">{noticia.title}</h1>
          </div>

          {/* Subtitle */}
          {noticia.subtitulo && (
            <p className="text-sm text-gray-800 mb-4 leading-snug">{noticia.subtitulo}</p>
          )}

          {/* Author and date */}
          <p className="text-sm text-gray-700 mb-2">
            Por <span className="font-medium">{noticia.author}</span>
          </p>
          <p className="text-sm text-gray-600 mb-4">{noticia.date}</p>

          {/* External link */}
          {noticia.link && (
            <p className="mb-6 text-sm">
              <span className="font-semibold">Link para a página completa: </span>
              <a
                href={noticia.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800 break-all"
              >
                {noticia.link}
              </a>
            </p>
          )}

          {/* Main content */}
          <div className="whitespace-pre-wrap text-[16px] leading-relaxed">
            {noticia.text}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticiasDetalhadas;
