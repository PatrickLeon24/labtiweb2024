import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Ícono de hamburguesa

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header style={styles.topBar}>
      {/* Menú hamburguesa */}
      <div style={styles.menuIcon} onClick={toggleMenu}>
        <FaBars size={30} color="#fff" />
      </div>

      {/* Título */}
      <h1 style={styles.title}>Plataforma LABS TI</h1>

      {/* Menú de navegación si está abierto */}
      {isMenuOpen && (
        <nav style={styles.nav}>
          <ul>
            <li>
              <a href="#home" style={styles.navItem}>Home</a>
            </li>
            <li>
              <a href="#about" style={styles.navItem}>About</a>
            </li>
            <li>
              <a href="#services" style={styles.navItem}>Services</a>
            </li>
            <li>
              <a href="#contact" style={styles.navItem}>Contact</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
  
};

const styles = {

    
  /* Top app bar */
  topBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Distribuir espacio entre los elementos
    padding: '8px 20px', // Espaciado a los lados
    gap: '6px',
    
    position: 'absolute',
    width: '100%', // Asegura que el top bar ocupe el 100% del ancho
    height: '64px',
    left: '0',
    top: '0',

    backgroundColor: '#FF9500', // Color naranja
    color: '#fff',
  },

  /* Icono de menú hamburguesa */
  menuIcon: {
    cursor: 'pointer',
    marginRight: '16px',
  },

  /* Título centrado */
  title: {
    fontSize: '24px',
    margin: '0',
    textAlign: 'center', // Centra el texto
    flexGrow: 1, // El título ocupa el espacio restante
  },

  /* Menú de navegación */
  nav: {
    position: 'absolute',
    top: '64px',
    left: '0',
    right: '0',
    backgroundColor: '#FF9500',
    padding: '10px',
    borderTop: '2px solid #fff',
  },

  navItem: {
    color: '#fff',
    textDecoration: 'none',
    display: 'block',
    padding: '10px',
    fontSize: '18px',
  },

  navItemHover: {
    backgroundColor: '#e69500',
  },
};


export default TopBar;
