const express = require("express");
const router = express.Router();
const fs = require("fs");

// GET ALL feedbacks
router.get("/", (req, res) => {
  let feedbacks = fs.readFileSync(`${__dirname}/../data/feedbacks.json`);
  feedbacks = JSON.parse(feedbacks);
  res.json({
    status: "success",
    feedbacks,
  });
});

// POST ONE feedback
router.post("/", (req, res) => {
  res.json({
    message: "POST ONE feedback",
  });
});

// PATCH ONE feedback
router.patch("/:id", (req, res) => {
  let { id } = req.params;
  res.json({
    message: "PATCH feedback with id = " + id,
  });
});

// DELETE ONE feedback
router.delete("/:id", (req, res) => {
  let { id } = req.params;
  res.json({
    message: "DELETE feedback with id = " + id,
  });
});

module.exports = router;
