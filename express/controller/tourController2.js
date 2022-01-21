const Tour = require('../model/tourModel2');


exports.aliasTopTours = (req, res, next) => {
    req.query.limit = '5';
    req.query.sort = '-ratingsAverage,price';
    req.query.fields = 'name,price,ratingsAverage,summary,difficulty';
    next();
  };

exports.createNewTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body);
    console.log(req.body);
    res.status(201).json({
      status: 'succes',
      tour: newTour,
    });
  } catch (err) {
    res.status(404).json({ status: 'failed', message: err });
  }
};

exports.getAllTours = async (req, res) => {
  try {

   
    //filtering by avoiding sort ,page etc
    const queryObj = req.query;
    // const excludedFields = ['page', 'sort', 'limit', 'fields'];
    // excludedFields.forEach((el) => delete queryObj[el]);
    // console.log(queryObj);

    //filtering through greater and less than
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    let newQuery = Tour.find(JSON.parse(queryStr));

    //sorting
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      newQuery = newQuery.sort(sortBy);
    } else {
      newQuery = newQuery.sort('-createdAt');
    }


    //fields 
//  console.log(req.query.fields)
//     if (req.query.fields) {
//         const fields = req.query.fields.split(',').join(' ');
//       newQuery = newQuery.select(fields);
//       } else {
//         newQuery = newQuery.select('-__v');
//       }


    //paginations 
    const page = req.query.page;
    const limit = req.query.limit;
    const skip = (page - 1) * limit;

    newQuery = newQuery.skip(skip).limit(limit);


    const allTour = await newQuery;
    res.status(201).json({
      status: 'succes',
      result: allTour.length,
      tour: allTour,
    });
  } catch (err) {
    res.status(404).json({ status: 'failed', message: err });
  }
};

exports.getTourById = async (req, res) => {
  try {
    const tour = await Tour.findById(req.params.id);

    res.status(201).json({
      status: 'succes',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({ status: 'failed', message: err });
  }
};

exports.updateTourById = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(201).json({
      status: 'succes',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({ status: 'failed', message: err });
  }
};

exports.deleteTourById = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);

    res.status(201).json({
      status: 'succes',
      data: null,
    });
  } catch (err) {
    res.status(404).json({ status: 'failed', message: err });
  }
};
