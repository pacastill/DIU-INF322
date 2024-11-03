import React from 'react';
import '../stylesheets/index.scss';

const CrearPeticion = () => {
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
                <input type="dir" placeholder="Ingrese dirección" />
                <button type="submit" className="submit-button">Enviar</button>

                <div className="map-container">
                
                <img src="path_to_your_map_image.png" alt="Mapa" />
                </div>
            </div>
        </div>
    );
};

export default CrearPeticion;