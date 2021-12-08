// const fs = require("fs"),
//   path = require("path"),
//   usersFile = path.join(__dirname, "../data/users.json"),
//   usersTestFile = path.join(__dirname, "../data/users-testing.json"),
//   gigsFile = path.join(__dirname, "../data/gigs.json"),
//   gigsTestFile = path.join(__dirname, "../data/gigs-testing.json"),
//   { v4: uuidv4 } = require("uuid");

const database = require("../knexfile");
const knex = require("knex")(database);

class User {
  constructor(name, address, city, country, phone, email, instrument, bio) {
    this.name = name;
    this.address = address;
    this.city = city;
    this.country = country;
    this.phone = phone;
    this.email = email;
    this.instrument = instrument;
    this.bio = bio;
  }
}

const getAllUsers = async () => {
  try {
    const data = await knex.select("*").from("users");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getAllGigs = async () => {
  try {
    const data = await knex.select("*").from("gigs");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const add = async (obj) => {
  try {
    const user = new User(
      obj.name,
      obj.address,
      obj.city,
      obj.country,
      obj.phone,
      obj.email,
      obj.instrument,
      obj.bio
    );
    const data = await knex("users").insert(user);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const getOneById = async (id) => {
  try {
    const data = await knex.select("*").where("id", id).from("users");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const remove = async (userID) => {
  try {
    const data = await knex("users").where("userID", userID).del();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const removeUserWithGigs = async (id, userID) => {
  try {
    const data = await knex("users").where("id", id).del();
    const gigData = await knex("gigs").where("userID", userID).del();
    let returnData = [data, gigData];
    console.log(data);
    return returnData;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const update = async (id, data) => {
  console.log("data parameter", data);

  try {
    const result = await knex("users").where("id", id).update(data);
    console.log(result);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  getAllUsers,
  getAllGigs,
  add,
  getOneById,
  remove,
  removeUserWithGigs,
  update,
};
