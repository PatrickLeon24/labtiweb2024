import React from "react";
import Sidebar from "../sidebar/sidebar";
import TopBar from "../topbar/TopBar";
import iot from '../Images/iot.jpg';

const Cursos = () => {
  const cursos = [
    { nombre: "Arquitectura de Computadoras", nivel: "Nivel 3" },
    { nombre: "Fundamentos de electricidad y electrónica", nivel: "Nivel 4" },
    { nombre: "Sistemas Operativos", nivel: "Nivel 4" },
    { nombre: "Arquitectura de Computadoras", nivel: "Nivel 3" },
  ];

  // Inline styles for the grid and cards
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',  // 2 columns
    gap: '20px',  // space between columns and rows
    marginTop: '10px',
  };

  const cardStyle = {
    backgroundColor: '#f4f4f4',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const imagePlaceholderStyle = {
    width: '100%',
    height: '150px',  // Fixed height for the image
    overflow: 'hidden',
    borderRadius: '8px',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',  // Ensures the image covers the area without distortion
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
    <>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        {/* TopBar en la parte superior */}
        <TopBar />

        {/* Contenedor para el Sidebar y el contenido principal */}
        <div style={{ display: 'flex', flexGrow: 1 }}>
          {/* Sidebar en la izquierda */}
          <Sidebar />

          {/* Contenido principal que ocupa el espacio restante */}
          <div style={{ marginTop: '64px', padding: '20px', flexGrow: 1, overflowY: 'auto' }}>
            
              <h2 className="cursos-title">Cursos</h2>
              <div style={gridStyle}>
                {cursos.map((curso, index) => (
                  <div key={index} style={{ marginTop: '16px' }} className="curso-card">
                    <div style={imagePlaceholderStyle}>
                      <img src={iot} alt={curso.nombre} style={imageStyle} />
                    </div>
                    <h3 style={titleStyle}>{curso.nombre}</h3>
                    <p style={levelStyle}>{curso.nivel}</p>
                  </div>
                ))}
              </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Cursos;
