const express = require('express');
const studentsController = require('../../../controllers/StudentsController');

const router = express.Router();

function routes(app) {
  router
    .route('/admin/southern/students')
    .get(studentsController.getAllStudents)
    .post(studentsController.createNewStudent);

  router
    .route('/all-students/:id')
    .get(studentsController.getStudentById)
    .delete(studentsController.deleteStudentById)
    .patch(studentsController.updateStudent);

  return router;
}

module.exports = routes;
