import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { SolicitarCita } from './pages/SolicitarCita'
import { CursosPage } from './pages/CursosPage'
import { Login_UserPage } from './pages/Login_UserPage'
import { Registrar_userPage } from './pages/Registrar_userPage'
import { Login_admin } from './pages/Login_admin'
import ScrollToTop from './Components/ScrollToTop'
import { AdminPage } from './pages/AdminPage'
import { CitasPage } from './pages/CitasPage'
import { PacientesPage } from "./pages/PacientesPage"
import { DiagnosticoPage } from './pages/DiagnosticoPage'
import { Form_Paciente } from './pages/Form_Paciente'

function App() {

  /* 
  - ScrollToTop: para que cuando se cambie de pagina, el scroll vuelva al inicio
  - Routes: para que se renderice la pagina correspondiente
  - Route: para que se renderice la pagina correspondiente
  - HomePage: para que se renderice la pagina de inicio
  - SolicitarCita: para que se renderice la pagina de solicitar cita
  */

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/solicitar-cita' element={<SolicitarCita/>}/>
        <Route path='/cursos' element={<CursosPage/>}/>
        <Route path='/login-user' element = {<Login_UserPage/>}></Route>
        <Route path='/registrar-user' element = {<Registrar_userPage/>}></Route>
        <Route path='/login-admin' element = {<Login_admin/>}></Route>
        <Route path='/form-paciente' element={<Form_Paciente/>}></Route>
        <Route path='/admin' element={<AdminPage/>}></Route>
        <Route path='/citas' element={<CitasPage/>}></Route>
        <Route path='/pacientes' element={<PacientesPage/>}></Route>
        <Route path='/diagnosticos' element={<DiagnosticoPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
