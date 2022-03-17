const express = require("express");
const app = express();
const cors = require('cors');
app.use(express.json()); //parsing json data from the body
app.use(cors());
const user = require("./routes/userRoute");

app.use("/api/v1", user);

//can ude app.post directly also.

module.exports = app;
