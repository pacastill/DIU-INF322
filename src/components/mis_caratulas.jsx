import React from 'react';

import { useNavigate } from 'react-router-dom'

import '../stylesheets/index.scss';

const Caratula = ({ id, title, comunidad, encargado, contacto, direccion, alimento_solicitado, bebestible_solicitado, insumo_solicitado, mano_solicitado, vestuario_solicitado, description, imageUrl, tipo, lng, lat, alimento_donado, bebestible_donado, insumo_donado, mano_donado, vestuario_donado }) => {
  const navigate = useNavigate()
  return (
    <div className="card-container">
      {/* Header */}
      <div className="card-header">
        <div className="card-avatar">{comunidad.charAt(0)}</div>
        <span className="card-title">{comunidad}</span>
        <button className="card-menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="menu-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12h.01M12 12h.01M18 12h.01" />
          </svg>
        </button>
      </div>

      {/* Imagen */}
      <div className="card-image-placeholder">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="card-image" />
        ) : (
          <svg className="shape-icon" fill="currentColor" viewBox="0 0 24 24">
            <polygon points="12 2, 17 9, 7 9" />
            <rect x="3" y="12" width="7" height="7" />
            <circle cx="17" cy="16" r="3.5" />
          </svg>
        )}
      </div>

      {/* Contenido */}
      <div className="card-content">
        <div className="principal-title">
          <div><h3 className="card-task-title">{title}</h3>
            {/* <p className="card-status">{donado}/{solicitado}</p> */}
          </div>
          {/* <img src={imagenTipo} alt={tipo} className="tipo-icon" /> */}
        </div>
        <p className="card-description">{description}</p>
      </div>

      {/* Botones "Ver más" y "Actualizar" */}
      <div className="button-container">
        <button onClick={() => navigate(`/detalle/${id}`)} className="card-button">Ver más</button>

        {/* Condicional para mostrar el botón Actualizar solo si el encargado es "Tito" */}
        {encargado === "Tito" && (
          <button
            onClick={() => navigate(`/actualizar-peticion/${id}`, {
              state: {
                id,
                title,
                comunidad,
                encargado,
                contacto,
                direccion,
                alimento_solicitado,
                bebestible_solicitado,
                insumo_solicitado,
                mano_solicitado,
                vestuario_solicitado,
                description,
                imageUrl,
                tipo,
                lng,
                lat,
                alimento_donado,
                bebestible_donado,
                insumo_donado,
                mano_donado,
                vestuario_donado
              }
            })}
            className="card-button"
          >
            Actualizar
          </button>
        )}
      </div>


    </div>
  );
};


export default Caratula;