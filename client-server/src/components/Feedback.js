// src/components/Feedback.js
import React, { useState } from 'react';

const feedbackData = [
  { facultyName: 'Dr. Smith', course: 'Math', suggestion: 'Keep up the good work!' },
  { facultyName: 'Prof. Johnson', course: 'Science', suggestion: 'Need more practical examples.' },
  { facultyName: 'Dr. Brown', course: 'History', suggestion: 'Great lectures, very engaging.' },
  { facultyName: 'Dr. White', course: 'English', suggestion: 'Too much reading material.' },
  { facultyName: 'Prof. Green', course: 'Physics', suggestion: 'More interactive sessions needed.' },
];

const Feedback = () => {
  const [feedbackTypes, setFeedbackTypes] = useState(
    feedbackData.map(() => 'Good') // Default to 'Good'
  );

  const handleFeedbackChange = (index, type) => {
    const newFeedbackTypes = [...feedbackTypes];
    newFeedbackTypes[index] = type;
    setFeedbackTypes(newFeedbackTypes);
  };

  const styles = {
    container: {
      margin: '20px',
      textAlign: 'center',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '20px',
      padding: '20px',
    },
    card: {
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      textAlign: 'left',
    },
    cardHeader: {
      margin: '0 0 10px 0',
    },
    cardBody: {
      margin: '10px 0',
    },
    radioGroup: {
      display: 'flex',
      justifyContent: 'space-around',
      margin: '10px 0',
    },
  };

  return (
    <div style={styles.container}>
      <h2>Feedback</h2>
      <div style={styles.grid}>
        {feedbackData.map((feedback, index) => (
          <div style={styles.card} key={index}>
            <h3 style={styles.cardHeader}>Faculty: {feedback.facultyName}</h3>
            <p style={styles.cardBody}>Course: {feedback.course}</p>
            <p>Feedback Type:</p>
            <div style={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  value="Good"
                  checked={feedbackTypes[index] === 'Good'}
                  onChange={() => handleFeedbackChange(index, 'Good')}
                />
                Good
              </label>
              <label>
                <input
                  type="radio"
                  value="Bad"
                  checked={feedbackTypes[index] === 'Bad'}
                  onChange={() => handleFeedbackChange(index, 'Bad')}
                />
                Bad
              </label>
              <label>
                <input
                  type="radio"
                  value="Worst"
                  checked={feedbackTypes[index] === 'Worst'}
                  onChange={() => handleFeedbackChange(index, 'Worst')}
                />
                Worst
              </label>
            </div>
            <p>Suggestions/Issues: {feedback.suggestion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
