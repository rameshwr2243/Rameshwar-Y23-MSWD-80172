import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Faculty from './components/Faculty';
import Student from './components/Student';
import Courses from './components/Courses';
import Assignments from './components/Assignments.js';
import User from './components/User';
import Timetable from './components/Timetable';

const App = () => {
  const [activeComponent, setActiveComponent] = useState('');
  const [username, setUsername] = useState('');
  const [userType, setUserType] = useState('');

  const handleUserInput = () => {
    const userInput = prompt('Enter your username:');
    const typeInput = prompt('Enter your user type (e.g., Student, Faculty):');
    setUsername(userInput);
    setUserType(typeInput);
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Faculty':
        return <Faculty />;
      case 'Student':
        return <Student />;
      case 'Courses':
        return <Courses />;
      case 'Assignments':
        return <Assignments />;
      case 'Timetable':
        return <Timetable />;
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.userContainer}>
        <button onClick={handleUserInput} style={styles.inputButton}>Enter User Info</button>
        {username && userType && (
          <div style={styles.userOutput}>
            {username} logged in as {userType}
          </div>
        )}
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.button} onClick={() => setActiveComponent('Faculty')}>Faculty</button>
        <button style={styles.button} onClick={() => setActiveComponent('Student')}>Student</button>
        <button style={styles.button} onClick={() => setActiveComponent('Courses')}>Courses</button>
        <button style={styles.button} onClick={() => setActiveComponent('Assignments')}>Assignments</button>
        <button style={styles.button} onClick={() => setActiveComponent('Timetable')}>Timetable</button>
      </div>
      <div style={styles.componentContainer}>
        {renderComponent()}
      </div>
      <Footer />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    minHeight: '100vh',
    position: 'relative',
  },
  userContainer: {
    margin: '20px 0',
    textAlign: 'center',
  },
  inputButton: {
    padding: '10px 20px',
    margin: '10px 0',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  userOutput: {
    marginTop: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    margin: '20px 0',
  },
  button: {
    padding: '10px 20px',
    margin: '0 10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    flex: '1',
  },
  componentContainer: {
    marginTop: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '100%',
    maxWidth: '800px',
    textAlign: 'center',
  },
};

export default App;
