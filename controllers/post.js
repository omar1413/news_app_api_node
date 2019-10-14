const Post = require('../models/post');

module.exports.fetchAll = async (req, res) => {
	const posts = await Post.fetchAll(req.query.page, req.query.count);
	res.send(posts);
};

module.exports.authorPosts = async (req, res) => {
	const posts = await Post.findByAuthorId(req.params.id);
	res.send(posts);
};

module.exports.categoryPosts = async (req, res) => {
	const posts = await Post.findByCatId(req.params.id);
	res.send(posts);
};

module.exports.postId = async (req, res) => {
	const post = await Post.findById(req.params.id);
	res.send(post);
};
