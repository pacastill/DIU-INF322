import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/index.scss';
import MapPeticiones from '../components/MapPeticiones';
import { useDatosPrueba } from '../components/datosPrueba';


const CrearPeticion = () => {
    // Marti
    const navigate = useNavigate();
    const { agregarDato } = useDatosPrueba();
    const [nuevoDato, setNuevoDato] = useState({
        id: '', // Agrega un campo `id`
        title: '',
        comunidad: '',
        encargado: '',
        contacto: '',
        direccion: '',
        tipo: '',
        donado: 0,
        solicitado: 0,
        description: '',
        lat: 0,
        lng: 0,
    });
    

    const handleCoordenadas = (coords) => {
        console.log("Coordenadas recibidas:", coords);
        setNuevoDato((prev) => ({
            ...prev,
            lat: coords.lat,
            lng: coords.lng,
        }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNuevoDato((prevDato) => ({ ...prevDato, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulario enviado', nuevoDato);
        agregarDato(nuevoDato);
        setNuevoDato({
            title: '',
            comunidad: '',
            encargado: '',
            contacto: '',
            direccion: '',
            tipo: '',
            donado: 0,
            solicitado: 0,
            description: '',
            lat: 0,
            lng: 0,
        });
        navigate('/caratulas');
    };

    //Pali
    const [direccion, setDireccion] = useState('');  // Estado para la entrada de dirección
    const [direccionParaBuscar, setDireccionParaBuscar] = useState('');  // Estado para la búsqueda de dirección

    const handleDireccionChange = (e) => {
        setDireccion(e.target.value);
    };

    const handleBuscarDireccion = () => {
        setDireccionParaBuscar(direccion);  // Actualiza la dirección para buscar en el mapa
    };

    return (
        <div className='container_form'>
            <form className='formulario' onSubmit={handleSubmit}>
                <label style={{ fontWeight: 'bold' }}>Título de solicitud</label>
                <input type="text" name="title" value={nuevoDato.title} onChange={handleChange} placeholder="Ingrese título" />

                <div className="tipo-solicitud">
                    <label>Tipo de solicitud</label>
                    <label style={{ textAlign: 'right', fontStyle: 'italic' }}>Cantidad</label>

                    <span>Alimentos no perecibles</span>
                    <input className="input-field" type="number" placeholder="Kilogramos [KG]" />

                    <span>Bebestibles</span>
                    <input className="input-field" type="number" placeholder="Litros [L]" />

                    <span>Insumos médicos</span>
                    <input className="input-field" type="number" placeholder="Kits médicos" />

                    <span>Mano de obra</span>
                    <input className="input-field" type="number" placeholder="Personas" />

                    <span>Vestuario</span>
                    <input className="input-field" type="number" placeholder="Prendas" />
                </div>

                <label style={{ fontWeight: 'bold' }}>Organización o comunidad</label>
                <input type="text" name="comunidad" value={nuevoDato.comunidad} onChange={handleChange} placeholder="Ingrese nombre de la organización o comunidad" />

                <label style={{ fontWeight: 'bold' }}>Nombre encargado</label>
                <input type="text" name="encargado" value={nuevoDato.encargado} onChange={handleChange} placeholder="Ingrese nombre del encargado" />

                <label style={{ fontWeight: 'bold' }}>Contacto</label>
                <input type="tel" name="contacto" value={nuevoDato.contacto} onChange={handleChange} placeholder="+569 XXXX XXXX" />

                <label style={{ fontWeight: 'bold' }}>Descripción</label>
                <textarea name="description" value={nuevoDato.description} onChange={handleChange} placeholder="Describa lo que necesita"></textarea>
                {/*Aki taba el forms antes*/}

                <button type="submit" className="submit-button">Enviar</button>
            </form>
            {/*Dirección es parte del forms, pero visualmente queda abajo (solución parcial en caso de no lograr moverlo donde estaba inicialmente y q siga siendo parte del forms)*/}
            <div className='formulario'>
                <label style={{ fontWeight: 'bold' }}>Dirección</label>
                <input
                    type="text"
                    placeholder="Ingrese dirección"
                    value={direccion}
                    onChange={handleDireccionChange}  // Actualiza el estado de dirección
                //value={nuevoDato.direccion} onChange={handleChange}
                />
                <button type="button" onClick={handleBuscarDireccion}>Buscar Dirección</button> {/* Botón específico para búsqueda */}
                <div style={container_style}>
                    <MapPeticiones direccion={direccionParaBuscar} onCoordenadas={handleCoordenadas} />  {/* Pasa `handleCoordenadas` */}
                </div>
            </div>

        </div>
    );
};

export default CrearPeticion;

const container_style = {
    display: 'flex',
    height: '100%',
    width: '100%',
};