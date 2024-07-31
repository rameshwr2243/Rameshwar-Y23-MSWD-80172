import React from 'react';
const Student = () => {
  const students = [
    { id: 1, name: 'Alice Smith', branch: 'Computer Science', year: '2nd Year' },
    { id: 2, name: 'Bob Johnson', branch: 'Information Technology', year: '3rd Year' },
    { id: 3, name: 'Charlie Brown', branch: 'Electronics', year: '1st Year' },
    { id: 4, name: 'Diana Prince', branch: 'Mechanical', year: '4th Year' },
    { id: 5, name: 'Edward Elric', branch: 'Chemical', year: '2nd Year' },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Student Details</h2>
      <div style={styles.studentList}>
        {students.map(student => (
          <div key={student.id} style={styles.card}>
            <h3>ID: {student.id}</h3>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Branch:</strong> {student.branch}</p>
            <p><strong>Year:</strong> {student.year}</p>
          </div>
        ))}
      </div>
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
  studentList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px', // Space between cards
  },
  card: {
    border: '1px solid #ddd',
    padding: '15px',
    borderRadius: '5px',
    boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
    width: '200px', // Fixed width for cards
    textAlign: 'left', // Align text to the left
  },
};

export default Student;
