import { useContext } from "react";
import { CitaContext } from "../../context/Cita.Context";
import { useEffect } from "react";
import { DiagnosticoContext } from "../../context/Diagnostico.Context";

export function DashboardMain() {

  const {citasProximas, getCitasProximas, loading, error} = useContext(CitaContext);
  const {diagnosticosRecientes, getDiagnosticosrecientes, loadingD, errorD} = useContext(DiagnosticoContext);

  useEffect(() => {
    getCitasProximas();
    getDiagnosticosrecientes();
  }, []);



  const cont_citas = citasProximas.map((cita) => (
    <tr key={cita.id_cita} className="border-b last:border-b-0 hover:bg-gray-50">
      <td className="w-1/4 py-2 px-4 text-center">{cita.cedulaUsuario}</td>
      <td className="w-1/4 py-2 px-4 text-center">
        <a href="#" className="text-[#7c3aed] hover:underline">{cita.fechaHora}</a>
      </td>
      <td className="w-1/4 py-2 px-4 text-center">{cita.servicio}</td>
      <td className="w-1/4 py-2 px-4 text-center">
        <span className="text-[#7c3aed] cursor-pointer hover:underline">{cita.estado}</span>
      </td>
    </tr>
  ))

  const cont_diagnostico = diagnosticosRecientes?.map((object) => (
    <tr key={object.diagnostico.id_diagnostico} className="border-b last:border-b-0 hover:bg-gray-50">
      <td className="w-1/3 py-2 px-4 text-center">
        {`${object.usuario.nombre} ${object.usuario.apellido}`}
      </td>
      <td className="w-1/3 py-2 px-4 text-center">
        <a href="#" className="text-[#7c3aed] hover:underline">
          {object.diagnostico.observaciones}
        </a>
      </td>
      <td className="w-1/3 py-2 px-4 text-center">
        {object.diagnostico.fecha}
      </td>
    </tr>
  ));


  return (
    <div className="w-full ">
      <div className="bg-[#b692d6] rounded-t-lg px-8 py-4 mb-8">
        <h1 className="text-2xl font-bold text-white">Panel</h1>
      </div>
      <div className="px-8  p-x-10 p-y-10">
        {/* Próximas Citas */}
        <h2 className="text-xl font-semibold mb-2">Próximas Citas</h2>
        {/* Tabla de cabecera */}
        <table className="min-w-full table-fixed divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr className="border-b">
              <th className="w-1/4 py-3 px-4 font-medium text-gray-700">Cedula del Paciente</th>
              <th className="w-1/4 py-3 px-4 font-medium text-gray-700">Fecha de la Cita</th>
              <th className="w-1/4 py-3 px-4 font-medium text-gray-700">servicio</th>
              <th className="w-1/4 py-3 px-4 font-medium text-gray-700">estado</th>
            </tr>
          </thead>
        </table>
        {/* Contenedor con scroll */}
        <div className="max-h-96 overflow-y-auto scrollbar-hide" id="table-scroll">
          <table className="min-w-full table-fixed divide-y divide-gray-200">
            <tbody>
            {
                error ? 
                    <h2>Tenemos un Error, por favor ingrese mas tarde</h2> 
                : !loading ?
                  <div className="spinner-container">
                    <div className="spinner"></div>
                  </div>
                : citasProximas.length > 0 ? 
                  cont_citas
                :
                  <h2>No hay citas agendadas</h2>
              }
            </tbody>
          </table>
        </div>

        {/* Diagnósticos Recientes */}
        <h2 className="text-xl font-semibold mb-2">Diagnósticos Recientes</h2>
        {/* Tabla de cabecera */}
        <table className="min-w-full table-fixed divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr className="border-b">
              <th className="w-1/3 py-3 px-4 font-medium text-gray-700">Nombre del Paciente</th>
              <th className="w-1/3 py-3 px-4 font-medium text-gray-700">Diagnóstico</th>
              <th className="w-1/3 py-3 px-4 font-medium text-gray-700">Fecha</th>
            </tr>
          </thead>
        </table>
        {/* Contenedor con scroll */}
        <div className="max-h-96 overflow-y-auto scrollbar-hide" id="table-scroll">
          <table className="min-w-full table-fixed divide-y divide-gray-200">
            <tbody>
            {
                errorD ? 
                    <h2>Tenemos un Error, por favor ingrese mas tarde</h2> 
                : !loadingD ?
                  <div className="spinner-container">
                    <div className="spinner"></div>
                  </div>
                : diagnosticosRecientes.length > 0 ?
                  cont_diagnostico
                :
                  <h2>No hay Diagnosticos</h2>
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 