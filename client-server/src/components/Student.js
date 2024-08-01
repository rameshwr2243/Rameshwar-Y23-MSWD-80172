import React from 'react';

const Student = () => {
  const studentDetails = [
    { id: 'S001', name: 'Alice', branch: 'Computer Science', year: '2nd' },
    { id: 'S002', name: 'Bob', branch: 'Mechanical', year: '3rd' },
    { id: 'S003', name: 'Charlie', branch: 'Electrical', year: '1st' },
    { id: 'S004', name: 'David', branch: 'Civil', year: '4th' },
    { id: 'S005', name: 'Eve', branch: 'Chemical', year: '2nd' },
  ];

  return (
    <div>
      <h2>Students</h2>
      <ul>
        {studentDetails.map((student) => (
          <li key={student.id}>
            ID: {student.id}, Name: {student.name}, Branch: {student.branch}, Year: {student.year}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Student;
