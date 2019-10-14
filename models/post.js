const knex = require('../db/knex');
const posts = 'posts';
module.exports = class Post {
	constructor() {}

	static async fetchAll(page, count) {
		const result = await knex.select().from(posts).paginate();
		// for (let i = 0; i < result.data.length; i++) {
		// 	const comments = await knex.select().from('comments').where({ post_id: result.data[i].id });

		// 	result.data[i].comments = comments;
		// }
		return result;
	}

	static async findByCatId(id) {
		const result = await this.find({ cat_id: id }).paginate();
		return result;
	}

	static async findByAuthorId(id) {
		const result = await this.find({ author_id: id }).paginate();
		return result;
	}

	static async findById(id) {
		const result = await this.find({ id });
		return result[0];
	}

	static find(ob) {
		const result = knex.select().from(posts).where(ob);
		return result;
	}
};
