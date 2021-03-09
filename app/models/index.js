const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.books = require("./bookModel");
db.shelfs = require("./shelfModel");
db.reviews = require("./reviewModel");
db.notes = require("./noteModel")


db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
