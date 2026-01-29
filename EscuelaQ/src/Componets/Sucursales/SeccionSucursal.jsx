import './SeccionSucursal.scss';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import sucursales from '../../Data/sucursales.json';
import { useNavigate } from 'react-router-dom';

const SeccionSucursal = () => {
    const navigate = useNavigate();
    //estados de react
    const [data, setData] = useState([]);
    const [paisSeleccionado, setPaisSeleccionado] = useState('cl');
    const [sucursalActiva, setSucursalActiva] = useState(null);
    const [imgIndex, setImgIndex] = useState(0);
    const location = useLocation();
    /* Estados para el touch */
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const minSwipeDistance = 50;

    const onTouchStart = (e) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            setImgIndex((prev) =>
                prev === sucursalActiva.img.length - 1 ? 0 : prev + 1
            );
        }

        if (isRightSwipe) {
            setImgIndex((prev) =>
                prev === 0 ? sucursalActiva.img.length - 1 : prev - 1
            );
        }
    };

    // Cargar JSON al montar el componente
    useEffect(() => {
        setData(sucursales);
        // Al cargar, busca la sucursal de México directamente
        const definido = sucursales.find((s) => s.codigoPais === 'cl');
        setSucursalActiva(definido || sucursales[0]);
    }, []);

    // Cambiar sucursal al cambiar país
    useEffect(() => {
        setData(sucursales);

        const paisNav = location.state?.pais || 'cl';

        setPaisSeleccionado(paisNav);

        const definido = sucursales.find((s) => s.codigoPais === paisNav);
        setSucursalActiva(definido || sucursales[0]);
    }, [location.state]);
    useEffect(() => {
        if (!paisSeleccionado) return;

        const definido = sucursales.find(
            (s) => s.codigoPais === paisSeleccionado
        );

        setSucursalActiva(definido || sucursales[0]);
        setImgIndex(0);
    }, [paisSeleccionado]);

    // Lista de países sin duplicados
    const paises = Array.from(
        new Map(data.map((s) => [s.codigoPais, s])).values()
    );

    return (
        <>
            <section className="section-sucursal" id="sucursales">
                <div className="titulo">
                    <h1>Nuestras sucursales</h1>
                    <h3>Aprendizaje sin fronteras</h3>
                </div>
                <div className="cont-sucursal">
                    <div className="menu-vertical">
                        <select
                            name="pais"
                            id="pais-op"
                            value={paisSeleccionado}
                            className="selectPais"
                            onChange={(e) =>
                                setPaisSeleccionado(e.target.value)
                            }
                        >
                            <option value="">Selecciona un país</option>
                            {paises.map((p) => (
                                <option key={p.codigoPais} value={p.codigoPais}>
                                    {p.País} ({p.codigoPais.toUpperCase()})
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="contenido-sucursal-info">
                        <div className="carrucel">
                            <div
                                className="cont-img"
                                onTouchStart={onTouchStart}
                                onTouchMove={onTouchMove}
                                onTouchEnd={onTouchEnd}
                            >
                                {sucursalActiva ? (
                                    <>
                                        <img
                                            src={sucursalActiva.img[imgIndex]}
                                            alt={sucursalActiva.alt}
                                        />
                                    </>
                                ) : (
                                    <p>Cargando sucursal ... </p>
                                )}
                            </div>
                            <div className="cont-puntos">
                                {sucursalActiva &&
                                    sucursalActiva.img.map((_, i) => (
                                        <button
                                            key={i}
                                            className={
                                                i === imgIndex ? 'activo' : ''
                                            }
                                            onClick={() => setImgIndex(i)}
                                        >
                                            ●
                                        </button>
                                    ))}
                            </div>
                        </div>
                        <div className="cont-info">
                            <div className="info">
                                {sucursalActiva ? (
                                    <>
                                        <h2>{sucursalActiva.país}</h2>
                                        <h2>{sucursalActiva.NombreSucursal}</h2>
                                        <p>
                                            <span>Dirección: </span>
                                            {sucursalActiva.Dirección}
                                        </p>
                                        <p>
                                            <span>Correo: </span>{' '}
                                            {sucursalActiva.Correo}
                                        </p>
                                        <p>
                                            <span>Teléfono: </span>
                                            {sucursalActiva.Teléfono}
                                        </p>
                                        <button
                                            onClick={() =>
                                                navigate('/InicioSesion')
                                            }
                                        >
                                            Inscribirse
                                        </button>
                                    </>
                                ) : (
                                    <p>Selecciona un país para ver sus datos</p>
                                )}
                            </div>
                            <div className="mapa">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60228.78307897591!2d-99.13148403167723!3d19.35620438678744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fd778e895535%3A0x87aaf7caf70fcf21!2sEDU%2B%20Cursos%20para%20examen%20COMIPEMS%20-%20BACHILLERATO!5e0!3m2!1ses-419!2smx!4v1760277662456!5m2!1ses-419!2smx"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export default SeccionSucursal;
