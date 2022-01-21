const express = require('express');
const router = express.Router();
const studentsController = require('../../controllers/studentsController');

function routes(app) {
  router
    .route('/students')
    .get(studentsController.getAllStudents)
    .post(studentsController.createNewStudent);

  return router;
}

module.exports=routes;
