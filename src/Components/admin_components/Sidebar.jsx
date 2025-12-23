import  { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import panelIcon from "../../assets/panel.svg";
import citasIcon from '../../assets/citas.svg';
import pacientesIcon from '../../assets/pacientes.svg';
import diagnosticoIcon from '../../assets/diagnostico.svg';
import salirIcon from '../../assets/salir.svg';
import Logo from '/Logo.png';

/* 
  - menuItems: es un array de objetos que contiene las opciones del menu
  - label: es el texto que se muestra en el menu
  - icon: es el icono que se muestra en el menu
  - to: es la ruta a la que se redirige cuando se hace clic en el menu

*/
const menuItems = [
  { label: 'Panel', icon: panelIcon, to: '/admin' },
  { label: 'Citas', icon: citasIcon, to: '/citas' },
  { label: 'Pacientes', icon: pacientesIcon, to: '/pacientes' },
  { label: 'Diagnósticos', icon: diagnosticoIcon, to: '/diagnosticos' },
];

export const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <aside className={`h-screen flex flex-col justify-between bg-white border-r border-gray-200 transition-all duration-300 ${open ? 'w-65' : 'w-20'} sticky top-0`}>
      <div>
        {/* Logo y botón de colapsar */}
        <div className="flex p-4 gap-2">
          <div className="flex items-center gap-2">
            {open && (
              <>
                
                <div className="flex ">
                  <div className="font-bold text-md leading-tight">MCausilNutrition</div>
                </div>
              </>
            )}
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded cursor-pointer hover:bg-gray-100 transition"
            aria-label="Expandir/Colapsar sidebar"
          >
            <span className="block w-5 h-5">
              {/* Icono de hamburguesa simple */}
              <svg viewBox="0 0 20 20" fill="currentColor" className="text-gray-600"><rect y="3" width="20" height="2" rx="1"/><rect y="9" width="20" height="2" rx="1"/><rect y="15" width="20" height="2" rx="1"/></svg>
            </span>
          </button>
        </div>
        {/* Menú */}
        <nav className="mt-6 flex flex-col gap-1">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg mx-2 transition-colors duration-200 cursor-pointer
                ${location.pathname === item.to ? 'bg-[#f3e8ff] text-[#7c3aed]' : 'hover:bg-gray-100 text-gray-700'}`}
            >
              <img src={item.icon} alt={item.label} className="w-6 h-6" />
              {open && <span className="text-base">{item.label}</span>}
            </Link>
          ))}
        </nav>
      </div>
      {/* Configuración y redes sociales */}
      <div className="flex flex-col gap-4 p-4">
        <div className={`flex items-center gap-1 pl-3  ${open ? '' : 'justify-center'}`}>
          <img src={salirIcon} alt="Configuración" className="w-5 h-5" />
          {open && <button className="text-sm cursor-pointer" onClick={() => navigate('/')}>Cerrar sesión</button>}
        </div>
        {
          open && (
            <div className="flex-1 flex gap-1 justify-center" >
              <img 
                className="w-[42px] h-[42px]" 
                src={Logo} 
                alt="logo" 
              />
              <div className="flex flex-col">
                <a className='text-secondary' >
                  Mcausilnutrition
                </a>
                <a className='text-secondary text-sm'>
                  Nutricionista dietista
                </a>
              </div>
            </div>
          )
        }
      </div>
    </aside>
  );
}; 