import { Link } from "react-router-dom";
import { useContext, useRef, useState } from "react";
import { HistoriaContext } from "../../context/HistoriaCli";
import { DiagnosticoContext } from "../../context/Diagnostico.Context";


export const PacientesTable = ({id_paciente, paciente}) => {
  const dialogRef = useRef(null);
  const {getHistoriaClinica, historiaClinica} = useContext(HistoriaContext);
  const {getDiagnosticosPorCedula, diagnosticosPorCedula} = useContext(DiagnosticoContext);


  const abrirModal = () => {
    getHistoriaClinica(paciente.cedula);
    getDiagnosticosPorCedula(paciente.cedula);
    dialogRef.current.showModal();
  };

  const cerrarModal = () => {
    dialogRef.current.close();
  };
    
  return (
    <tr key={id_paciente} className="border-b last:border-b-0 hover:bg-gray-50">
    <td className="w-1/5 py-2 px-4">{paciente.nombre}</td>
    <td className="w-1/5 py-2 px-4 text-gray-700">{paciente.fechaNacimiento}</td>
    <td className="w-1/5 py-2 px-4">
      <span className="text-gray-700">{paciente.telefono}</span>
    </td>
    <td className="w-1/5 py-2 px-4">
      <span className="'text-gray-700'">{paciente.email}</span>
    </td>
    <td className="w-1/5 py-2 px-4">
      <div className="flex gap-2">
        <button className="bg-[#f5f6fa] p-2 rounded-full hover:bg-gray-200 transition cursor-pointer" title="Ver Historial"
        onClick={abrirModal}
        >
          <span className="text-gray-700 text-sm">Ver Historial Clínico</span>
        </button>
      </div>

      <dialog ref={dialogRef} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-8 shadow-xl w-[900px] max-w-[90vw]"
      closedby="any">
        <div className="flex flex-col">
          {/* Cabecera del historial */}
          <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Foto del paciente" className="w-20 h-20 rounded-full object-cover" />
            <div>
              <h2 className="text-2xl font-bold text-gray-800">{paciente.nombre}</h2>
              <p className="text-sm text-gray-500">ID del Paciente: {paciente.id_paciente}</p>
              <p className="text-sm text-gray-500">Fecha de Nacimiento: {paciente.fechaNacimiento}</p>
            </div>
          </div>

          {/* Fecha de Creación del Registro */}
          <div className="py-4">
            <p className="text-sm text-gray-500">Fecha de creación : {historiaClinica.fecha_creacion}</p>
          </div>

          {/* Información Personal */}
          <div className="mt-2">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Información Personal</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-sm">
              <div>
                <p className="font-medium text-gray-500">Cédula</p>
                <p className="text-gray-800">{paciente.cedula || 'N/A'}</p>
              </div>
              <div>
                <p className="font-medium text-gray-500">Nombre Completo</p>
                <p className="text-gray-800">{paciente.nombre}</p>
              </div>
              <div>
                <p className="font-medium text-gray-500">Número de Teléfono</p>
                <p className="text-gray-800">{paciente.telefono}</p>
              </div>
              <div>
                <p className="font-medium text-gray-500">Correo Electrónico</p>
                <p className="text-gray-800">{paciente.email}</p>
              </div>
            </div>
          </div>

         
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Diagnósticos</h3>
            <div id="table-scroll" className="max-h-60 overflow-y-auto border rounded-lg">
              <table className="min-w-full table-fixed">
                <thead className="bg-gray-50 sticky top-0">
                  <tr className="border-b">
                    <th className="w-1/4 py-2 px-4 text-left font-medium text-gray-600">Fecha</th>
                    <th className="w-1/4 py-2 px-4 text-left font-medium text-gray-600">Observación</th>
                    <th className="w-1/4 py-2 px-4 text-left font-medium text-gray-600">Tratamiento</th>
                    <th className="w-1/4 py-2 px-4 text-left font-medium text-gray-600">Notas</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {diagnosticosPorCedula.map((diag) => (
                    <tr key={diag.diagnostico.id_diagnostico}>
                      <td className="py-2 px-4 text-sm text-gray-700">{diag.diagnostico.fecha}</td>
                      <td className="py-2 px-4 text-sm text-gray-700">{diag.diagnostico.observaciones}</td>
                      <td className="py-2 px-4 text-sm text-gray-700">{diag.diagnostico.tratamiento}</td>
                      <td className="py-2 px-4 text-sm text-gray-700">{diag.diagnostico.nota_corta}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex justify-end items-center mt-8 pt-4 border-t border-gray-200">
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">Editar Registro</button>
          </div>
        </div>
      </dialog>
    </td>
  </tr>
  )
}
