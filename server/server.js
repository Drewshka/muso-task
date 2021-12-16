const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const usersRoutes = require("./routes/usersRoutes");
const gigsRoutes = require("./routes/gigsRoutes");
const authRoutes = require("./routes/authRoutes");
// *session id on server session cookie on client
const session = require("express-session");
// *add http headers, small layer of security
const helmet = require("helmet");
const logger = require("morgan");
const passport = require("passport");
const GitHubStrategy = require("passport-github2");
// const PORT = 8080;

const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

require("dotenv").config();

const passportConfig = {
  clientID: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL: process.env.CALLBACK_URL,
};

app.use(express.static(path.join(__dirname, "public")));

//* HEROKU
app.use(express.static(__dirname + "./../build"));

// Middleware
app.use(express.json());
// app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(logger("dev"));
app.use(cors({ origin: true, credentials: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUnitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// *initialize github strategy middleware
passport.use(
  new GitHubStrategy(passportConfig, function (
    _accessToken,
    _refreshToken,
    profile,
    cb
  ) {
    // *this is where you can also use a user's profile information to create a user to save into your database
    return cb(null, profile);
  })
);
// *serializeUser and deserializeUser
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

require("dotenv").config();

// Routes
app.use("/users", usersRoutes);
app.use("/gigs", gigsRoutes);
app.use("/", authRoutes);

app.listen(PORT, () => {
  console.log(`Express server is up and running on Port ${PORT}!`);
});
