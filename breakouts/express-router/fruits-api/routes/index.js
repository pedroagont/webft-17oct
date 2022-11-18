const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

const IndexRoutes = require('./IndexRoutes');
const AuthRoutes = require('./AuthRoutes');
const FruitsRoutes = require('./FruitsRoutes');

router.use('/', IndexRoutes);
router.use('/api/auth', AuthRoutes);
router.use('/api/fruits', FruitsRoutes);

module.exports = router;
