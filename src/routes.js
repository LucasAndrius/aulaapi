const express = require('express');
const router = express.Router();
const ProjectController = require('./controllers/ProjectController');

//definição das rotas

router.get('/ping',ProjectController.ping);

module.exports = router;