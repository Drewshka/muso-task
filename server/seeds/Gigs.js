exports.seed = function (knex) {
  const gigs = [
    {
      id: "1",
      userID: "1",
      gigName: "Jazz trio",
      description: "Jazz trio gig in need of a drummer.",
      address: "Somewhere, Toronto, ON",
    },
    {
      id: "2",
      userID: "2",
      gigName: "Overdubs",
      description:
        "Seeking a saxophone player to do some overdubs on a record.",
      address: "Somewhere, Toronto, ON",
    },
    {
      id: "3",
      userID: "3",
      gigName: "Teaching Sub",
      description:
        "Seeking a piano teacher who can sub for my saturday teaching schedule.",
      address: "Somewhere, Toronto, ON",
    },
  ];
  // Deletes ALL existing entries
  return knex("table_name")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("table_name").insert(gigs);
    });
};
