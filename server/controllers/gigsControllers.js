const Gig = require("../models/gigsModel");

exports.listGigs = async (req, res) => {
  const result = await Gig.getAll();
  res.json(result);
};

exports.postGig = async (req, res, next) => {
  if (
    // !req.body.status ||
    // !req.body.userName ||
    !req.body.userID ||
    !req.body.gigName ||
    !req.body.description ||
    !req.body.category ||
    !req.body.venue ||
    !req.body.address ||
    !req.body.date ||
    !req.body.time
  ) {
    const err = new Error(
      "POST request requires userID, user name, gig name, description, category, status, venue, address, date and time attributes."
    );
    err.status = 400;
    next(err);
  } else {
    let updatedGigs = await Gig.add(req.body);
    res.json(updatedGigs);
  }
};

exports.getSingleGig = async (req, res, next) => {
  const gig = await Gig.getOneById(req.params.id);
  if (!gig) {
    const err = new Error("Please provide a valid ID.");
    err.status = 400;
    next(err);
  } else {
    res.json(gig);
  }
};

//* query for user properties
// knex("users")
//   .where({
//     id: "4",
//     userID: "4",
//   })
//   .select("id");

exports.getGigsByUser = async (req, res, next) => {
  const userID = req.params.id;
  let filteredGig = await Gig.getGigsByUser(userID);
  if (filteredGig === [] || filteredGig === undefined) {
    const err = new Error("That user doesn't exist");
    err.status = 404;
    next(err);
  } else {
    res.json(filteredGig);
  }
};

exports.deleteGig = async (req, res, next) => {
  const updatedArray = await Gig.remove(req.params.id);
  if (!updatedArray) {
    const err = new Error("Please provide a valid ID.");
    err.status = 400;
    next(err);
  } else {
    res.json(updatedArray);
  }
};

exports.editGigDetails = async (req, res, next) => {
  console.log("req.body", req.body);
  if (
    // !req.body.userID &&
    // !req.body.userName &&
    !req.body.gigName &&
    !req.body.description &&
    !req.body.category &&
    !req.body.status &&
    !req.body.venue &&
    !req.body.address &&
    !req.body.date &&
    !req.body.time
  ) {
    const err = new Error(
      "PUT request requires userID, user name, gig name, description, category, status, venue, address, date and time attributes"
    );
    err.status = 400;
    next(err);
  } else {
    const updatedArray = await Gig.update(req.params.id, req.body);
    if (!updatedArray) {
      const err = new Error("Please provide a valid id.");
      err.status = 400;
      next(err);
    } else {
      res.json(Gig.update(req.params.id, req.body));
    }
  }
};
