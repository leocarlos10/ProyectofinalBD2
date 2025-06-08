import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { SolicitarCita } from './pages/SolicitarCita'


function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/solicitar-cita' element={<SolicitarCita/>}/>
    </Routes>
  )
}

export default App
