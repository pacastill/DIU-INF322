import React from 'react';
import '../stylesheets/index.scss';
import { useParams, useNavigate } from 'react-router-dom';
import { useDatosPrueba } from '../components/datosPrueba.jsx'

import tiposIcon from '../assets/tipos';
import imagesSrc from '../assets/images';

const Detalle = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { datosPrueba } = useDatosPrueba();
  const datos = datosPrueba.find((acc) => acc.id === parseInt(id));
  const googleMapsLink = `https://www.google.com/maps?q=${datos.lat},${datos.lng}`;

  if (!datos) {
    return <p>Accidente no encontrado :c</p>;
  }
  return (
    <div className="card-detail">
      {/* Encabezado con el ícono y el nombre de la ubicación */}
      <div className="card-detail-header">
        <div className="icon-wrapper">
          <span className="initial-icon">{datos.comunidad.charAt(0)}</span>
        </div>
        <h2 className="location-name">{datos.comunidad} </h2>
      </div>

      {//Contenedor de la imagen
      }
      <div className="card-image-placeholder">
        {imagesSrc[datos.id] ? (
          <img src={imagesSrc[datos.id]} className="card-image" />
        ) : (
          <svg className="shape-icon" fill="currentColor" viewBox="0 0 24 24">
            <polygon points="12 2, 17 9, 7 9" />
            <rect x="3" y="12" width="7" height="7" />
            <circle cx="17" cy="16" r="3.5" />
          </svg>
        )}
      </div>

      {// Descripción del trabajo 
      }
      <div className="card-content">
        <h3 className="card-title">{datos.title}</h3>
        <p className="card-subtitle">{datos.tipo}</p>
        <p className="volunteer-requirements">{datos.description}</p>
        {/*<ul className="volunteer-requirements">
          <li>Guantes</li>
          <li>Palas</li>
        </ul>*/}

        <p className="card-address">Dirección: <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
          Ver en Google Maps
        </a></p>


        {/* Barra de progreso */}
        <div className="volunteer-progress">
          <img src={tiposIcon[datos.tipo]} className="worker-icon" />
          <span className="progress-text">{datos.donado}/{datos.solicitado}</span>
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: `${(datos.donado / datos.solicitado) * 100}%` }}></div>
          </div>
        </div>

        {/* Botones de volver y ayudar */}
        <div className="action-buttons">
          <button onClick={() => navigate(-1)} className="back-button">Volver</button>
          <button onClick={() => navigate(`/enviar-ayuda`)} className="help-button">Ayudar</button> {/*Aquí debiera ir el onClick={() => navigate(/actualizar)} PERO hay que añadir las fxs para modificar los datos primero en los datos de prueba jeje*/}
        </div>
      </div>
    </div>
  );
};

export default Detalle;