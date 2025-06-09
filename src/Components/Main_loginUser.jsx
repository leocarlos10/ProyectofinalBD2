import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Main_loginUser = ({estado}) => {
  const [nombre, setNombre] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío, por ejemplo, llamar a una API o validar
    alert(`Nombre: ${nombre} \n Contraseña: ${contrasena}`);
    setNombre("");
    setContrasena("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit} className=" w-[50%] p-8  rounded-lg shadow-md border border-[#d9d9d9] ">
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contrasena" className="block text-sm font-medium text-gray-700">Contraseña</label>
          <input
            id="contrasena"
            type="password"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            placeholder="Contraseña"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary"
            required
          />
        </div>
        <button type="submit" className="w-full py-2 bg-gray-800 text-white rounded-md cursor-pointer hover:bg-gray-900 transition mb-3 ">
          Ingresar
        </button>
        {
            estado === "user" && 
            (
                <>
                    <div className="text-start  ">
                        <span className="text-sm">¿No tienes una cuenta? </span>
                            <Link to="/registrar-user" className=" hover:underline text-sm">Regístrate</Link>
                    </div>
                </>
            )
        }
      </form>
    </div>
  );
}
