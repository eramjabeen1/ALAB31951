const express = require("express");
const router = express.Router();
const Grade = require("../models/Grade");

// GET all grades
router.get("/", async (req, res) => {
  try {
    const grades = await Grade.find();
    res.json(grades);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch grades." });
  }
});

// POST a new grade
router.post("/", async (req, res) => {
  try {
    const newGrade = await Grade.create(req.body);
    res.status(201).json(newGrade);
  } catch (err) {
    res.status(400).json({ error: "Failed to create grade." });
  }
});

module.exports = router;
