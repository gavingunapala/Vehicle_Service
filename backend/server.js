const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");


const app = express();

require("dotenv").config();

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

const PORT = process.env.PORT || 8070;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB connection successful !!!");
}).catch((err) => {
  console.log("MongoDB connection error: ", err);
});


// Route
//service
const Service = require("./Routes/VehicleServicies");
app.use("/Service",Service);

app.listen(PORT, () =>{
    console.log(`Server is up and running on port number: ${PORT}`);
  });
  