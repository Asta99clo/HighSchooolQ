import { useState } from 'react'; // <-- 1. ¡IMPORTANTE!
import './Navbar.scss';
import { useNavigate } from "react-router-dom";
// (No necesitas importar la imagen del hero aquí)

// import logo from '../../assets/img/logo.svg'; 

const NavBar = () => {
  // --- 2. EL ESTADO PARA EL TOGGLE ---
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  // --- 3. LA FUNCIÓN QUE CAMBIA EL ESTADO ---
  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
    // document.body.classList.toggle('dark-mode'); // (Lógica futura)
  };

  return (
    // CAMBIO: Ahora es <header>
    <header className="main-header"> 
      <nav className="main-nav">

        {/* --- ENLACES --- */}
        <ul className='nav-links'>
          <li>
            <a href="/" className="nav-logo-link">
                        <img 
                src="../../public/HighSchoolQ2.svg" 
                alt="Logo de HighSchoolQ" 
                className="navbar-logo" // Le damos una clase
              />
              <span>HighSchoolQ</span>
            </a>
          </li>
          <li><a href="#">Sobre nosotros</a></li>
          <li>
            <a href="#sucursales">Planteles</a>
            <ul className="menuVertical">
              <li><a href="#">México</a></li>
              <li><a href="#">Puerto Rico</a></li>
              <li><a href="#">Brasil</a></li>
              <li><a href="#">Más...</a></li>
            </ul>
          </li>
          <li><a href="#">Profesores</a></li>
          <li>
            <a href="#">Cursos</a>
            <ul className="menuVertical">
              <li><a href="#">Matemáticas</a></li>
              <li><a href="#">Programación</a></li>
              <li><a href="#">Diseño web</a></li>
              <li><a href="#">Más...</a></li>
            </ul>
          </li>
        </ul>

        {/* --- ACCIONES --- */}
        <div className="nav-actions">
          <button className="btn-secondary" onClick={()  => navigate("/Login")}>
            Iniciar sesión
          </button>
          
          {/* --- 4. EL NUEVO TOGGLE CON SU LÓGICA --- */}
          <button 
            className={`btn-toggle ${isDarkMode ? 'active' : ''}`} 
            id='switch'
            onClick={handleToggle} // Se activa al hacer clic
          >
            {/* El círculo que se desliza */}
            <span className="toggle-slider"></span>
            
            {/* Los iconos */}
            <span className="icon-sun">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor"  viewBox="0 0 16 16">
                <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
              </svg>
            </span>
            <span className="icon-moon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fillRule="currentColor"  viewBox="0 0 16 16">
                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
              </svg>
            </span>
          </button>
        </div>

      </nav>
    </header>
  )
};

export default NavBar;