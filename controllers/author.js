const Author = require('../models/author');

module.exports.fetchAll = async (req, res) => {
	const authors = await Author.fetchAll(req.query.page, req.query.count);

	res.send(authors);
};
