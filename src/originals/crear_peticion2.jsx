{/*Archivo original de la Pali, es un resguardo noma por si lo otro no funcionaba*/}
import React, { useState } from 'react';
import '../stylesheets/index.scss';
import MapPeticiones from '../components/MapPeticiones';

const CrearPeticion = () => {
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
            <form className='formulario'>
                <label style={{fontWeight : 'bold'}}>Título de solicitud</label>        
                <input type="text" placeholder="Ingrese título" />

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
                
                <label style={{fontWeight : 'bold'}}>Organización o comunidad</label> 
                <input type="text" placeholder="Ingrese nombre de la organización o comunidad" />
                
                <label style={{fontWeight : 'bold'}}>Nombre encargado</label> 
                <input type="text" placeholder="Ingrese nombre del encargado" />
                
                <label style={{fontWeight : 'bold'}}>Contacto</label> 
                <input type="tel" placeholder="+569 XXXX XXXX" />
                
                <label style={{fontWeight : 'bold'}}>Descripción</label> 
                <textarea placeholder="Describa lo que necesita"></textarea>
            </form>
            
            <div className='formulario'>
                <label style={{fontWeight : 'bold'}}>Dirección</label> 
                <input 
                    type="text" 
                    placeholder="Ingrese dirección" 
                    value={direccion}
                    onChange={handleDireccionChange}  // Actualiza el estado de dirección
                />
                <button type="button" onClick={handleBuscarDireccion}>Buscar Dirección</button> {/* Botón específico para búsqueda */}
                <button type="submit" className="submit-button">Enviar</button>

                <div style={container_style}>
                    <MapPeticiones direccion={direccionParaBuscar} />  {/* Pasa dirección para buscar a MapView */}
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
