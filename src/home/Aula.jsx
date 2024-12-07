import React from 'react';
import './Aula.css';  // Asegúrate de importar los estilos CSS

const Aula = ({ title, description, imagen }) => {
  return (
    <>
      <div className="aula-container">
        <h2 className="aula-title">{title}</h2>
        <div className="aula-list">
          <div className="aula-card">
            <div className="aula-image-placeholder">
              <img src={imagen} alt={title} className="aula-image" />
            </div>
            <h3 className="aula-nombre">{title}</h3>
            <p className="aula-nivel">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aula;
