import { useState } from 'react';
import deleteIcon from '../../assets/delete.svg';


export const CitasTable = ({id_cita, object, eliminarcita, getCitas, ActualizarCita}) => {

  const [newCita, setNewCita] = useState(object.cita)


    const eliminarCita = async() => {
        const respuesta = await eliminarcita(object.cita.id_cita);
        if(respuesta){
            getCitas();
        }else{
            alert("Error al eliminar la cita");
        }
    }

    /* El cambio de estado de la cita 
      se debe realizar en 3 pasos para evitar problemas 
      en la actualizacion de la cita
    */
    const cambiarEstado = async (e) => {
      
      const nuevoEstado = e.target.value;
      
      const citaActualizada = {
        ...newCita,
        estado : nuevoEstado
      };
      
      setNewCita(citaActualizada);
      
      try {
        const respuesta = await ActualizarCita(citaActualizada);
        if(respuesta){
          getCitas();
        } else {
          alert("Error al actualizar el estado de la cita");
        }
      } catch (error) {
        console.error("Error al actualizar cita:", error);
        alert("Error al actualizar el estado de la cita");
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
      
        <select value={object.cita.estado} className={
          object.cita.estado === 'pendiente' ? 'text-gray-700' :
          object.cita.estado === 'realizada' ? 'text-green-600' :
          object.cita.estado === 'reprogramada' ? 'text-yellow-600' :
          object.cita.estado === 'cancelada' ? 'text-red-600' :
          'text-gray-700'
        } id='estado' onChange={cambiarEstado} >
          <option value="pendiente" className='text-gray-700' >Pendiente</option>
          <option value="realizada" className='text-green-600' >Realizada</option>
          <option value="reprogramada" className='text-yellow-600' >Reprogramada</option>
          <option value="cancelada" className='text-red-600' >Cancelada</option>
        </select>
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
