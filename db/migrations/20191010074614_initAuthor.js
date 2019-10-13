exports.up = async function(knex) {
  await knex.schema.createTable("authors", tabel => {
    tabel.increments().primary();
    tabel.string("name").notNullable();
    tabel.string("avatar");
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTable("authors");
};
