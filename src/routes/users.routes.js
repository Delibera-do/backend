const express = require('express');
const routes = express.Router();
const userController = require('../controllers/userController');

routes.post('/', (req,res) => userController.store(req,res));
routes.delete('/', (req,res) => userController.delete(req,res));

module.exports = routes; 