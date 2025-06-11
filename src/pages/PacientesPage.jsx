import { Sidebar } from "../Components/admin_components/Sidebar"
import { MainRutas } from "../Components/admin_components/MainRutas"

export const PacientesPage = () => {
  return (
    <div className="flex">
        <Sidebar/>
        <MainRutas pagina="pacientes"/>
    </div>
  )
}
