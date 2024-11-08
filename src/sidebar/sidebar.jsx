import React, { useState } from 'react';

const Sidebar = () => {
  const [hovered, setHovered] = useState(null);  
  const [selected, setSelected] = useState(null);  

  const styles = {
    sidebar: {
      position: 'relative',
      width: '200px',
      height: '100vh',
      left: '0',
      top: '80px',
      backgroundColor: '#D9D9D9',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 10px',
    },

    navItem: {
      color: '#000',
      textDecoration: 'none',
      fontSize: '18px',
      padding: '10px 0',
      textAlign: 'center',
      cursor: 'pointer',
      borderBottom: '1px solid #ccc',
      padding: '20px',
      transition: 'background-color 0.3s ease',
    },

    navItemHover: {
      backgroundColor: '#FF9500',
      color: '#fff',
    },

    navItemSelected: {
      backgroundColor: '#FF9500',
      color: '#fff',
    },
  };

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const handleItemClick = (index) => {
    setSelected(index);
  };

  return (
    <div style={styles.sidebar}>
      <a
        href="/"
        style={{
          ...styles.navItem,
          ...(hovered === 0 ? styles.navItemHover : {}),
          ...(selected === 0 ? styles.navItemSelected : {}),
        }}
        onMouseEnter={() => handleMouseEnter(0)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleItemClick(0)}
      >
        Inicio
      </a>
      <a
        href="#cursos"
        style={{
          ...styles.navItem,
          ...(hovered === 1 ? styles.navItemHover : {}),
          ...(selected === 1 || selected === 2 ? styles.navItemSelected : {}),
        }}
        onMouseEnter={() => handleMouseEnter(1)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleItemClick(1)}
      >
        Cursos
      </a>
      <a
        href="#disponibilidad"
        style={{
          ...styles.navItem,
          ...(hovered === 2 ? styles.navItemHover : {}),
          ...(selected === 1 || selected === 2 ? styles.navItemSelected : {}),
        }}
        onMouseEnter={() => handleMouseEnter(2)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleItemClick(2)}
      >
        Disponibilidad
      </a>
      <a
        href="#materiales"
        style={{
          ...styles.navItem,
          ...(hovered === 3 ? styles.navItemHover : {}),
          ...(selected === 3 ? styles.navItemSelected : {}),
        }}
        onMouseEnter={() => handleMouseEnter(3)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleItemClick(3)}
      >
        Materiales
      </a>
      <a
        href="#guias"
        style={{
          ...styles.navItem,
          ...(hovered === 4 ? styles.navItemHover : {}),
          ...(selected === 4 ? styles.navItemSelected : {}),
        }}
        onMouseEnter={() => handleMouseEnter(4)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleItemClick(4)}
      >
        Guías
      </a>
      <a
        href="#manuales"
        style={{
          ...styles.navItem,
          ...(hovered === 5 ? styles.navItemHover : {}),
          ...(selected === 5 ? styles.navItemSelected : {}),
        }}
        onMouseEnter={() => handleMouseEnter(5)}
        onMouseLeave={handleMouseLeave}
        onClick={() => handleItemClick(5)}
      >
        Manuales
      </a>
    </div>
  );
};

export default Sidebar;
