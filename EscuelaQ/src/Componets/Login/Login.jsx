import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = ()=>{
    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
//aun falta la logica e implementarlo paquito
    const handleLogin = (e) => {
        e.preventDefault();
        if (usuario && password) {
        alert("Iniciando sesión...");
        
        } else {
        alert("Por favor completa los campos");
        }
    };
    return (
        <>  
            <div className="content-form">

                <div className="login-section">
                    <h1>Iniciar sesión</h1>
                    <div className="user-icon">

                    </div>
                    <div className="login-content">
                        <label htmlFor="email">Correo</label>
                        <input type="email" />
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" />
                    </div>
                    <div className="button-content">
                        <button>Iniciar</button>
                        <button className="btn-link" onClick={()=>navigate("/InicioSesion")}>Crear</button>
                    </div>
                </div>
                <div className="content-image">
                    <img src="" alt="" />
                </div>
            </div>
        </>
    )
}
export default Login;