const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.get('/hello', (req, res) => {
  res.status(200).send('<h2>Hello from /hello</h1>');
});

router.get('/users', (req, res) => {
  const users = ['Cheever', 'Tim', 'Tatiana'];
  res.status(200).send(users);
});

router.get((req, res) => {
  res.status(404).send('Not found');
});

module.exports = router;
