const express = require("express");
const app = express();
const cors = require('cors');
const path = require('path');

app.use(express.json()); //parsing json data from the body
app.use(cors());
const user = require("./routes/userRoute");

//can use app.post directly also.
app.use("/api/v1", user);

// for Hosting on heroku
app.use(express.static(path.join(__dirname,"../frontend/build")));
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontend/build/index.html"));
})
//for Heroku


module.exports = app;
