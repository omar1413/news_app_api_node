const Author = require("../models/author");

module.exports.fetchAll = async (req, res) => {
  const authors = await Author.fetchAll(req.query.page, req.query.count);

  res.send(authors);
};

module.exports.findById = async (req, res) => {
  try {
    const author = await Author.find({ id: req.params.id });
  } catch (e) {
    res.send(e);
  }
  res.send(author);
};
