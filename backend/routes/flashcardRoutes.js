const express = require('express');
const { generateFlashcards, generateTimeComplexityQuiz } = require('../services/geminiService');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

// Route to generate flashcards
router.post('/flashcards', authMiddleware, async (req, res) => {
  const { concepts, language } = req.body;

  try {
    const flashcards = await generateFlashcards(concepts, language);
    res.json(flashcards);
  } catch (error) {
    res.status(500).json({ message: 'Error generating flashcards' });
  }
});

// Route to generate time complexity quiz
router.post('/time-complexity', authMiddleware, async (req, res) => {
  try {
    const { codeSnippet, complexity } = await generateTimeComplexityQuiz();
    res.json({ codeSnippet, complexity });
  } catch (error) {
    res.status(500).json({ message: 'Error generating time complexity quiz' });
  }
});

module.exports = router;
