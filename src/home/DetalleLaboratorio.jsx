import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";  // Para acceder a los parámetros de la URL
import { pcdeApoyo } from '../config';
import Sidebar from "../sidebar/sidebar";
import TopBar from "../topbar/TopBar";
import './DetalleLaboratorio.css';

const DetalleLaboratorio = () => {
  const { id } = useParams();  // Obtiene el id de la URL
  const [laboratorio, setLaboratorio] = useState(null);

  useEffect(() => {
    const fetchLaboratorio = async () => {
      try {
        const response = await fetch(`http://${pcdeApoyo}/back/obtener_laboratorio1/${id}`);
        if (!response.ok) {
          throw new Error("No se pudo cargar el laboratorio");
        }
        const data = await response.json();
        setLaboratorio(data);  // Almacena los detalles del laboratorio
      } catch (error) {
        console.error("Error al cargar el laboratorio:", error);
      }
    };

    fetchLaboratorio();
  }, [id]);  // Ejecuta la solicitud cada vez que cambia el id

  if (!laboratorio) {
    return <div>Cargando...</div>; // Muestra un mensaje mientras se carga el laboratorio
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
    <TopBar className="topbar" />
    <div style={{ display: 'flex', flexGrow: 1 }}>

    <Sidebar className="sidebar" />

    <div className="detalle-laboratorio">
      <h2>{laboratorio.nombre}</h2>
      <p>{laboratorio.descripcion}</p>

      <div className="imagenes">
        <img src={laboratorio.foto1} alt="Foto 1" />
        <img src={laboratorio.foto2} alt="Foto 2" />
        <img src={laboratorio.foto3} alt="Foto 3" />
      </div>
    </div>


    </div>
   


    </div>





   
    
  );
};

export default DetalleLaboratorio;
