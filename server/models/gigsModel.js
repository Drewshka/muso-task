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
    status,
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
    this.status = status;
    this.venue = venue;
    this.address = address;
    this.date = date;
    this.time = time;
  }
}
// *old code
// const getAll = () => {
//   const data = fs.readFileSync(gigsFile);
//   return JSON.parse(data);
// };

const getAll = async () => {
  try {
    const data = await knex.select("*").from("gigs");
    console.log(data);
    // return JSON.parse(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// *old code
// const add = (obj) => {
//   const gigsArray = getAll();
//   const gig = new SingleGig(
//     obj.userID,
//     obj.userName,
//     obj.gigName,
//     obj.description,
//     obj.category,
//     obj.status,
//     obj.venue,
//     obj.address,
//     obj.date,
//     obj.time
//   );
//   gigsArray.push(gig);
//   fs.writeFileSync(gigsTestFile, JSON.stringify(gigsArray));
//   return gigsArray;
// };

const add = async (obj) => {
  // const gigsArray = getAll();
  try {
    const gig = new SingleGig(
      obj.userID,
      // obj.userName,
      obj.gigName,
      obj.description,
      obj.category,
      obj.status,
      obj.venue,
      obj.address,
      obj.date,
      obj.time
    );

    const data = await knex("gigs").insert(gig);
    console.log(data);
    // return JSON.parse(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
    // return JSON.parse(error);
  }
};

const getOneById = async (id) => {
  // const gigsArray = getAll();
  try {
    const data = await knex.select("*").where("id", id).from("gigs");
    console.log(data);
    // return JSON.parse(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }

  // const gig = gigsArray.find((gig) => gig.id === id);
  // return gig;
};

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

// *old code
// const getGigsByUser = (userID) => {
//   const gigsArray = getAll();
//   let filteredGig = gigsArray.filter((gig) => gig.userID === userID);
//   return filteredGig;
// };

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

// *old code
// const remove = (id) => {
//   const gigsArray = getAll();
//   const gigIndex = gigsArray.findIndex((gig) => gig.id === id);
//   if (gigIndex !== -1) {
//     gigsArray.splice(gigIndex, 1);
//     fs.writeFileSync(gigsTestFile, JSON.stringify(gigsArray));
//     return gigsArray;
//   }
// };

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

// *old code
// const update = (id, data) => {
//   console.log("data parameter", data);
//   const gigsArray = getAll();
//   const gigsIndex = gigsArray.findIndex((gig) => gig.id === id);

//   if (gigsIndex !== -1) {
//     gigsArray.splice(gigsIndex, 1, {
//       id: id,
//       ...data,
//     });
//     fs.writeFileSync(gigsTestFile, JSON.stringify(gigsArray));
//     return gigsArray;
//   }
// };

module.exports = { getAll, add, getOneById, remove, update, getGigsByUser };
