import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import InicioSesion from './Componets/InicioSesion/InicioSesion.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path ="/" element ={<App/>}/>
        <Route path ="/InicioSesion" element ={<InicioSesion/>}/>
      </Routes>
    
    </BrowserRouter>
    
  </StrictMode>,
)
