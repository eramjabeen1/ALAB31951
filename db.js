// This file shows both the original MongoDB native connection and the refactored Mongoose version.

// BEFORE: Using MongoDB native driver (for comparison only)
// const { MongoClient } = require("mongodb");
// const uri = process.env.MONGO_URI;
// const client = new MongoClient(uri);

// async function connectDB() {
//   try {
//     await client.connect();
//     console.log("MongoDB connected (native driver)");
//   } catch (err) {
//     console.error("MongoDB connection error:", err);
//     process.exit(1);
//   }
// }

// module.exports = connectDB;

// AFTER: Using Mongoose (refactored version)
const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongoose connected!");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
