import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'; // Backend URL

// User authentication API calls
export const registerUser = (userData) => axios.post(`${API_URL}/auth/register`, userData);
export const loginUser = (userData) => axios.post(`${API_URL}/auth/login`, userData);

// Roadmap API calls
export const generateRoadmap = (prompt, token) =>
  axios.post(
    `${API_URL}/roadmap`,
    { prompt },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

// Flashcard API calls
export const generateFlashcards = (concepts, language, token) =>
  axios.post(
    `${API_URL}/flashcards/flashcards`,
    { concepts, language },
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

export const generateTimeComplexityQuiz = (token) =>
  axios.post(
    `${API_URL}/flashcards/time-complexity`,
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
