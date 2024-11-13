import React from 'react';
import '../stylesheets/index.scss';
import MapView from '../components/MapPeticiones';
import MapPeticiones from '../components/MapPeticiones';
import { useDatosPrueba } from '../components/datosPrueba';
import { useParams } from 'react-router-dom';


const ActualizarPeticion = () => {
    const navigate = useNavigate();
    const { modificarDato, obtenerDatoPorId } = useDatosPrueba();
    const {id } = useParams(); //Esto se supone que es para obtener el id de la url
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

    useEffect(() => {
        const cargarDatos = async () => {
            const dato = await obtenerDatoPorId(id);
            if (dato){
                setNuevoDato(dato);
            }
        };
        cargarDatos();
    }, [id, obtenerDatoPorId]);

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
        modificarDato(id, nuevoDato);
        navigate('/caratulas');
    };


    return (
        <div className='container_form'>
            <form className='formulario' onSubmit={handleSubmit}>   
                <input type="text" name="title" value={nuevoDato.title} onChange={handleChange} placeholder="Ingrese título de la solicitud" />

                <div className="tipo-solicitud">
                    <label>Tipo de solicitud</label>
                    <label style={{ textAlign: 'right', fontStyle: 'italic' }}>Cantidad</label>

                    <span>Alimentos no perecibles</span>
                    <input className="input-field" type="number" name="solicitado" value={nuevoDato.solicitado} onChange={handleChange} placeholder="Kilogramos [KG]" />

                    <span>Bebestibles</span>
                    <input className="input-field" type="number" name="donado" value={nuevoDato.donado} placeholder="Litros [L]" />

                    <span>Insumos médicos</span>
                    <input className="input-field" type="number" placeholder="Kits médicos" />

                    <span>Mano de obra</span>
                    <input className="input-field" type="number" placeholder="Personas" />

                    <span>Vestuario</span>
                    <input className="input-field" type="number" placeholder="Prendas" />
                </div>
                <label style={{fontWeight : 'bold'}}>Organización o comunidad</label> 
                <input type="text" name= "comunidad" value={nuevoDato.comunidad} onChange={handleChange} placeholder="Ingrese nombre de la organización o comunidad" />
                
                <label style={{fontWeight : 'bold'}}>Nombre encargado</label> 
                <input type="text" name="encargado" value={nuevoDato.encargado} onChange={handleChange} placeholder="Ingrese nombre del encargado" />
                
                <label style={{fontWeight : 'bold'}}>Contacto</label> 
                <input type="tel" name="contacto" value={nuevoDato.contacto} onChange={handleChange} placeholder="+569 XXXX XXXX" />
                
                <label style={{fontWeight : 'bold'}}>Comentario</label> 
                <textarea name="description" value={nuevoDato.description} onChange={handleChange} placeholder=""></textarea>

                {/* Botones en la parte inferior */}
                <div className="button-container">
                    <button type="button" className="cancel-button" onClick={() => navigate('/caratulas')}>Cancelar</button>
                    <button type="submit" className="submit-button">Actualizar</button>
                </div>
            </form>
            
            <div className="map-container">
                <MapPeticiones
                    direccion={nuevoDato.direccion}
                    onCoordenadas={handleChange}
                    />
            
                <MapView />;

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