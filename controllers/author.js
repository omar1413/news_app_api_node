const Author = require("../models/author");

module.exports.fetchAll = async (req, res) => {
  const authors = await Author.fetchAll();

  res.send(authors);
};
