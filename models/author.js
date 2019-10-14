const knex = require('../db/knex');
const authors = 'authors';
module.exports = class Author {
	constructor() {}

	static async fetchAll(page, count) {
		const result = await knex.select().from(authors).paginate(page, count);
		return result;
	}

	static async find(id) {
		const author = await knex.select().from(authors).where({ id });
		return author[0];
	}
};
