const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const colors = require("colors");
const cors = require("cors");
const mongoDBConnection = require("./config/db");
const mongoTest = require("./controllers/mongoController");
//Environtment Setup
dotenv.config();
const PORT = process.env.PORT || 4000;

//Express Init
const app = express();

//Data Mange
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//Static Folder
app.use(express.static("public"));

//Routes
mongoTest()

//Lister Server
app.listen(PORT, () => {
  mongoDBConnection()
  console.log(`Server running on port ${PORT}`.bgGreen.white);
});
