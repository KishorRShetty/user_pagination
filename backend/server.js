const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require("./config/database");


dotenv.config({ path: "backend/config/config.env" });
//after env db for getting the path

connectDatabase();


const server = app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
  });
  

