import "./Cardcursos.scss";


const Cardcursos = () => {
  return (

<div className="card-container">
      <div className="card-content">

        <div className="card-info">
          <ul>
            <li>Nombre:</li>
            <li>Profesor:</li>
            <li>Ubicacion:</li>
            <li>tipo</li>
            <li>Breve descripcion</li>
          </ul>
        </div>

        <div className="card-image">
          <img 
            src="../../assets/img/Materias/mate1.webp" 
            alt="Foto del curso"
          />
        </div>
      </div>
    </div>
  );
};

export default Cardcursos;
