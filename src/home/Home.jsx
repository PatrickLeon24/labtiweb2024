import React from "react";
import CardList from "../card/CardList";
import Sidebar from "../sidebar/sidebar";
import TopBar from "../topbar/TopBar";
import "./Home.css";  // Importamos el archivo CSS

const Home = () => {
  return (
    <div className="home-container">
      {/* TopBar en la parte superior */}
      <TopBar className="topbar" />
      
      {/* Contenedor para el Sidebar y el contenido principal */}
      <div style={{ display: 'flex', flexGrow: 1 }}>
        {/* Sidebar */}
        <Sidebar className="sidebar" />

        {/* Contenido principal que ocupa el espacio restante */}
        <div className="content">
          <h2>Conoce los Laboratorios</h2>
          <p>Los laboratorios de LABS TI son espacios interactivos para aprender y practicar habilidades 
            en tecnología e informática mediante actividades guiadas y simulaciones.</p>
          <CardList  />
        </div>
      </div>
    </div>
  );
};

export default Home;
