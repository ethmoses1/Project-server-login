const mongoose = require('mongoose')

const Review = mongoose.model(
  "Review",
   new mongoose.Schema({
    title: String,
    review: String,
  })
);

module.exports = Review;
