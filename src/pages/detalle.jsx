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
  const total_donado = datos.alimento_donado + datos.bebestible_donado + datos.insumo_donado + datos.mano_donado + datos.vestuario_donado
  const total_solicitado = datos.alimento_solicitado + datos.bebestible_solicitado + datos.insumo_solicitado + datos.mano_solicitado + datos.vestuario_solicitado
  const percentage = parseInt((total_donado / total_solicitado) * 100, 10);
  console.log(total_donado, total_solicitado, percentage)
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
        {/* Condicional para mostrar el botón Actualizar solo si el encargado es "Tito" */}
        {datos.encargado === "Tito" && (
          <button
            onClick={() => navigate(`/actualizar-peticion/${id}`, {
              state: {
                ...datos  // Esto incluye todas las propiedades de 'datos' en el objeto 'state'
              }
            })}
          >
            Actualizar
          </button>
        )}
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
        <p className="volunteer-requirements">{datos.description}</p>
        <ul className="volunteer-requirements">
          {datos.alimento_solicitado > 0 && (
            <li>Alimentos no perecibles: {datos.alimento_donado}/{datos.alimento_solicitado} Kg</li>
          )}
          {datos.bebestible_solicitado > 0 && (
            <li>Bebestibles: {datos.bebestible_donado}/{datos.bebestible_solicitado} Lt</li>
          )}
          {datos.insumo_solicitado > 0 && (
            <li>Insumos médicos: {datos.insumo_donado}/{datos.insumo_solicitado} Kits Médicos</li>
          )}
          {datos.mano_solicitado > 0 && (
            <li>Mano de obra: {datos.mano_donado}/{datos.mano_solicitado} Personas</li>
          )}
          {datos.vestuario_solicitado > 0 && (
            <li>Vestuario: {datos.vestuario_donado}/{datos.vestuario_solicitado} Prendas</li>
          )}
        </ul>


        <p className="card-address">Dirección: <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
          Ver en Google Maps
        </a></p>


        {/* Barra de progreso */}
        <div className="volunteer-progress">
          <img src={tiposIcon[datos.tipo]} className="worker-icon" />
          <span className="progress-text">{percentage} %</span>
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: `${percentage}%` }}></div>
          </div>
        </div>

        {/* Botones de volver y ayudar */}
        <div className="action-buttons">
          <button onClick={() => navigate(-1)} className="back-button">Volver</button>
          <button onClick={() => navigate(`/enviar-ayuda`, { state: { id } })} className="help-button">Aportar</button>
        </div>
      </div>
    </div>
  );
};

export default Detalle;