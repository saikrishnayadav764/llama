import React from 'react';

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Oops!</h1>
      <p style={styles.text}>Sorry, the page you're looking for doesn't exist.</p>
      <img draggable="false" style={styles.image} src="./error.jpg" alt="404 Error" />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '3rem',
    marginBottom: '1rem',
    color: '#333',
  },
  text: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '2rem',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    width: "200px",
    borderRadius:"5px"
  },
};

export default NotFoundPage;
