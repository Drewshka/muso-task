/*

//* Old code

const usersModel = require("../models/usersModel");

exports.deleteUserWithGigs = (req, res, next) => {
  if (req.params.id === undefined || !req.params.id) {
    const err = new Error("DELETE requires valid user ID.");
    err.status = 400;
    next(err);
  } else {
    let response = usersModel.deleteUserWithGigs(req.params.id);
    res.json(response);
  }
};

exports.getAllUsers = (req, res, next) => {
  let allUsers = usersModel.getAllUsers();
  if (allUsers === undefined) {
    const err = new Error("Something went wrong.");
    err.status = 500;
    next(err);
  } else {
    res.json(allUsers);
  }
};

exports.getSingleUser = (req, res, next) => {
  let singleUser = usersModel.getSingleUser(req.params.id);
  if (singleUser === undefined) {
    const err = new Error("We can't find that user.");
    err.status = 404;
    next(err);
  } else {
    res.json(singleUser);
  }
};

exports.postSingleUser = (req, res) => {
  const userData = req.body;
  const formattedUser = usersModel.postSingleUser(userData);
  if (typeof formattedUser === undefined) {
    const err = new Error("We can't complete your request.");
    err.status = 404;
    next(err);
  } else {
    res.json(formattedUser);
  }
};

exports.editUserDetails = (req, res, next) => {
  let userID = req.params.id;
  const { ...rest } = req.body;
  // Object.entries(contact).map((item) => {
  //   if (item[1] === "" || item[1] === undefined) {
  //     const err = new Error(
  //       "You may be missing one or more values that are required."
  //     );
  //     err.status = 406;
  //     next(err);
  //     return;
  //   }
  // });
  Object.entries(rest).map((item) => {
    if (item[1] === "" || item[1] === undefined) {
      const err = new Error(
        "You may be missing one or more values that are required."
      );
      err.status = 406;
      next(err);
      return;
    }
  });
  const editedUsersList = usersModel.editUserDetails(req.body, userID);
  res.json(editedUsersList);
};

*/

const User = require("../models/usersModel");
const Gig = require("../models/usersModel");

exports.listUsers = (req, res) => {
  res.json(User.getAllUsers());
};

exports.listGigs = (req, res) => {
  res.json(Gig.getAllGigs());
};

exports.postUser = (req, res, next) => {
  if (
    !req.body.name ||
    !req.body.address ||
    !req.body.city ||
    !req.body.country ||
    !req.body.phone ||
    !req.body.email ||
    !req.body.instrument ||
    !req.body.bio
    // !req.body.date ||
    // !req.body.time
  ) {
    const err = new Error(
      "POST request requires name, address, city, country, phone, email, instrument and bio attributes."
    );
    err.status = 400;
    next(err);
  } else {
    let updatedUsers = User.add(req.body);
    res.json(updatedUsers);
  }
};

exports.getSingleUser = (req, res, next) => {
  const user = User.getOneById(req.params.id);
  if (!user) {
    const err = new Error("Please provide a valid ID.");
    err.status = 400;
    next(err);
  } else {
    res.json(user);
  }
};

exports.deleteUser = (req, res, next) => {
  const updatedArray = User.remove(req.params.id);
  if (!updatedArray) {
    const err = new Error("Please provide a valid ID.");
    err.status = 400;
    next(err);
  } else {
    res.json(updatedArray);
  }
};

exports.editUserDetails = (req, res, next) => {
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
    const updatedArray = User.update(req.params.id, req.body);
    if (!updatedArray) {
      const err = new Error("Please provide a valid id.");
      err.status = 400;
      next(err);
    } else {
      res.json(User.update(req.params.id, req.body));
    }
  }
};
