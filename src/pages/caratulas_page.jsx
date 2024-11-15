import React from 'react';
import Caratula from '../components/caratula.jsx';
import BotonIntercambio from '../components/botonIntercambio.jsx';
import { useDatosPrueba } from '../components/datosPrueba.jsx';

import imagesSrc from '../assets/images';
import tiposIcon from '../assets/tipos';
import defaultImage from '../assets/images/id3.jpg'; // Importa la imagen por defecto

const CaratulasPage = () => {
  const { datosPrueba } = useDatosPrueba();

  return (
    <div className="caratulas-page" style={{ marginTop: '60px' }}>
      {datosPrueba.map((card, index) => (
        <Caratula
          key={index}
          id={card.id}
          title={card.title}
          comunidad={card.comunidad}
          donado={card.donado}
          solicitado={card.solicitado}
          description={card.description}
          imageUrl={imagesSrc[card.id] || defaultImage} // Usa la imagen por defecto si no existe una específica
          tipo={card.tipo}
          imagenTipo={tiposIcon[card.tipo]}
        />
      ))}
    </div>
  );
};

export default CaratulasPage;
