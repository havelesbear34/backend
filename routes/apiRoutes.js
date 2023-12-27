const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  res.json({ message: 'Ini adalah route /api/users' });
});

router.post('/posts', (req, res) => {
  res.json({ message: 'Ini adalah route /api/posts' });
});

module.exports = router;
