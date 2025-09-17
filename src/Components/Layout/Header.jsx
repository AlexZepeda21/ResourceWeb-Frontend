import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="fixed flex  bg-gray-800/40 backdrop-blur-sm p-6 font-medium leading-relaxed w-full">
      <Link to="/" className="text-gray-100 hover:text-gray-300 transition-colors duration-500 ease-in-out">
        Home
      </Link>

      <div className="flex ml-auto space-x-5">
        <Link to="/Prueba" className="text-gray-100 hover:text-gray-300 transition-colors duration-500 ease-in-out">
          Prueba
        </Link>
        <Link to="/Prueba" className="text-gray-100 hover:text-gray-300 transition-colors duration-500 ease-in-out">
          Prueba
        </Link>
        <Link to="/Prueba" className="text-gray-100 hover:text-gray-300 transition-colors duration-500 ease-in-out">
          Prueba
        </Link>
      </div>
    </div>
  );
}
