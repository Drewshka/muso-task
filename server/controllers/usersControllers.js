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
