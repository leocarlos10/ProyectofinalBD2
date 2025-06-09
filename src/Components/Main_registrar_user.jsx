import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Main_registrar_user = () => {
  const [usuario, setUsuario] = useState({
    cedula: "",
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
    fechaNacimiento: "",
    ciudad: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Cédula: ${usuario.cedula}\nNombre: ${usuario.nombre}\nApellido: ${usuario.apellido}\nCorreo: ${usuario.correo}\nTeléfono: ${usuario.telefono}\nFecha de nacimiento: ${usuario.fechaNacimiento}\nCiudad: ${usuario.ciudad}`
    );
    setUsuario({
      cedula: "",
      nombre: "",
      apellido: "",
      correo: "",
      telefono: "",
      fechaNacimiento: "",
      ciudad: ""
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen py-10">
      <form onSubmit={handleSubmit} className="w-[50%] p-8 rounded-lg shadow-md border border-[#d9d9d9] ">
        <div className="mb-4">
          <label htmlFor="cedula" className="block text-sm font-medium text-gray-700">Cédula</label>
          <input
            id="cedula"
            name="cedula"
            type="text"
            value={usuario.cedula}
            onChange={handleChange}
            placeholder="cédula*"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            value={usuario.nombre}
            onChange={handleChange}
            placeholder="Nombre*"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="apellido" className="block text-sm font-medium text-gray-700">Apellido</label>
          <input
            id="apellido"
            name="apellido"
            type="text"
            value={usuario.apellido}
            onChange={handleChange}
            placeholder="apellido*"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="correo" className="block text-sm font-medium text-gray-700">Correo</label>
          <input
            id="correo"
            name="correo"
            type="email"
            value={usuario.correo}
            onChange={handleChange}
            placeholder="ejemplo@gmail.com*"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono</label>
          <input
            id="telefono"
            name="telefono"
            type="text"
            value={usuario.telefono}
            onChange={handleChange}
            placeholder="311*****67*"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="fechaNacimiento" className="block text-sm font-medium text-gray-700">Fecha de nacimiento</label>
          <input
            id="fechaNacimiento"
            name="fechaNacimiento"
            type="date"
            value={usuario.fechaNacimiento}
            onChange={handleChange}
            placeholder="Value"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ciudad" className="block text-sm font-medium text-gray-700">Ciudad</label>
          <input
            id="ciudad"
            name="ciudad"
            type="text"
            value={usuario.ciudad}
            onChange={handleChange}
            placeholder="ciudad"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary"
            required
          />
        </div>
        <button type="submit" className="w-full py-2 bg-gray-800 text-white rounded-md cursor-pointer hover:bg-gray-900 transition mb-3 ">
          Registrar
        </button>
        <div className="text-start">
          <Link to="/login-user" className="text-sm hover:underline">ya tienes una cuenta ? inicia sesion</Link>
        </div>
      </form>
    </div>
  );
}
