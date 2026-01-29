import React, { useRef } from 'react';
import './CardCursos.scss';
import cursosData from '../../Data/materias.json';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import HeaderProfesor from '../HeaderProfesor/HeaderProfesor';

// Imágenes de ejemplo (optimizadas en tamaño para demo)
const getTheme = (ciencia) => {
    switch (ciencia) {
        case 'Lingüística':
            return {
                imgSrc: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=150&q=80',
                theme: 'tema-amarillo',
            };
        case 'Ciencias de la Computación':
            return {
                imgSrc: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=150&q=80',
                theme: 'tema-turquesa',
            };
        case 'Ciencias Exactas':
            return {
                imgSrc: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=150&q=80',
                theme: 'tema-morado',
            };
        case 'Interacción Humano-PC':
            return {
                imgSrc: 'https://images.unsplash.com/photo-1555421689-49263cb52144?auto=format&fit=crop&w=150&q=80',
                theme: 'tema-rosa',
            };
        default:
            return {
                imgSrc: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=150&q=80',
                theme: 'tema-turquesa',
            };
    }
};

const Cardcursos = () => {
    const carouselRef = useRef(null);
    const location = useLocation();

    // Lógica de movimiento suave (Smooth Scroll)
    const scrollLeft = () => {
        if (carouselRef.current) {
            const width = carouselRef.current.offsetWidth;
            carouselRef.current.scrollBy({
                left: -(width / 2),
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            const width = carouselRef.current.offsetWidth;
            carouselRef.current.scrollBy({
                left: width / 2,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        const cursoNav = location.state?.curso;
        if (!cursoNav || !carouselRef.current) return;

        const cards = carouselRef.current.children;
        const index = [...cards].findIndex((card) =>
            card.innerText.includes(cursoNav)
        );

        if (index >= 0) {
            const card = cards[index];
            card.scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest',
            });
        }
    }, [location.state]);

    return (
        <section className="cursos-wrapper" id="Cursos">
            <HeaderProfesor
                title="Nuestros Cursos"
                description="Explora nuestra oferta académica diseñada para tu futuro."
            />

            {/* Contenedor del Carrusel */}
            <div className="carousel-container">
                {/* Botón Izquierda */}
                <button
                    className="nav-btn prev"
                    onClick={scrollLeft}
                    aria-label="Anterior"
                >
                    ←
                </button>

                {/* Track Deslizable */}
                <div className="carousel-track" ref={carouselRef}>
                    {cursosData.map((curso) => {
                        const { theme } = getTheme(curso.Ciencia);

                        return (
                            <div
                                className={`curso-card ${theme}`}
                                key={curso.id}
                            >
                                {/* Header (Fondo) */}
                                <div className="card-header-shape"></div>

                                {/* Imagen Flotante (Lazy Load para velocidad) */}
                                <div className="card-icon-floating">
                                    <img
                                        src={curso.img}
                                        alt={curso.alt}
                                        loading="lazy"
                                    />
                                </div>

                                {/* Contenido */}
                                <div className="card-body">
                                    <span className="badge-tipo">
                                        {curso.Tipo}
                                    </span>
                                    <h3>{curso.NombreMateria}</h3>
                                    <p className="descripcion">
                                        {curso.Descripción}
                                    </p>

                                    <div className="meta-data">
                                        <div className="meta-item">
                                            <span className="label">
                                                Duración
                                            </span>
                                            <span className="value">
                                                {curso.Duración}
                                            </span>
                                        </div>
                                        <div className="meta-item">
                                            <span className="label">
                                                Precio
                                            </span>
                                            <span className="value highlight">
                                                ${curso.Precio}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="profesor-info">
                                        <small>Imparte:</small>
                                        <span>{curso.ProfesorImparte}</span>
                                    </div>

                                    <button className="btn-ver-curso">
                                        Ver Temario
                                        <span className="arrow">→</span>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Botón Derecha */}
                <button
                    className="nav-btn next"
                    onClick={scrollRight}
                    aria-label="Siguiente"
                >
                    →
                </button>
            </div>
        </section>
    );
};

export default Cardcursos;
