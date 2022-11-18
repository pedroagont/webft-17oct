const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

// Database
const db = require('../db');

// CRUD Operations
// CREATE - POST
router.post('', (req, res) => {
  // Cookie validation
  const { userId } = req.session;
  if (!userId) {
    return res
      .status(401)
      .send({ message: 'You need to be logged in to create a fruit' });
  }

  // Body validation
  const { name, color, emoji } = req.body;
  if (!name || !color || !emoji) {
    return res
      .status(400)
      .send({ message: 'Provide name, color and emoji to create a fruit' });
  }

  // Creating fruit object in DB
  let id = Math.random()
    .toString(36)
    .substr(2, 3);

  db['fruitsDB'][id] = {
    id,
    name,
    color,
    emoji,
    userId
  };

  // Respond back to client
  res.status(201).send({ message: 'Created!', fruit: db['fruitsDB'][id] });
});

// READ - GET
// Read All
router.get('', (req, res) => {
  res
    .status(200)
    .send({ message: 'List of all fruits!', fruits: db['fruitsDB'] });
});

// Read One
router.get('/:id', (req, res) => {
  // Fruit existing validation
  const { id } = req.params;
  const fruit = db['fruitsDB'][id];
  if (!fruit) {
    return res.status(404).send({ message: 'Sorry, fruit not found' });
  }

  // Respond back to client
  res.status(200).send({ message: 'Here is your fruit!', fruit });
});

// UPDATE - PUT
router.put('/:id', (req, res) => {
  // Cookie validation
  const { userId } = req.session;
  if (!userId) {
    return res
      .status(401)
      .send({ message: 'You need to be logged in to update a fruit' });
  }

  // Body validation
  const { name, color, emoji } = req.body;
  if (!name || !color || !emoji) {
    return res
      .status(400)
      .send({ message: 'Provide name, color and emoji to update a fruit' });
  }

  // Fruit existing validation
  const { id } = req.params;
  let fruit = db['fruitsDB'][id];
  if (!fruit) {
    return res.status(404).send({ message: 'Sorry, fruit not found' });
  }

  // Ownership validation
  const fruitBelongsToUser = fruit.userId === userId;
  if (!fruitBelongsToUser) {
    return res
      .status(403)
      .send({ message: 'You are not the owner of this fruit' });
  }

  // Updating fruit object in DB
  db['fruitsDB'][id] = {
    id,
    name,
    color,
    emoji,
    userId
  };

  // Respond back to client
  res.status(201).send({ message: 'Updated!', fruit: db['fruitsDB'][id] });
});

// DELETE - DELETE
router.delete('/:id', (req, res) => {
  // Cookie validation
  const { userId } = req.session;
  if (!userId) {
    return res
      .status(401)
      .send({ message: 'You need to be logged in to delete a fruit' });
  }

  // Fruit existing validation
  const { id } = req.params;
  let fruit = db['fruitsDB'][id];
  if (!fruit) {
    return res.status(404).send({ message: 'Sorry, fruit not found' });
  }

  // Ownership validation
  const fruitBelongsToUser = fruit.userId === userId;
  if (!fruitBelongsToUser) {
    return res
      .status(403)
      .send({ message: 'You are not the owner of this fruit' });
  }

  // Deleting fruit object in DB
  delete db['fruitsDB'][id];
  res.status(204).send();
});

module.exports = router;
