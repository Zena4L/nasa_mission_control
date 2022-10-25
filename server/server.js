const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./src/app');
const { loadPlanetData } = require('./src/model/planetModel');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD);

const port = process.env.PORT;

mongoose.connection.once('open', () => {
  console.log('DB succesfully connected');
});
mongoose.connection.once('error', (err) => {
  console.error(err);
});

async function startServer() {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    await loadPlanetData();
  } catch (err) {
    console.log(err);
  }

  app.listen(port, () => {
    console.log(`App is live on ${port}`);
  });
}

startServer();
