const express = require("express");
const connectDB = require("./db"); // <--- bringing in the db.js function
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(express.json());

connectDB(); // <--- this line must be present to run the connection

app.get("/", (req, res) => {
  res.send("Grades Mongoose API running!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
