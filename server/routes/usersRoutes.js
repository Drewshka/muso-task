const express = require("express"),
  router = express.Router(),
  {
    getAllUsers,
    getSingleUser,
    getUserByGig,
    // deleteInventoryItem,
    // editInventoryDetails,
    // postSingleInventoryItem,
  } = require("../controllers/usersControllers");

router.get("/", getAllUsers);
router.get("/:id", getSingleUser);
router.get("/gigs/:id", getUserByGig);
// router.post("/", postSingleInventoryItem);
// router.delete("/:id", deleteInventoryItem);
// router.put("/:id", editInventoryDetails);

module.exports = router;
