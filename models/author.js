const knex = require("../db/knex");
const authors = "authors";
module.exports = class Author {
  constructor() {}

  static async fetchAll() {
    const result = await knex.select().from(authors);
    return result;
  }
};
