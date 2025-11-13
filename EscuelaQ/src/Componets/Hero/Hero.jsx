import "./Hero.scss";
import heroImagen from '../../../public/assets/img/Hero/Hero-02.webp'; 

const Hero = () => {
  return (
    <section className="hero-contenedor">
      <div className="hero-texto">
        <h1>Bienvenido a HighSchoolQ</h1>
        <p>
          Tu plataforma para conectar, aprender y crecer. Descubre un espacio 
          diseñado para potenciar tu talento y prepararte para el futuro.
        </p>
        <button className="hero-boton">¡Inscribite!</button>
      </div>

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