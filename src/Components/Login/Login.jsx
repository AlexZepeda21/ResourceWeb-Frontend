import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api_Route } from "../../Lib/Routes/API";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const changeData = (e) => {
    const { name, value } = e.target;
    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(api_Route.login, user);

      // Guardar token en cookie
      document.cookie = `token=${response.data.token}; path=/;`;

      alert("Bienvenido " + response.data.userName);

      // Redirigir al home
      navigate("/Prueba", { replace: true });
    } catch (error) {
      console.error("Ha ocurrido un error", error);
      alert("Credenciales incorrectas o error de servidor");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-gray-300 rounded-lg shadow-lg w-96 p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Iniciar Sesión
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            value={user.email}
            onChange={changeData}
            type="email"
            name="email"
            placeholder="Correo o usuario"
            required
            className="w-full border border-black rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <input
            value={user.password}
            onChange={changeData}
            type="password"
            placeholder="Contraseña"
            name="password"
            required
            className="w-full border border-black rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          <button
            type="submit"
            className="bg-neutral-600 text-white py-2 rounded hover:bg-green-600 transition border border-black px-8"
          >
            Ingresar
          </button>
        </form>

        <div className="mt-4 flex justify-between text-sm px-6">
          <a
            href="#"
            className="text-blue-600 hover:underline text-sm font-semibold"
          >
            ¿Olvidaste tu contraseña?
          </a>
          <Link
            to="/Register"
            className="text-blue-600 hover:underline font-semibold"
          >
            ¿No tienes cuenta? Regístrate
          </Link>
        </div>
      </div>
    </div>
  );
}
