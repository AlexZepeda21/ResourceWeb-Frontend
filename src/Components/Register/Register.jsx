import { Link, useNavigate } from "react-router-dom"
import { api_Route } from "../../Lib/Routes/API";
import axios from "axios";
import React, { useState } from "react";

export default function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: ""
  });

  const changeData = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(api_Route.register, user);

      // Guardar el token
      document.cookie = `token=${response.data.token}; path=/;`;

      alert("Registro exitoso. Bienvenido " + response.data.userName);

      // Redirigir
      navigate("/Prueba", { replace: true });

    } catch (error) {
      console.error("Ha ocurrido un error", error);
      alert("Error al crear su cuenta");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-gray-300 rounded-lg shadow-lg w-96 p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Crear cuenta</h2>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          <label>Nombre de Usuario:</label>
          <input
            value={user.userName}
            onChange={changeData}
            name="userName"
            type="text"
            placeholder="Usuario"
            required
            className="w-full border border-black rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <label>Email:</label>
          <input
            value={user.email}
            onChange={changeData}
            name="email"
            type="email"
            placeholder="Correo electrónico"
            required
            className="w-full border border-black rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <label>Contraseña:</label>
          <input
            value={user.password}
            onChange={changeData}
            name="password"
            type="password"
            placeholder="Contraseña"
            required
            className="w-full border border-black rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <button
            type="submit"
            className="bg-green-600 text-white py-2 rounded hover:bg-neutral-700 transition"
          >
            Registrarse
          </button>
        </form>

        <div className="mt-4 flex justify-center text-center text-sm px-14">
          <Link to="/Login" className="text-blue-600 hover:underline text-sm font-semibold">
            ¿Ya tienes cuenta? Ingresa aquí
          </Link>
        </div>
      </div>
    </div>
  );
}
