exports.allAccess = (req, res) => {
  res.status(200).send("Welcome to zeLibrary.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User's content: bookSearch/bookShelf.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
