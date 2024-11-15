import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../stylesheets/index.scss';
import MapPeticiones from '../components/MapPeticiones';
import { useDatosPrueba } from '../components/datosPrueba';
import ConfirmModal from './confirmButton';


const CrearPeticion = () => {
    const navigate = useNavigate();
    const { agregarDato } = useDatosPrueba();
    const [nuevoDato, setNuevoDato] = useState({
        id: '',
        title: '',
        comunidad: '',
        encargado: '',
        contacto: '',
        direccion: '',
        alimento_donado: 0,
        alimento_solicitado: '',
        bebestible_donado: 0,
        bebestible_solicitado: '',
        insumo_donado: 0,
        insumo_solicitado: '',
        mano_donado: 0,
        mano_solicitado: '',
        vestuario_donado: 0,
        vestuario_solicitado: '',
        lat: 0,
        lng: 0,
    });

    const handleCoordenadas = (coords) => {
        setNuevoDato((prev) => ({
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
    
        setNuevoDato((prevDato) => ({
            ...prevDato,
            [name]: camposNumericos.includes(name) ? parseInt(value, 10) || 0 : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setMostrarModal(true); 
    };

    const confirmarEnvio = () => {
        console.log('Formulario enviado', nuevoDato);
        agregarDato(nuevoDato);
        navigate('/caratulas');


        setMostrarModal(false); // Oculta la modal
    };

    const [mostrarModal, setMostrarModal] = useState(false);

    const cancelarEnvio = () => {
        setMostrarModal(false); // Cierra la modal sin enviar
    };

    //Pali
    const [direccion, setDireccion] = useState('');  // Estado para la entrada de dirección
    const [direccionParaBuscar, setDireccionParaBuscar] = useState('');  // Estado para la búsqueda de dirección

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
                <input type="text" name="title" value={nuevoDato.title} onChange={handleChange} placeholder="Ingrese título" />

                <div className="tipo-solicitud">
                    <label>Tipo de solicitud</label>
                    <label style={{ textAlign: 'right', fontStyle: 'italic' }}>Cantidad</label>

                    <span>Alimentos no perecibles</span>
                    <input
                        className="input-field"
                        name="alimento_solicitado"
                        type="number"
                        placeholder="Kilogramos [KG]"
                        value={nuevoDato.alimento_solicitado}
                        onChange={handleChange}
                    />

                    <span>Bebestibles</span>
                    <input
                        className="input-field"
                        name="bebestible_solicitado"
                        type="number"
                        placeholder="Litros [L]"
                        value={nuevoDato.bebestible_solicitado}
                        onChange={handleChange}
                    />

                    <span>Insumos médicos</span>
                    <input
                        className="input-field"
                        name="insumo_solicitado"
                        type="number"
                        placeholder="Kits médicos"
                        value={nuevoDato.insumo_solicitado}
                        onChange={handleChange}
                    />

                    <span>Mano de obra</span>
                    <input
                        className="input-field"
                        name="mano_solicitado"
                        type="number"
                        placeholder="Personas"
                        value={nuevoDato.mano_solicitado}
                        onChange={handleChange}
                    />

                    <span>Vestuario</span>
                    <input
                        className="input-field"
                        name="vestuario_solicitado"
                        type="number"
                        placeholder="Prendas"
                        value={nuevoDato.vestuario_solicitado}
                        onChange={handleChange}
                    />
                </div>

                <label style={{ fontWeight: 'bold' }}>Organización o comunidad</label>
                <input type="text" name="comunidad" value={nuevoDato.comunidad} onChange={handleChange} placeholder="Ingrese nombre de la organización o comunidad" />

                <label style={{ fontWeight: 'bold' }}>Nombre encargado</label>
                <input type="text" name="encargado" value={nuevoDato.encargado} onChange={handleChange} placeholder="Ingrese nombre del encargado" />

                <label style={{ fontWeight: 'bold' }}>Contacto</label>
                <input type="tel" name="contacto" value={nuevoDato.contacto} onChange={handleChange} placeholder="+569 XXXX XXXX" />

                <label style={{ fontWeight: 'bold' }}>Descripción</label>
                <textarea name="description" value={nuevoDato.description} onChange={handleChange} placeholder="Describa lo que necesita"></textarea>

                <button type="submit" className="submit-button">Enviar</button>
            </form>
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
                    <MapPeticiones direccion={direccionParaBuscar} onCoordenadas={handleCoordenadas} />
                </div>
            </div>

            {mostrarModal && (
                <ConfirmModal
                    mensaje="¿Está seguro de que desea enviar la solicitud?"
                    onConfirm={confirmarEnvio}
                    onCancel={cancelarEnvio}
                />)}

        </div>
    );
};

export default CrearPeticion;

const container_style = {
    display: 'flex',
    height: '100%',
    width: '100%',
};
