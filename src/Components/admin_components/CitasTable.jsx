
import deleteIcon from '../../assets/delete.svg';

/* "citas": [
    {
      "cita": {
        "id_cita": 25,
        "fechaHora": "2025-06-14T19:28:00",
        "estado": "pendiente",
        "motivoC": "nutricional",
        "remitente": "leo",
        "fechaU_Valoracion": "2025-06-14",
        "cedula_usuario": "1001",
        "tipo_cita": "PRECENSIAL",
        "servicio": null
      },
      "usuario": {
        "cedula": "1001",
        "nombre": "Ana",
        "apellido": "García",
        "correo": "ana@example.com",
        "telefono": "300000001",
        "ciudad": "Montería",
        "pass": null,
        "fechaNacimiento": "1990-03-15"
      }
    }*/

export const CitasTable = ({id_cita, object, eliminarcita, getCitas}) => {

    const eliminarCita = async() => {
        const respuesta = await eliminarcita(cita.id_cita);
        if(respuesta){
            getCitas();
        }else{
            alert("Error al eliminar la cita");
        }
    }

  return (
    <tr key={id_cita} className="border-b last:border-b-0 hover:bg-gray-50">
      <td className="w-1/5 py-2 px-4 text-center">{object.usuario.nombre}</td>
      <td className="w-1/5 py-2 px-4 text-center text-[#7c3aed] hover:underline cursor-pointer">{object.cita.fechaHora}</td>
      <td className="w-1/5 py-2 px-4 text-center">
        <span className="text-gray-700 ">{object.cita.servicio}</span>
      </td>
      <td className="w-1/5 py-2 px-4 text-center">
        <span className={
          object.cita.estado === 'pendiente' ? 'text-gray-700' :
          object.cita.estado === 'realizada' ? 'text-green-600' :
          object.cita.estado === 'reprogramada' ? 'text-yellow-600' :
          object.cita.estado === 'cancelada' ? 'text-red-600' :
          'text-gray-700 '
        }>{object.cita.estado}</span>
      </td>
      <td className="w-1/5 py-2 px-4">
        <div className="flex gap-2 justify-center">
          <button className="bg-[#f5f6fa] p-2 rounded-full hover:bg-gray-200 transition cursor-pointer" title="Eliminar"
          onClick={eliminarCita}>
            <img src={deleteIcon} alt="icono de eliminar" />
          </button>
        </div>
      </td>
    </tr>
  )
}
