const Comment = require('../models/comment');

module.exports.fetchAll = async (req, res) => {
	const comments = await Comment.fetchAll(req.query.page, req.query.count);
	res.send(comments);
};
