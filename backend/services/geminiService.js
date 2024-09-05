const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
require('dotenv').config();

const geminiApiKey = process.env.NEW_GEMINI_KEY;

const generateFlashcards = async (concepts, language) => {
  const promptText = `Generate flashcards for the following concepts: ${concepts.join(', ')} in the programming language: ${language}. Provide concise and clear definitions for each concept. Single Liner flashcards. You have to generate 6 flashcards every time. They should be different every time.`;

  const headers = {
    'Content-Type': 'application/json',
  };

  const data = {
    contents: [{ parts: [{ text: promptText }] }],
  };

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${geminiApiKey}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    });

    const jsonResponse = await response.json();
    const aiResponse = jsonResponse.candidates[0]?.content?.parts[0]?.text;

    if (aiResponse) {
      return parseFlashcards(aiResponse);
    } else {
      return ['Sorry, I couldn’t generate more flashcards.'];
    }
  } catch (error) {
    console.error('Error generating flashcards:', error);
    return ['Sorry, there was a problem generating flashcards.'];
  }
};

const parseFlashcards = (aiResponse) => {
  const lines = aiResponse.split('\n');
  const flashcards = [];
  let currentFlashcard = {};

  for (const line of lines) {
    if (line.startsWith('**Front:**')) {
      currentFlashcard.question = line.replace('**Front:**', '').trim();
    } else if (line.startsWith('**Back:**')) {
      currentFlashcard.answer = line.replace('**Back:**', '').trim();
    }

    if (currentFlashcard.question && currentFlashcard.answer) {
      flashcards.push(currentFlashcard);
      currentFlashcard = {};
    }
  }

  return flashcards;
};

const generateTimeComplexityQuiz = async () => {
  const promptText = `Generate a code snippet in Python and provide its corresponding time complexity...`;

  const headers = {
    'Content-Type': 'application/json',
  };

  const data = {
    contents: [{ parts: [{ text: promptText }] }],
  };

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${geminiApiKey}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    });

    const jsonResponse = await response.json();
    const aiResponse = jsonResponse.candidates[0]?.content?.parts[0]?.text;

    if (aiResponse) {
      const [codeSnippet, complexity] = parseTimeComplexityQuiz(aiResponse);
      return { codeSnippet, complexity };
    } else {
      return { codeSnippet: null, complexity: null };
    }
  } catch (error) {
    console.error('Error generating time complexity quiz:', error);
    return { codeSnippet: null, complexity: null };
  }
};

const parseTimeComplexityQuiz = (aiResponse) => {
  const lines = aiResponse.split('\n');
  const codeSnippet = [];
  let complexity = null;

  lines.forEach((line) => {
    if (line.includes('Time Complexity:')) {
      complexity = line.split(':')[1].trim();
    } else if (line) {
      codeSnippet.push(line);
    }
  });

  return [codeSnippet.join('\n'), complexity];
};

module.exports = { generateFlashcards, generateTimeComplexityQuiz };
