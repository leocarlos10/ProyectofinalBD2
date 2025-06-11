import { Sidebar } from "../Components/admin_components/Sidebar"
import { MainRutas } from "../Components/admin_components/MainRutas"

export const CitasPage = () => {
  return (
    <div className="flex">
    <Sidebar/>
    <MainRutas pagina="citas"/>
    </div>
  )
}
