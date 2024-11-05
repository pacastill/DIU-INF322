import React from "react";
import { Popup } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import '../stylesheets/index.scss';

const MarkerPopup = ({ direccion, description, id }) => {
  const navigate = useNavigate();

  return (
    <Popup>
      <div>
        <p>{description}</p>
        <p>{direccion}</p>
        <button onClick={() => navigate(`/detalle/${id}`)} className="card-button">
          Ver más
        </button>
      </div>
    </Popup>
  );
};

export default MarkerPopup;
