exports.seed = function (knex) {
  // Deletes ALL existing entries
  const users = [
    {
      id: "1",
      name: "Andrew",
      address: "566 Annette St",
      city: "Toronto",
      country: "Canada",
      phone: "+1 (647) 123-1234",
      email: "andrew@test.com",
      instrument: "Guitar",
      bio: "I'm a guitarist and also play piano.",
    },
    {
      id: "2",
      name: "Ben",
      address: "503 Parkdale Ave.",
      city: "Toronto",
      country: "Canada",
      phone: "+1 (647) 223-1234",
      email: "ben@test.com",
      instrument: "Piano",
      bio: "I'm a pianist and like teaching on weekends.",
    },
    {
      id: "3",
      name: "Jacky",
      address: "1266 Spadina Ave.",
      city: "Toronto",
      country: "Canada",
      phone: "+1 (647) 253-1234",
      email: "jacky@test.com",
      instrument: "Vocalist",
      bio: "I'm a vocalist and write my own music.",
    },
  ];
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert(users);
    });
};
