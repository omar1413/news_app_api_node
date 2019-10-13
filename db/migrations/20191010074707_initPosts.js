exports.up = async function(knex) {
  await knex.schema.createTable("posts", table => {
    table.increments().primary();
    table.string("content").notNullable();
    table.string("title").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .integer("cat_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("categories");
    table
      .integer("author_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("authors");
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("posts");
};
