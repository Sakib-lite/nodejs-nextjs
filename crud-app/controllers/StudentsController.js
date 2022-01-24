const Student = require('../models/StudentsModel');

exports.createNewStudent = async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);

    res.status(200).json({
      status: 'succeed',
      message: 'Student created successfully',
      data: { newStudent },
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

exports.getAllStudents = async (req, res) => {
  try {
    const allStudent = await Student.find(req.query).sort(req.query.sort);

    res.status(200).json({
      status: 'succeed',
      number: allStudent.length,
      students: allStudent,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

exports.getStudentById = async (req, res) => {
  try {
    const allStudent = await Student.findById(req.params.id);
    console.log(req.params.id);
    res.status(200).json({
      status: 'succeed',
      number: allStudent.length,
      students: allStudent,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

exports.deleteStudentById = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    console.log(req.params.id);
    res.status(200).json({
      status: 'succeed',
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const newStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: 'succeed',
      newStudent,
    });
  } catch (err) {
    res.status(500).json({
      status: 'error',
      message: err.message,
    });
  }
};
