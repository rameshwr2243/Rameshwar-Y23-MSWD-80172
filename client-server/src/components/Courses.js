// src/components/Courses.js
import React from 'react';

const Courses = () => {
  const courses = [
    { code: 'CS101', name: 'Introduction to Computer Science', ltps: '3-0-2', credits: 4 },
    { code: 'MA101', name: 'Calculus I', ltps: '3-1-0', credits: 4 },
  ];

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.code}>
            {course.code} - {course.name}, LTPS: {course.ltps}, Credits: {course.credits}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
