import React from 'react';

const Faculty = () => {
  const facultyDetails = [
    { id: '1023', name: 'Dr. MOHAN', designation: 'Professor', department: 'Computer Science' },
    { id: '3125', name: 'Dr. PRASAD', designation: 'Associate Professor', department: 'ECE' },
    { id: '9256', name: 'Dr. MITHRA', designation: 'Assistant Professor', department: 'AI&DS' },
  ];

  return (
    <div style={styles.container}>
      <h2>Faculty</h2>
      <div style={styles.cardContainer}>
        {facultyDetails.map((faculty) => (
          <div key={faculty.id} style={styles.card}>
            <h3>{faculty.name}</h3>
            <p>ID: {faculty.id}</p>
            <p>Designation: {faculty.designation}</p>
            <p>Department: {faculty.department}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    margin: '20px',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '20px',
    margin: '10px',
    width: '250px',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
};

export default Faculty;
