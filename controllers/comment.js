const Comment = require("../models/comment");

module.exports.fetchAll = async (req, res) => {
  const comments = await Comment.fetchAll();
  res.send(comments);
};
