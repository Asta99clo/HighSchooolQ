import "./Hero.scss";

// Importa tu imagen aquí. 
// Asegúrate de que la ruta sea correcta desde ESTE archivo.
// ../../assets/img/Hero/Hero-02.webp (ejemplo)
import heroImagen from '../../../public/assets/img/Hero/Hero-02.webp'; 

const Hero = () => {
  return (
    // La sección principal sigue siendo semántica
    <section className="hero-contenedor">

      {/* COLUMNA 1: CONTENIDO DE TEXTO */}
      <div className="hero-texto">
        <h1>Bienvenido a HighSchoolQ</h1>
        <p>
          Tu plataforma para conectar, aprender y crecer. Descubre un espacio 
          diseñado para potenciar tu talento y prepararte para el futuro.
          {/* Cambié el texto por uno más corto, ideal para un Hero */}
        </p>
        <button className="hero-boton">¡Inscribite!</button>
      </div>

      {/* COLUMNA 2: IMAGEN VISUAL */}
      <div className="hero-imagen-contenedor">
        <img 
          src={heroImagen} 
          alt="Estudiantes colaborando en HighSchoolQ" 
        />
      </div>
      
    </section>
  );
};

export default Hero;