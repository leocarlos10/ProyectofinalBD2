

const citas = [
  {
    nombre: "Lucas Silva",
    fecha: "2024-07-20",
    hora: "10:00 AM",
    motivo: "Chequeo de Rutina",
    motivoLink: "#"
  },
  {
    nombre: "Sofía Castro",
    fecha: "2024-07-21",
    hora: "11:30 AM",
    motivo: "Vacunación",
    motivoLink: "#"
  },
  {
    nombre: "Mateo Herrera",
    fecha: "2024-07-22",
    hora: "09:00 AM",
    motivo: "Visita de Seguimiento",
    motivoLink: "#"
  },
];

const diagnosticos = [
  {
    nombre: "Isabella Torres",
    diagnostico: "Resfriado Común",
    diagnosticoLink: "#",
    fecha: "2024-07-15"
  },
  {
    nombre: "Daniel Pérez",
    diagnostico: "Infección de Oído",
    diagnosticoLink: "#",
    fecha: "2024-07-16"
  },
  {
    nombre: "Valentina Gómez",
    diagnostico: "Alergias",
    diagnosticoLink: "#",
    fecha: "2024-07-17"
  },
];

export function DashboardMain() {
  return (
    <div className="w-full">
      <div className="bg-[#b692d6] rounded-t-lg px-8 py-4 mb-8">
        <h1 className="text-2xl font-bold text-white">Panel</h1>
      </div>
      <div className="px-8">
        {/* Próximas Citas */}
        <h2 className="text-xl font-semibold mb-2">Próximas Citas</h2>
        <div className="bg-white rounded-lg border border-gray-200 mb-8 overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-4 font-medium text-gray-700">Nombre del Paciente</th>
                <th className="py-3 px-4 font-medium text-gray-700">Fecha de la Cita</th>
                <th className="py-3 px-4 font-medium text-gray-700">Hora</th>
                <th className="py-3 px-4 font-medium text-gray-700">Motivo</th>
              </tr>
            </thead>
            <tbody>
              {citas.map((cita, idx) => (
                <tr key={idx} className="border-b last:border-b-0 hover:bg-gray-50">
                  <td className="py-2 px-4">{cita.nombre}</td>
                  <td className="py-2 px-4">
                    <a href={cita.motivoLink} className="text-[#7c3aed] hover:underline">{cita.fecha}</a>
                  </td>
                  <td className="py-2 px-4">{cita.hora}</td>
                  <td className="py-2 px-4">
                    <span className="text-[#7c3aed] cursor-pointer hover:underline">{cita.motivo}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Diagnósticos Recientes */}
        <h2 className="text-xl font-semibold mb-2">Diagnósticos Recientes</h2>
        <div className="bg-white rounded-lg border border-gray-200 overflow-x-auto">
          <table className="min-w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-3 px-4 font-medium text-gray-700">Nombre del Paciente</th>
                <th className="py-3 px-4 font-medium text-gray-700">Diagnóstico</th>
                <th className="py-3 px-4 font-medium text-gray-700">Fecha</th>
              </tr>
            </thead>
            <tbody>
              {diagnosticos.map((dx, idx) => (
                <tr key={idx} className="border-b last:border-b-0 hover:bg-gray-50">
                  <td className="py-2 px-4">{dx.nombre}</td>
                  <td className="py-2 px-4">
                    <a href={dx.diagnosticoLink} className="text-[#7c3aed] hover:underline">{dx.diagnostico}</a>
                  </td>
                  <td className="py-2 px-4">{dx.fecha}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
} 