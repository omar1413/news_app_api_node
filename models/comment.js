const knex = require("../db/knex");
const comments = "comments";
module.exports = class Comment {
  constructor() {}

  static async fetchAll() {
    const result = await knex.select().from(comments);
    return result;
  }
};
