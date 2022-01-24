const fs = require("fs"),
  path = require("path"),
  gigsFile = path.join(__dirname, "../data/gigs.json"),
  gigsTestFile = path.join(__dirname, "../data/gigs-testing.json"),
  usersFile = path.join(__dirname, "../data/users.json"),
  usersTestFile = path.join(__dirname, "../data/users-testing.json"),
  { v4: uuidv4 } = require("uuid");

class SingleGig {
  constructor(
    userID,
    // userName,
    // status,
    gigName,
    description,
    category,
    venue,
    address,
    date,
    time
  ) {
    this.id = uuidv4();
    this.userID = userID;
    // this.userName = userName;
    // this.status = status;
    this.gigName = gigName;
    this.description = description;
    this.category = category;
    this.venue = venue;
    this.address = address;
    this.date = date;
    this.time = time;
  }
}

const getAll = () => {
  const data = fs.readFileSync(gigsTestFile);
  return JSON.parse(data);
  console.log(data);
};

// const getAll = () => {
//   var results = [];
//   const gigsData = fs.readFileSync(gigsTestFile);
//   const usersData = fs.readFileSync(usersTestFile);

//   for (var i = 0; i < gigsData.length; i++) {
//     for (var j = 0; j < usersData.length; j++) {
//       if (gigsData[i].userID === usersData[j].id) {
//         results.push({
//           gig_name: gigsData[i].gigName,
//           gig_user_id: gigsData[i].userID,
//           userID: usersData[j].id,
//           user_name: usersData[j].name,
//           user_email: usersData[j].email,
//         });
//         return JSON.parse(results);
//       }
//     }
//   }
// };
// console.log(gigsData);

// const getAll = () => {
//   const data = fs
//     .readFileSync(gigsTestFile)
//     .select(["gigs.*", "users.name", "users.email"])
//     .from("gigs")
//     .innerJoin("users", "users.id", "gigs.userID");
//   return JSON.parse(data);
// };

// const getAll = async () => {
//   try {
//     const data = await knex
//       .select(["gigs.*", "users.name", "users.email"])
//       .from("gigs")
//       .innerJoin("users", "users.id", "gigs.userID");

//     console.log(data);

//     return data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };

const add = (obj) => {
  const gigsArray = getAll();
  const gig = new SingleGig(
    obj.userID,
    // obj.userName,
    // obj.status,
    obj.gigName,
    obj.description,
    obj.category,
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

// const database = require("../knexfile");
// const knex = require("knex")(database);

//* HEROKU CODE
// const knex =
//   process.env.NODE_ENV === "production"
//     ? require("knex")(require("../knexfile").production)
//     : require("knex")(require("../knexfile").development);

// class SingleGig {
//   constructor(
//     userID,
//     gigName,
//     description,
//     category,
//     venue,
//     address,
//     date,
//     time
//   ) {
//     this.userID = userID;
//     this.gigName = gigName;
//     this.description = description;
//     this.category = category;
//     this.venue = venue;
//     this.address = address;
//     this.date = date;
//     this.time = time;
//   }
// }

// //* get with user info
// const getAll = async () => {
//   try {
//     const data = await knex
//       .select(["gigs.*", "users.name", "users.email"])
//       .from("gigs")
//       .innerJoin("users", "users.id", "gigs.userID");

//     console.log(data);

//     return data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };

// const add = async (obj) => {
//   try {
//     const gig = new SingleGig(
//       obj.userID,
//       obj.gigName,
//       obj.description,
//       obj.category,
//       obj.venue,
//       obj.address,
//       obj.date,
//       obj.time
//     );

//     const data = await knex("gigs").insert(gig);
//     console.log(data);

//     return data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };

// //* get with user info
// const getOneById = async (id) => {
//   try {
//     const data = await knex
//       .select(["gigs.*", "users.name", "users.email"])
//       .from("gigs")
//       .innerJoin("users", "users.id", "gigs.userID")
//       .where("gigs.id", id);

//     console.log(data);

//     return data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };

// const getGigsByUser = async (userID) => {
//   try {
//     const data = await knex.select("*").where("userID", userID).from("gigs");
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };

// const remove = async (id) => {
//   try {
//     const data = await knex("gigs").where("id", id).del();
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };

// const update = async (id, data) => {
//   console.log("data parameter", data);

//   try {
//     const result = await knex("gigs").where("id", id).update(data);
//     console.log(result);
//     return result;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// };

// module.exports = { getAll, add, getOneById, remove, update, getGigsByUser };
