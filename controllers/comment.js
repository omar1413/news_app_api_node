const Comment = require('../models/comment');

module.exports.fetchAll = async (req, res) => {
	const comments = await Comment.fetchAll(req.query.page, req.query.count);
	res.send(comments);
};

module.exports.authorComments = async (req, res) => {
	const comments = await Comment.findByAuthorId(req.params.id);
	res.send(comments);
};

module.exports.postComments = async (req, res) => {
	const comments = await Comment.findByPostId(req.params.id);
	res.send(comments);
};
