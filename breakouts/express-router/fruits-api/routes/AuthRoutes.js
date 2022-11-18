const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

// Database
const db = require('../db');

// AUTHENTICATION ROUTES
// Register
router.post('/register', (req, res) => {
  // Body validation
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .send({ message: 'You need to provide email and password to register' });
  }

  // Email is not repeated validation
  const emailExists = db['usersDB'].find(u => u.email === email);
  if (emailExists) {
    return res.status(400).send({ message: 'Email already exists' });
  }

  // Creating new user id
  const id = Math.random()
    .toString(36)
    .substr(2, 3);

  // Hashing password with bcrypt
  const hashedPassword = bcrypt.hashSync(password, 8);

  // Creating new user object
  const newUser = {
    id,
    email,
    password: hashedPassword
  };

  // Adding the new user object into the DB
  db['usersDB'].push(newUser);

  // Respond back to client
  res.status(200).send({ message: 'User registered!', user: newUser });
});

// Login
router.post('/login', (req, res) => {
  // Body validation
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .send({ message: 'You need to provide email and password to login' });
  }

  // Existing user validation
  const user = db['usersDB'].find(u => u.email === email);
  if (!user) {
    return res.status(400).send({ message: 'Invalid credentials' });
  }

  // Passwords matching validation
  const passwordsMatch = bcrypt.compareSync(password, user.password);
  if (!passwordsMatch) {
    return res.status(400).send({ message: 'Invalid credentials' });
  }

  // Adding the userId cookie
  req.session.userId = user.id;

  // Respond back to client
  res.status(200).send({ message: 'Welcome!' });
});

// Logout
router.post('/logout', (req, res) => {
  // Removing all cookies from current session
  req.session = null;

  // Respond back to client
  res.status(200).send({ message: 'Successfully logout!' });
});

module.exports = router;
