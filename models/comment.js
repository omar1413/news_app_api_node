const knex = require('../db/knex');
const comments = 'comments';

module.exports = class Comment {
	constructor() {}

	static async fetchAll(page, count) {
		const result = await knex.select().from(comments).paginate();
		return result;
	}
};
