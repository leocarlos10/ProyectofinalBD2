import { createContext } from "react";

const UsuarioContext = createContext();

 function UsuarioProvider({children}){

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

            const response = await response.json();

            if(request.status == 200){
                console.log(response.respuesta);
            } else if (request.status == 400) {
                console.log(response.respuesta);
            } else if (request.status == 500) {
                console.log(response.respuesta);
            } else if (!request.ok) {
                console.log("Error de cualquier tipo HTTP");
            }
            
        } catch (error) {
            console.log(error);
        }

    }
    return(
        <UsuarioContext.Provider value={{
            registrarUsuario
            }}>
            {children}
        </UsuarioContext.Provider>
    )
 }

 export {UsuarioContext, UsuarioProvider}