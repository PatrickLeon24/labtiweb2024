import React from 'react';

const CursoCard = ({ curso }) => {
  // Estilos en línea para la tarjeta
  const cardStyle = {
    backgroundColor: '#f4f4f4',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const imagePlaceholderStyle = {
    width: '100%',
    height: '150px',
    overflow: 'hidden',
    borderRadius: '8px',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '10px',
  };

  const levelStyle = {
    fontSize: '14px',
    color: '#888',
  };

  return (
    <div style={cardStyle} className="curso-card">
      <div style={imagePlaceholderStyle}>
        <img src={curso.foto1} alt={curso.nombre} style={imageStyle} /> {/* Foto del curso */}
      </div>
      <h3 style={titleStyle}>{curso.nombre}</h3>
      <p style={levelStyle}>{curso.nivel_curso}</p>
    </div>
  );
};

export default CursoCard;
