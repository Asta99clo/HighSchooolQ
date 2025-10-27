import { useState } from 'react'; 
import './CardProfesor.scss';


const profesoresData = [
  {
    id: 1,
    nombre: "Anna García",
    grado: "Doctorado",
    materia: "Programación",
    carrera: "Ing. en Software",
    imagen: "/assets/img/Profesores/anna.webp"
  },
  {
    id: 2,
    nombre: "Mariana Castillo",
    grado: "Maestría",
    materia: "Matemáticas",
    carrera: "Actuaría",
    imagen: "/assets/img/Profesores/marianaCas.webp"
  },
  {
    id: 3,
    nombre: "Eduardo Solís",
    grado: "Doctorado",
    materia: "Física",
    carrera: "Física Nuclear",
    imagen: "/assets/img/Profesores/eduardo.webp"
  },
  {
    id: 4,
    nombre: "Carlos Herrera",
    grado: "Maestría",
    materia: "Inglés",
    carrera: "Lingüística Aplicada",
    imagen: "/assets/img/Profesores/carlosH.webp"
  },
  {
    id: 5,
    nombre: "Fernando López",
    grado: "Licenciatura",
    materia: "Español",
    carrera: "Literatura Hispánica",
    imagen: "/assets/img/Profesores/fernandoL.webp"
  },
  {
    id: 6,
    nombre: "Ana Gómez",
    grado: "Doctorado",
    materia: "Química",
    carrera: "Química Orgánica",
    imagen: "/assets/img/Profesores/anna.webp" 
  }
];

const filtrosData = [
  "Todos", "Matemáticas", "Español", "Química", "Física", "Inglés", "Programación"
];


// --- 2. EL COMPONENTE COMPLETO ---
const CardProfesor = () => {
  
  // Estado para guardar el filtro activo
  const [filtroActivo, setFiltroActivo] = useState("Todos");

  // (En el futuro, aquí puedes filtrar 'profesoresData' 
  // antes de pasarlo al .map())

  return (
    // Contenedor principal para TODA la sección
    <section className="profesor-wrapper">

      {/* --- 3. EL TÍTULO DE SECCIÓN (¡YA NO ES UNA IMAGEN!) --- */}
      <div className="section-header">
        <h2>Nuestros Profesores</h2>
        <p>Conoce al equipo de expertos que te guiarán en tu aprendizaje.</p>
      </div>
      
      {/* --- 4. EL CONTENEDOR DEL GRID (FILTROS + TARJETAS) --- */}
      <div className="profesores-seccion">
        
        {/* --- COLUMNA DE FILTROS (con .map) --- */}
        <aside className="profesores-filtros">
          <h4>Filtrar por Materia</h4>
          
          {filtrosData.map((filtro) => (
            <button
              key={filtro}
              className={`filtro-btn ${filtro === filtroActivo ? 'active' : ''}`}
              onClick={() => setFiltroActivo(filtro)}
            >
              {filtro}
            </button>
          ))}
        </aside>

        {/* --- GRID DE TARJETAS (con .map) --- */}
        <div className="profesores-grid">
          
          {profesoresData.map((profesor) => (
            <article className="profesor-card" key={profesor.id}>
              
              <div className="card-imagen-cont">
                <img src={profesor.imagen} alt={`Foto de ${profesor.nombre}`} />
              </div>

              <div className="card-info-cont">
                <h3>{profesor.nombre}</h3>
                <p className="materia">{profesor.materia}</p>
                <p className="grado">{profesor.grado} en {profesor.carrera}</p>
              </div>

              <div className="card-btn-cont">
                <button className="btn-secondary">Ver Perfil</button>
              </div>
            </article>
          ))}
          {/* --- Fin del .map() de profesores --- */}

        </div>
      </div>
    </section>
  );
};

export default CardProfesor;