import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../stylesheets/index.scss';
import MapView from '../components/MapPeticiones';
import { useDatosPrueba } from '../components/datosPrueba';

const EnviarAyuda = () => {
  const navigate = useNavigate();
  const { state } = useLocation();  // Recibe los datos de la carátula, incluyendo el id
  const { recibirAyuda } = useDatosPrueba()
  const [formData, setFormData] = useState({
/*     encargado: '',
    contacto: '',
    fecha: '',
    comentario: '', */
    idCaratula: parseInt(state?.id) || '',  // Asegúrate de que el ID de la carátula esté disponible
    alimento_donado: '',
    bebestible_donado: '',
    insumo_donado: '',
    mano_donado: '',
    vestuario_donado: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const camposNumericos = [
      "alimento_donado",
      "bebestible_donado",
      "insumo_donado",
      "mano_donado",
      "vestuario_donado",
    ];
  
    setFormData((prevDato) => ({
      ...prevDato,
      [name]: camposNumericos.includes(name) ? (value === "" ? 0 : parseInt(value, 10)) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Convertir los campos vacíos a 0 solo en el momento de enviar el formulario
    const formDataAEnviar = {
      ...formData,
      alimento_donado: formData.alimento_donado === '' ? 0 : formData.alimento_donado,
      bebestible_donado: formData.bebestible_donado === '' ? 0 : formData.bebestible_donado,
      insumo_donado: formData.insumo_donado === '' ? 0 : formData.insumo_donado,
      mano_donado: formData.mano_donado === '' ? 0 : formData.mano_donado,
      vestuario_donado: formData.vestuario_donado === '' ? 0 : formData.vestuario_donado,
    };
  
    console.log('Datos de ayuda a enviar:', formDataAEnviar);
    recibirAyuda(formData.idCaratula, formDataAEnviar);
  
    navigate(`/detalle/${formData.idCaratula}`);
  };
  

  return (
    <div className='container_form'>
      <form className='formulario' onSubmit={handleSubmit}>
        <label style={{ fontWeight: 'bold' }}>Nombre encargado</label>
        <input
          type="text"
          name="encargado"
          placeholder="Ingrese nombre del encargado"
          value={formData.encargado}
        />

        <label style={{ fontWeight: 'bold' }}>Contacto</label>
        <input
          type="tel"
          name="contacto"
          placeholder="+569 XXXX XXXX"
          value={formData.contacto}
        />

        <div className="tipo-solicitud">
          <label>Tipo de solicitud</label>
          <label style={{ textAlign: 'right', fontStyle: 'italic' }}>Cantidad</label>

          <span>Alimentos no perecibles</span>
          <input
            className="input-field"
            type="number"
            name="alimento_donado"
            placeholder="Kilogramos [KG]"
            value={formData.alimento_donado}
            onChange={handleChange}
          />

          <span>Bebestibles</span>
          <input
            className="input-field"
            type="number"
            name="bebestible_donado"
            placeholder="Litros [L]"
            value={formData.bebestible_donado}
            onChange={handleChange}
          />

          <span>Insumos médicos</span>
          <input
            className="input-field"
            type="number"
            name="insumo_donado"
            placeholder="Kits médicos"
            value={formData.insumo_donado}
            onChange={handleChange}
          />

          <span>Mano de obra</span>
          <input
            className="input-field"
            type="number"
            name="mano_donado"
            placeholder="Personas"
            value={formData.mano_donado}
            onChange={handleChange}
          />

          <span>Vestuario</span>
          <input
            className="input-field"
            type="number"
            name="vestuario_donado"
            placeholder="Prendas"
            value={formData.vestuario_donado}
            onChange={handleChange}
          />
        </div>
        
        <label>Fecha del envio de ayuda</label>
        <input
          type="date"
          name="fecha"
          value={formData.fecha}
        />

        <label style={{ fontWeight: 'bold' }}>Comentario</label>
        <textarea
          name="comentario"
          value={formData.comentario}
          onChange={handleChange}
          placeholder=""
        />

        <div className="button-container">
          <button type='button' onClick={() => navigate(-1)} className="cancel-button">Cancelar</button>
          <button type="submit" className="submit-button">Aportar</button>
        </div>
      </form>

      <div className="map-container">
        <MapView />
      </div>
    </div>
  );
};

export default EnviarAyuda;
