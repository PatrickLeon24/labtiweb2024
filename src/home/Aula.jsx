import React from 'react';
import './Aula.css';  // Asegúrate de importar los estilos CSS

const Aula = ({ title, description, imagen }) => {
  return (
    <>
      <div className="cursos-container">
        <h2 className="cursos-title">{title}</h2>
        <div className="cursos-list">
          <div className="curso-card">
            <div className="curso-image-placeholder">
              <img src={imagen} alt={title} className="curso-image" />
            </div>
            <h3 className="curso-nombre">{title}</h3>
            <p className="curso-nivel">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aula;
