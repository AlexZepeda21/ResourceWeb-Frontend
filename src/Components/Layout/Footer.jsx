// En tu archivo Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    // CAMBIOS AQUÍ:
    // 1. Usamos bg-gray-800/80, que es la sintaxis más moderna para la opacidad.
    // 2. Añadimos "backdrop-blur-lg" para crear el efecto de desenfoque.
    <div className="fixed bottom-0 w-full h-16 p-3 bg-gray-800/40 backdrop-blur-sm flex items-center text-gray-100">
      
      <h2 className=''>ResourceWeb</h2>
      
      <div className='ml-auto'>
        <h2 className=''>09/14/2025 Proyecto React con Vite</h2>
      </div>

    </div>
  );
}