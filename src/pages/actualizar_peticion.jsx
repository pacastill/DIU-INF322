import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../stylesheets/index.scss';
import MapView from '../components/MapPeticiones';

const ActualizarPeticion = () => {
    const { state } = useLocation();
    const [formData, setFormData] = useState({
      title: '',
      comunidad: '',
      encargado: '',
      contacto: '',
      description: '',
      donado: 0,
      solicitado: 0,
      tipo: '',
      lat: 0,
      lng: 0
    });
    const [isDataLoaded, setIsDataLoaded] = useState(false); // Estado para verificar si los datos están cargados
  
    useEffect(() => {
      if (state) {
        setFormData({
          title: state.title || '',
          comunidad: state.comunidad || '',
          encargado: state.encargado || '',
          contacto: state.contacto || '',
          description: state.description || '',
          donado: state.donado || 0,
          solicitado: state.solicitado || 0,
          tipo: state.tipo || '',
          lat: state.lat || 0,
          lng: state.lng || 0
        });
        setIsDataLoaded(true); // Una vez que los datos estén disponibles, marcamos como cargado
      }
    }, [state]);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }; 

  return (
    <div className='container_form'>
      <form className='formulario'>
        <input
          type="text"
          name="title"
          placeholder="Ingrese título de la solicitud"
          value={formData.title}
          onChange={handleChange}
        />

        <div className="tipo-solicitud">
          <label>Tipo de solicitud</label>
          <label style={{ textAlign: 'right', fontStyle: 'italic' }}>Cantidad</label>

          <span>Alimentos no perecibles</span>
          <input
            className="input-field"
            type="number"
            placeholder="Kilogramos [KG]"
            name="donado"
            value={formData.donado}
            onChange={handleChange}
          />

          <span>Bebestibles</span>
          <input
            className="input-field"
            type="number"
            placeholder="Litros [L]"
          />

          <span>Insumos médicos</span>
          <input
            className="input-field"
            type="number"
            placeholder="Kits médicos"
          />

          <span>Mano de obra</span>
          <input
            className="input-field"
            type="number"
            placeholder="Personas"
          />

          <span>Vestuario</span>
          <input
            className="input-field"
            type="number"
            placeholder="Prendas"
          />
        </div>

        <label style={{ fontWeight: 'bold' }}>Organización o comunidad</label>
        <input
          type="text"
          name="comunidad"
          placeholder="Ingrese nombre de la organización o comunidad"
          value={formData.comunidad}
          onChange={handleChange}
        />

        <label style={{ fontWeight: 'bold' }}>Nombre encargado</label>
        <input
          type="text"
          name="encargado"
          placeholder="Ingrese nombre del encargado"
          value={formData.encargado}
          onChange={handleChange}
        />

        <label style={{ fontWeight: 'bold' }}>Contacto</label>
        <input
          type="tel"
          name="contacto"
          placeholder="+569 XXXX XXXX"
          value={formData.contacto}
          onChange={handleChange}
        />

        <label style={{ fontWeight: 'bold' }}>Comentario</label>
        <textarea
          name="description"
          placeholder=""
          value={formData.description}
          onChange={handleChange}
        ></textarea>

        <div className="button-container">
          <button type="button" className="cancel-button">Cancelar</button>
          <button type="submit" className="submit-button">Actualizar</button>
        </div>
      </form>

      <div className="map-container">
          {isDataLoaded && (
            <MapView
              initialPosition={{ lat: formData.lat, lng: formData.lng }}
            />
          )}
        </div>
    </div>
  );
};

export default ActualizarPeticion;
