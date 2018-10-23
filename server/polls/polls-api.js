const express = require("express");
const Charts = require("../models/charts");

const router = express.Router();

router.post("/createpoll", (req, res, next) => {
  const newChart = new Charts({
    title: req.body.title,
    labels: req.body.labels,
    data: req.body.data,
    voters: req.body.voters,
    creator: req.body.creator
  });

  newChart.save().then(chart => {
    res.json({
      chart
    });
  });
});

module.exports = router;
