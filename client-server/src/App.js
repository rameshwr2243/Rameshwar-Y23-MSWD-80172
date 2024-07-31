import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Faculty from './components/Faculty';
import Student from './components/Student';
import Courses from './components/Courses';
import TimeTable from './components/Timetable';
import Assignments from './components/Assignments';

const App = () => {
  const [activeComponent, setActiveComponent] = useState('Faculty');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Faculty':
        return <Faculty />;
      case 'Student':
        return <Student />;
      case 'Courses':
        return <Courses />;
      case 'TimeTable':
        return <TimeTable />;
      case 'Assignments':
        return <Assignments />;
      default:
        return <Faculty />;
    }
  };

  return (
    <div style={styles.container}>
      <Header />
      <nav style={styles.nav}>
        <button onClick={() => setActiveComponent('Faculty')}>Faculty</button>
        <button onClick={() => setActiveComponent('Student')}>Student</button>
        <button onClick={() => setActiveComponent('Courses')}>Courses</button>
        <button onClick={() => setActiveComponent('TimeTable')}>Time Table</button>
        <button onClick={() => setActiveComponent('Assignments')}>Assignments</button>
      </nav>
      <main style={styles.main}>
        <div style={styles.content}>{renderComponent()}</div>
      </main>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '10px',
    backgroundColor: '#e9ecef',
  },
  main: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    textAlign: 'center', // Center the text inside components
    padding: '20px',
  },
};

export default App;
