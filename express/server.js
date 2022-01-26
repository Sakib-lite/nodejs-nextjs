const app = require('./app');
const dotenv=require('dotenv')
const mongoose = require('mongoose')

dotenv.config({ path: './config.env' });


const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true
  })
  .then(() => console.log('DB connection successful!'));

const port = 3000;
app.listen(port, () => {
  console.log(`App is running at localhost:${port}`);
});
