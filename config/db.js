const mongoose = require("mongoose");
const dotenv = require("dotenv");

//MongoDB Connection
const mongoDBConnection = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB successfully connected`.bgMagenta.white);
  } catch (error) {
    console.log(`${error.message}`.bgRed.white);
  }
};

//Export DB
module.exports = mongoDBConnection;
