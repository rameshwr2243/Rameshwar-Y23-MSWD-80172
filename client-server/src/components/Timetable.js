// src/components/TimeTable.js
import React from 'react';

const TimeTable = () => {
  // Define class schedule for each day
  const timetable = {
    Monday: ['MSWD', 'CTOD', 'DSS', 'AI&ML'],
    Tuesday: ['RAIT', 'DAV', 'IPE', 'CTOD'],
    Wednesday: ['DSS', 'AI&ML', 'CTOD', 'MSWD'],
    Thursday: ['DAV', 'AI&ML', 'RAIT', 'DSS'],
    Friday: ['IPE', 'DAV', 'CTOD', 'MSWD'],
  };

  const times = ['9:20 - 11:20', '11:20 - 12:50', '1:40 - 3:30', '3:40 - 5:20'];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Time Table</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Day</th>
            {times.map((time, index) => (
              <th key={index} style={styles.th}>{time}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.entries(timetable).map(([day, classes], index) => (
            <tr key={index}>
              <td style={styles.td}>{day}</td>
              {classes.map((className, idx) => (
                <td key={idx} style={styles.td}>{className}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    margin: '20px', // Margin around the container
    textAlign: 'center', // Center the title
  },
  title: {
    marginBottom: '20px', // Space below the title
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    margin: '0 auto', // Center the table
  },
  th: {
    border: '1px solid #ddd',
    padding: '10px',
    textAlign: 'left',
    backgroundColor: '#f2f2f2', // Header background color
  },
  td: {
    border: '1px solid #ddd',
    padding: '10px',
  },
};

export default TimeTable;
