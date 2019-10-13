const faker = require("faker");

const createFakeComment = (authorIds, postIds) => {
  return {
    content: faker.lorem.paragraphs(),
    author_id: faker.random.arrayElement(authorIds),
    post_id: faker.random.arrayElement(postIds)
  };
};

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  const authorIds = await knex("authors").pluck("id");
  const postIds = await knex("posts").pluck("id");

  const comments = [];
  for (let i = 0; i < 1000; i++) {
    comments.push(createFakeComment(authorIds, postIds));
  }

  // Inserts seed entries
  await knex("comments").insert(comments);
};
