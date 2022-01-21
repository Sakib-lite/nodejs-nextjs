const fs = require('fs');

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../data/tours.json`));

exports.checkId = (req, res, next, val) => {
  if (+val > tours.length - 1) {
    return res.status(404).json({
      status: 'failed',
      message: 'failure from middleware',
    });
  }

  next();
};

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price || !req.body.difficulty) {
    return res.status(400).json({
      status: 'fail',
      message: 'Missing name or price or difficulty',
    });
  }
  next();
};

exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: { tours },
  });
};
exports.createNewTour = (req, res) => {
  const newId = tours[tours.length - 1].id + 1;
  const newItem = Object.assign({ id: newId }, req.body);
  tours.push(newItem);
  fs.writeFile(
    `${__dirname}/../data/tours.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          newItem,
        },
      });
    }
  );
};

exports.getTourById = (req, res) => {
  const id = +req.params.id;
  res.status(200).json({
    status: 'success',
    data: { tour: tours[id] },
  });
};
exports.updateTourById = (req, res) => {
  const id = +req.params.id;
  res.status(200).json({
    status: 'success',
    data: { tour: `${id}th tour updated` },
  });
};
exports.deleteTourById = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: null,
  });
};
