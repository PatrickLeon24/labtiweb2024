import React from "react";
import Sidebar from "../sidebar/sidebar";
import TopBar from "../topbar/TopBar";
import "./Manual.css"; // Importamos un archivo CSS específico para Manual (puedes crearlo según necesidad)

const Manual = () => {
  return (
    <div className="manual-container">
      {/* TopBar en la parte superior */}
      <TopBar className="topbar" />
      
      {/* Contenedor para el Sidebar y el contenido principal */}
      <div style={{ display: 'flex', flexGrow: 1 }}>
        {/* Sidebar */}
        <Sidebar className="sidebar" />

        {/* Contenido principal que ocupa el espacio restante */}
        <div className="content">
          <h2>Manuales de LABS TI</h2>
          <p>Consulta y descarga los manuales de LABS TI para obtener información detallada sobre nuestras herramientas y procesos.</p>
          
          {/* Lista de manuales */}
          <div className="manual-list">
            <div className="manual-item">
              <span>Manual de Servomotor</span>
              <a href="/manuals/Doc1.pdf" className="download-button" download>
                ⬇ Descargar
              </a>
            </div>
            <div className="manual-item">
              <span>Manual de sensor DHT11</span>
              <a href="/manuals/manual_sensor_dht11.pdf" className="download-button" download>
                ⬇ Descargar
              </a>
            </div>
            <div className="manual-item">
              <span>Manual de Buzzer</span>
              <a href="/manuals/manual_buzzer.pdf" className="download-button" download>
                ⬇ Descargar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manual;
