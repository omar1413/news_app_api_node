const faker = require("faker");

const createFakePost = (authorIds, catIds) => {
  return {
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraphs(),
    author_id: faker.random.arrayElement(authorIds),
    cat_id: faker.random.arrayElement(catIds)
  };
};

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  const authorIds = await knex("authors").pluck("id");
  const catIds = await knex("categories").pluck("id");

  const posts = [];
  for (let i = 0; i < 300; i++) {
    posts.push(createFakePost(authorIds, catIds));
  }

  // Inserts seed entries
  await knex("posts").insert(posts);
};
