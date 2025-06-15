import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '/Logo.png'
import settings from '../assets/settings.svg'
import user from '../assets/user.svg'
import salir from "../assets/salir.svg"
import { UsuarioContext } from "../context/Usuario.Context";
import { useContext } from "react";

export const Header = ({visibilidad_Links}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {estaLogueado, nombreUsuario} = useContext(UsuarioContext);
  const navigate = useNavigate();

  const handleCerrarSesion = () => {
    localStorage.removeItem("swtU");
    localStorage.removeItem("nombreU");
    localStorage.removeItem("cedulaU");
    setMenuOpen(false);
    navigate("/");
    window.location.reload(); // Opcional: recarga para actualizar el estado global
  };

  return (
    <header className='flex py-4 bg-primary  '>
      <Link className="flex-1 flex gap-1 justify-center" to="/">
        <img 
          className="w-[42px] h-[42px]" 
          src={logo} 
          alt="logo" 
        />
        <div className="flex flex-col">
          <a className='text-tertiary'>
            Mcausilnutrition
          </a>
          <a className='text-tertiary'>
            Nutricionista dietista
          </a>
        </div>
      </Link>
      <div className='flex-2 flex items-center'>
        <nav>
          <ul className="flex gap-6">
           {
            visibilidad_Links ? 
              <>
                    <li>
                <a className="hover:text-slate-50" href="#experiencia">
                    Experiencia
                </a>
                </li>
                <li>
                <a className="hover:text-slate-50" href="#consultorios">
                    Consultorio
                </a>
                </li>
                <li>
                <a className="hover:text-slate-50" href="#precios">
                    Precios
                </a>
                </li>
                <li>
                <Link className="hover:text-slate-50" to="/cursos">
                    Cursos
                </Link>
                </li>
                <li>
                <Link className="hover:text-slate-50" to="/solicitar-cita">
                    Solicitar cita
                </Link>
                </li>
                {
                    estaLogueado && (
                    <li>
                        <Link className="hover:text-slate-50" to="/">
                            citas agendadas
                        </Link>
                    </li>
                    )
                }
              </>
            :
            <>
                 <li>
                    <Link className="hover:text-slate-50" to="/cursos">
                        Cursos
                    </Link>
                </li>
                <li>
                    <Link className="hover:text-slate-50" to="/solicitar-cita">
                        Solicitar cita
                    </Link>
                </li>
                {
                    estaLogueado && (
                    <li>
                        <Link className="hover:text-slate-50" to="/">
                            citas agendadas
                        </Link>
                    </li>
                    )
                }
            </>
           }
            
          </ul>
        </nav>
      </div>
      <div className="flex-1 flex justify-center gap-2 relative">
        {estaLogueado ? (
          <div className=" flex justify-center items-center relative px-2 bg-tertiary rounded-[10px] cursor-pointer " onClick={() => setMenuOpen(!menuOpen)}>
             <img className='w-[27px] h-[32px]' src={user} alt="settings" />
            <span
              className=" text-secondary cursor-pointer px-3 py-1 rounded hover:bg-white/20 transition"
            >
               {nombreUsuario}
            </span>
            <div className={` absolute right-0 top-11 mt-2 w-45 bg-white rounded-lg shadow-lg origin-top-right  transition duration-200 transform ${menuOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-95 opacity-0 pointer-events-none'}`}>
              <button
                className=" flex items-center gap-1  w-full text-left px-4 py-2 text-gray-700 cursor-pointer  hover:bg-gray-100 transition rounded-lg"
                onClick={handleCerrarSesion}
              >
                <img src={salir} alt="cerrar sesion"></img>
                Cerrar sesión
              </button>
            </div>
          </div>
        ) : (
          <Link to={'/login-user'} className="flex items-center px-2 bg-tertiary rounded-[10px]"> 
            <img className='' src={user} alt="settings" />
            <span>Iniciar sesión</span>
          </Link>
        )}
        <Link to={'/login-admin'} className="flex items-center px-2 bg-tertiary rounded-[10px]"> 
          <img className='w-[20px] h-[20px]' src={settings} alt="settings" />
          <span> ¿ Eres pediatra ? </span>
        </Link>
      </div>
    </header>
  )
}
