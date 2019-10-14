const knex = require('../db/knex');
const comments = 'comments';

module.exports = class Comment {
	constructor() {}

	static async fetchAll(page, count) {
		const result = await knex.select().from(comments).paginate();
		return result;
	}

	static async findByAuthorId(id) {
		const result = await this.find({ author_id: id }).paginate();
		return result;
	}

	static async findByPostId(id) {
		const result = await this.find({ post_id: id }).paginate();
		return result;
	}

	static find(ob) {
		const result = knex.select().from(comments).where(ob);
		return result;
	}
};
