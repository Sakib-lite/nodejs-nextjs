const Student = require('../models/studentsModel');

exports.createNewStudent = async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);
    res.status(200).json({
      status: 'succes',
      student: newStudent,
    });
  } catch (err) {
    res.status(400).json({
      status: 'error',
      message: err,
    });
  }
};


exports.getAllStudents= async (req, res) => {
    try {
        const students = await Student.find()
        res.status(200).json({
          status: 'succes',
          number: students.length,
         data: students
        });
      } catch (err) {
        res.status(400).json({
          status: 'error',
          message: err,
        });
      }

}