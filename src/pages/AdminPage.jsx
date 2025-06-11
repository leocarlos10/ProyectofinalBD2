import { Sidebar } from "../Components/admin_components/Sidebar"
import { DashboardMain } from "../Components/admin_components/DashboardMain"

export const AdminPage = () => {
  return (
    <div className="flex">
    <Sidebar/>
    <DashboardMain/>
    </div>
  )
}
