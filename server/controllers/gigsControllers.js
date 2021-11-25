const gigsModel = require("../models/gigsModel");

exports.deleteGig = (req, res, next) => {
  const updatedArray = gigsModel.remove(req.params.id);
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
  const formattedGig = gigsModel.postGig(gigData);
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
  let singleGig = gigsModel.getSingleGig(req.params.id);
  if (singleGig === undefined) {
    const err = new Error("Gig not found.");
    err.status = 404;
    next(err);
  } else {
    res.json(singleGig);
  }
};

// exports.getInventoryByWarehouse = (req, res, next) => {
//   const warehouseID = req.params.id;
//   let filteredInventory = gigsModel.getInventoryByWarehouse(warehouseID);
//   if (filteredInventory === [] || filteredInventory === undefined) {
//     const err = new Error("That warehouse doesn't exist");
//     err.status = 404;
//     next(err);
//   } else {
//     res.json(filteredInventory);
//   }
// };

exports.getAllGigs = (req, res, next) => {
  let allGigs = gigsModel.getAllGigs();
  if (allGigs === undefined) {
    const err = new Error("Something went wrong.");
    err.status = 500;
    next(err);
  } else {
    res.json(allGigs);
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
  const editedGigsList = gigsModel.editGigDetails(req.body, gigID);
  res.json(editedGigsList);
};
