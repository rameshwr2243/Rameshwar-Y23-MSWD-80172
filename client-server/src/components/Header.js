// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1>KL University</h1>
    </header>
  );
};

const styles = {
  header: {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f1f1f1',
    borderBottom: '1px solid #ddd',
  },
};

export default Header;
