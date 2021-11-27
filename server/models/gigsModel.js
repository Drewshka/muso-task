const fs = require("fs"),
  path = require("path"),
  gigsFile = path.join(__dirname, "../data/gigs.json"),
  gigsTestFile = path.join(__dirname, "../data/gigs-testing.json"),
  { v4: uuidv4 } = require("uuid");
// const database = require("../knexfile");
// const knex = require("knex");
const database = require("../knexfile");
const knex = require("knex")(database);

class SingleGig {
  constructor(
    userID,
    userName,
    gigName,
    description,
    category,
    status,
    venue,
    address,
    date,
    time
  ) {
    this.id = uuidv4();
    this.userID = userID;
    this.userName = userName;
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

// const getAll = () => {
//   const data = fs.readFileSync(gigsFile);
//   return JSON.parse(data);
// };

const getAll = async () => {
  // const data = fs.readFileSync(gigsFile);
  // return JSON.parse(data);

  try {
    const data = await knex.select("*").from("gigs");
    console.log(data);
    // return JSON.parse(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
    // return JSON.parse(error);
  }
};

const add = (obj) => {
  const gigsArray = getAll();
  const gig = new SingleGig(
    obj.userID,
    obj.userName,
    obj.gigName,
    obj.description,
    obj.category,
    obj.status,
    obj.venue,
    obj.address,
    obj.date,
    obj.time
  );
  gigsArray.push(gig);
  fs.writeFileSync(gigsTestFile, JSON.stringify(gigsArray));
  return gigsArray;
};

const getOneById = (id) => {
  const gigsArray = getAll();
  const gig = gigsArray.find((gig) => gig.id === id);
  return gig;
};

//TODO CHECK THIS!
const getGigsByUser = (userID) => {
  const gigsArray = getAll();
  let filteredGig = gigsArray.filter((gig) => gig.userID === userID);
  return filteredGig;
};

const remove = (id) => {
  const gigsArray = getAll();
  const gigIndex = gigsArray.findIndex((gig) => gig.id === id);
  if (gigIndex !== -1) {
    gigsArray.splice(gigIndex, 1);
    fs.writeFileSync(gigsTestFile, JSON.stringify(gigsArray));
    return gigsArray;
  }
};

const update = (id, data) => {
  console.log("data parameter", data);
  const gigsArray = getAll();
  const gigsIndex = gigsArray.findIndex((gig) => gig.id === id);

  if (gigsIndex !== -1) {
    gigsArray.splice(gigsIndex, 1, {
      id: id,
      ...data,
    });
    fs.writeFileSync(gigsTestFile, JSON.stringify(gigsArray));
    return gigsArray;
  }
};

module.exports = { getAll, add, getOneById, remove, update, getGigsByUser };
