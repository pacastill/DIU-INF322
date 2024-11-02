import React from 'react';
import '../stylesheets/index.scss';

const CrearPeticion = () => {
    return (
        <div className='container'>
            <form className='formulario'>
                <label style={{fontWeight : 'bold'}}>Titulo de solicitud</label>        
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
                <label style={{fontWeight : 'bold'}}>Nombre de organización o comunidad</label> 
                <input type="text" placeholder="Organización o comunidad" />
                <label style={{fontWeight : 'bold'}}>Nombre encargado</label> 
                <input type="text" placeholder="Nombre encargado" />
                <label style={{fontWeight : 'bold'}}>Número de contacto</label> 
                <input type="tel" placeholder="+569 XXXX XXXX" />
                <label style={{fontWeight : 'bold'}}>Detalles</label> 
                <textarea placeholder="Describa lo que necesita"></textarea>
                {/* FALTA LA DIRECCIÓN */}

                <button type="submit">Enviar</button>
                {/*Arreglar botón*/}
            </form>

            <div className="map-container">
                {/* soy el mapa  */}
                <img src="path_to_your_map_image.png" alt="Mapa" />
            </div>
        </div>
    );
};

export default CrearPeticion;