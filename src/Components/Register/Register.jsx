/* Importaciones como react */
import React from "react"
import { Link } from "react-router-dom"
export default function Register(){
    //Aqui va solo lógica
    return(
        <>
       <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-gray-300 rounded-lg shadow-lg w-96 p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Crear cuenta</h2>

        <form className="flex flex-col gap-4">
          <label htmlFor="">Nombre de Usuario:</label>
          <input 
            type="text" 
            placeholder="Usuario" 
            required 
            className="w-full border border-blac rouknded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <label htmlFor="">Email:</label>
          <input 
            type="email,text" 
            placeholder="Correo electronico" 
            required 
            className="w-full border border-black rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 "
          />
          <label htmlFor="">Contraseña</label>
          <input 
            type="password" 
            placeholder="Contraseña" 
            required 
            className="w-full border border-black rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600 "
          />

          <button 
            type="submit" 
            className="bg-green-600 text-white py-2 rounded hover:bg-neutral-700 transition"
          >
            Registrarse
          </button>
        </form>

        <div className="mt-4 flex justify_center text-center text-sm px-14">
          <Link to="/Login" className="text-blue-600 hover:underline text-sm font-semibold">¿Ya tienes cuenta?  Ingresa aqui </Link>
        </div>
      </div>
    </div>
        </>
    )
}