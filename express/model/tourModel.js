const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name:{
      type: 'string',
      default:"Tour"
  },
    place: {
    type: 'string',
    required: [true, 'A tour must have a place'],
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  rating: {
    type: 'number',
    default: 4.5,
  },
  difficulty: {
    type: 'string',
    required: [true, 'A tour must have difficulty'],
  },
  cost: {
    type: 'number',
    required: [true, 'A tour must have a cost'],
  },
});

const Tour = mongoose.model('Tour', tourSchema);
module.exports = Tour;
