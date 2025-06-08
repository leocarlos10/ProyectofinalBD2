import logo from '/Logo.png'
import settings from '../assets/settings.svg'
import user from '../assets/user.svg'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='flex py-4 bg-primary  '>
      <div className="flex-1 flex gap-1 justify-center">
        <img 
          className="w-[42px] h-[42px]" 
          src={logo} 
          alt="logo" 
        />
        <div className="flex flex-col">
          <a className='text-tertiary' href="#inicio">
            Mcausilnutrition
          </a>
          <a className='text-tertiary' href="#inicio">
            Nutricionista dietista
          </a>
        </div>
      </div>
      <div className='flex-2 flex items-center'>
        <nav>
          <ul className="flex gap-6">
            <li className='hover:text-slate-50'>
              <Link className="" to="/">
                Inicio
              </Link>
            </li>
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
              <a className="hover:text-slate-50" href="#">
                Cursos
              </a>
            </li>
            <li>
              <Link className="hover:text-slate-50" to="/solicitar-cita">
                Solicitar cita
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex-1 flex justify-center gap-2">
        <a href="#" className="flex items-center px-2 bg-tertiary rounded-[10px]"> 
          <img className='' src={user} alt="settings" />
          <span>Iniciar sesión</span>
        </a>
        <a href="#" className="flex items-center px-2 bg-tertiary rounded-[10px]"> 
          <img className='w-[20px] h-[20px]' src={settings} alt="settings" />
          <span> ¿ Eres pediatra ? </span>
        </a>
      </div>
    </header>
  )
}
