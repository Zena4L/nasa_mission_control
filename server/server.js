const dotenv = require('dotenv');
const app = require('./src/app');
const { loadPlanetData } = require('./src/model/planetModel');

dotenv.config({ path: './config.env' });

const port = process.env.PORT;

async function startServer() {
  try {
    await loadPlanetData();
  } catch (err) {
    console.log(err);
  }

  app.listen(port, () => {
    console.log(`App is live on ${port}`);
  });
}

startServer();
