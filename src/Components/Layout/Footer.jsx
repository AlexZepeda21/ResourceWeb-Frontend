import React from 'react';
import { FaGithub } from "react-icons/fa";
export default function Footer() {
  return (
   
    <div className="fixed bottom-0 w-full h-16 p-3 bg-gray-800/40 backdrop-blur-sm flex items-center text-gray-100">
      
      <div>
        <h2 className=''>ResourceWeb</h2>
      </div>
      <ul className='flex ml-auto'>
        <li className='m-2'><FaGithub className='bg-black rounded-full h-6 w-6' /></li>
        <li className='m-2'><FaGithub className='bg-blue-500 rounded-full h-6 w-6'/></li>
      </ul>
      <div className='ml-auto'>
        <h2 className=''>09/14/2025 Proyecto React con Vite</h2>
      </div>

    </div>
  );
}