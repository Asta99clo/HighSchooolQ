
import { useNavigate } from "react-router-dom";
import FormAlumn from "../formAlumn/FormAlumn";
import NavBar from "../NavBar/NavBar";
import './InicioSesion.scss'
const InicioSesion = () =>{
        const navigate = useNavigate();
    
    return (
        <>
        <NavBar></NavBar>
        <section className="cont-from">
            <div className="cont-avatar">
                <div className="alumno" onClick={() => navigate("/FormAlumn")}>
                    <div className="img">
                        <img src="/assets/img/secciones/imgAlum.webp" alt="" />
                    </div>
                    <div className="info info-alum">
                        <h3>Estudiante</h3>
                    </div>
                </div>
                <div className="profesor">
                    
                    <div className="img">
                        <img src="/assets/img/secciones/imgProf.webp" alt="" />
                    </div>
                    <div className="info info-prof">
                        <h3>Profesor</h3>
                    </div>
                </div>
            </div>
        </section>

        <FormAlumn></FormAlumn>
        </>
    )
}
export default InicioSesion;