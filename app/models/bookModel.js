
const mongoose = require('mongoose')

const Book = mongoose.model(
  "Book",
   new mongoose.Schema({
    title: String,
    authors:[{
      type: String,
      required: 'Author can not be blank'
    }],
    cover: String,
    description: String
  })
);

module.exports = Book;
