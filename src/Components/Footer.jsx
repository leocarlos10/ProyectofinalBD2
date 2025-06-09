import Logo from '/Logo.png'
import instagram from '../assets/instagram_light.svg'
import youtube from '../assets/youtube.svg'
import linkedin from '../assets/linkedin.svg'
import { Link } from 'react-router-dom'


export const Footer = () => {
  return (
    <footer className="bg-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Columna 1: Logo y redes sociales */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} alt="MCausilNutrition" className="w-10 h-10" />
            <div className="flex flex-col">
              <h3 className="font-semibold text-secondary">MCausilNutrition</h3>
              <p className="text-sm text-secondary">Nutricionista dietista</p>
            </div>
          </Link>
          {/* Redes sociales */}
          <div className="flex gap-5 pl-12">
            <a href="https://www.instagram.com/mcausilnutrition/" className="hover:opacity-80">
              <img src={instagram} alt="Instagram" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-80">
              <img src={youtube} alt="YouTube" className="w-6 h-6" />
            </a>
            <a href="#" className="hover:opacity-80">
              <img src={linkedin} alt="LinkedIn" className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Columna 2: Información de contacto */}
        <div>
          <h3 className="text-lg font-semibold text-secondary mb-4">
            Información de contacto
          </h3>
          <ul className="space-y-2 text-secondary">
            <li>
              <a href="#" className="hover:text-primary">
                Teléfonos de contacto
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                Dirección de correo electrónico
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-primary">
                InfoCreadores
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 3: Enlaces de exploración */}
        <div>
          <h3 className="text-lg font-semibold text-secondary mb-4">
            Explorar
          </h3>
          <ul className="space-y-2 text-secondary">
            
            <li>
              <a href="#experiencia" className="hover:text-primary">
                Experiencia
              </a>
            </li>
            <li>
              <a href="#consultorios" className="hover:text-primary">
                Consultorio
              </a>
            </li>
            <li>
              <a href="#precios" className="hover:text-primary">
                Precios
              </a>
            </li>
            <li>
              <Link to="/cursos" className="hover:text-primary">
                Cursos
              </Link>
            </li>
            <li>
              <Link to="/solicitar-cita" className="hover:text-primary">
                Solicitar una cita
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
