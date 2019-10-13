const knex = require("../db/knex");
const posts = "posts";
module.exports = class Post {
  constructor() {}

  static async fetchAll() {
    const result = await knex
      .select()
      .from(posts)
      .paginate(32, 1);
    for (let i = 0; i < result.length; i++) {
      const comments = await knex
        .select()
        .from("comments")
        .where({ post_id: result[i].id });

      result[i].comments = comments;
    }
    return result;
  }
};
