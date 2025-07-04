import { useContext, useState } from "react";
import experienciaImg from '../assets/img-experiencia.jpg';
import instagram from '../assets/instagram_light.svg';
import youtube from '../assets/youtube.svg';
import linkedin from '../assets/linkedin.svg';
import { useNavigate } from "react-router-dom";
import { CitaContext } from "../context/Cita.Context";
import { useEffect } from "react";

export const MainSolicitarCita = () => {

  const [tab, setTab] = useState("PRECENSIAL");
  const [servicio, setServicio] = useState();
  const [fecha, setFecha] = useState("");
  const {actualizarCita} = useContext(CitaContext);
  const navigate = useNavigate();

  // Opciones para cada tipo de cita
  const serviciosPresencial = [
    "Visita Nutricion y dietética : $90,000",
    "Visita sucesiva de control de peso: $90,000",
    "Asesoria para alimentacion infantil : $100,000",
    "Consejeria de latancia materna : $100,000"

  ];
  const serviciosVirtual = [
    "Consulta en linea : $90,000  ",
    "Asesoria para alimentacion complementaria : $90,000 ",
    "Seguimiento Virtual: $90,000 "
  ];

  /* En caso de que el usuario no seleccione un servicio se le asigna el primer servicio de la lista */
  useEffect(() => {
    setServicio(tab == "PRECENSIAL" ? serviciosPresencial[0] : serviciosVirtual[0]);
  }, [tab]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const datos = {
      fechaHora: fecha,
      tipo_cita: tab,
      servicio: servicio,
      estado: 'pendiente'
    }
    const estaVacio = Object.values(datos).some(value => value === '' || value === null);
    
    if(!estaVacio){
      // luego verficamos si esta logueado
      const token = localStorage.getItem('swtU');
      if(token){
        actualizarCita(datos);
        navigate("/form-paciente");
      }else{
        alert("Por favor, inicie sesión para agendar una cita");
        navigate("/login-user");
      }
      
    }else{
      alert("Por favor, complete todos los campos");
    }
    
  
  }

  return (
    <section className="flex flex-col gap-6 items-center pt-15 pb-35  px-60">
      {/* Card de información de la doctora */}
      <div className="flex flex-col md:flex-row rounded-lg shadow-md border border-[#d9d9d9]  py-5 mb-8 items-center ">
        <div className="flex-1 flex justify-center ">
          <img 
            src={experienciaImg} 
            alt="Martha Lucia Causil" 
            className="w-[70%] h-[70%] object-cover rounded-lg bg-gray-100"
          />
        </div>
        <div className="flex-1 flex flex-col gap-2 ">
          <h3 className="text-xl font-semibold text-secondary">Martha Lucia Causil</h3>
          <p className="text-secondary text-sm mb-2">Especialidad: Nutricionista Dietista</p>
          <div className="text-secondary text-sm mb-2">
            <span className="font-semibold">Dirección:</span><br />
            Martha Lucia Causil - Nutricionista<br />
            calle 5 D #38 a - 35 Edf Vida Torre 1 Consultorio/731, cali.
          </div>
          <div className="text-secondary text-sm mb-2">
            <span className="font-semibold">Teléfono personal:</span> 321 7769473
          </div>
          <div className="text-secondary text-sm mb-2 flex items-center gap-2">
            <span className="font-semibold">Enlace redes sociales:</span>
            <a href="https://www.instagram.com/mcausilnutrition/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Instagram" className="w-5 h-5 inline" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="YouTube" className="w-5 h-5 inline" /></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" className="w-5 h-5 inline" /></a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 w-full border border-[#d9d9d9] rounded-lg shadow-md">
            {/* Header */}
        <div className="bg-primary text-white px-6 py-3 font-semibold text-lg rounded-t-lg w-full">
            AGENDAR CITA
        </div>

        {/* Tabs */}
        <div className="flex w-full">
            <button
            className={`px-6 py-2 font-medium focus:outline-none cursor-pointer ${
                tab === "PRECENSIAL"
                ? "border-b-4 border-primary text-primary"
                : "text-secondary"
            }`}
            onClick={() => setTab("PRECENSIAL")}
            >
            VISTA PRESENCIAL
            </button>
            <button
            className={`px-6 py-2 font-medium focus:outline-none cursor-pointer ${
                tab === "VIRTUAL"
                ? "border-b-4 border-primary text-primary "
                : "text-secondary"
            }`}
            onClick={() => setTab("VIRTUAL")}
            >
            CONSULTA EN LÍNEA
            </button>
        </div>

        {/* Formulario */}
        <form className="p-6 flex flex-col gap-6 w-full ">
            <div className="flex flex-col md:flex-row gap-6">
            {/* Combo de servicios */}
            <div className="flex-1">
                <label className="block mb-2 font-medium text-secondary ">
                Servicios
                </label>
                <select
                className="w-full border rounded px-3 py-2 cursor-pointer"
                value={ servicio}
                onChange={e => setServicio(e.target.value)}
                >
                {(tab === "PRECENSIAL" ? serviciosPresencial : serviciosVirtual).map((serv, idx) => (
                    <option key={idx} value={serv} >{serv}</option>
                ))}
                </select>
            </div>
            {/* Input de fecha y hora */}
            <div className="flex-1">
                <label className="block mb-2 font-medium text-secondary">
                Fecha y hora
                </label>
                <input
                type="datetime-local"
                className="w-full border rounded px-3 py-2 cursor-pointer"
                value={fecha}
                onChange={e => setFecha(e.target.value)}
                />
            </div>
            </div>
            <button
            className="bg-secondary text-tertiary px-6 py-2 rounded-lg w-fit hover:bg-opacity-90 transition-all cursor-pointer"
            onClick={handleSubmit}
            >
            Agendar
            </button>
        </form>
      </div>
    </section>
  );
};
