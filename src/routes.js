const express = require('express');
const router = express.Router();
const ProjectController = require('./controllers/ProjectController');

//definição das rotas

router.get('/ping',ProjectController.ping);

router.get('/projects', ProjectController.all);
router.get('/project/:id',ProjectController.one);
router.post('/project', ProjectController.new);
router.put('/project/:id',ProjectController.edit);
router.delete('/project/:id',ProjectController.delete);


module.exports = router;