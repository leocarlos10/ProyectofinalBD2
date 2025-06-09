import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { SolicitarCita } from './pages/SolicitarCita'
import { CursosPage } from './pages/CursosPage'
import { Login_UserPage } from './pages/Login_UserPage'
import { Registrar_userPage } from './pages/Registrar_userPage'
import { Login_admin } from './pages/Login_admin'
import ScrollToTop from './Components/ScrollToTop'

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
      </Routes>
    </>
  )
}

export default App
