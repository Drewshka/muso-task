exports.seed = function (knex) {
  // Deletes ALL existing entries
  const users = [
    {
      id: "1",
      name: "Andrew",
      address: "503 Broadway",
      city: "Toronto",
      country: "Canada",
      phone: "+1 (646) 123-1234",
      email: "andrew@test.com",
      instrument: "Guitar",
      bio: "I'm a guitarist and also play piano.",
    },
    {
      id: "2",
      name: "Ben",
      address: "503 Broadway",
      city: "New York",
      country: "USA",
      phone: "+1 (646) 223-1234",
      email: "ben@test.com",
      instrument: "Piano",
      bio: "I'm a pianist.",
    },
    {
      id: "3",
      name: "Jacky",
      address: "503 Rue Laval",
      city: "Montreal",
      country: "Canda",
      phone: "+1 (646) 253-1234",
      email: "jacky@test.com",
      instrument: "Vocalist",
      bio: "I'm a vocalist.",
    },
  ];
  return knex("table_name")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("table_name").insert(users);
    });
};
