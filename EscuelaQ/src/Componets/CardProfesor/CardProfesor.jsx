import { useState } from "react";
import "./CardProfesor.scss";

    const CardProfesor = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="contenedor">
            <div className="cont-opciones"> 
                <div>Todos</div> 
                <div>Matemáticas</div> 
                <div>Español</div> 
                <div>Química</div> 
                <div>Física</div> 
                <div>Ingles</div> 
                <div>Programación</div> 
            </div>

        <div className="cont-card">
            <div className="card">
                <div className="cont-info">
                    <div className="cont-img">
                        <div className="image">
                            <img src="/assets/img/Profesores/anna.webp" alt="imagen anna" />
                        </div>
                    </div>

                    <div className="contenedor-inf">
                        <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="info">
                                        <p>Nombre</p>
                                        <p>Grado</p>
                                        <p>Materia</p>
                                        <p>Carrera</p>
                                    </div>
                                    <div className="cont-btn">
                                        <button className="btn" onClick={() => setIsFlipped(!isFlipped)}>Más</button>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <div className="info">
                                        <p>Sobre mí...</p>
                                        <p>Experiencia</p>
                                    </div>
                                    <div className="cont-btn">
                                        <button className="btn" onClick={() => setIsFlipped(!isFlipped)}>Volver</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* fin flip */}
                </div>
            </div>
            <div className="card">
                <div className="cont-info">
                    <div className="cont-img">
                        <div className="image">
                            <img src="/assets/img/Profesores/anna.webp" alt="imagen anna" />
                        </div>
                    </div>

                    <div className="contenedor-inf">
                        <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="info">
                                        <p>Nombre</p>
                                        <p>Grado</p>
                                        <p>Materia</p>
                                        <p>Carrera</p>
                                    </div>
                                    <div className="cont-btn">
                                        <button className="btn" onClick={() => setIsFlipped(!isFlipped)}>Más</button>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <div className="info">
                                        <p>Sobre mí...</p>
                                        <p>Experiencia</p>
                                    </div>
                                    <div className="cont-btn">
                                        <button className="btn" onClick={() => setIsFlipped(!isFlipped)}>Volver</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* fin flip */}
                </div>
            </div>
            <div className="card">
                <div className="cont-info">
                    <div className="cont-img">
                        <div className="image">
                            <img src="/assets/img/Profesores/anna.webp" alt="imagen anna" />
                        </div>
                    </div>

                    <div className="contenedor-inf">
                        <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="info">
                                        <p>Nombre</p>
                                        <p>Grado</p>
                                        <p>Materia</p>
                                        <p>Carrera</p>
                                    </div>
                                    <div className="cont-btn">
                                        <button className="btn" onClick={() => setIsFlipped(!isFlipped)}>Más</button>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <div className="info">
                                        <p>Sobre mí...</p>
                                        <p>Experiencia</p>
                                    </div>
                                    <div className="cont-btn">
                                        <button className="btn" onClick={() => setIsFlipped(!isFlipped)}>Volver</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* fin flip */}
                </div>
            </div>
            <div className="card">
                <div className="cont-info">
                    <div className="cont-img">
                        <div className="image">
                            <img src="/assets/img/Profesores/anna.webp" alt="imagen anna" />
                        </div>
                    </div>

                    <div className="contenedor-inf">
                        <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="info">
                                        <p>Nombre</p>
                                        <p>Grado</p>
                                        <p>Materia</p>
                                        <p>Carrera</p>
                                    </div>
                                    <div className="cont-btn">
                                        <button className="btn" onClick={() => setIsFlipped(!isFlipped)}>Más</button>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <div className="info">
                                        <p>Sobre mí...</p>
                                        <p>Experiencia</p>
                                    </div>
                                    <div className="cont-btn">
                                        <button className="btn" onClick={() => setIsFlipped(!isFlipped)}>Volver</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* fin flip */}
                </div>
            </div>
            <div className="card">
                <div className="cont-info">
                    <div className="cont-img">
                        <div className="image">
                            <img src="/assets/img/Profesores/anna.webp" alt="imagen anna" />
                        </div>
                    </div>

                    <div className="contenedor-inf">
                        <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <div className="info">
                                        <p>Nombre</p>
                                        <p>Grado</p>
                                        <p>Materia</p>
                                        <p>Carrera</p>
                                    </div>
                                    <div className="cont-btn">
                                        <button className="btn" onClick={() => setIsFlipped(!isFlipped)}>Más</button>
                                    </div>
                                </div>
                                <div className="flip-card-back">
                                    <div className="info">
                                        <p>Sobre mí...</p>
                                        <p>Experiencia</p>
                                    </div>
                                    <div className="cont-btn">
                                        <button className="btn" onClick={() => setIsFlipped(!isFlipped)}>Volver</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* fin flip */}
                </div>
            </div>
        </div>
        </div>
    );
    };

    export default CardProfesor;
