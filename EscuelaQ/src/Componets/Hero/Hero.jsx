import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero-contenedor">
      <div className="hero-texto">
        <h1>Bienvenido a HighSchoolQ</h1>
        <p>
          Un texto literario es una obra escrita u oral que prioriza la función 
          estética del lenguaje, buscando crear una experiencia estética en el 
          lector a través de la belleza y la creatividad, en lugar de tener un 
          propósito práctico o informativo directo.
        </p>
      </div>
      <div className="hero-boton">
        <button>¡Inscribite!</button>
      </div>
    </div>
  );
};

export default Hero;
