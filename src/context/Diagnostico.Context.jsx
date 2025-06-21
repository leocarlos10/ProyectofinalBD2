import { createContext, useState } from "react";


const DiagnosticoContext = createContext();

function DiagnosticoProvider({children}){

    const [diagnosticosRecientes, setDiagnosticosRecientes] = useState([]);
    const [loadingD, setLoadingD] = useState(false);
    const [errorD, setErrorD] = useState(false);

    const [diagnosticos, setDiagnosticos] = useState([]);
    const [loadingD2, setLoadingD2] = useState(false);
    const [errorD2, setErrorD2] = useState(false);

    const [diagnosticosPorCedula, setDiagnosticosPorCedula] = useState([]);
    const [loadingD3, setLoadingD3] = useState(false);
    const [errorD3, setErrorD3] = useState(false);


    const getHeaders = ()=> {
        return {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json',
        }
    }

    const getDiagnosticosrecientes = async () => {
        
        try {
            
            const request = await fetch("/api/panel/diagnosticos", {
                method : "GET",
                headers : getHeaders()
            });

            const response = await request.json();

            if(request.status == 200){
                setDiagnosticosRecientes(response.diagnosticos);
                setLoadingD(true);
                setErrorD(false);
            }else if(request.status == 404){
                console.log(response.mensaje);
                setLoadingD(true);
            }else if(request.status == 500){
                console.log(response.mensaje);
                setLoadingD(true);
            }else if(!request.ok){
                console.log("Error de cualquier tipo HTTP");
                setLoadingD(true);
            }


        } catch (error) {
            console.log(error);
            setErrorD(true);
        }
    }

    const getDiagnosticos = async () => {
        
        try {
            
            const request = await fetch("/api/diagnostico/con-usuario", {
                method : "GET",
                headers : getHeaders()
            });

            const response = await request.json();

            if(request.status == 200){
                setDiagnosticos(response.diagnosticos);
                setLoadingD2(true);
                setErrorD2(false);
            }else if(request.status == 404){
                console.log(response.mensaje);
                setLoadingD2(true);
            }else if(request.status == 500){
                console.log(response.mensaje);
                setLoadingD2(true);
            }else if(!request.ok){
                console.log("Error de cualquier tipo HTTP");
                setLoadingD2(true);
            }


        } catch (error) {
            console.log(error);
            setErrorD2(true);
        }
    }

    const getDiagnosticosPorCedula = async (cedula) => {
        
        try {
            
            const request = await fetch(`/api/diagnostico/por-usuario/${cedula}`, {
                method : "GET",
                headers : getHeaders()
            });

            const response = await request.json();

            if(request.status == 200){
                setDiagnosticosPorCedula(response.diagnosticos);
                setLoadingD3(true);
                setErrorD3(false);
            }else if(request.status == 404){
                console.log(response.mensaje);
                setLoadingD3(true);
            }else if(request.status == 500){
                console.log(response.mensaje);
                setLoadingD3(true);
            }else if(!request.ok){
                console.log("Error de cualquier tipo HTTP");
                setLoadingD3(true);
            }


        } catch (error) {
            console.log(error);
            setErrorD3(true);
        }
    }

    const eliminarDiagnostico = async (id_diagnostico) => {
        try {
            const request = await fetch(`/api/diagnostico/eliminar/${id_diagnostico}`, {
                method : "DELETE",
                headers : getHeaders()
            })

            const response = await request.json();
            let respuesta = false;

            if(request.status == 200){
                alert(response.mensaje);
                respuesta = response.respuesta;
            }else if(request.status == 404){
                console.log(response.mensaje);
                respuesta = response.respuesta;
            }else if(request.status == 500){
                console.log(response.mensaje);
                respuesta = response.respuesta;
            }else if(!request.ok){
                console.log("Error de cualquier tipo HTTP");
                respuesta = false;
            }
            return respuesta;
        } catch (error) {
            console.log(error);
            return false;
        }
    }

    const crearDiagnostico = async (newDiagnostico) => {

        try {

            const request = await fetch("/api/diagnostico/crear-con-historia",{
                method : "POST",
                headers : getHeaders(),
                body : JSON.stringify(newDiagnostico)
            })
    
            const response = await request.json();
            let respuesta = false;
            if(request.status == 201){
                alert(response.mensaje);
                respuesta = response.respuesta;
            }else if(request.status == 400){
                console.log(response.mensaje);
                respuesta = response.respuesta;
            }else if(request.status == 500){
                console.log(response.mensaje);
                respuesta = response.respuesta;
            }else if(!request.ok){
                console.log("Error de cualquier tipo HTTP");
                respuesta = false;
            }
            return respuesta;
            
        } catch (error) {
            console.log(error);
            return false;
            
        }
       
    }


    return (
        <DiagnosticoContext.Provider value={{
            diagnosticosRecientes,
            getDiagnosticosrecientes,
            loadingD,
            errorD,
            diagnosticos,
            getDiagnosticos,
            loadingD2,
            errorD2,
            eliminarDiagnostico,
            crearDiagnostico,
            diagnosticosPorCedula,
            getDiagnosticosPorCedula,
            loadingD3,
            errorD3
        }}>
            {children}
        </DiagnosticoContext.Provider>
    )
}

export {DiagnosticoContext, DiagnosticoProvider};