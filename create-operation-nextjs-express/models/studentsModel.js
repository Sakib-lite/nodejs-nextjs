const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: 'string',
    require: true,
  },
  age: {
    type: 'number',
    require: true,
  },
  roll: {
    type: 'number',
    require: true,
    unique: true,
  },
  department: {
    type: 'string',
    require: true,
  },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
