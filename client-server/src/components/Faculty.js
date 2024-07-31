import React from 'react';
const Faculty = () => {
  const facultyMembers = [
    { id: 3121, name: 'Dr.Mohan', designation: 'Professor', department: 'Cse' },
    { id: 2456, name: 'Dr.Prasad', designation: 'Associate Professor', department: 'Cs&It' },
    { id: 3398, name: 'Dr.Mithra', designation: 'Assistant Professor', department: 'Ece' },
  ];
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Faculty Details</h2>
      <ul style={styles.list}>
        {facultyMembers.map(faculty => (
          <li key={faculty.id} style={styles.listItem}>
            <strong>ID:</strong> {faculty.id} | 
            <strong> Name:</strong> {faculty.name} | 
            <strong> Designation:</strong> {faculty.designation} | 
            <strong> Department:</strong> {faculty.department}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    margin: '20px',
    textAlign: 'center',
  },
  title: {
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none', // Remove default list styling
    padding: 0,
  },
  listItem: {
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
    textAlign: 'left', // Align text to the left
  },
};

export default Faculty;
