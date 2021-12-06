exports.seed = function (knex) {
  const gigs = [
    {
      id: "11",
      userID: "1",
      gigName: "Jazz trio",
      description: "Jazz trio gig in need of a drummer.",
      category: "Performance",
      venue: "The Rex",
      address: "194 Queen St W, Toronto, ON M5V 1Z1",
      date: "01/01/2021",
      time: "7:00pm",
      // status: "Open",
    },
    {
      id: "22",
      userID: "2",
      gigName: "Jazz trio",
      description: "Jazz trio gig in need of a drummer.",
      category: "Performance",
      // status: "Open",
      venue: "The Pilot",
      address: "22 Cumberland St, Toronto, ON M4W 1J5",
      date: "01/01/2021",
      time: "7:00pm",
      // status: "Open",
    },
    {
      id: "33",
      userID: "3",
      gigName: "Jazz trio",
      description: "Jazz trio gig in need of a drummer.",
      category: "Performance",
      // status: "Open",
      venue: "The Emmett Ray",
      address: "924 College St, Toronto, ON M6H 1A4",
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
