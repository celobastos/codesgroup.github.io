import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TopBarTwo } from './TopBarTwo';
import { FaArrowLeft } from 'react-icons/fa';

const ArtigoDetalhado = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [artigo, setArtigo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/artigos.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const artigoEncontrado = data.find(n => n.id === parseInt(id));
        setArtigo(artigoEncontrado);
      } catch (error) {
        console.error('Error fetching the artigo:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!artigo) {
    return <p className="text-center mt-20 text-black">Carregando artigo...</p>;
  }

  return (
    <div className="min-h-screen bg-[#DFEFA6] text-black">
      <TopBarTwo />

      <div className="max-w-[1270px] mx-auto bg-white rounded-2xl p-10 mt-32 mb-16 shadow-md">
        {/* Back Button and Title */}
        <div className="flex items-start gap-4 mb-6">
          <FaArrowLeft
            className="text-2xl cursor-pointer hover:text-gray-600 mt-1"
            onClick={() => navigate('/artigos')}
          />
          <h1 className="text-3xl font-bold leading-snug">{artigo.title}</h1>
        </div>

        {/* Resumo */}
        <p className="mb-4 text-justify">
          <span className="font-bold">Resumo:</span>{' '}
          {artigo.text}
        </p>

        {/* Autores e publicação */}
        <p className="mb-1 font-semibold">[{artigo.authors}]</p>
        <p className="mb-4 text-sm text-gray-700">
          {artigo.revista} • {artigo.date}
        </p>

        {/* Link */}
        <p className="mb-6">
          <span className="font-semibold">Link para a hospedagem do artigo: </span>
          <a
            href={artigo.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline hover:text-blue-800 break-words"
          >
            {artigo.link}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ArtigoDetalhado;
