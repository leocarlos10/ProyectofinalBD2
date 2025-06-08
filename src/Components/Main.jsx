import experienciaImg from '../assets/img-experiencia.jpg'
import fundadoraImg from '../assets/img-inicio.jpg'
import info from '../assets/info.svg'
import subir from '../assets/subir.svg'

export const Main = () => {
  return (
    <main className=''>
        {/* seccion de inicio */}
      <section className="flex items-center justify-between h-creen p-20 gap-8" >
        <div className="flex-2 flex flex-col gap-4 items-center">
          <h2 className="text-4xl font-bold text-secondary">Nuestra Fundadora</h2>
          
          <p className="text-secondary leading-relaxed px-30">
            Bienvenida! la Dra. Martha Lucia Ochoa Especialista en nutrición y puericultura infantil, 
            la Dra. Martha Lucia ofrece atención integral y personalizada para niños desde recién nacidos hasta adolescentes. 
            Con años de experiencia y un enfoque humano, su objetivo es brindar tranquilidad a las familias y guiar el desarrollo saludable de los más pequeños. 
            Tu hijo está en las mejores manos!
          </p>

          <button className="bg-secondary text-tertiary px-6 py-2 rounded-lg mt-4 w-fit transition duration-300 ease-in-out hover:scale-105 cursor-pointer ">
            Solicitar cita
          </button>
        </div>

        <div className="flex-1">
          <img 
            src={fundadoraImg} 
            alt="Nuestra Fundadora" 
            className="w-full h-full rounded-lg shadow-lg"
          />
        </div>
      </section>

        {/* seccion de experiencia */}
      <section id="experiencia" className="flex items-center justify-between h-screen p-20 gap-8" >
        <div className="flex-1">
          <img 
            src={experienciaImg} 
            alt="Imagen de experiencia" 
            className="w-full h-[80%] rounded-lg shadow-lg"
          />
        </div>
        
        <div className="flex-2 flex flex-col gap-4 items-center">
          <h2 className="text-3xl font-semibold text-secondary w-full">Experiencia</h2>

          <p className="text-secondary leading-relaxed pr-80">
            Soy Nutricionista Dietista egresada de la Universidad de Antioquia, con 9 años de experiencia en nutrición clínica pediátrica, soporte nutricional, 
            manejo de la obesidad infantil, desnutrición o bajo peso entre otras patologías que afectan el estado nutricional.
            Oriento en alimentación complementaria, trastornos alimentarios y formación de buenos hábitos alimentarios para los niños y sus familias.
            Mi consulta es un espacio de aprendizaje y tu oportunidad para un cambio positivo en tu salud.
          </p>
          <div className='flex w-full justify-start'>
          <button className="bg-secondary text-tertiary px-6 py-2 rounded-lg mt-4 w-fit transition duration-300 ease-in-out hover:scale-105 cursor-pointer ">
            Solicitar cita
          </button>
          </div>
        </div>
      </section>

        {/* seccion de consultorio */}
      <section id="consultorios" className="h-screen flex flex-col justify-center">
        <div className='flex justify-center'>
            <h2 className=" w-[50%] text-3xl font-semibold text-secondary mb-8 ">
            Consultorio
            </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md transition  duration-300 ease-in-out hover:scale-110">
            <div className="flex items-start gap-4">
              <img src={info} alt="" />
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  Como conectar con el especialista
                </h3>
                <p className="text-secondary leading-relaxed">
                  Al menos 30 minutos antes de la visita, recibirás un SMS y un email con el enlace para iniciar la consulta online. Podrás acceder directamente desde tu móvil o tu ordenador.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md transition  duration-300 ease-in-out hover:scale-110">
            <div className="flex items-start gap-4">
            <img src={info} alt="" />
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  Como prepararse para la consulta en línea
                </h3>
                <p className="text-secondary leading-relaxed">
                  Prepárate 10 minutos antes de la consulta y comprueba que tu celular o computadora tengan la batería cargada. Para una videollamada asegúrate que todo funcione: conexión a internet, cámara y micrófono. También puedes preparar la documentación médica (como algún test o resultado) que necesites enseñar durante la consulta.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md transition  duration-300 ease-in-out hover:scale-110    ">
            <div className="flex items-start gap-4">
            <img src={info} alt="" />
              <div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  Dirección
                </h3>
                <p className="text-secondary leading-relaxed">
                  Martha Lucia Causil - Nutricionista<br />
                  calle 5 D #38 a - 35 Edf Vista Torre 1 Consultorio/31, cali
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva sección de precios */}
      <section id="precios" className="h-screen flex flex-col justify-center">
        <div className='flex mb-12 '>
          <h2 className="w-[50%] text-3xl font-semibold text-secondary text-center  ">
            Precios
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Tarjeta Precensial */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transition  duration-300 ease-in-out hover:scale-110">
            <h3 className="text-xl font-semibold text-secondary mb-4">
              Precensial
            </h3>
            <div className="flex items-baseline mb-4">
              <span className="text-4xl font-bold text-secondary">$90</span>
              <span className="text-gray-600 ml-1">/por sesión</span>
            </div>
            <ul className="mb-6 text-secondary">
              <li className="mb-2">• Visitas sucesivas Nutrición y Dietética</li>
            </ul>
            <button className="bg-secondary text-tertiary px-6 py-2 rounded-lg w-full cursor-pointer">
              Solicitar cita
            </button>
          </div>

          {/* Tarjeta Precensial/En línea */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transition  duration-300 ease-in-out hover:scale-110">
            <h3 className="text-xl font-semibold text-secondary mb-4">
              Precensial / En línea
            </h3>
            <div className="flex items-baseline mb-4">
              <span className="text-4xl font-bold text-secondary">$100</span>
              <span className="text-gray-600 ml-1">/por sesión</span>
            </div>
            <ul className="mb-6 text-secondary">
              <li className="mb-2">• asesoría para alimentación complementaria</li>
              <li className="mb-2">• Visita Nutrición y Dietética</li>
            </ul>
            <button className="bg-secondary text-tertiary px-6 py-2 rounded-lg w-full cursor-pointer">
              Solicitar cita
            </button>
          </div>

          {/* Tarjeta En línea */}
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transition  duration-300 ease-in-out hover:scale-110">
            <h3 className="text-xl font-semibold text-secondary mb-4">
              En línea
            </h3>
            <div className="flex items-baseline mb-4">
              <span className="text-4xl font-bold text-secondary">$90</span>
              <span className="text-gray-600 ml-1">/por sesión</span>
            </div>
            <ul className="mb-6 text-secondary">
              <li className="mb-2">• Consulta en línea</li>
            </ul>
            <button className="bg-secondary text-tertiary px-6 py-2 rounded-lg w-full cursor-pointer">
              Solicitar cita
            </button>
          </div>
        </div>
      </section>
      <div className="fixed bottom-5 right-5 z-10 rounded-full border border-[#d9d9d9] p-2 
      transition duration-300 ease-in-out hover:scale-110 cursor-pointer">
        <a href="#"><img src={subir} alt="" /></a>
    </div>
    </main>
  )
}
