import React from 'react';
import Caratula from '../components/caratula.jsx';
import BotonIntercambio from '../components/botonIntercambio.jsx';
import { useDatosPrueba } from '../components/datosPrueba.jsx';
import '../stylesheets/index.scss';
import imagesSrc from '../assets/images';
import tiposIcon from '../assets/tipos';
import defaultImage from '../assets/images/id3.jpg'; // Importa la imagen por defecto

const CaratulasPage = () => {
  const { datosPrueba } = useDatosPrueba();

  return (
    <div className="caratulas-page" style={{ marginTop: '50px' }}>
      
      {datosPrueba.map((card, index) => (
        <Caratula
        key={index}
        id={card.id}
        title={card.title}
        comunidad={card.comunidad}
        encargado={card.encargado}
        contacto={card.contacto}
        solicitado={card.solicitado}
        description={card.description}
        lat={card.lat}
        lng={card.lng}
        alimento_donado={card.alimento_donado}
        alimento_solicitado={card.alimento_solicitado}
        bebestible_donado={card.bebestible_donado}
        bebestible_solicitado={card.bebestible_solicitado}
        insumo_donado={card.insumo_donado}
        insumo_solicitado={card.insumo_solicitado}
        mano_donado={card.mano_donado}
        mano_solicitado={card.mano_solicitado}
        vestuario_donado={card.vestuario_donado}
        vestuario_solicitado={card.vestuario_solicitado}
        imageUrl={imagesSrc[card.id] || defaultImage}
        imagenTipo={tiposIcon[card.tipo]}
        />
      ))}
    </div>
  );
};

export default CaratulasPage;
