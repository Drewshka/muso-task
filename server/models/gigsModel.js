const fs = require("fs"),
  path = require("path"),
  gigsFile = path.join(__dirname, "../data/gigs.json"),
  gigsTestFile = path.join(__dirname, "../data/gigs-testing.json"),
  { v4: uuidv4 } = require("uuid");

const database = require("../knexfile");
const knex = require("knex")(database);

class SingleGig {
  constructor(
    // userName,
    userID,
    gigName,
    description,
    category,
    venue,
    address,
    date,
    time
  ) {
    // this.id = uuidv4();
    // this.userName = userName;
    this.userID = userID;
    this.gigName = gigName;
    this.description = description;
    this.category = category;
    this.venue = venue;
    this.address = address;
    this.date = date;
    this.time = time;
  }
}

const getAll = async () => {
  try {
    const data = await knex
      .select(["gigs.*", "users.name", "users.email"])
      .from("gigs")
      .innerJoin("users", "users.id", "gigs.userID");

    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//* old code
// const getAll = async () => {
//   try {
//     const data = await knex.select("*").from("gigs");
//     console.log(data);
//     // return JSON.parse(data);
//     return data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };

const add = async (obj) => {
  // const gigsArray = getAll();
  try {
    const gig = new SingleGig(
      // obj.status,
      // obj.userName,
      obj.userID,
      obj.gigName,
      obj.description,
      obj.category,
      obj.venue,
      obj.address,
      obj.date,
      obj.time
    );

    const data = await knex("gigs").insert(gig);
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// knex.from('users').innerJoin('accounts', 'users.id', 'accounts.user_id')

const getOneById = async (id) => {
  try {
    const data = await knex
      .select(["gigs.*", "users.name", "users.email"])
      .from("gigs")
      .innerJoin("users", "users.id", "gigs.userID")
      .where("gigs.id", id);

    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//* old code
// const getOneById = async (id) => {
//   try {
//     const data = await knex.select("*").where("id", id).from("gigs");

//     console.log(data);

//     return data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };

const getGigsByUser = async (userID) => {
  try {
    const data = await knex.select("*").where("userID", userID).from("gigs");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const remove = async (id) => {
  try {
    const data = await knex("gigs").where("id", id).del();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const update = async (id, data) => {
  console.log("data parameter", data);

  try {
    const result = await knex("gigs").where("id", id).update(data);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { getAll, add, getOneById, remove, update, getGigsByUser };
