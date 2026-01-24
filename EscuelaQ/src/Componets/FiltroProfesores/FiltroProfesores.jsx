// src/Componets/FiltroProfesores/FiltroProfesores.jsx
import React, { useCallback, useState } from 'react';
import './FiltroProfesores.scss';

/**
 * Componente de botón individual, memoizado.
 * (ACTUALIZADO con className BEM)
 */
const FiltroButton = React.memo(({ filtro, esActivo, onFiltroClick }) => {
    const handleClick = useCallback(() => {
        onFiltroClick(filtro);
    }, [filtro, onFiltroClick]);

    // ANTES: 'filtro-btn'
    // AHORA: 'profesores-filtros__btn'
    const className = `profesores-filtros__btn ${esActivo ? 'active' : ''}`;

    return (
        <button
            className={className.trim()} // .trim() es un seguro por si 'active' no está
            onClick={handleClick}
        >
            {filtro}
        </button>
    );
});

// --- Componente Principal ---

const FiltroProfesores = ({ filtros, filtroActivo, onFiltroChange }) => {
    const [open, setOpen] = useState(false);

    return (
        <aside className={`profesores-filtros ${open ? 'is-open' : ''}`}>
            <button
                className="profesores-filtros__toggle"
                onClick={() => setOpen(!open)}
            >
                {open ? '<' : '>'}
            </button>

            {/* ACTUALIZADO: 
        Se quita el selector genérico 'h4' y se le da su propia clase BEM.
      */}
            <h4 className="profesores-filtros__titulo">Filtrar por Materia</h4>

            {filtros.map((filtro) => (
                <FiltroButton
                    key={filtro}
                    filtro={filtro}
                    esActivo={filtro === filtroActivo}
                    onFiltroClick={onFiltroChange}
                />
            ))}
        </aside>
    );
};

export default React.memo(FiltroProfesores);
