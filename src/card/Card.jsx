import React from 'react';

// Componente Card reutilizable
const Card = ({ title, description }) => {
  return (
    <div style={styles.cardContainer}>
      <h3 style={styles.cardTitle}>{title}</h3>
      <div style={styles.cardContent}>
        <div style={styles.imagePlaceholder}>
          <div style={styles.shape}></div>
          <div style={styles.shape}></div>
          <div style={styles.shape}></div>
        </div>
        <div style={styles.descriptionContainer}>
          <h4 style={styles.descriptionTitle}>Descripción</h4>
          <p style={styles.descriptionText}>{description}</p>
          <a href="#" style={styles.link}>Ver todo</a>
        </div>
      </div>
    </div>
  );
};

// Estilos en línea
const styles = {
  cardContainer: {
    width: '300px',
    backgroundColor: '#f5e1c0',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    margin: '10px',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: '80px',
    height: '80px',
    backgroundColor: '#e0e0e0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '8px',
    marginRight: '10px',
  },
  shape: {
    width: '20px',
    height: '20px',
    backgroundColor: '#b0b0b0',
    margin: '3px',
  },
  descriptionContainer: {
    flex: 1,
  },
  descriptionTitle: {
    fontWeight: 'bold',
  },
  descriptionText: {
    fontSize: '14px',
    color: '#333',
  },
  link: {
    color: '#007bff',
    fontSize: '14px',
    textDecoration: 'none',
    marginTop: '10px',
    display: 'inline-block',
  },
};
export default Card;