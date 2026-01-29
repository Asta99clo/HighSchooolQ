import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import './Login.scss';

const Login = () => {
    const [usuario, setUsuario] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    //aun falta la logica e implementarlo paquito
    const handleLogin = (e) => {
        e.preventDefault();
        if (usuario && password) {
            alert('Iniciando sesión...');
        } else {
            alert('Por favor completa los campos');
        }
    };
    return (
        <>
            <NavBar></NavBar>
            <div className="content-form">
                <div className="login-section">
                    <h1>Iniciar sesión</h1>
                    <div className="user-icon">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-person-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                        </svg>
                    </div>
                    <div className="login-content">
                        <label htmlFor="email">Correo</label>
                        <input type="email" />
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" />
                    </div>
                    <div className="button-content">
                        <button className="btn">Iniciar</button>
                        <button
                            className="btn-link btn"
                            onClick={() => navigate('/InicioSesion')}
                        >
                            Crear
                        </button>
                    </div>
                </div>
                <div className="content-image">
                    <img src="/img/secciones/imgLogin.webp" alt="" />
                </div>
            </div>
        </>
    );
};
export default Login;
