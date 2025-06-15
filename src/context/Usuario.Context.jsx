import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const UsuarioContext = createContext();
/* para el manejo del token y el nombre del usuario
    usamos variables de estado, ademas de cada que se hace una peticion 
    gurdar los datos en el localStorage para la persistencia de los datos.
    en caso de que el usuario recargue la pagina.
 */
 function UsuarioProvider({children}){
    const [nombreUsuario, setNombreUsuario] = useState(localStorage.getItem("nombreU"));
    const [token, setToken] = useState( localStorage.getItem("swtU"));
    const estaLogueado = !!token && !!nombreUsuario;
    const [listaCitas, setListaCitas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const getHeaders = ()=> {
        return {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json',
        }
        
    }


    const registrarUsuario = async (usuario)=>{
        try {

            const request = await fetch('/api/usuarios/registrar', {
                method : 'POST',
                headers : getHeaders(),
                body : JSON.stringify(usuario)
            })

            const response = await request.json();

            if(request.status == 200){
                console.log(response.mensaje);
            } else if (request.status == 400) {
                console.log(response.mensaje);
            } else if (request.status == 500) {
                console.log(response.mensaje);
            } else if (!request.ok) {
                console.log("Error de cualquier tipo HTTP");
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    const loginUsuario = async (usuario)=>{
        try {

            const request = await fetch('/api/usuarios/login', {
                method : 'POST',
                headers : getHeaders(),
                body : JSON.stringify(usuario)
            })

            const response = await request.json();

            if(request.status == 200){
                localStorage.setItem("swtU", response.token);
                localStorage.setItem("nombreU", response.nombre);
                localStorage.setItem("cedulaU", response.cedula);
                setToken(response.token);
                setNombreUsuario(response.nombre);
                navigate("/");
            } else if (request.status == 400) {
                alert(response.mensaje);
            } else if (request.status == 500) {
                alert(response.mensaje);
            } else if (!request.ok) {
                console.log("Error de cualquier tipo HTTP");
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    const getCitasAgendadas = async (cedula)=>{
        try {
            const request = await fetch(`/api/citas/get-cita-usuario/${cedula}`, {
                method : 'GET',
                headers : getHeaders()
            })

            const response = await request.json();

            if(request.status == 200){
                setListaCitas(response.citas);
                setLoading(true);
                setError(false);
            } else if (request.status == 404) {
                console.log(response.mensaje);
            } else if (request.status == 500) {
                console.log(response.mensaje);
            } else if (!request.ok) { 
                console.log("Error de cualquier tipo HTTP");
            }
        } catch (error) {
            console.log(error);
            setError(true);
        }
    }

    
    
    return(
        <UsuarioContext.Provider value={{
            registrarUsuario,
            loginUsuario,
            estaLogueado,
            nombreUsuario,
            getCitasAgendadas,
            listaCitas,
            loading,
            error
            }}>
            {children}
        </UsuarioContext.Provider>
    )
 }

 export {UsuarioContext, UsuarioProvider}