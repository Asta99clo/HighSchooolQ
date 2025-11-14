// src/Componets/HeaderProfesor/HeaderProfesor.jsx
import React from 'react';
import PropTypes from 'prop-types'; 
import './HeaderProfesor.scss';

const HeaderProfesor = ({ title, description }) => {
  return (
    <div className="section-header">
      
      <h2 className="section-header__title">{title}</h2>
      
      {description && (
        <p className="section-header__description">{description}</p>
      )}

    </div>
  );
};

HeaderProfesor.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default React.memo(HeaderProfesor);