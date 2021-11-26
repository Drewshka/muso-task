/*
const gigModel = require("../models/gigsModel");

exports.getAllGigs = (req, res, next) => {
  let allGigs = gigModel.getAllGigs();
  if (allGigs === undefined) {
    const err = new Error("Something went wrong.");
    err.status = 500;
    next(err);
  } else {
    res.json(allGigs);
  }
};

exports.deleteGig = (req, res, next) => {
  //TODO: FIX THIS 'REMOVE' ERROR
  const updatedArray = gigModel.remove(req.params.id);
  console.log(req.params.id);
  // const updatedArray = gigModel.deleteGig(req.params.id);

  if (!updatedArray) {
    const err = new Error("DELETE requires valid gig ID.");
    err.status = 400;
    next(err);
  } else {
    res.json(updatedArray);
  }
};

exports.postGig = (req, res) => {
  const gigData = req.body;
  const formattedGig = gigModel.postGig(gigData);
  // if (typeof formattedItem === undefined)
  if (
    // !req.body.userID ||
    !req.body.userName ||
    !req.body.gigName ||
    !req.body.description ||
    !req.body.category ||
    !req.body.status ||
    !req.body.venue ||
    !req.body.address ||
    !req.body.date ||
    !req.body.time
  ) {
    const err = new Error("We can't complete your request.");
    err.status = 404;
    next(err);
  } else {
    res.json(formattedGig);
  }
};

exports.getSingleGig = (req, res, next) => {
  let singleGig = gigModel.getSingleGig(req.params.id);
  if (singleGig === undefined) {
    const err = new Error("Gig not found.");
    err.status = 404;
    next(err);
  } else {
    res.json(singleGig);
  }
};

exports.getInventoryByWarehouse = (req, res, next) => {
  const warehouseID = req.params.id;
  let filteredInventory = gigModel.getInventoryByWarehouse(warehouseID);
  if (filteredInventory === [] || filteredInventory === undefined) {
    const err = new Error("That warehouse doesn't exist");
    err.status = 404;
    next(err);
  } else {
    res.json(filteredInventory);
  }
};

exports.editGigDetails = (req, res, next) => {
  let gigID = req.params.id;
  const gigData = req.body;
  Object.entries(gigData).map((gig) => {
    if (gig[1] === "" || gig[1] === undefined) {
      const err = new Error(
        "You may be missing one or more values that are required."
      );
      err.status = 406;
      next(err);
      return;
    }
  });
  const editedGigsList = gigModel.editGigDetails(req.body, gigID);
  res.json(editedGigsList);
};
*/

//*Cece's Example

const Gig = require("../models/gigsModel");

exports.listGigs = (req, res) => {
  res.json(Gig.getAll());
};

exports.postGig = (req, res, next) => {
  if (
    !req.body.userID ||
    !req.body.userName ||
    !req.body.gigName ||
    !req.body.description ||
    !req.body.category ||
    !req.body.status ||
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
    let updatedGigs = Gig.add(req.body);
    res.json(updatedGigs);
  }
};

exports.getSingleGig = (req, res, next) => {
  const gig = Gig.getOneById(req.params.id);
  if (!gig) {
    const err = new Error("Please provide a valid ID.");
    err.status = 400;
    next(err);
  } else {
    res.json(gig);
  }
};

exports.getGigsByUser = (req, res, next) => {
  const userID = req.params.id;
  let filteredGig = Gig.getGigsByUser(userID);
  if (filteredGig === [] || filteredGig === undefined) {
    const err = new Error("That user doesn't exist");
    err.status = 404;
    next(err);
  } else {
    res.json(filteredGig);
  }
};

// exports.getInventoryByWarehouse = (req, res, next) => {
//   const warehouseID = req.params.id;
//   let filteredInventory = gigModel.getInventoryByWarehouse(warehouseID);
//   if (filteredInventory === [] || filteredInventory === undefined) {
//     const err = new Error("That warehouse doesn't exist");
//     err.status = 404;
//     next(err);
//   } else {
//     res.json(filteredInventory);
//   }
// };

exports.deleteGig = (req, res, next) => {
  const updatedArray = Gig.remove(req.params.id);
  if (!updatedArray) {
    const err = new Error("Please provide a valid ID.");
    err.status = 400;
    next(err);
  } else {
    res.json(updatedArray);
  }
};

exports.editGigDetails = (req, res, next) => {
  console.log("req.body", req.body);
  if (
    !req.body.userID &&
    !req.body.userName &&
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
    const updatedArray = Gig.update(req.params.id, req.body);
    if (!updatedArray) {
      const err = new Error("Please provide a valid id.");
      err.status = 400;
      next(err);
    } else {
      res.json(Gig.update(req.params.id, req.body));
    }
  }
};
