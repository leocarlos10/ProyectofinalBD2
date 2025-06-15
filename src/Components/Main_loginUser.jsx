import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UsuarioContext } from "../context/Usuario.Context";

export const Main_loginUser = ({estado}) => {

  const [nombre, setNombre] = useState("");
  const [cedula , setcedula] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const {loginUsuario} = useContext(UsuarioContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    // antes de hacer cualquier reedireccion debemos validar el estado
    if(estado === "user"){

        if(cedula !== "" && pass !== ""){
          const user ={
            cedula : cedula,
            pass : pass
          }
          console.log(user);
          loginUsuario(user);
          setcedula("");
          setPass("");
        }else{
          alert("Todos los campos son requeridos");
        }      
    } else if(estado === "admin"){
        navigate("/admin");
    }
  };

  /**
   * @param {string} estado
   * @returns {string}
   * @description Verifica el estado y retorna el nombre del campo requerido
   */
  const verfEstado = (estado) =>{
    return estado == "user" ? "Cedula" : "Nombre";
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit} className=" w-[40%] p-8  rounded-lg shadow-md border border-[#d9d9d9] ">
        <div className="mb-4">
          <label htmlFor={verfEstado(estado)} className="block text-sm font-medium text-gray-700">{verfEstado(estado)}</label>
          <input
            id={verfEstado(estado)}
            type="text"
            value={ estado == "user"? cedula : nombre}
            onChange={(estado == "user" ? ((e)=> setcedula(e.target.value)) : (e) => setNombre(e.target.value))}
            placeholder={verfEstado(estado)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-primary"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="pass" className="block text-sm font-medium text-gray-700">Contraseña</label>
          <input
            id="pass"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
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
                            <Link to="/registrar-user" className=" hover:underline text-sm">Regístrate aqui !</Link>
                    </div>
                </>
            )
        }
      </form>
    </div>
  );
}
