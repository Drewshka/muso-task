const fs = require("fs"),
  path = require("path"),
  usersFile = path.join(__dirname, "../data/users.json"),
  usersTestFile = path.join(__dirname, "../data/users-testing.json"),
  gigsFile = path.join(__dirname, "../data/gigs.json"),
  gigsTestFile = path.join(__dirname, "../data/gigs-testing.json"),
  { v4: uuidv4 } = require("uuid");

const database = require("../knexfile");
const knex = require("knex")(database);

class User {
  constructor(name, address, city, country, phone, email, instrument, bio) {
    // this.id = uuidv4();
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

// let usersData = [];
// let gigsData = [];

// *old code
// const getAllUsers = () => {
//   const data = fs.readFileSync(usersFile);
//   // return JSON.parse(data);
//   usersData = JSON.parse(data);
//   return usersData;
// };

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
// *old code
// const getAllGigs = () => {
//   const data = fs.readFileSync(gigsFile);
//   // return JSON.parse(data);
//   gigsData = JSON.parse(data);
//   return gigsData;
// };

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
  // const usersArray = getAllUsers();
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
      // obj.date,
      // obj.time
    );
    const data = await knex("users").insert(user);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
// *old code
// const add = (obj) => {
//   const usersArray = getAllUsers();
//   const user = new User(
//     obj.name,
//     obj.address,
//     obj.city,
//     obj.country,
//     obj.phone,
//     obj.email,
//     obj.instrument,
//     obj.bio
//     // obj.date,
//     // obj.time
//   );
//   usersArray.push(user);
//   fs.writeFileSync(usersTestFile, JSON.stringify(usersArray));
//   return usersArray;
// };
// *old code
// const getOneById = (id) => {
//   const usersArray = getAllUsers();
//   const user = usersArray.find((user) => user.id === id);
//   return user;
// };

const getOneById = async (id) => {
  // const usersArray = getAllUsers();
  try {
    const data = await knex.select("*").where("id", id).from("users");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
// *old code
// const remove = (userID) => {
//   getAllGigs();
//   let newGigsData = gigsData.filter((gig) => gig.userID !== userID);
//   fs.writeFile(gigsTestFile, JSON.stringify(newGigsData), (err) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//   });
//   return newGigsData;
// };

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

// const removeUserWithGigs = (userID) => {
//   getAllUsers();
//   let newUsersData = usersData.filter((user) => user.id !== userID);

//   fs.writeFile(usersTestFile, JSON.stringify(newUsersData), (err) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//   });
//   let newGigsData = remove(userID);
//   let returnArray = [newUsersData, newGigsData];
//   returnArray = JSON.stringify(returnArray);
//   return returnArray;
// };

//TODO: check this
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

//*old code
// const update = (id, data) => {
//   console.log("data parameter", data);
//   const usersArray = getAllUsers();
//   const usersIndex = usersArray.findIndex((user) => user.id === id);

//   if (usersIndex !== -1) {
//     usersArray.splice(usersIndex, 1, {
//       id: id,
//       ...data,
//     });
//     fs.writeFileSync(usersTestFile, JSON.stringify(usersArray));
//     return usersArray;
//   }
// };

module.exports = {
  getAllUsers,
  getAllGigs,
  add,
  getOneById,
  remove,
  removeUserWithGigs,
  update,
};
