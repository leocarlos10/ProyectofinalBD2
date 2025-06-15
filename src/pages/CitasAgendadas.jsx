import { Header } from "../Components/Header"
import { Footer } from "../Components/Footer"
import { MainCitasAgendadas } from "../Components/MainCitasAgendadas"


export const CitasAgendadas = () => {
  return (
    <>
    <Header  visibilidad_Links={false} />
    <MainCitasAgendadas/>
    <Footer/>
    </>
  )
}
