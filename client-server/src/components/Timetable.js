import React from 'react';

const Timetable = () => {
  // Timetable data
  const timetableData = {
    Monday: {
      '9:20 - 11:20': 'DSS',
      '11:20 - 1:20': 'DAV',
      '1:20 - 3:20': 'AI&ML',
      '3:20 - 5:20': 'MSWD',
    },
    Tuesday: {
      '9:20 - 11:20': 'RAIT',
      '11:20 - 1:20': 'DSS',
      '1:20 - 3:20': 'DAV',
      '3:20 - 5:20': 'AI&ML',
    },
    Wednesday: {
      '9:20 - 11:20': 'MSWD',
      '11:20 - 1:20': 'RAIT',
      '1:20 - 3:20': 'DSS',
      '3:20 - 5:20': 'DAV',
    },
    Thursday: {
      '9:20 - 11:20': 'AI&ML',
      '11:20 - 1:20': 'MSWD',
      '1:20 - 3:20': 'RAIT',
      '3:20 - 5:20': 'DSS',
    },
    Friday: {
      '9:20 - 11:20': 'DAV',
      '11:20 - 1:20': 'AI&ML',
      '1:20 - 3:20': 'MSWD',
      '3:20 - 5:20': 'RAIT',
    },
  };

  // Timings (columns)
  const times = ['9:20 - 11:20', '11:20 - 1:20', '1:20 - 3:20', '3:20 - 5:20'];
  const days = Object.keys(timetableData);

  return (
    <div style={styles.container}>
      <h2>Timetable</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Day</th>
            {times.map((time) => (
              <th key={time} style={styles.tableHeader}>{time}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {days.map((day) => (
            <tr key={day}>
              <td style={styles.tableCell}>{day}</td>
              {times.map((time) => (
                <td key={time} style={styles.tableCell}>
                  {timetableData[day][time] || 'No Class'}
                </td>
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
    margin: '20px',
    textAlign: 'center',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  tableHeader: {
    backgroundColor: '#007bff',
    color: 'white',
    padding: '10px',
    border: '1px solid #ccc',
  },
  tableCell: {
    padding: '10px',
    border: '1px solid #ccc',
  },
};

export default Timetable;
