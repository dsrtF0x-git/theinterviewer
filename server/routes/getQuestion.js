const express = require("express");
const router = express.Router();
const Question = require("../models/Question.js");

router.get("/get-question", async (req, res) => {
  res.status(200).json({ msg: "Some question"});
});

router.post("/add-question", async (req, res) => {
  const newQuestion = new Question({
    body: "Ask something?",
    genre: "VDUD",
    author: "Admin"
  });

  try {
    await newQuestion.save();

    return res.json(newQuestion);
  } catch (error) {
    console.log(error);
    return;
  }
});

module.exports = router;