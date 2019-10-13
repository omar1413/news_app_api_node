const faker = require("faker");

const createFakeAuthor = () => {
  return {
    name: faker.internet.userName(),
    avatar: faker.internet.avatar()
  };
};

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex("authors").del();
  // Inserts seed entries
  const fakeAuthors = [];
  for (let i = 0; i < 100; i++) {
    fakeAuthors.push(createFakeAuthor());
  }

  await knex("authors").insert(fakeAuthors);
};
