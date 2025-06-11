import logo from '/Logo.png'
import settings from '../assets/settings.svg'
import user from '../assets/user.svg'
import { Link } from 'react-router-dom'

export const Header = ({visibilidad_Links, sesion}) => {
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
                    sesion && (
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
                    sesion && (
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
      <div className="flex-1 flex justify-center gap-2">
        <Link to={'/login-user'} className="flex items-center px-2 bg-tertiary rounded-[10px]"> 
          <img className='' src={user} alt="settings" />
          <span>Iniciar sesión</span>
        </Link>
        <Link to={'/login-admin'} className="flex items-center px-2 bg-tertiary rounded-[10px]"> 
          <img className='w-[20px] h-[20px]' src={settings} alt="settings" />
          <span> ¿ Eres pediatra ? </span>
        </Link>
      </div>
    </header>
  )
}
