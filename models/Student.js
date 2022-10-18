const mongoose = require("mongoose");

//Create Schema
const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minLength: 5,
      maxLength: 25,
    },
    age: {
      type: Number,
      required: true,
      min: 6,
      max: 70,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    cell: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female"],
      trim: true
    },
    location: {
      type: String,
      required: true,
      trim: true
    },
    photo: {
      type: String,
      required: true,
      trim: true
    },
  },
  {
    timestamps: true,
  }
);
//Create Collection
module.exports = mongoose.model("student", studentSchema);
