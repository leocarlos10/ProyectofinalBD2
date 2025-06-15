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

    const getHeaders_token = ()=> {
        const token = localStorage.getItem('swtU');
        return {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json',
            'Authorization' : `Bearer ${token}`
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

    return(
        <CitaContext.Provider value={{
            cita,
            actualizarCita,
            solicitarCita
        }}>
            {children}
        </CitaContext.Provider>
    )
}

export {CitaContext, CitaProvider}