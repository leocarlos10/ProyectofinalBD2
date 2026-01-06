import { createContext, useState } from "react";

/* de aqui para abajo falta por revisar y ajustar al nuevo backend. */

const HistoriaContext = createContext();

function HistoriaProvider({children}){

    const [historiaClinica, setHistoriaClinica] = useState([]);

    const getHeaders = ()=> {
        return {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json',
        }
    }


    const getHistoriaClinica = async (cedula) => {
        
        try {
            const request = await fetch(`/api/historia-cli/obtener-historia-cli//${cedula}`, {
                method: "GET",
                headers: getHeaders()
            });

            const response = await request.json();

            if(request.status == 200){
                setHistoriaClinica(response.respuesta);
            }else if(request.status == 404){
                console.log(response.mensaje);
            }else if(request.status == 500){
                console.log(response.mensaje);
            }

            
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <HistoriaContext.Provider value={{
            historiaClinica,
            getHistoriaClinica
        }}>
            {children}
        </HistoriaContext.Provider>
    )
}

export {HistoriaContext, HistoriaProvider};