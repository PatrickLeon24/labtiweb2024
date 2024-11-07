import React, { useState } from 'react';

const Sidebar = () => {
  const styles = {
    /* Estilos para el Sidebar */
    sidebar: {
      position: 'relative',
      width: '200px',
      height: '100vh',
      left: '0',
      top: '80px', // Para que quede debajo del Top Bar
      backgroundColor: '#D9D9D9',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 10px',
    },

    /* Estilos de los elementos del menú */
    navItem: {
      color: '#000', // Color de texto negro
      textDecoration: 'none',
      fontSize: '18px',
      padding: '10px 0',
      textAlign: 'center',
      cursor: 'pointer',
      borderBottom: '1px solid #ccc',
      padding:'20px', // Línea divisoria entre los ítems
    },

    /* Estilo para el hover */
    navItemHover: {
      backgroundColor: '#FF9500', // Color naranja cuando pasas el mouse por encima
      color: '#fff', // Cambiar el color del texto al blanco cuando esté en hover
    },
  };

  // Estado para manejar el hover de los elementos
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div style={styles.sidebar}>
      {/* Menú de navegación */}
      <a
        href="/"
        style={{
          ...styles.navItem,
          ...(hovered === 0 ? styles.navItemHover : {}),
        }}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
      >
        Inicio
      </a>
      <a
        href="#cursos"
        style={{
          ...styles.navItem,
          ...(hovered === 1 ? styles.navItemHover : {}),
        }}
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
      >
        Curso
      </a>
      <a
        href="#disponibilidad"
        style={{
          ...styles.navItem,
          ...(hovered === 2 ? styles.navItemHover : {}),
        }}
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
      >
        Disponibilidad
      </a>
      <a
        href="#materiales"
        style={{
          ...styles.navItem,
          ...(hovered === 3 ? styles.navItemHover : {}),
        }}
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={handleMouseLeave}
      >
        Materiales
      </a>
      <a
        href="#guias"
        style={{
          ...styles.navItem,
          ...(hovered === 4 ? styles.navItemHover : {}),
        }}
        onMouseEnter={() => handleMouseEnter(4)}
        onMouseLeave={handleMouseLeave}
      >
        Guías
      </a>
      <a
        href="#manuales"
        style={{
          ...styles.navItem,
          ...(hovered === 5 ? styles.navItemHover : {}),
        }}
        onMouseEnter={() => handleMouseEnter(5)}
        onMouseLeave={handleMouseLeave}
      >
        Manuales
      </a>
    </div>
  );
};

export default Sidebar;
