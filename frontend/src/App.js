import React, { useState } from 'react';
import DocumentInput from './components/DocumentInput';
import Quiz from './components/Quiz';
import Score from './components/Score';

const App = () => {
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [score, setScore] = useState(null);

  const handleGenerateQuiz = async (document) => {
    try {
      const response = await fetch('http://localhost:3000/quiz/generate', { // Ensure the backend server address is correct
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ document }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate quiz.');
      }

      const data = await response.json();
      setQuizQuestions(data.questions);
    } catch (error) {
      console.error('Error generating quiz:', error);
      alert('There was an error generating the quiz. Please try again.');
    }
  };

  const handleQuizSubmit = (score) => {
    setScore(score);
  };

  return (
    <div className="container mx-auto p-4">
      {!quizQuestions.length && <DocumentInput onGenerateQuiz={handleGenerateQuiz} />}
      {quizQuestions.length > 0 && score === null && (
        <Quiz questions={quizQuestions} onSubmit={handleQuizSubmit} />
      )}
      {score !== null && <Score score={score} total={quizQuestions.length} />}
    </div>
  );
};

export default App;
