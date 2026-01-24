// src/Componets/CardProfesorItem/CardProfesorItem.jsx
import { useState, useMemo, useCallback } from 'react';
import './CardProfesorItem.scss';

// --- Constantes y Datos ---

const ICON_PATHS = {
    email: 'M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z',
    linkedin:
        'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z',
    facebook:
        'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 10h-2v-2c0-.552.448-1 1-1h1v-3h-2c-2.761 0-5 2.239-5 5v2h-2v3h2v8h3v-8h2l1-3z',
    instagram:
        'M12 2c-2.717 0-3.056.01-4.122.06-1.065.05-1.79.22-2.428.46-1.28.48-2.17.91-3.02 1.76s-1.28 1.74-1.76 3.02c-.24.64-.41 1.36-.46 2.43-.05 1.06-.06 1.4-.06 4.12s.01 3.06.06 4.12c.05 1.07.22 1.79.46 2.43.48 1.28.91 2.17 1.76 3.02s1.74 1.28 3.02 1.76c.64.24 1.36.41 2.43.46 1.06.05 1.4.06 4.12.06s3.06-.01 4.12-.06c1.07-.05 1.79-.22 2.43-.46 1.28-.48 2.17-.91 3.02-1.76s1.28-1.74 1.76-3.02c.24-.64.41-1.36.46-2.43.05-1.06.06 1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.07-.22-1.79-.46-2.43-.48-1.28-.91-2.17-1.76-3.02s-1.74-1.28-3.02-1.76c-.64-.24-1.36-.41-2.43-.46-1.06-.05-1.4-.06-4.12-.06zm0 1.62c2.67 0 2.97.01 4.01.06 1.02.05 1.5.2 1.8.32.48.17.78.34 1.15.7.37.37.53.67.7 1.15.12.3.27.78.32 1.8.05 1.04.06 1.34.06 4.01s-.01 2.97-.06 4.01c-.05 1.02-.2 1.5-.32 1.8-.17.48-.34.78-.7 1.15-.37.37-.67.53-1.15.7-.3.12-.78.27-1.8.32-1.04.05-1.34.06-4.01.06s-2.97-.01-4.01-.06c-1.02-.05-1.5-.2-1.8-.32-.48-.17-.78-.34-1.15-.7-.37-.37-.53-.67-.7-1.15-.12-.3-.27-.78-.32-1.8-.05-1.04-.06-1.34-.06-4.01s.01-2.97.06-4.01c.05 1.02.2-1.5.32 1.8.17.48.34.78.7-1.15.37.37.67.53 1.15-.7.3-.12.78.27 1.8-.32 1.04-.05 1.34-.06 4.01-.06zm0 2.98c-2.4 0-4.38 1.98-4.38 4.38s1.98 4.38 4.38 4.38 4.38-1.98 4.38-4.38-1.98-4.38-4.38-4.38zm0 7.12c-1.5 0-2.74-1.24-2.74-2.74s1.24-2.74 2.74-2.74 2.74 1.24 2.74 2.74-1.24 2.74-2.74 2.74zm5.8-7.2c-.5 0-.9-.4-.9-.9s.4-.9.9-.9.9.4.9.9-.4.9-.9.9z',
    x: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.478l8.602-9.86L0 1.154h7.594l5.243 6.932L18.901 1.153z',
    youtube:
        'M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z',
    quote: 'M9.983 3v7.391c0 2.9-2.34 5.271-5.233 5.271s-5.233-2.371-5.233-5.271v-7.391h10.466zm14.017 0v7.391c0 2.9-2.34 5.271-5.233 5.271s-5.233-2.371-5.233-5.271v-7.391h10.466z',
};

const SOCIAL_MEDIA_PLATFORMS = [
    { key: 'email', label: 'Correo del profesor', icon: 'email' },
    { key: 'linkedin', label: 'LinkedIn del profesor', icon: 'linkedin' },
    { key: 'facebook', label: 'Facebook del profesor', icon: 'facebook' },
    { key: 'instagram', label: 'Instagram del profesor', icon: 'instagram' },
    { key: 'x', label: 'X del profesor', icon: 'x' },
    { key: 'youtube', label: 'YouTube del profesor', icon: 'youtube' },
];

const DEFAULT_BIO = 'Próximamente más información...';

// --- Componentes Reutilizables Internos ---

/**
 * Componente genérico para renderizar un ícono SVG.
 */
const Icon = ({ type, width = 20, height = 20, ...props }) => {
    const path = ICON_PATHS[type];
    if (!path) return null;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            focusable="false"
            {...props}
        >
            <path d={path} />
        </svg>
    );
};

/**
 * Renderiza la lista de íconos sociales.
 * (CORREGIDO CON EL CLASSNAME BEM)
 */
const SocialLinks = ({ links }) => {
    if (!links) return null;

    return (
        <div className="card-back__socials">
            {SOCIAL_MEDIA_PLATFORMS.map((platform) => {
                const url = links[platform.key];

                if (url) {
                    return (
                        <a
                            key={platform.key}
                            href={
                                platform.key === 'email' ? `mailto:${url}` : url
                            }
                            aria-label={platform.label}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Icon type={platform.icon} />
                        </a>
                    );
                }
                return null;
            })}
        </div>
    );
};

/**
 * Componente para la cara frontal de la tarjeta.
 * (CORREGIDO CON CLASSNAMES BEM)
 */
const CardFrontFace = ({ profesor, onFlip }) => (
    <div className="card-face card-front">
        <div className="card-front__imagen-cont">
            <img src={profesor.imagen} alt={`Foto de ${profesor.nombre}`} />
        </div>
        <div className="card-front__info-cont">
            <h3>{profesor.nombre}</h3>
            <p className="materia">{profesor.materia}</p>
            <p className="grado">{profesor.grado}</p>
        </div>
        <div className="card-front__btn-cont">
            <button className="btn-secondary" onClick={onFlip}>
                Ver más
            </button>
        </div>
    </div>
);

/**
 * Componente para la cara trasera de la tarjeta.
 * (CORREGIDO CON CLASSNAMES BEM)
 */
const CardBackFace = ({ profesor, onUnflip }) => (
    <div className="card-face card-back">
        <div className="card-back__header">
            <h4>Sobre {profesor.nombre?.split(' ')[0]}</h4>
        </div>
        <div className="card-back__bio-wrapper">
            <Icon type="quote" className="quote-icon" width={24} height={24} />
            <p>{profesor.bio || DEFAULT_BIO}</p>
        </div>

        <SocialLinks links={profesor.socials} />

        <button className="btn-back" onClick={onUnflip}>
            Volver
        </button>
    </div>
);

// --- Componente Principal ---

const CardProfesorItem = ({ profesor, index }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const animationDelay = useMemo(
        () => ({
            animationDelay: `${index * 5}s`,
        }),
        [index]
    );

    const handleFlip = useCallback(() => setIsFlipped(true), []);
    const handleUnflip = useCallback(() => setIsFlipped(false), []);

    return (
        <div className="profesor-card-container" style={animationDelay}>
            <div
                className={`profesor-card-inner ${isFlipped ? 'is-flipped' : ''}`}
            >
                <CardFrontFace profesor={profesor} onFlip={handleFlip} />

                <CardBackFace profesor={profesor} onUnflip={handleUnflip} />
            </div>
        </div>
    );
};

export default CardProfesorItem;
