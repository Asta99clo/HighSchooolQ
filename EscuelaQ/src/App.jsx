
import './Base/index.scss';
import NavBar from './Componets/NavBar/NavBar'
import Hero from './Componets/Hero/Hero'
import SeccionProfesor from './Componets/ProfesoresSeccion/SeccionProfesor';
import CardProfesor from './Componets/CardProfesor/CardProfesor';
import Cardcursos from './Componets/Cardcursos/Cardcursos';
import SeccionSucursal from './Componets/Sucursales/SeccionSucursal';

function App() {

  return (
    <>
      <NavBar/>
      <Hero/>
      <SeccionProfesor/>
      <CardProfesor/>
      <Cardcursos/>
      <SeccionSucursal/>
    </>
  )
}

export default App
