const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: 'string',
    required: [true, 'Enter your  fullname'],
    min: [4, 'Name is too short'],
    max: [25, 'Name is too long'],
  },
  department: {
    type: 'string',
    required: [true, 'Enter your department name'],
  },
  id: {
    type: 'number',
    required: [true, 'Enter your id number'],
    unique: true,
  },
  email: {
    type: 'string',
  },
  image: {
    type: 'string',
    required: true,
  },
  dob: {
    type: 'date',
    required: [true, 'Enter your date of birth'],
  },
  city: {
    type: 'string',
    required: 'Enter  your city ',
  },
  batch: {
    type: 'number',
    required: [true, 'Enter your batch number'],
  },
  createdAt: {
    type: 'date',
    default: Date.now(),
    select: false,
  },
});

const Student =
  mongoose.models.Student || mongoose.model('Student', studentSchema);

module.exports = Student;
