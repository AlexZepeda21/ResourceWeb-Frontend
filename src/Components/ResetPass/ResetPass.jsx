import React from "react";
import { Link, Navigate } from "react-router-dom";




export default function ResetPass(){

    return(
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-gray-300 rounded-lg shadow-lg w-96 p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Recuperar contraseña
        </h2>

        <form  className="flex flex-col gap-4">
            <label>Correo Electronico</label>
          <input
            type="email"
            name="email"
            placeholder="Correo "
            required
            className="w-full border border-black rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
            <label>Nueva contraseña</label>
          <input
            type="password"
            placeholder="Contraseña"
            name="password"
            required
            className="w-full border border-black rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <label>Confirmar contraseña:</label>
          <input
            type="password"
            placeholder="Contraseña"
            name="confirmPassword"
            required
            className="w-full border border-black rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <button
            type="submit"
            className="bg-neutral-600 text-white py-2 rounded hover:bg-green-600 transition border border-black px-8"
            
          >
            Confirmar
          </button>
        </form>
        </div>
      </div>

    );
}