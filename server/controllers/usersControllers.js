const User = require("../models/usersModel");
const Gig = require("../models/usersModel");

exports.listUsers = async (req, res) => {
  const result = await User.getAllUsers();
  res.json(result);
};

exports.listGigs = async (req, res) => {
  const result = await Gig.getAllGigs();
  res.json(result);
};

exports.postUser = async (req, res, next) => {
  if (
    !req.body.name ||
    !req.body.address ||
    !req.body.city ||
    !req.body.country ||
    !req.body.phone ||
    !req.body.email ||
    !req.body.instrument ||
    !req.body.bio
  ) {
    const err = new Error(
      "POST request requires name, address, city, country, phone, email, instrument and bio attributes."
    );
    err.status = 400;
    next(err);
  } else {
    let updatedUsers = await User.add(req.body);
    res.json(updatedUsers);
  }
};

exports.getSingleUser = async (req, res, next) => {
  const user = await User.getOneById(req.params.id);
  if (!user) {
    const err = new Error("Please provide a valid ID.");
    err.status = 400;
    next(err);
  } else {
    res.json(user);
  }
};

exports.deleteUserAndGigs = async (req, res, next) => {
  if (req.params.id === undefined || !req.params.id) {
    const err = new Error("DELETE requires valid user ID.");
    err.status = 400;
    next(err);
  } else {
    let response = await User.removeUserWithGigs(req.params.id);
    res.json(response);
  }
};

exports.editUserDetails = async (req, res, next) => {
  console.log("req.body", req.body);
  if (
    !req.body.name &&
    !req.body.address &&
    !req.body.city &&
    !req.body.country &&
    !req.body.phone &&
    !req.body.email &&
    !req.body.instrument &&
    !req.body.bio
  ) {
    const err = new Error(
      "PUT request requires name, address, city, country, phone, email, instrument and bio attributes"
    );
    err.status = 400;
    next(err);
  } else {
    const updatedArray = await User.update(req.params.id, req.body);
    if (!updatedArray) {
      const err = new Error("Please provide a valid id.");
      err.status = 400;
      next(err);
    } else {
      res.json(User.update(req.params.id, req.body));
    }
  }
};
