import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App.jsx'
import InicioSesion from './Componets/InicioSesion/InicioSesion.jsx'
import Login from './Componets/Login/Login.jsx'
import FormAlumn from './Componets/formAlumn/FormAlumn.jsx'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/Login' element={<Login/>}></Route>
        <Route path="/InicioSesion" element={<InicioSesion />} /> 
        <Route path="/FormAlumn" element={<FormAlumn/>} /> 
      </Routes>
    </BrowserRouter>
  </StrictMode>
);