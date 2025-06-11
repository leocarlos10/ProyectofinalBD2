import { Sidebar } from "../Components/admin_components/Sidebar"
import { MainRutas } from "../Components/admin_components/MainRutas"

export const DiagnosticoPage = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <MainRutas pagina="diagnosticos"/>
    </div>
  )
}
