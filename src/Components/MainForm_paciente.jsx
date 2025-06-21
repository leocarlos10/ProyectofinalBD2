import React, { useContext, useState, useEffect } from 'react';
import { CitaContext } from '../context/Cita.Context';
import { useNavigate } from 'react-router-dom';

export const MainForm_paciente = () => {
  
  const { actualizarCita, solicitarCita, cita } = useContext(CitaContext);
  const navigate = useNavigate();
  const [datos, setDatos] = useState({
    motivoC:  '',
    fechaU_Valoracion:  '',
    remitente:  '',
  });

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  /**
   * @description: Envia la cita al backend, siempre y cuando los campos
   * de este formulario esten llenos. si no no hace nada.
   * porque quiere decir que el cambio en cita fue en el otro form
   * el de solcitar cita.
   * */ 
  useEffect(() => {
    const enviarCita = async () => {
      // Verificamos que todos los campos necesarios estén presentes
      if (cita.motivoC && cita.fechaU_Valoracion && cita.remitente) {
        const respuesta = await solicitarCita();
        if (respuesta) {
          alert('Cita registrada correctamente');
          navigate('/');
        } else {
          alert('Error al registrar la cita');
        }
      }
    };
    enviarCita();
  }, [cita]);



  const handleSubmit = async  (e) => {
    e.preventDefault();
    const datos_completos = {
      ...datos,
      cedula_usuario: localStorage.getItem('cedulaU')
    }
      actualizarCita(datos_completos);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <form
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
      >
        <div>
          <label className="block text-gray-700 mb-1">Motivo de la consulta</label>
          <textarea
            name="motivoC"
            value={datos.motivoC}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            rows={2}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Fecha de la última valoración</label>
          <input
            type="date"
            name="fechaU_Valoracion"
            value={datos.fechaU_Valoracion}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">Remitente</label>
          <textarea
            name="remitente"
            value={datos.remitente}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
            rows={2}
            required
          />
        </div>
        <button
          className="w-full bg-gray-800 text-white py-2 rounded-md cursor-pointer hover:bg-gray-900 transition-colors"
          onClick={handleSubmit}
        >
          Registrar
        </button>
      </form>
    </div>
  );
}
