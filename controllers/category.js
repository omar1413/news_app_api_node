const Category = require('../models/category');

module.exports.fetchAll = async (req, res) => {
	const cats = await Category.fetchAll(req.query.page, req.query.count);
	res.send(cats);
};
