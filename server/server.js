const express = require("express");
const app = express();
const PORT = 8080;
const usersRoutes = require("./routes/usersRoutes");
const gigsRoutes = require("./routes/gigsRoutes");
// const database = require("./knexfile");
// const knex = require("knex")(database);

const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

require("dotenv").config();
// require("dotenv").config({
//   path: `.env.local`,
// });

// Routes
app.use("/users", usersRoutes);
app.use("/gigs", gigsRoutes);

app.listen(PORT, () => {
  console.log(`Express server is up and running on Port ${PORT}!`);
});
