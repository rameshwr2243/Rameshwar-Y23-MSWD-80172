import React from 'react';

const Student = () => {
  const studentDetails = [
    { id: '2300035001', name: 'ANEESH', branch: 'Computer Science', year: '2ND' },
    { id: '2300035172', name: 'KARTHIK', branch: 'ECE', year: '2ND' },
    { id: '2300080172', name: 'RAM', branch: 'Electrical', year: '2ND' },
    { id: '2300035364', name: 'AMAR', branch: 'Civil', year: '4ND' },
    { id: '23000353256', name: 'AMAN', branch: 'Chemical', year: '2ND' },
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
