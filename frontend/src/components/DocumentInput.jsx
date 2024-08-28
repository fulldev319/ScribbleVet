import React, { useState } from 'react';

const DocumentInput = ({ onGenerateQuiz }) => {
  const [document, setDocument] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (document.trim() === '') {
      alert('Please enter a document.');
      return;
    }
    onGenerateQuiz(document);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <textarea
        value={document}
        onChange={(e) => setDocument(e.target.value)}
        className="w-full h-64 p-2 border rounded"
        placeholder="Paste your document here..."
      ></textarea>
      <button
        type="submit"
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        Generate Quiz
      </button>
    </form>
  );
};

export default DocumentInput;
