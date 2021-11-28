const express = require("express"),
  router = express.Router(),
  {
    listUsers,
    getSingleUser,
    postUser,
    editUserDetails,
    deleteUserAndGigs,
    // deleteUser,
    // getUserByGig,
  } = require("../controllers/usersControllers");
// const passport = require("passport");

// let authRedirect = "/";

// router.get("/loginFailed", (req, res, next) => {
//   res.status(401).send("Could not authenticate with OAuth provider.");
// });

// router.get("/login", (req, res) => {
//   console.log("req.query.from: ", req.query.from);
//   authRedirect = req.query.from;
//   passport.authenticate("github")(req, res);
// });

// router.get("/logout", (req, res) => {
//   console.log("Inside logout, req.query.from: ", req.query.from);
//   req.logout();
//   res.redirect(req.query.from);
// });

// router.get("/auth", (req, res) => {
//   passport.authenticate("github", {
//     successRedirect: authRedirect,
//     failureRedirect: "/loginFailed",
//   })(req, res);
// });

// router.get("/check-auth", (req, res) => {
//   if (req.user === undefined) return res.status(401).send("Unauthorized");

//   res.status(200).json(req.user);
// });

router.get("/", listUsers);
router.get("/:id", getSingleUser);
router.post("/", postUser);
router.put("/:id", editUserDetails);
router.delete("/:id", deleteUserAndGigs);

// router.delete("/:id", deleteUser);
// router.get("/gigs/:id", getUserByGig);

module.exports = router;
