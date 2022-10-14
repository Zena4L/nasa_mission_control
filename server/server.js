const dotenv = require("dotenv");
const app = require("./src/app");

dotenv.config({ path: "./config.env" });

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App is live on ${port}`);
});
