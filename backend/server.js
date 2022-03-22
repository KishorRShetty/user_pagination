const app = require("./app");
// const dotenv = require("dotenv"); // No need for heroku/any hosting platform.
const connectDatabase = require("./config/database");

//CORS o for connecting the backend and FE used in app.js
//after env db for getting the path

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
