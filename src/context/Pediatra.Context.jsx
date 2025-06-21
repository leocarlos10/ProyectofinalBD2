import { createContext } from "react";

const PediatraContext = createContext();

 const PediatraProvider = ({children}) => {

    const loginPediatra = async (pediatra) => {
        
        const request =  await fetch("/api/pediatra/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(pediatra)
        })
        const response = await request.json();
        let respuesta = false;

        if(request.status == 200){
            console.log(response.mensaje);
            respuesta = response.respuesta;
        }else if(request.status == 404){
            console.log(response.mensaje);
            respuesta = response.respuesta;

        }else if (request.status == 500){
            console.log(response.mensaje);
            respuesta = response.respuesta;
        } else if (!request.ok){
            console.log("Error al iniciar sesión");
            respuesta =  false;
        }
        return respuesta;
    }
    return (
        <PediatraContext.Provider value={{
            loginPediatra
        }}>
            {children}
        </PediatraContext.Provider>
    )
}

export {PediatraContext, PediatraProvider}