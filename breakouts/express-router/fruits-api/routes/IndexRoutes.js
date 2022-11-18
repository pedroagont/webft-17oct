const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('<h1>Hello World! 🐳</h1><p>CRUD /api/fruits</p>');
});

router.get('/home', (req, res) => {
  res.status(200).send('<h1>Homepage!</h1>');
});

module.exports = router;
