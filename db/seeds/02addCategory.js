exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("categories")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("categories").insert([
        { id: 1, title: "category1" },
        { id: 2, title: "category2" },
        { id: 3, title: "category3" },
        { id: 4, title: "category4" },
        { id: 5, title: "category5" },
        { id: 6, title: "category6" }
      ]);
    });
};
