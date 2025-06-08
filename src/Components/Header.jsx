import logo from '/Logo.png'
import settings from '../assets/settings.svg'
import user from '../assets/user.svg'

export const Header = () => {
  return (
    <header className='flex p-4 bg-primary'>
      <div className=" flex-1 flex gap-1 justify-center">
        <img 
          className="w-[42px] h-[42px]" 
          src={logo} 
          alt="logo" 
        />
        <div className="flex flex-col">
          <a className='text-tertiary' href="#">Mcausilnutrition</a>
          <a className='text-tertiary' href="#">Nutricionista dietista</a>
        </div>
      </div>
      <div className='flex-1 flex items-center md:lg:flex-2 '>
        <nav className=' '>
                <ul className="flex gap-6">
                    <li className='hover:text-slate-50'>
                        <a className="" href="#" id="inicio">
                        Experiencia
                        </a>
                    </li>
                    <li>
                        <a className="hover:text-slate-50" href="#experiencia" id="exp">
                        Consultorio
                        </a>
                    </li>
                    <li>
                        <a className="hover:text-slate-50" href="#consultorios" id="cons">
                         precios
                        </a>
                    </li>
                    <li>
                        <a className="hover:text-slate-50" href="#" id="cursos">
                        Cursos
                        </a>
                    </li>
                    <li>
                        <a className="hover:text-slate-50" id="sol" href="#">
                        Solicitar cita
                        </a>
                    </li>
                </ul>
        </nav>
      </div>
      <div className="flex-1 flex justify-center gap-2">
                <a href="#" className="flex items-center px-2 bg-tertiary rounded-[10px] "> 
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
