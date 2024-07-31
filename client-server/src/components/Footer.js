// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <h5>Copyrights Reserved MSWD 2024</h5>
    </footer>
  );
};

const styles = {
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f1f1f1',
    textAlign: 'center',
    padding: '10px',
    borderTop: '1px solid #ddd',
  },
};

export default Footer;
