const Post = require('../models/post');

module.exports.fetchAll = async (req, res) => {
	const posts = await Post.fetchAll(req.query.page, req.query.count);
	res.send(posts);
};
