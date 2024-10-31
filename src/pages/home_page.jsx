import React from 'react';
// importar el botón que aún no he creado


//Ya no se está usandoooooooooooooooooooo
export const HomePage = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md px-4 py-8 mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-6">¡Bienvenidos a ColaBora!</h1>
          <p className="text-lg mb-4">
            En esta página encontrarás una 💡 ampolleta que podrás encender y apagar con un botón
          </p>
          {/* Aquí el botoncito */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

