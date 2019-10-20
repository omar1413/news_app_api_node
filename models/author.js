const knex = require("../db/knex");
const authors = "authors";
module.exports = class Author {
  constructor() {}

  static async fetchAll(page, count) {
    const result = await knex
      .select()
      .from(authors)
      .paginate(page, count);
    return result;
  }

  static async find(obj) {
    this.validate(obj);
    const author = await knex
      .select()
      .from(authors)
      .where(obj);
    return author[0];
  }

  async save() {}

  static validate(ob) {
    var attrs = [
      "id",
      "name",
      "email",
      "password",
      "avatar",
      "email_verfied_at"
    ];

    var objKeys = Object.keys(ob);

    objKeys.forEach(key => {
      if (!attrs.includes(key)) {
        throw { error: { [key]: "not valid" } };
      }
    });
  }
};
