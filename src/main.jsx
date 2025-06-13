import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { UsuarioProvider } from './context/Usuario.Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <UsuarioProvider>
      <App />
    </UsuarioProvider>
    </BrowserRouter>
  </StrictMode>,
)
