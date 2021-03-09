const mongoose = require('mongoose')

const Shelf = mongoose.model(
  "Shelf",
  new mongoose.Schema({
    genre: String,
    title: String
  })
);

module.exports = Shelf;
