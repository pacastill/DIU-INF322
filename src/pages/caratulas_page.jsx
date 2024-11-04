import React from 'react';
import Caratula from '../components/caratula.jsx';

// Arreglo con datos de ejemplo
import { useDatosPrueba } from '../components/datosPrueba.jsx'

import imagesSrc from '../assets/images';
import tiposIcon from '../assets/tipos';

const CaratulasPage = () => {

  const datos = useDatosPrueba();

  return (
    <div className="caratulas-page">
      {datos.map((card, index) => (
        <Caratula
          key={index}
          id={card.id}
          title={card.title}
          comunidad={card.comunidad}
          donado={card.donado}
          solicitado={card.solicitado}
          description={card.description}
          imageUrl={imagesSrc[card.id]}
          tipo={card.tipo}
          imagenTipo={tiposIcon[card.tipo]}
        />
      ))}
    </div>
  );
};

export default CaratulasPage;