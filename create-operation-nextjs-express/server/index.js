const express = require('express');
const next = require('next');
const morgan = require('morgan');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(express.json());

    // server.use(urlencoded({ extended: false }));
    if (process.env.NODE_ENV === 'development') {
      server.use(morgan('dev'));
    }
    const showRoutes = require('./routes/userRoutes');

    server.use('/api', showRoutes(server));

    server.all('*', (req, res) => {
      return handle(req, res);
    });

    const DB = process.env.DATABASE.replace(
      '<PASSWORD>',
      process.env.DATABASE_PASSWORD
    );

    mongoose
      .connect(DB, {
        useNewUrlParser: true,
      })
      .then(() => console.log('DB connection successful!'));

    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on ${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
