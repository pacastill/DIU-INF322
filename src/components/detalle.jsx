import React from 'react';
import '../stylesheets/caratulas/detalle.scss';
import '../stylesheets/caratulas/imagen.scss';

const Detalle = () => {
  return (
    <div className="card-detail">
      {/* Encabezado con el ícono y el nombre de la ubicación */}
      <div className="card-detail-header">
        <div className="icon-wrapper">
          <span className="initial-icon">A</span>
        </div>
        <h2 className="location-name">Población Vergara</h2>
        <div className="progress-bar-container">
          <div className="progress-bar"></div>
        </div>
        <button className="menu-button">
          <svg xmlns="http://www.w3.org/2000/svg" className="menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12h.01M12 12h.01M18 12h.01" />
          </svg>
        </button>
      </div>

      {//Contenedor de la imagen
      }
      <div className="card-image-placeholder">
          <svg className="shape-icon" fill="currentColor" viewBox="0 0 24 24">
            <polygon points="12 2, 17 9, 7 9" />
            <rect x="3" y="12" width="7" height="7" />
            <circle cx="17" cy="16" r="3.5" />
          </svg>
      </div>

      {// Descripción del trabajo 
      }
      <div className="card-content">
        <h3 className="card-title">Ayuda a recoger escombros</h3>
        <p className="card-subtitle">Mano de obra</p>
        <p className="card-instructions">Cada voluntario debe traer:</p>
        <ul className="volunteer-requirements">
          <li>Guantes</li>
          <li>Palas</li>
          <li>Zapatos de seguridad</li>
          <li>Bolsas de basura</li>
        </ul>
        <p className="card-address">Dirección: Avenida siempre viva 123, población vergara, Valparaíso.</p>
        
        {/* Barra de progreso */}
        <div className="volunteer-progress">
          <img src="worker-icon.png" alt="Worker Icon" className="worker-icon" /> {/* Puedes reemplazar con el ícono que desees */}
          <span className="progress-text">15/20</span>
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: '75%' }}></div>
          </div>
        </div>

        {/* Botones de volver y ayudar */}
        <div className="action-buttons">
          <button className="back-button">Volver</button>
          <button className="help-button">Ayudar</button>
        </div>
      </div>
    </div>
  );
};

export default Detalle;