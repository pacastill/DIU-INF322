// HelpButton.js
import React from 'react';
import './botonAyuda.scss';

import roja from '../assets/roja.png';
import amarillo from '../assets/amarilla.png';
import verde from '../assets/verde.png';

const BotonAyuda = () => {

    return (
    <div className="help-button-container">
      <button className="help-button">
        ?
      </button>
      <div className="tooltip">
        <div>
          <img src={roja} alt="Roja Icon" style={{ width: '20px', height: '20px' }} /> Se necesita mucha ayuda
        </div>
        <div>
          <img src={amarillo} alt="Amarillo Icon" style={{ width: '20px', height: '20px' }} /> Aun falta ayuda
        </div>
        <div>
          <img src={verde} alt="Verde Icon" style={{ width: '20px', height: '20px' }} /> Ayuda casi Completada
        </div>
      </div>
    </div>
    );
};

export default BotonAyuda;
