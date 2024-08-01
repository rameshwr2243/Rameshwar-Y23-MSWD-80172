import React from 'react';

const Courses = () => {
  const courses = [
    { code: 'CS101', name: 'Introduction to Computer Science', ltps: '3-1-0', credits: 3 },
    { code: 'MA101', name: 'Calculus I', ltps: '3-1-0', credits: 3 },
  ];

  return (
    <div>
      <h2>Courses</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.code}>
            Code: {course.code}, Name: {course.name}, LTPS: {course.ltps}, Credits: {course.credits}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
