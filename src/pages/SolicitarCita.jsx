import { Footer } from "../Components/Footer"
import { Header } from "../Components/Header"
import { MainSolicitarCita } from "../Components/MainSolicitarCita"

export const SolicitarCita = () => {
  return (
    <>
    <Header visibilidad_Links={false}/>
    <MainSolicitarCita/>
    <Footer/>
    </>
  )
}
