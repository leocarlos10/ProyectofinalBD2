import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { UsuarioProvider } from './context/Usuario.Context.jsx'
import { CitaProvider } from './context/Cita.Context.jsx'
import { PediatraProvider } from './context/Pediatra.Context.jsx'
import { DiagnosticoProvider } from './context/Diagnostico.Context.jsx'
import { HistoriaProvider } from './context/HistoriaCli.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <HistoriaProvider>
        <DiagnosticoProvider>
          <PediatraProvider>
            <CitaProvider>
              <UsuarioProvider>
                <App />
              </UsuarioProvider>
            </CitaProvider>
          </PediatraProvider>
        </DiagnosticoProvider>
      </HistoriaProvider>
    </BrowserRouter>
  </StrictMode>,
)
