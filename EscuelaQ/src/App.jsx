
import './Base/index.scss';
import NavBar from './Componets/NavBar/NavBar'
import Hero from './Componets/Hero/Hero'
import SeccionProfesor from './Componets/ProfesoresSeccion/SeccionProfesor';
import CardProfesor from './Componets/CardProfesor/CardProfesor';
import SeccionSucursal from './Componets/Sucursales/SeccionSucursal';
import SectionFooter from './Componets/Footer/SectionFooter';

function App() {

  return (
    <>
      <NavBar/>
      <Hero/>
      <SeccionProfesor/>
      <CardProfesor/>
      <SeccionSucursal/>
      <SectionFooter/>
    </>
  )
}

export default App
