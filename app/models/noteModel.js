const mongoose = require('mongoose')

const Note = mongoose.model(
  "Note",
   new mongoose.Schema({
    title: String,
    note: String
  })
);

module.exports = Note;
