const connectToDatabase= require('../utils/db')

const express = require('express');
const next = require('next');
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

connectToDatabase()
   
    const studentsRoutes = require('./routes/admin/StudentsRoutes');

    server.use('/api', studentsRoutes(server));

    server.all('*', (req, res) => {
      return handle(req, res);
    });


    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`> Ready on ${PORT}`);
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
  });
