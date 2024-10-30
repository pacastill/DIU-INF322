import React from 'react'
import SelectButton from '../components/SelectButton'
import '../stylesheets/HomePage.scss';



export const HomePage = () => {
  const [selectedoption, setSelectedoption] = useState(null)
  const handleSelect = (option) => {
    setSelectedoption(option)
  }

  return (
      <div className="homepage">
      <h1>¡Bienvenido a ColaBora!</h1>
      <p>¿De qué tipo de organización eres miembro?</p>
      <div className="button-group">
        <SelectButton
          label="Voluntariado"
          selected={selectedOption === 'voluntariado'}
          onClick={() => handleSelect('voluntariado')}
        />
        <SelectButton
          label="Local"
          selected={selectedOption === 'local'}
          onClick={() => handleSelect('local')}
        />
      </div>
      <button className="ingresar-button">Ingresar</button>
    </div>
  );
};

export default HomePage
