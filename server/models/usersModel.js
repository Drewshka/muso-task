const fs = require("fs"),
  path = require("path"),
  usersFile = path.join(__dirname, "../data/users.json"),
  usersTestFile = path.join(__dirname, "../data/users-testing.json"),
  gigsFile = path.join(__dirname, "../data/gigs.json"),
  gigsTestFile = path.join(__dirname, "../data/gigs-testing.json"),
  { v4: uuidv4 } = require("uuid");

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

let usersData = [];
let gigsData = [];

const getAllUsers = () => {
  const data = fs.readFileSync(usersFile);
  // return JSON.parse(data);
  usersData = JSON.parse(data);
  return usersData;
};

const getAllGigs = () => {
  const data = fs.readFileSync(gigsFile);
  // return JSON.parse(data);
  gigsData = JSON.parse(data);
  return gigsData;
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

// const remove = (id) => {
//   const usersArray = getAllUsers();
//   const userIndex = usersArray.findIndex((user) => user.id === id);
//   if (userIndex !== -1) {
//     usersArray.splice(userIndex, 1);
//     fs.writeFileSync(usersTestFile, JSON.stringify(usersArray));
//     return usersArray;
//   }
// };

const remove = (userID) => {
  getAllGigs();
  let newGigsData = gigsData.filter((gig) => gig.userID !== userID);
  fs.writeFile(gigsTestFile, JSON.stringify(newGigsData), (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
  return newGigsData;
};

const removeUserWithGigs = (userID) => {
  getAllUsers();
  let newUsersData = usersData.filter((user) => user.id !== userID);

  fs.writeFile(usersTestFile, JSON.stringify(newUsersData), (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
  let newGigsData = remove(userID);
  let returnArray = [newUsersData, newGigsData];
  returnArray = JSON.stringify(returnArray);
  return returnArray;
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

module.exports = {
  getAllUsers,
  getAllGigs,
  add,
  getOneById,
  remove,
  removeUserWithGigs,
  update,
};
