exports.seed = async function(knex) {
  const tables = ["comments", "posts", "categories", "authors"];
  // Deletes ALL existing entries
  for (let i = 0; i < tables.length; i++) await knex(tables[i]).del();
};
