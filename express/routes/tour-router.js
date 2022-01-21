const express = require('express');
// const tourController = require('./../controller/tourController');
const tourController2 = require('./../controller/tourController2');

const router = express.Router();

//param middleware checks the wrong dynamic path
// router.param('id', tourController.checkId); 

router
  .route('/top-5-cheap')
  .get(tourController2.aliasTopTours, tourController2.getAllTours);

router
  .route('/')
  .get(tourController2.getAllTours)
  .post(tourController2.createNewTour);

router
  .route('/:id')
  .get(tourController2.getTourById)
  .patch(tourController2.updateTourById)
  .delete(tourController2.deleteTourById);

module.exports = router;
