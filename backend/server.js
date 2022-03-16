const app = require('./app');
const dotenv = require('dotenv'); //env var for creds
const connectDatabase = require("./config/database");


//CORS o for connecting the backend and FE

dotenv.config({ path: "backend/config/config.env" });
//after env db for getting the path

connectDatabase();


const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
  });
  

