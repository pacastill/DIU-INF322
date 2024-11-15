import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../stylesheets/index.scss';
import MapPeticiones from '../components/MapPeticiones';
import { useDatosPrueba } from '../components/datosPrueba';

const ActualizarPeticion = () => {
  const navigate = useNavigate();
  const { state } = useLocation(); // Recibe los datos de la solicitud a actualizar
  const { modificarDato } = useDatosPrueba(); // Asumiendo que tienes una función en el context para actualizar datos
  //console.log("state",state)
  const [datoActualizado, setDatoActualizado] = useState({
    id: state?.id || '',
    title: state?.title || '',
    comunidad: state?.comunidad || '',
    encargado: state?.encargado || '',
    contacto: state?.contacto || '',
    direccion: state?.direccion || '',
    alimento_donado: state?.alimento_donado || 0,
    alimento_solicitado: state?.alimento_solicitado || '',
    bebestible_donado: state?.bebestible_donado || 0,
    bebestible_solicitado: state?.bebestible_solicitado || '',
    insumo_donado: state?.insumo_donado || 0,
    insumo_solicitado: state?.insumo_solicitado || '',
    mano_donado: state?.mano_donado || 0,
    mano_solicitado: state?.mano_solicitado || '',
    vestuario_donado: state?.vestuario_donado || 0,
    vestuario_solicitado: state?.vestuario_solicitado || '',
    lat: state?.lat || 0,
    lng: state?.lng || 0,
  });

  const handleCoordenadas = (coords) => {
    setDatoActualizado((prev) => ({
      ...prev,
      lat: coords.lat,
      lng: coords.lng,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const camposNumericos = [
      "alimento_solicitado",
      "bebestible_solicitado",
      "insumo_solicitado",
      "mano_solicitado",
      "vestuario_solicitado",
    ];

    setDatoActualizado((prevDato) => ( {
      ...prevDato,
      [name]: camposNumericos.includes(name) ? parseInt(value, 10) || 0 : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log('Datos actualizados:', datoActualizado);  // Agregar consola para depuración
    modificarDato(datoActualizado.id,datoActualizado); // Asegúrate de que modificarDato esté bien implementada en el contexto
    navigate(`/detalle/${datoActualizado.id}`); // Redirige con el id correcto
  };

  const [direccion, setDireccion] = useState('');
  const [direccionParaBuscar, setDireccionParaBuscar] = useState('');

  const handleDireccionChange = (e) => {
    setDireccion(e.target.value);
  };

  const handleBuscarDireccion = () => {
    setDireccionParaBuscar(direccion);
  };

  return (
    <div className='container_form'>
      <form className='formulario' onSubmit={handleSubmit}>
        <label style={{ fontWeight: 'bold' }}>Título de solicitud</label>
        <input type="text" name="title" value={datoActualizado.title} onChange={handleChange} placeholder="Ingrese título" />

        {/* Tipo de solicitud */}
        <div className="tipo-solicitud">
          <label>Tipo de solicitud</label>
          <label style={{ textAlign: 'right', fontStyle: 'italic' }}>Cantidad</label>

          <span>Alimentos no perecibles</span>
          <input
            className="input-field"
            name="alimento_solicitado"
            type="number"
            placeholder="Kilogramos [KG]"
            value={datoActualizado.alimento_solicitado}
            onChange={handleChange}
          />

          <span>Bebestibles</span>
          <input
            className="input-field"
            name="bebestible_solicitado"
            type="number"
            placeholder="Litros [L]"
            value={datoActualizado.bebestible_solicitado}
            onChange={handleChange}
          />

          <span>Insumos médicos</span>
          <input
            className="input-field"
            name="insumo_solicitado"
            type="number"
            placeholder="Kits médicos"
            value={datoActualizado.insumo_solicitado}
            onChange={handleChange}
          />

          <span>Mano de obra</span>
          <input
            className="input-field"
            name="mano_solicitado"
            type="number"
            placeholder="Personas"
            value={datoActualizado.mano_solicitado}
            onChange={handleChange}
          />

          <span>Vestuario</span>
          <input
            className="input-field"
            name="vestuario_solicitado"
            type="number"
            placeholder="Prendas"
            value={datoActualizado.vestuario_solicitado}
            onChange={handleChange}
          />
        </div>

        {/* Otros campos */}
        <label style={{ fontWeight: 'bold' }}>Organización o comunidad</label>
        <input type="text" name="comunidad" value={datoActualizado.comunidad} onChange={handleChange} placeholder="Ingrese nombre de la comunidad" />

        <label style={{ fontWeight: 'bold' }}>Nombre encargado</label>
        <input type="text" name="encargado" value={datoActualizado.encargado} onChange={handleChange} placeholder="Ingrese nombre del encargado" />

        <label style={{ fontWeight: 'bold' }}>Contacto</label>
        <input type="tel" name="contacto" value={datoActualizado.contacto} onChange={handleChange} placeholder="+569 XXXX XXXX" />

        <label style={{ fontWeight: 'bold' }}>Descripción</label>
        <textarea name="description" value={datoActualizado.description} onChange={handleChange} placeholder="Descripción"></textarea>

        <button type="submit" className="submit-button">Actualizar</button>
      </form>

      {/* Mapa de direcciones */}
      <div className='formulario'>
        <label style={{ fontWeight: 'bold' }}>Dirección</label>
        <input
          type="text"
          placeholder="Ingrese dirección"
          value={direccion}
          onChange={handleDireccionChange}
        />
        <button type="button" onClick={handleBuscarDireccion}>Buscar Dirección</button>
        <div style={container_style}>
          <MapPeticiones initialPosition={{ lat: state.lat, lng: state.lng }} direccion={direccionParaBuscar} onCoordenadas={handleCoordenadas} />
        </div>
      </div>
    </div>
  );
};

export default ActualizarPeticion;

const container_style = {
  display: 'flex',
  height: '100%',
  width: '100%',
};
