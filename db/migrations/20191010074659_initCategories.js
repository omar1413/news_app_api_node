exports.up = async function(knex) {
  await knex.schema.createTable("categories", table => {
    table.increments().primary();
    table
      .string("title")
      .notNullable()
      .unique();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("categories");
};
