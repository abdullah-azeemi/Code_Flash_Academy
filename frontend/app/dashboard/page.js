'use client';
import React, { useState } from 'react';
import { generateRoadmap, generateFlashcards, generateTimeComplexityQuiz } from '../../utils/api';

const Dashboard = () => {
  const [prompt, setPrompt] = useState('');
  const [roadmap, setRoadmap] = useState(null);
  const [flashcards, setFlashcards] = useState(null);
  const [quiz, setQuiz] = useState({ codeSnippet: '', complexity: '' });

  const handleGenerateRoadmap = async () => {
    const token = localStorage.getItem('token');
    const { data } = await generateRoadmap(prompt, token);
    setRoadmap(data);
  };

  const handleGenerateFlashcards = async () => {
    const token = localStorage.getItem('token');
    const { data } = await generateFlashcards(['variables', 'functions'], 'Python', token);
    setFlashcards(data);
  };

  const handleGenerateQuiz = async () => {
    const token = localStorage.getItem('token');
    const { data } = await generateTimeComplexityQuiz(token);
    setQuiz({ codeSnippet: data.codeSnippet, complexity: data.complexity });
  };

  return (
    <div>
      <h2>Dashboard</h2>

      {/* Roadmap Generator */}
      <div>
        <h3>Roadmap Generator</h3>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter a prompt for the roadmap..."
        />
        <button onClick={handleGenerateRoadmap}>Generate Roadmap</button>
        {roadmap && <pre>{JSON.stringify(roadmap, null, 2)}</pre>}
      </div>

      {/* Flashcards Generator */}
      <div>
        <h3>Flashcards</h3>
        <button onClick={handleGenerateFlashcards}>Generate Flashcards</button>
        {flashcards && (
          <ul>
            {flashcards.map((card, index) => (
              <li key={index}>
                <strong>Q:</strong> {card.question} <br />
                <strong>A:</strong> {card.answer}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Time Complexity Quiz */}
      <div>
        <h3>Time Complexity Quiz</h3>
        <button onClick={handleGenerateQuiz}>Generate Quiz</button>
        {quiz.codeSnippet && (
          <div>
            <pre>{quiz.codeSnippet}</pre>
            <p><strong>Time Complexity:</strong> {quiz.complexity}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
