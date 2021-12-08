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
      date: "2021-01-21",
      time: "21:00",
      // status: "Open",
    },
    {
      id: "22",
      userID: "2",
      gigName: "RnB band",
      description: "RnB gig in need of a bassist.",
      category: "Performance",
      venue: "The Pilot",
      address: "22 Cumberland St, Toronto, ON M4W 1J5",
      date: "2021-01-01",
      time: "19:00",
      // status: "Open",
    },
    {
      id: "33",
      userID: "3",
      gigName: "Quartet",
      description: "Jazz quartet gig in need of a piano player.",
      category: "Performance",
      venue: "The Emmett Ray",
      address: "924 College St, Toronto, ON M6H 1A4",
      date: "2021-01-05",
      time: "18:00",
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
