import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Artigo from './Artigo';
import './Artigos.css';
import ArtigosLogo from '../assets/ARTIGOS.png'; // Certifique-se de ter uma imagem para artigos
import { Link } from 'react-router-dom';

const Artigos = () => {
  const [artigos, setArtigos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/artigos.json'); // Certifique-se de ter um arquivo artigos.json
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('JSON Data:', data); // Log the JSON data to the console
        const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setArtigos(sortedData.slice(0, 4));
      } catch (error) {
        console.error('Error fetching the artigos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id='artigos' className=" min-h-[120vh] flex flex-col items-center bg-black text-white ">
      <div className="w-full flex justify-between items-start mb-16">
        <img src={ArtigosLogo} alt="Imagem" className="pl-24 pt-8" />
        <Link to="/artigos" className="link-custom mt-8 mr-24 text-white">
          Ver todos os artigos <FontAwesomeIcon icon={faArrowRight} className="icon-custom" />
        </Link>
      </div>
      {artigos.length > 0 ? (
        artigos.map((artigo, index) => (
          <Artigo
            key={index}
            title={artigo.title} 
            author={artigo.author}
            text={artigo.text}
            date={artigo.date}
          />
        ))
      ) : (
        <p>Loading artigos...</p>
      )}
    </div>
  );
};

export default Artigos;
