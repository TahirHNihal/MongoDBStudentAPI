const Student = require("../models/Student");

const student = require("../models/Student");
const mongoTest = async () => {
  try {
    const data = await student.create({
      name: "Md Abdullah",
      age: 6,
      email: "abdullah03@gmail.com",
      cell: "01996502272",
      gender: "Male",
      location: "Uttara",
      photo: "avater.png",
    });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = mongoTest;
