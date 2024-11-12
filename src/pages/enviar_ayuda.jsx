import React from 'react';
import '../stylesheets/index.scss';
import MapView from '../components/MapPeticiones';

const EnviarAyuda = () => {
    return (
        <div className='container_form'>
            <form className='formulario'>
                <label style={{fontWeight : 'bold'}}>Nombre encargado</label>        
                <input type="text" placeholder="Ingrese nombre del encargado" />

                <label style={{fontWeight : 'bold'}}>Contacto</label> 
                <input type="tel" placeholder="+569 XXXX XXXX" />

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
                <label>Fecha del envio de ayuda</label>
                <input type="date" />
                
                <label style={{fontWeight : 'bold'}}>Comentario</label> 
                <textarea placeholder=""></textarea>

                {/* Botones en la parte inferior */}
                <div className="button-container">
                    <button type='cancel' onClick={() => navigate(-1)} className="cancel-button">Cancelar</button>
                    <button type="submit" className="submit-button">Enviar ayuda</button>
                </div>
            </form>
            <div className="map-container">
                <MapView />;
            </div>
        </div>
    );
};

export default EnviarAyuda;