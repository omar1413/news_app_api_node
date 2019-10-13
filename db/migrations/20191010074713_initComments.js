exports.up = async function(knex) {
  await knex.schema.createTable("comments", table => {
    table.increments().primary();
    table.string("content").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .integer("post_id")
      .notNullable()
      .unsigned()

      .references("id")
      .inTable("posts");

    table
      .integer("author_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("authors");
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("comments");
};
