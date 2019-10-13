const knex = require("../db/knex");
const categories = "categories";
module.exports = class Category {
  constructor() {}

  static async fetchAll() {
    const result = await knex.select().from(categories);
    return result;
  }
};
