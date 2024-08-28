import React, { useState } from 'react';

const Quiz = ({ questions, onSubmit }) => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  const handleAnswer = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    if (answers.includes(null)) {
      alert('Please answer all questions.');
      return;
    }
    const score = answers.filter((answer) => answer === 'yes').length; // Example scoring logic
    onSubmit(score);
  };

  return (
    <div className="p-4">
      {questions.map((question, index) => (
        <div key={index} className="my-4">
          <p className="text-lg mb-2">{question}</p>
          <div className="flex space-x-2">
            <button
              onClick={() => handleAnswer(index, 'yes')}
              className={`py-2 px-4 rounded ${answers[index] === 'yes' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
            >
              Yes
            </button>
            <button
              onClick={() => handleAnswer(index, 'no')}
              className={`py-2 px-4 rounded ${answers[index] === 'no' ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
            >
              No
            </button>
          </div>
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
      >
        Submit Quiz
      </button>
    </div>
  );
};

export default Quiz;
