import React from 'react';

const Timetable = () => {
  const timetableData = {
    Monday: {
      '9:20 - 11:00': 'DSS',
      '11:10 - 12:50': 'DAV',
      '1:45 - 3:20': 'AI&ML',
      '3:30 - 5:20': 'MSWD',
    },
    Tuesday: {
      '9:20 - 11:00': 'RAIT',
      '11:10 - 12:50': 'DSS',
      '1:45 - 3:20': 'DAV',
      '3:30 - 5:20': 'AI&ML',
    },
    Wednesday: {
      '9:20 - 11:00': 'MSWD',
      '11:10 - 12:50': 'RAIT',
      '1:45 - 3:20': 'DSS',
      '3:30 - 5:20': 'DAV',
    },
    Thursday: {
      '9:20 - 11:00': 'AI&ML',
      '11:10 - 12:50': 'MSWD',
      '1:45 - 3:20': 'RAIT',
      '3:30 - 5:20': 'DSS',
    },
    Friday: {
      '9:20 - 11:00': 'DAV',
      '11:10 - 12:50': 'AI&ML',
      '1:45 - 3:20': 'MSWD',
      '3:30 - 5:20': 'RAIT',
    },
  };
  const times = ['9:20 - 11:00', '11:10 - 12:50', '1:45 - 3:20', '3:30 - 5:20'];
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
