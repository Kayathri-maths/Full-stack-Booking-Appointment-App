const path = require('path');

const express = require('express');

const router = express.Router();

const userController = require('../controllers/details');

router.post('/add-user', userController.addUser);

router.get('/get-users', userController.getUser);

router.delete('/delete-user/:id', userController.deleteUser);

module.exports = router;

