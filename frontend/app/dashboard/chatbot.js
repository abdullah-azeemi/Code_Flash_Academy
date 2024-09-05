'use client';
import React, { useState } from 'react';
import axios from 'axios';

const RoadmapChatbot = () => {
  const [prompt, setPrompt] = useState('');
  const [roadmap, setRoadmap] = useState(null);

  const handleGenerateRoadmap = async () => {
    const token = localStorage.getItem('token');
    const { data } = await axios.post(
      '/api/roadmap',
      { prompt },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setRoadmap(data);
  };

  return (
    <div>
      <h3>Roadmap Generator</h3>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Ask the chatbot for a learning roadmap"
      ></textarea>
      <button onClick={handleGenerateRoadmap}>Generate Roadmap</button>
      {roadmap && <div>{roadmap.roadmapData}</div>}
    </div>
  );
};

export default RoadmapChatbot;
