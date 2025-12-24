import { createContext, useState } from "react";

const CitaContext = createContext();

function CitaProvider({children}){

    const [cita, setCita] = useState(() => {
        const savedCita = localStorage.getItem('citaData');
        return savedCita ? JSON.parse(savedCita) : {
            fechaHora: '',
            estado: '',
            motivoC: '',
            remitente: '',
            fechaU_Valoracion: '',
            cedula_usuario: '',
            tipo_cita: '',
            servicio: '',
        };
    });

    const [citasProximas, setCitasProximas] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    const [ListaCitas, setListaCitas] = useState([]);

    const getHeaders_token = ()=> {
        const token = localStorage.getItem('swtU');
        return {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    }

    const getHeaders = ()=> {

        return {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json',
        }
    }


    const actualizarCita = (datos) => {
        setCita((prevCita) => {
            const newCita = {
                ...prevCita, 
                ...datos
            };
            localStorage.setItem('citaData', JSON.stringify(newCita));
            return newCita;
        });
    };

    const solicitarCita = async ()=>{
        console.log(cita);
        try {
            const request = await fetch('/api/citas/registrar', {
                method : 'POST',
                headers : getHeaders_token(),
                body : JSON.stringify(cita)
            })

            let respuesta = false;
            const response = await request.json();
            if(request.status == 200){
                localStorage.removeItem('citaData');
                console.log(response.mensaje);
                respuesta = true;
            } else if (request.status == 400){
                console.log(response.mensaje);
                respuesta = false;
            } else if (request.status == 500){
                console.log(response.mensaje);
                respuesta = false;
            } else if (!request.ok){
                console.log("Error de cualquier tipo HTTP");
                respuesta = false;
            }
            return respuesta;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    const getCitasProximas = async () => {
        try {
            const request = await fetch("/api/panel/citas-proximas", {
                method : "GET",
                headers : getHeaders()
            })

            const response = await request.json();

            if(request.status == 200){
                setCitasProximas(response.citas);
                setLoading(true);
                setError(false);
            }else if(request.status == 404){
                console.log(response.mensaje);
                setLoading(true);
            }else if(request.status == 500){
                console.log(response.mensaje);
                setLoading(true);
            }else if(!request.ok){
                console.log("Error de cualquier tipo HTTP");
                setLoading(true);
            }
            
        } catch (error) {
            console.log(error);
            setError(true);
        }
    }

    const getCitas = async () => {
        try {
            const request = await fetch("/api/citas/con-usuario", {
                method : "GET",
                headers : getHeaders()
            })

            const response = await request.json();

            if(request.status == 200){
                setListaCitas(response.citas);
                setLoading(true);
                setError(false);
            }else if(request.status == 404){
                console.log(response.mensaje);
                setLoading(true);
            }else if(request.status == 500){
                console.log(response.mensaje);
                setLoading(true);
            }else if(!request.ok){
                console.log("Error de cualquier tipo HTTP");
                setLoading(true);
            }
        } catch (error) {
            console.log(error);
            setError(true);
        }
    }

    const eliminarCita = async (id_cita) => {
        try {
            const request = await fetch(`/api/citas/eliminar/${id_cita}`, {
                method : "DELETE",
                headers : getHeaders()
            })

            const response = await request.json();
            let respuesta = false;
            if(request.status == 200){
                console.log(response.mensaje);
                respuesta = response.respuesta;
            }else if(request.status == 404){
                console.log(response.mensaje);
                respuesta = response.respuesta;
            }else if(request.status == 500){
                console.log(response.mensaje);
                respuesta = response.respuesta;
            }else if(!request.ok){
                console.log("Error de cualquier tipo HTTP");
                respuesta = response.respuesta;
            }
            return respuesta;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    const ActualizarCita = async (cita) => {
        try {

            const request = await fetch("/api/citas/actualizar", {
                method : "PUT",
                headers : getHeaders(),
                body : JSON.stringify(cita)
            })

            const response = await request.json();
            let respuesta = false;
            if(request.status == 200){
                respuesta = response.respuesta;
            }else if(request.status == 400){
                console.log(response.mensaje);
                respuesta = response.respuesta;
            }else if(request.status == 500){
                console.log(response.mensaje);
                respuesta = response.respuesta;
            }else if(!request.ok){
                console.log("Error de cualquier tipo HTTP");
                respuesta = response.respuesta;
            }
            return respuesta;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    return(
        <CitaContext.Provider value={{
            cita,
            actualizarCita,
            solicitarCita,
            citasProximas,
            getCitasProximas,
            loading,
            error,
            ListaCitas,
            getCitas,
            eliminarCita,
            ActualizarCita
        }}>
            {children}
        </CitaContext.Provider>
    )
}

export {CitaContext, CitaProvider}