const Post = require("../models/post");

module.exports.fetchAll = async (req, res) => {
  const posts = await Post.fetchAll();
  res.send(posts);
};
