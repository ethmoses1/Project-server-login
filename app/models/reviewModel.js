const mongoose = require('mongoose')

const Review = mongoose.model(
  "Review",
   new mongoose.Schema({
    currentUser: String,
    title: String,
    review: String,
  })
);

module.exports = Review;
