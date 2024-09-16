const express = require('express');
const router = express.Router();

// GET all users
router.get('/', (req, res) => {
  res.json({ message: 'Get all users' });
});

// GET a single user
router.get('/:id', (req, res) => {
  res.json({ message: `Get user with id ${req.params.id}` });
});

// POST a new user
router.post('/', (req, res) => {
  res.json({ message: 'Create a new user', data: req.body });
});

// PUT update a user
router.put('/:id', (req, res) => {
  res.json({ message: `Update user with id ${req.params.id}`, data: req.body });
});

// DELETE a user
router.delete('/:id', (req, res) => {
  res.json({ message: `Delete user with id ${req.params.id}` });
});

module.exports = router;