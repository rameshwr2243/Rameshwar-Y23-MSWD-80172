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
    backgroundColor: 'silver',
    padding: '10px',
    textAlign: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
};

export default Footer;
