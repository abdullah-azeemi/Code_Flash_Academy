const express = require('express');
const router = express.Router();
const Roadmap = require('../models/Roadmap');
const authMiddleware = require('../middlewares/authMiddleware');

// Create a new roadmap
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { roadmapData } = req.body;
    const newRoadmap = new Roadmap({
      userId: req.user.id,
      roadmapData,
    });

    await newRoadmap.save();
    res.status(201).json({ message: 'Roadmap created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get roadmaps by user
router.get('/', authMiddleware, async (req, res) => {
  try {
    const roadmaps = await Roadmap.find({ userId: req.user.id });
    res.json(roadmaps);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
