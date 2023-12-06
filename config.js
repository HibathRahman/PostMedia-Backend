const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.mongodbURL);
    console.log("App connected to database");
  } catch (err) {
    console.log(err);
  }
};
module.exports = connectDB;
