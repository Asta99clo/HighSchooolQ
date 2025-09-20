
import './CardProfesor.scss';
const CardProfesor = () =>{
    return(
        <>
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
                            <div className="image">
                                <img src="/assets/img/Profesores/anna.webp" alt="imagen anna" />
                            </div>
                            <div className="info">
                                <p>Nombre</p>
                                <p>Grado</p>
                                <p>Materia</p>
                                <p>Carrera</p>
                            </div>
                        </div>
                        <div className="cont-btn">
                            <button className="btn"> Más</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cont-info">
                            <div className="image">
                                <img src="/assets/img/Profesores/marianaCas.webp" alt="imagen anna" />
                            </div>
                            <div className="info">
                                <p>Nombre</p>
                                <p>Grado</p>
                                <p>Materia</p>
                                <p>Carrera</p>
                            </div>
                        </div>
                        <div className="cont-btn">
                            <button className="btn"> Más</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cont-info">
                            <div className="image">
                                <img src="/assets/img/Profesores/eduardo.webp" alt="imagen anna" />
                            </div>
                            <div className="info">
                                <p>Nombre</p>
                                <p>Grado</p>
                                <p>Materia</p>
                                <p>Carrera</p>
                            </div>
                        </div>
                        <div className="cont-btn">
                            <button className="btn"> Más</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cont-info">
                            <div className="image">
                                <img src="/assets/img/Profesores/carlosH.webp" alt="imagen anna" />
                            </div>
                            <div className="info">
                                <p>Nombre</p>
                                <p>Grado</p>
                                <p>Materia</p>
                                <p>Carrera</p>
                            </div>
                        </div>
                        <div className="cont-btn">
                            <button className="btn"> Más</button>
                        </div>
                    </div>
                    <div className="card">
                        <div className="cont-info">
                            <div className="image">
                                <img src="/assets/img/Profesores/fernandoL.webp" alt="imagen anna" />
                            </div>
                            <div className="info">
                                <p>Nombre</p>
                                <p>Grado</p>
                                <p>Materia</p>
                                <p>Carrera</p>
                            </div>
                        </div>
                        <div className="cont-btn">
                            <button className="btn"> Más</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default CardProfesor;