import React from "react";
import "./Cursos.css";
import Sidebar from "../sidebar/sidebar";
import TopBar from "../topbar/TopBar";


const Cursos = () => {
  const cursos = [
    { nombre: "Arquitectura de Computadoras", nivel: "Nivel 3" },
    { nombre: "Fundamentos de electricidad y electrónica", nivel: "Nivel 4" },
    { nombre: "Sistemas Operativos", nivel: "Nivel 4" },
    { nombre: "Arquitectura de Computadoras", nivel: "Nivel 3" },
  ];



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
            <div className="cursos-container">
              <h2 className="cursos-title">Cursos</h2>
              <div className="cursos-grid">
                {cursos.map((curso, index) => (
                  <div key={index} className="curso-card">
                    <div className="curso-image-placeholder">
                      {/* Imagen de fondo o ícono */}
                    </div>
                    <h3 className="curso-nombre">{curso.nombre}</h3>
                    <p className="curso-nivel">{curso.nivel}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cursos;
