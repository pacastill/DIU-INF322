// UserContext.js
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [tipoSeleccionado, setTipoSeleccionado] = useState('');

  return (
    <UserContext.Provider value={{ tipoSeleccionado, setTipoSeleccionado }}>
      {children}
    </UserContext.Provider>
  );
};
