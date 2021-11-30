const express = require("express");
const passport = require("passport");
const router = express.Router();
const jwt = require("jsonwebtoken");

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

//* JWT code below (not for github login)
const jsonSecretKey = "secret";
router.use((req, res, next) => {
  // Signup and login are public URLs that don't require a token
  if (req.url === "/signup" || req.url === "/login") next();
  else {
    // Format of request is BEARER <token>. Splitting on ' ' will create an
    // array where the token is at index 1
    const token = getToken(req);
    console.log(typeof token);
    if (token) {
      console.log(token);
      if (jwt.verify(token, jsonSecretKey)) {
        // Decode the token to pass along to end-points that may need
        // access to data stored in the token.
        req.decode = jwt.decode(token);
        next();
      } else {
        res.status(403).json({ error: "Not Authorized." });
      }
    } else {
      res.status(403).json({ error: "No token. Unauthorized." });
    }
  }
});

function getToken(req) {
  return req.headers.authorization.split(" ")[1];
}

const users = {};

router.post("/signup", (req, res) => {
  const { username, name, password } = req.body;
  users[username] = {
    name,
    password, // NOTE: Passwords should NEVER be stored in the clear like this. Use a              // library like bcrypt to Hash the password. For demo purposes only.
  };
  res.json({ success: "true" });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users[username];
  if (user && user.password === password) {
    res.json({ token: jwt.sign({ name: user.name }, jsonSecretKey) });
  } else {
    res.json({
      token: "",
      error: {
        message: "Error logging in. Invalid username/password combination.",
      },
    });
  }
});

router.get("/profile", (req, res) => {
  res.json(req.decode);
});

module.exports = router;
