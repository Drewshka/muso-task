const express = require("express");
const passport = require("passport");
const router = express.Router();

let authRedirect = "/";

router.get("/loginFailed", (req, res, next) => {
  res.status(401).send("Could not authenticate with OAuth provider.");
});

router.get("/login", (req, res) => {
  console.log("req.query.from: ", req.query.from);
  authRedirect = req.query.from;
  passport.authenticate("github")(req, res);
});

router.get("/logout", (req, res) => {
  console.log("Inside logout, req.query.from: ", req.query.from);
  req.logout();
  res.redirect(req.query.from);
});

router.get("/auth", (req, res) => {
  passport.authenticate("github", {
    successRedirect: authRedirect,
    failureRedirect: "/loginFailed",
  })(req, res);
});

router.get("/check-auth", (req, res) => {
  if (req.user === undefined) return res.status(401).send("Unauthorized");

  res.status(200).json(req.user);
});

module.exports = router;
