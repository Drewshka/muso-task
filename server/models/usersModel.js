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
