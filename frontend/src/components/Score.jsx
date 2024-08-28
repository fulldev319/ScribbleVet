import React from 'react';

const Score = ({ score, total }) => {
  return (
    <div className="p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Your Score</h2>
      <p className="text-xl">{`You scored ${score} out of ${total}`}</p>
      <p className="mt-2 text-green-600">{score >= total / 2 ? 'Well done!' : 'Keep trying!'}</p>
    </div>
  );
};

export default Score;
