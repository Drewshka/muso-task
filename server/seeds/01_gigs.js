exports.seed = function (knex) {
  const gigs = [
    {
      id: "1",
      userID: "1",
      gigName: "Jazz trio",
      description: "Jazz trio gig in need of a drummer.",
      category: "Performance",
      venue: "The Rex",
      address: "Somewhere, Toronto, ON",
      date: "01/01/2021",
      time: "7:00pm",
      // status: "Open",
    },
    {
      id: "2",
      userID: "2",
      gigName: "Jazz trio",
      description: "Jazz trio gig in need of a drummer.",
      category: "Performance",
      venue: "The Rex",
      address: "Somewhere, Toronto, ON",
      date: "01/01/2021",
      time: "7:00pm",
      // status: "Open",
    },
    {
      id: "3",
      userID: "3",
      gigName: "Jazz trio",
      description: "Jazz trio gig in need of a drummer.",
      category: "Performance",
      venue: "The Rex",
      address: "Somewhere, Toronto, ON",
      date: "01/01/2021",
      time: "7:00pm",
      // status: "Open",
    },
  ];
  // Deletes ALL existing entries
  return knex("gigs")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("gigs").insert(gigs);
    });
};
