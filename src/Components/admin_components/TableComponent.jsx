import { useContext, useEffect, useRef, useState } from 'react';
import { CitaContext } from '../../context/Cita.Context';
import { CitasTable } from './CitasTable';
import { UsuarioContext } from '../../context/Usuario.Context';
import { PacientesTable } from './PacientesTable';
import { DiagnosticoContext } from '../../context/Diagnostico.Context';
import { DiagnosticoTable } from './DiagnosticoTable';
import { HistoriaContext } from '../../context/HistoriaCli';

/* 
private String cedulaUsuario;
    private String tratamiento;
    private String observaciones;
    private String notaCorta;
    private String notaLarga;
    private Date fecha;
*/


export const TableComponent = ({pagina}) => {
  const {ListaCitas, getCitas, loading, error, eliminarCita, ActualizarCita} = useContext(CitaContext);
  const {listaPacientes, getPacientes, loadingP, errorP} = useContext(UsuarioContext);
  const {diagnosticos, getDiagnosticos, loadingD2, errorD2, eliminarDiagnostico, crearDiagnostico} = useContext(DiagnosticoContext);
  const dialogRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [newDiagnostico, setNewDiagnostico] = useState({
    cedulaUsuario: "",
    tratamiento: "",
    observaciones: "",
    notaCorta: "",
    notaLarga: "",
    fecha: new Date().toISOString().split('T')[0]
  });

  

  const abrirModal = () =>{
    dialogRef.current.showModal();
  }

  const cerrarModal = () =>{
    dialogRef.current.close();
  }

  /* como estamos obteniendo datos de un metodo que es asincrono, debemos usar async await */
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const estaVacio = Object.values(newDiagnostico).some(valor => valor === "" || valor === null);
    if(!estaVacio){
      const respuesta = await crearDiagnostico(newDiagnostico);
      if(respuesta){
        cerrarModal();
        setNewDiagnostico({
          cedulaUsuario: "",
          tratamiento: "",
          observaciones: "",
          notaCorta: "",
          notaLarga: "",
          fecha: new Date().toISOString().split('T')[0]
        });
        getDiagnosticos();
      }else {
        console.log("Error al crear el diagnostico");
      }

    }else{
      alert("Todos los campos son requeridos");
    }
   
  }

  const handleChange = (e) =>{
    setNewDiagnostico({
      ...newDiagnostico,
      [e.target.name]: e.target.value
    })
  }

  useEffect(()=>{
    getCitas();
    getPacientes();
    getDiagnosticos();
  },[])

  const lowercasedSearchTerm = searchTerm.toLowerCase();

  const filteredCitas = ListaCitas.filter(object =>
    object.usuario.nombre.toLowerCase().includes(lowercasedSearchTerm) ||
    (object.cita.servicio && object.cita.servicio.toLowerCase().includes(lowercasedSearchTerm)) ||
    object.cita.estado.toLowerCase().includes(lowercasedSearchTerm)
  );

  const filteredPacientes = listaPacientes.filter(paciente =>
    paciente.nombre.toLowerCase().includes(lowercasedSearchTerm) ||
    paciente.email.toLowerCase().includes(lowercasedSearchTerm) ||
    paciente.telefono.toLowerCase().includes(lowercasedSearchTerm)
  );

  const filteredDiagnosticos = diagnosticos.filter(object =>
    (object.usuario.nombre && object.usuario.nombre.toLowerCase().includes(lowercasedSearchTerm)) ||
    (object.diagnostico.observacion && object.diagnostico.observacion.toLowerCase().includes(lowercasedSearchTerm)) ||
    (object.diagnostico.tratamiento && object.diagnostico.tratamiento.toLowerCase().includes(lowercasedSearchTerm))
  );

  const contenido_citas = filteredCitas.map((object) => {
    return (
      <CitasTable key={object.cita.id_cita} object={object} eliminarcita={eliminarCita}  getCitas={getCitas} ActualizarCita={ActualizarCita} />
    )
  });

  const contenido_pacientes = filteredPacientes.map((paciente)=>{
    return (
      <PacientesTable id_paciente = {paciente.id_paciente} paciente = {paciente}  />
    )
  })

  const contenido_diagnosticos = filteredDiagnosticos.map((object)=>{
    return (
        <DiagnosticoTable id_diagnostico = {object.diagnostico.id_diagnostico} object = {object}  eliminardiagnostico = {eliminarDiagnostico} getDiagnosticos = {getDiagnosticos} />
    )
  });


  return (
    <div className="px-8 pb-8">
      {/* Barra de búsqueda */}
      <div className="flex items-center bg-[#f5f6fa] rounded-lg px-4 py-2 mb-6 w-full max-w-xl">
        <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
        <input 
          type="text" 
          placeholder="Buscar..." 
          className="bg-transparent outline-none w-full text-gray-700"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Tabla de cabecera */}
      <table className="min-w-full table-fixed divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr className="border-b">
            {pagina === "citas" ? (
              <>
                <th className="w-1/5 py-3 px-4 font-medium text-gray-700">Nombre del Paciente</th>
                <th className="w-1/5 py-3 px-4 font-medium text-gray-700">Fecha y hora</th>
                <th className="w-1/5 py-3 px-4 font-medium text-gray-700">servicio</th>
                <th className="w-1/5 py-3 px-4 font-medium text-gray-700">Estado</th>
                <th className="w-1/5 py-3 px-4 font-medium text-gray-700">Acciones</th>
              </>
            ) : pagina === "pacientes" ? (
              <>
                <th className="w-1/5 py-3 px-4 font-medium text-gray-700">Nombre del Paciente</th>
                <th className="w-1/5 py-3 px-4 font-medium text-gray-700">Fecha de nacimiento</th>
                <th className="w-1/5 py-3 px-4 font-medium text-gray-700">Teléfono</th>
                <th className="w-1/5 py-3 px-4 font-medium text-gray-700">Email</th>
                <th className="w-1/5 py-3 px-4 font-medium text-gray-700">Acciones</th>
              </>
            ) : pagina === "diagnosticos" && (
              <>
                <th className="w-1/6 py-3 px-4 font-medium text-gray-700 text-center">Paciente</th>
                <th className="w-1/6 py-3 px-4 font-medium text-gray-700">Observacion</th>
                <th className="w-1/6 py-3 px-4 font-medium text-gray-700">Tratamiento</th>
                <th className="w-1/6 py-3 px-4 font-medium text-gray-700">fecha</th>
                <th className="w-1/6 py-3 px-4 font-medium text-gray-700">Acciones</th>
              </>
            )}
          </tr>
        </thead>
      </table>

      {/* Contenedor con scroll */}
      <div className="max-h-96 overflow-y-auto scrollbar-hide" id="table-scroll">
        <table className="min-w-full table-fixed divide-y divide-gray-200">
          <tbody>
            {
            pagina === "citas" ? 
            (
                error ? 
                    <h2>Tenemos un Error, por favor ingrese mas tarde</h2> 
                : !loading ?
                  <div className="spinner-container">
                    <div className="spinner"></div>
                  </div>
                : filteredCitas.length > 0 ? 
                  contenido_citas
                :
                  <h2 className='text-center text-gray-700'>No hay citas que coincidan con la búsqueda</h2>
            )
            : pagina === "pacientes" ?
            (

                errorP ? 
                    <h2>Tenemos un Error, por favor ingrese mas tarde</h2> 
                : !loadingP ?
                  <div className="spinner-container">
                    <div className="spinner"></div>
                  </div>
                : filteredPacientes.length > 0 ? 
                    contenido_pacientes
                :
                  <h2 className='text-center text-gray-700'>No hay pacientes que coincidan con la búsqueda</h2>
              
            )
            : pagina === "diagnosticos" && 
            (
              errorD2 ? 
                    <h2>Tenemos un Error, por favor ingrese mas tarde</h2> 
                : !loadingD2 ?
                  <div className="spinner-container">
                    <div className="spinner"></div>
                  </div>
                : filteredDiagnosticos.length > 0 ?
                  <div>
                    {contenido_diagnosticos}
                    <div className='w-full flex justify-end mt-5'>
                      <button className='bg-secondary text-white p-2 rounded-md cursor-pointer'
                      onClick={abrirModal}
                      >
                        añadir nuevo diagnostico
                      </button>
                      <dialog 
                        ref={dialogRef} 
                        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                                   bg-white rounded-lg p-4 shadow-xl 
                                   w-[500px] max-w-[90vw] 
                                   border border-gray-200"
                        closedby = "any"
                        id='table-scroll' // atributo para cerrar el modal con el click fuera del modal
                      >
                        <div className="flex flex-col gap-4 ">
                          <h2 className="text-xl font-bold text-gray-800">Añadir nuevo diagnostico</h2>
                          <form className='space-y-2'>
                            <div>
                              <label className="block text-gray-700 mb-1" htmlFor="cedulaUsuario">Cedula del Paciente</label>
                                <select name="cedulaUsuario" id="cedulaUsuario" className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200'
                                value={newDiagnostico.cedulaUsuario}
                                onChange={handleChange}
                                required
                                >
                                  {listaPacientes.map((paciente)=>(
                                    <option key={paciente.id_paciente} value={paciente.cedula}>{paciente.cedula} - {paciente.nombre} {paciente.apellido}</option>
                                  ))}
                                </select>
                            </div>
                          <div>
                            <label className="block text-gray-700 mb-1" htmlFor="tratamiento">Tratamiento</label>
                              <textarea
                                name="tratamiento"
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                value={newDiagnostico.tratamiento}
                                onChange={handleChange}
                                required
                              />
                          </div>
                          <div>
                            <label className="block text-gray-700 mb-1" htmlFor="observaciones">Observaciones</label>
                              <textarea
                                name="observaciones"
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                value={newDiagnostico.observaciones}
                                onChange={handleChange}
                                required
                              />
                          </div>
                          <div>
                            <label className="block text-gray-700 mb-1" htmlFor="notaCorta">descripcion Corta</label>
                              <input
                                name="notaCorta"
                                type="text"
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                value={newDiagnostico.notaCorta}
                                onChange={handleChange}
                                required
                              />
                          </div>
                          <div>
                            <label className="block text-gray-700 mb-1" htmlFor="notaLarga">descripcion Larga</label>
                              <textarea
                                name="notaLarga"
                                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                value={newDiagnostico.notaLarga}
                                onChange={handleChange}
                                required
                              />
                          </div>
                          </form>
                          
                          <div className="flex justify-end gap-2 ">
                            <button 
                              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors cursor-pointer"
                              onClick={cerrarModal}
                            >
                              Cancelar
                            </button>
                            <button 
                              className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-secondary/90 transition-colors cursor-pointer"
                              onClick={handleSubmit}
                            >
                              Guardar
                            </button>
                          </div>
                        </div>
                      </dialog>
                    </div>
                  </div>
                :
                  <h2 className='text-center text-gray-700'>No hay diagnósticos que coincidan con la búsqueda</h2>
            )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
