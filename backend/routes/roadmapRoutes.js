const express = require('express');
const { queryStackAI } = require('../services/stackAIService');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware'); // Add authentication middleware if needed

router.post('/', authMiddleware, async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await queryStackAI({ 'user_id': req.user.id, 'in-0': prompt });
    res.json(response);
  } catch (error) {
    res.status(500).json({ message: 'Error generating roadmap' });
  }
});

module.exports = router;
