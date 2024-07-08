const express = require('express');
const router = express.Router();

const changelog = [
  {
    _id: 101,
    date: "July 08 2024",
    changes: [
      "Codename COSMIC",
      "Merge QPR3",
      "Merge july security patch"
    ]
  }
]

// get all data
router.get("/changelog", (req, res) => {
  res.send(changelog)
});

module.exports = router;