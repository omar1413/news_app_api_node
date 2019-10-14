const knex = require('../db/knex');
const categories = 'categories';
module.exports = class Category {
	constructor() {}

	static async fetchAll(page, count) {
		const result = await knex.select().from(categories).paginate();
		return result;
	}

	

	static find(ob) {
		const result = knex.select().from(categories).where(ob);
		return result;
	}
};
