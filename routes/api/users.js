const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/api/users');

// POST /api/users
router.post('/', usersController.create)

module.exports = router;