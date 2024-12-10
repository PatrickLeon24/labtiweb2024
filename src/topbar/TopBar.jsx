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

      {/* Imagen de la Universidad de Lima a la derecha */}
      <a href="https://www.ulima.edu.pe/pregrado/ingenieria-de-sistemas/plan-de-estudios-de-sistemas" style={styles.universityLink}>
        <img
          src="https://presidentsmedals.com/images/mugshots/4303498.jpg"
          alt="Universidad de Lima"
          style={styles.universityImage}
        />
      </a>

      {/* Menú de navegación si está abierto */}
      {isMenuOpen && (
        <nav style={styles.nav}>
          {/* Agrega los elementos de navegación aquí si los tienes */}
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
    margin: '50px',
    textAlign: 'center', // Centra el texto
    flexGrow: 1, // El título ocupa el espacio restante
    marginLeft: "410px",
  },

  /* Enlace de la Universidad de Lima */
  universityLink: {
    marginRight: '30px', // Separación entre el título y el enlace
    marginLeft: '20px',
    margin: '30px',
    padding: '0',
    width: '120px',
    

  },

  /* Estilo de la imagen */
  universityImage: {
    width: '120px',  // Tamaño de la imagen, puedes ajustarlo según lo necesites
    height: 'auto',  // Mantiene las proporciones de la imagen
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
