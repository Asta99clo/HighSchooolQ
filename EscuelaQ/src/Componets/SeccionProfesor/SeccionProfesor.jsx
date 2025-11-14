import { useState, useMemo, useCallback } from 'react'; 
import PropTypes from 'prop-types'; // Importamos PropTypes
import './SeccionProfesor.scss';

// Importamos los componentes "hijos"
import HeaderProfesor from '../HeaderProfesor/HeaderProfesor';
import CardProfesorItem from '../CardProfesorItem/CardProfesorItem';
import FiltroProfesores from '../FiltroProfesores/FiltroProfesores'; 


const SeccionProfesor = ({ profesoresData, filtrosData }) => {
  
  const [filtroActivo, setFiltroActivo] = useState(filtrosData[0] || "Todos");
  const handleFiltroChange = useCallback((filtro) => {
    setFiltroActivo(filtro);
  }, []); // El array vacío significa que esta función NUNCA cambia

  const profesoresFiltrados = useMemo(() => {
    if (filtroActivo === "Todos") {
      return profesoresData;
    }
    
    const filtroLower = filtroActivo.toLowerCase();
    return profesoresData.filter(profesor => 
      profesor.materia.toLowerCase().includes(filtroLower)
    );
  }, [filtroActivo, profesoresData]); 

  return (
    <section className="seccion-profesor">

      <HeaderProfesor 
        title="Nuestros Profesores"
        description="Conoce al equipo de expertos que te guiarán en tu aprendizaje."
      />
      
      <div className="seccion-profesor__container">
        
        <FiltroProfesores 
          filtros={filtrosData}
          filtroActivo={filtroActivo}
          onFiltroChange={handleFiltroChange}
        />

        <div className="seccion-profesor__grid">
          
          {profesoresFiltrados.map((profesor, index) => (
            <CardProfesorItem
              key={profesor.id} 
              profesor={profesor} 
              index={index} 
            />
          ))}

        </div>
      </div>
    </section>
  );
};

SeccionProfesor.propTypes = {
  /**
   * Array de objetos de profesores que se van a mostrar.
   */
  profesoresData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    materia: PropTypes.string.isRequired,
    nombre: PropTypes.string,
  })).isRequired,

  /**
   * Array de strings que se usarán como botones de filtro.
   */
  filtrosData: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default SeccionProfesor;