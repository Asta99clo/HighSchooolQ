import './Base/index.scss';
import data from './Data/profesores.json'; 

// Componentes
import NavBar from './Componets/NavBar/NavBar';
import Hero from './Componets/Hero/Hero';
import SeccionProfesor from './Componets/SeccionProfesor/SeccionProfesor';
import Cardcursos from './Componets/Cardcursos/Cardcursos';
import SeccionSucursal from './Componets/Sucursales/SeccionSucursal';
import SectionFooter from './Componets/Footer/SectionFooter';


// 2. Intentamos la destructuración que teníamos
const { profesoresData, filtrosData } = data;


function App() {

  return (
    <>
      <NavBar/>
      <Hero/>
      <SeccionProfesor 
        profesoresData={profesoresData || []} 
        filtrosData={filtrosData || []} 
      />   
      <Cardcursos/>
      <SeccionSucursal/>
      <SectionFooter/>
    </>
  )
}

export default App;