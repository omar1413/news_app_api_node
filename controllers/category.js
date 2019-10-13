const Category = require("../models/category");

module.exports.fetchAll = async (req, res) => {
  const cats = await Category.fetchAll();
  res.send(cats);
};
