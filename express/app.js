const express = require('express');
const morgan = require('morgan');
const app = express();

// Middlewares
app.use(express.static(`${__dirname}/public`));
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//creating router

// const tourRouter = require('./routes/tour-router');

const tourRouter = require('./routes/tour-router');

app.use('/api/v1/tours', tourRouter);

module.exports = app;
