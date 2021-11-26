/*
//*Old Code
const fs = require("fs"),
  path = require("path"),
  gigsFile = path.join(__dirname, "../data/gigs.json"),
  gigsTestFile = path.join(__dirname, "../data/gigs-testing.json"),
  { v4: uuidv4 } = require("uuid");

let gigsData = [];

const getGigsData = () => {
  fs.readFile(gigsFile, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    gigsData = JSON.parse(data);
  });
};

getGigsData();

// const getGigsData = () => {
//   const data = fs.readFileSync(gigsFile);
//   return JSON.parse(data);
// };

// getGigsData();

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

const getSingleGig = (gigID) => {
  getGigsData();
  let singleGig = gigsData.find((gig) => {
    return gig.id === gigID;
  });
  return JSON.stringify(singleGig);
};

// const getInventoryByWarehouse = (warehouseID) => {
//   getInventoryData();
//   let filteredInventory = inventoryData.filter(
//     (item) => item.warehouseID === warehouseID
//   );
//   return filteredInventory;
// };

const getAllGigs = () => {
  getGigsData();
  return JSON.stringify(gigsData);
};

const editGigDetails = (edits, gigID) => {
  getGigsData();
  let targetIndex = gigsData.indexOf(gigsData.find((gig) => gig.id === gigID));
  gigsData[targetIndex] = edits;
  fs.writeFile(gigsTestFile, JSON.stringify(gigsData), (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
  return JSON.stringify(gigsData);
};

// const editInventoryDetails = (edits, itemID) => {
//   getInventoryData();
//   let targetIndex = inventoryData.indexOf(
//     inventoryData.find((item) => item.id === itemID)
//   );
//   inventoryData[targetIndex] = edits;
//   fs.writeFile(inventoriesTestFile, JSON.stringify(inventoryData), (err) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//   });
//   return JSON.stringify(inventoryData);
// };

const deleteGig = (gigID) => {
  const gigsArray = getGigsData();
  const gigsIndex = gigsArray.findIndex((singleGig) => singleGig.id === gigID);
  if (gigsIndex !== -1) {
    gigsArray.splice(gigsIndex, 1);
    fs.writeFileSync(gigsTestFile, JSON.stringify(gigsArray));
    return gigsArray;
  }
};

const postGig = (newData) => {
  getGigsData();
  let {
    userID,
    userName,
    gigName,
    description,
    category,
    status,
    venue,
    address,
    date,
    time,
  } = newData;
  let addGig = new SingleGig(
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
  );
  console.log(newData);
  gigsData.push(addGig);
  fs.writeFileSync(gigsTestFile, JSON.stringify(gigsData));
  return JSON.stringify(gigsData);
};

module.exports = {
  SingleGig,
  getSingleGig,
  getAllGigs,
  editGigDetails,
  deleteGig,
  postGig,
  // getInventoryByWarehouse,
};

*/

//*Cece's Example

const fs = require("fs"),
  path = require("path"),
  gigsFile = path.join(__dirname, "../data/gigs.json"),
  gigsTestFile = path.join(__dirname, "../data/gigs-testing.json"),
  { v4: uuidv4 } = require("uuid");

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

const getAll = () => {
  const data = fs.readFileSync(gigsFile);
  return JSON.parse(data);
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

// module.exports = {
//   SingleGig,
//   getSingleGig,
//   getAllGigs,
//   editGigDetails,
//   deleteGig,
//   postGig,
//   // getInventoryByWarehouse,
// };
