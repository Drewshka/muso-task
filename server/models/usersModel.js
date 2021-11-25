/*
// *Old code

const fs = require("fs"),
  path = require("path"),
  usersFile = path.join(__dirname, "../data/users.json"),
  usersTestFile = path.join(__dirname, "../data/users-testing.json"),
  gigsFile = path.join(__dirname, "../data/gigs.json"),
  gigsTestFile = path.join(__dirname, "../data/gigs-testing.json"),
  { v4: uuidv4 } = require("uuid");

let usersData = [];
let gigsData = [];

const getUsersData = () => {
  fs.readFile(usersFile, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    usersData = JSON.parse(data);
  });
};
const getGigsData = () => {
  fs.readFile(gigsFile, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    gigsData = JSON.parse(data);
  });
};
getUsersData();
getGigsData();

class User {
  constructor(name, address, city, country, phone, email, instrument, bio) {
    this.id = uuidv4();
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

// const deleteGig = (userID) => {
//   getGigsData();
//   let newGigsData = gigsData.filter((gig) => gig.userID !== userID);
//   fs.writeFile(gigsTestFile, JSON.stringify(newGigsData), (err) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//   });
//   return newGigsData;
// };

// const deleteUserWithGigs = (userID) => {
//   getUsersData();
//   let newUsersData = usersData.filter((user) => user.id !== userID);

//   fs.writeFile(usersTestFile, JSON.stringify(newUsersData), (err) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//   });
//   let newGigsData = deleteGig(userID);
//   let returnArray = [newUsersData, newGigsData];
//   returnArray = JSON.stringify(returnArray);
//   return returnArray;
// };

const getAllUsers = () => {
  getUsersData();
  return JSON.stringify(usersData);
};

const getSingleUser = (userID) => {
  getUsersData();
  let singleUser = usersData.find((user) => {
    return user.id === userID;
  });
  return singleUser;
};

const postSingleUser = (userData) => {
  getUsersData();
  let { name, address, city, country, phone, email, instrument, bio } =
    userData;
  let addUser = new User(
    name,
    address,
    city,
    country,
    phone,
    email,
    instrument,
    bio
  );
  usersData.push(addUser);
  fs.writeFileSync(usersTestFile, JSON.stringify(usersData));
  return JSON.stringify(usersData);
};

const editUserDetails = (edits, userID) => {
  getUsersData();
  let targetIndex = usersData.indexOf(
    usersData.find((user) => user.id === userID)
  );
  usersData[targetIndex] = edits;
  fs.writeFile(usersTestFile, JSON.stringify(usersData), (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
  return JSON.stringify(usersData);
};

module.exports = {
  User,
  getAllUsers,
  getSingleUser,
  postSingleUser,
  // deleteUserWithGigs,
  editUserDetails,
};

*/

//*Cece's Example

const fs = require("fs"),
  path = require("path"),
  usersFile = path.join(__dirname, "../data/users.json"),
  usersTestFile = path.join(__dirname, "../data/users-testing.json"),
  gigsFile = path.join(__dirname, "../data/gigs.json"),
  gigsTestFile = path.join(__dirname, "../data/gigs-testing.json"),
  { v4: uuidv4 } = require("uuid");

// let usersData = [];
// let gigsData = [];
class User {
  constructor(name, address, city, country, phone, email, instrument, bio) {
    this.id = uuidv4();
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

const getAllUsers = () => {
  const data = fs.readFileSync(usersFile);
  return JSON.parse(data);
};

const getAllGigs = () => {
  const data = fs.readFileSync(gigsFile);
  return JSON.parse(data);
};

const add = (obj) => {
  const usersArray = getAllUsers();
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
  usersArray.push(user);
  fs.writeFileSync(usersTestFile, JSON.stringify(usersArray));
  return usersArray;
};

const getOneById = (id) => {
  const usersArray = getAllUsers();
  const user = usersArray.find((user) => user.id === id);
  return user;
};

const remove = (id) => {
  const usersArray = getAllUsers();
  const userIndex = usersArray.findIndex((user) => user.id === id);
  if (userIndex !== -1) {
    usersArray.splice(userIndex, 1);
    fs.writeFileSync(usersTestFile, JSON.stringify(usersArray));
    return usersArray;
  }
};

const update = (id, data) => {
  console.log("data parameter", data);
  const usersArray = getAllUsers();
  const usersIndex = usersArray.findIndex((user) => user.id === id);

  if (usersIndex !== -1) {
    usersArray.splice(usersIndex, 1, {
      id: id,
      ...data,
    });
    fs.writeFileSync(usersTestFile, JSON.stringify(usersArray));
    return usersArray;
  }
};

module.exports = { getAllUsers, getAllGigs, add, getOneById, remove, update };
