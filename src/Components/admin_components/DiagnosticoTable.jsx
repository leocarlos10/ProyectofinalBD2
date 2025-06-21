
import deleteIcon from '../../assets/delete.svg';



export const DiagnosticoTable = ({id_diagnostico, object, eliminardiagnostico, getDiagnosticos}) => {
    
    const eliminarDiagnostico = async() => {
        const respuesta = await eliminardiagnostico(object.diagnostico.id_diagnostico);
        if(respuesta){
            getDiagnosticos();
        }else{
            alert("Error al eliminar el diagnostico");
        }
    }

  return (
        <tr key={id_diagnostico} className="border-b last:border-b-0 hover:bg-gray-50">
        <td className="w-1/6 py-2 px-4 text-center ">{object.usuario.nombre} {object.usuario.apellido}</td>
        <td className="w-1/6 py-2 px-4 text-center  text-[#7c3aed] hover:underline cursor-pointer">{object.diagnostico.observaciones}</td>
        <td className="w-1/6 py-2 px-4 text-center ">
        <span className="text-gray-700">{object.diagnostico.tratamiento}</span>
        </td>
        <td className="w-1/6 py-2 px-4 text-center  ">
        <span className='text-gray-700'>{object.diagnostico.fecha}</span>
        </td>
        <td className=" w-1/6  px-4  ">
        <div className=" flex justify-center  py-2  ">
            <button className="bg-[#f5f6fa] p-2 rounded-full hover:bg-gray-200 transition cursor-pointer" title="Eliminar"
            onClick={eliminarDiagnostico}>
            <img src={deleteIcon} alt="icono de eliminar" />
            </button>
        </div>
        </td>
    </tr>

    
  )
}
