const fs = require("fs"),
  path = require("path"),
  warehousesFile = path.join(__dirname, "../data/warehouses.json"),
  warehousesTestFile = path.join(__dirname, "../data/warehouses-testing.json"),
  inventoriesFile = path.join(__dirname, "../data/inventories.json"),
  inventoriesTestFile = path.join(
    __dirname,
    "../data/inventories-testing.json"
  ),
  { v4: uuidv4 } = require("uuid");

let warehousesData = [];
let inventoriesData = [];
const getWarehousesData = () => {
  fs.readFile(warehousesFile, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    warehousesData = JSON.parse(data);
  });
};
const getInventoriesData = () => {
  fs.readFile(inventoriesFile, "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    inventoriesData = JSON.parse(data);
  });
};
getWarehousesData();
getInventoriesData();

class Warehouse {
  constructor(
    name,
    address,
    city,
    country,
    contactName,
    contactPosition,
    contactPhone,
    contactEmail
  ) {
    this.id = uuidv4();
    this.name = name;
    this.address = address;
    this.city = city;
    this.country = country;
    this.contact = {
      name: contactName,
      position: contactPosition,
      phone: contactPhone,
      email: contactEmail,
    };
  }
}

const deleteInventory = (warehouseID) => {
  getInventoriesData();
  let newInventoriesData = inventoriesData.filter(
    (item) => item.warehouseID !== warehouseID
  );
  fs.writeFile(
    inventoriesTestFile,
    JSON.stringify(newInventoriesData),
    (err) => {
      if (err) {
        console.log(err);
        return;
      }
    }
  );
  return newInventoriesData;
};

const deleteWarehouseWithInventory = (warehouseID) => {
  getWarehousesData();
  let newWarehousesData = warehousesData.filter(
    (warehouse) => warehouse.id !== warehouseID
  );

  fs.writeFile(warehousesTestFile, JSON.stringify(newWarehousesData), (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
  let newInventoriesData = deleteInventory(warehouseID);
  let returnArray = [newWarehousesData, newInventoriesData];
  returnArray = JSON.stringify(returnArray);
  return returnArray;
};

const getAllWarehouses = () => {
  getWarehousesData();
  return JSON.stringify(warehousesData);
};

const getSingleWarehouse = (warehouseID) => {
  getWarehousesData();
  let singleWarehouse = warehousesData.find((warehouse) => {
    return warehouse.id === warehouseID;
  });
  return(singleWarehouse);
};

const postSingleWarehouse = (warehouseData) => {
  getWarehousesData();
  let { name, address, city, country, contactName, position, phone, email } =
    warehouseData;
  let addWarehouse = new Warehouse(
    name,
    address,
    city,
    country,
    contactName,
    position,
    phone,
    email
  );
  warehousesData.push(addWarehouse);
  fs.writeFileSync(
    "./data/testwarehouses.json",
    JSON.stringify(warehousesData)
  );
  return JSON.stringify(warehousesData);
};

const editWarehouseDetails = (edits, warehouseID) => {
  getWarehousesData();
  let targetIndex = warehousesData.indexOf(
    warehousesData.find((warehouse) => warehouse.id === warehouseID)
  );
  warehousesData[targetIndex] = edits;
  fs.writeFile(warehousesTestFile, JSON.stringify(warehousesData), (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
  return JSON.stringify(warehousesData);
};

module.exports = {
  Warehouse,
  getAllWarehouses,
  getSingleWarehouse,
  postSingleWarehouse,
  deleteWarehouseWithInventory,
  editWarehouseDetails,
};
