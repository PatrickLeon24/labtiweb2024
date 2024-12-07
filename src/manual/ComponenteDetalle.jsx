import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { pcdeApoyo } from '../config';
 // Si tienes estilos específicos, inclúyelos
import Sidebar from "../sidebar/sidebar";
import TopBar from "../topbar/TopBar";

const ComponenteDetalle = () => {
  const { id } = useParams();  // Obtiene el id del componente desde la URL
  const [componente, setComponente] = useState(null);
  const [loading, setLoading] = useState(true);  // Para mostrar el estado de carga

  // Se ejecuta cuando el componente se monta o cuando cambia el ID
  useEffect(() => {
    setLoading(true);  // Iniciar carga cuando cambie el id
    fetch(`http://${pcdeApoyo}/back/obtener_componente1/${id}`)
      .then(response => response.json())
      .then(data => {
        setComponente(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al obtener el componente:", error);
        setLoading(false);
      });
  }, [id]);

  // Si estamos cargando, mostramos el mensaje de carga
  if (loading) {
    return <div>Cargando...</div>;
  }

  // Si no se encontró el componente, mostramos un mensaje de error
  if (!componente) {
    return <div>No se pudo encontrar el componente.</div>;
  }

  return (
    <div className="manual-container">
      {/* Aquí puedes incluir el TopBar y Sidebar si son necesarios */}
      <TopBar className="topbar" />
      <div style={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar className="sidebar" />
        <div className="content">
          <h2>{componente.nombre}</h2>
          <div style={{ marginBottom: '20px' }}>
            <img
              src={componente.foto1}
              alt={componente.nombre}
              style={{ width: '100%', maxWidth: '600px', borderRadius: '8px' }}
            />
          </div>
          <h3>Manual(es) de {componente.nombre}</h3>
          <div className="manual-list">
            {/* Listar los manuales asociados al componente */}
            {componente.manuals && componente.manuals.length > 0 ? (
              componente.manuals.map((manual) => (
                <div key={manual.id} className="manual-item">
                  <span>{manual.nombre}</span>
                  <a href={manual.url} className="download-button" download>
                    ⬇ Descargar
                  </a>
                </div>
              ))
            ) : (
              <div>No hay manuales disponibles para este componente.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponenteDetalle;
