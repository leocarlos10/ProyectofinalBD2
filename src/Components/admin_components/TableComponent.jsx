
import { citas } from './datos'
import editIcon from '../../assets/edit.svg'; // Asegúrate de tener estos SVGs en assets
import deleteIcon from '../../assets/delete.svg';

export const TableComponent = ({pagina}) => {
  return (
    <div className="px-8 pb-8">
    {/* Barra de búsqueda */}
    <div className="flex items-center bg-[#f5f6fa] rounded-lg px-4 py-2 mb-6 w-full max-w-xl">
      <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
      <input type="text" placeholder="Buscar" className="bg-transparent outline-none w-full text-gray-700" />
    </div>
    {/* Tabla de citas */}
    <div className="bg-white rounded-lg border border-gray-200 overflow-x-auto">
      <table className="min-w-full text-left">
        <thead>
          <tr className="border-b">
            {
                pagina === "citas" ?
                (
                    <>
                        <th className="py-3 px-4 font-medium text-gray-700">Nombre del Paciente</th>
                        <th className="py-3 px-4 font-medium text-gray-700">Fecha</th>
                        <th className="py-3 px-4 font-medium text-gray-700">Tipo</th>
                        <th className="py-3 px-4 font-medium text-gray-700">Estado</th>
                        <th className="py-3 px-4 font-medium text-gray-700">Acciones</th>
                    </>
                )
                : pagina === "pacientes" ?
                (
                    <>
                        <th className="py-3 px-4 font-medium text-gray-700">Nombre del Paciente</th>
                        <th className="py-3 px-4 font-medium text-gray-700">Fecha de nacimiento</th>
                        <th className="py-3 px-4 font-medium text-gray-700">Teléfono</th>
                        <th className="py-3 px-4 font-medium text-gray-700">Email</th>
                        <th className="py-3 px-4 font-medium text-gray-700">Acciones</th>
                    </>
                )
                :pagina === "diagnosticos" &&
                (
                    <>
                        <th className="py-3 px-4 font-medium text-gray-700"> Paciente</th>
                        <th className="py-3 px-4 font-medium text-gray-700">Observacion</th>
                        <th className="py-3 px-4 font-medium text-gray-700">fecha</th>
                        <th className="py-3 px-4 font-medium text-gray-700">Acciones</th>
                    </>
                )
            }
          </tr>
        </thead>
        <tbody>
          {citas.map((cita, idx) => (
            <tr key={idx} className="border-b last:border-b-0 hover:bg-gray-50">
              <td className="py-2 px-4">{cita.nombre}</td>
              <td className="py-2 px-4 text-[#7c3aed] hover:underline cursor-pointer">{cita.fecha}</td>
              <td className="py-2 px-4">
                <span className={cita.tipo === 'Presencial' ? 'text-[#7c3aed]' : 'text-gray-700'}>{cita.tipo}</span>
              </td>
              <td className="py-2 px-4">
                <span className={
                  cita.estado === 'pendiente' ? 'text-gray-700' :
                  cita.estado === 'realizada' ? 'text-green-600' :
                  cita.estado === 'reprogramada' ? 'text-yellow-600' :
                  cita.estado === 'cancelada' ? 'text-red-600' :
                  'text-gray-700'
                }>{cita.estado}</span>
              </td>
              <td className="py-2 px-4">
                <div className="flex gap-2">
                  <button className="bg-[#f5f6fa] p-2 rounded-full hover:bg-gray-200 transition cursor-pointer" title="Editar">
                    {/* Si tienes el SVG en assets, usa img src, si no, usa un SVG inline */}
                   <img src={editIcon} alt="icono de editar" />
                  </button>
                  <button className="bg-[#f5f6fa] p-2 rounded-full hover:bg-gray-200 transition cursor-pointer" title="Eliminar">
                   <img src={deleteIcon} alt="icono de eliminar" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}
