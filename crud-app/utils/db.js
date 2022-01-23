const mongoose = require('mongoose');

async function connectToDatabase() {
  const DB = process.env.DATABASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
  );

  const client = await mongoose.connect(DB, {
    useNewUrlParser: true,
  });
  if (client) console.log('Connected to Database');

  return client;
}

module.exports =connectToDatabase