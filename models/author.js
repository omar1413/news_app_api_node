const knex = require('../db/knex');
const authors = 'authors';
module.exports = class Author {
	constructor() {}

	static async fetchAll(page, count) {
		const result = await knex.select().from(authors).paginate(page, count);
		return result;
	}
};
