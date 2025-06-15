import { useContext, useEffect, useState } from "react";
import { UsuarioContext } from "../context/Usuario.Context";

export const MainCitasAgendadas = () => {

    const {listaCitas, loading, error, getCitasAgendadas} = useContext(UsuarioContext);
    const [nombrePaciente, setNombrePaciente] = useState("");

    useEffect(()=>{
        getCitasAgendadas(localStorage.getItem("cedulaU"));
        setNombrePaciente(localStorage.getItem("nombreU"));
    },[])

    const cont_citas = listaCitas.map((cita)=>{
        return(
            <tr key={cita.id_cita}>
                <td className="w-1/5 px-6 py-4 whitespace-nowrap">{nombrePaciente}</td>
                <td className="w-1/5 px-6 py-4 whitespace-nowrap text-blue-500">{cita.fechaHora}</td>
                <td className="w-1/5 px-6 py-4 whitespace-nowrap text-blue-500">{cita.tipo_cita}</td>
                <td className="w-1/5 px-6 py-4 whitespace-nowrap text-blue-500">{cita.estado}</td>
                <td className="w-1/5 px-6 py-4 whitespace-nowrap">{cita.servicio}</td>
              </tr>
        )
    })

  return (
    <div className="p-20">
      {/* Tabla de cabecera */}
      <table className="min-w-full table-fixed divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="w-1/5 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nombre del Paciente
            </th>
            <th className="w-1/5 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fecha
            </th>
            <th className="w-1/5 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tipo
            </th>
            <th className="w-1/5 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Estado
            </th>
            <th className="w-1/5 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Servicio
            </th>
          </tr>
        </thead>
      </table>
      {/* Contenedor con scroll solo para el contenido */}
      <div className="max-h-96 overflow-y-auto scrollbar-hide">
        <table className="min-w-full table-fixed divide-y divide-gray-200">
          <tbody className="bg-white divide-y divide-gray-200">
          {
                error ? 
                    <h2>Tenemos un Error, por favor ingrese mas tarde</h2> 
                : !loading ?
                  <div className="spinner-container">
                    <div className="spinner"></div>
                  </div>
                : listaCitas.length > 0 ? 
                  cont_citas
                :
                  <h2>No hay citas agendadas</h2>
              }
          </tbody>
        </table>
      </div>
    </div>
  );
}
