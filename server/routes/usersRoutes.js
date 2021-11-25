const express = require("express"),
  router = express.Router(),
  {
    getAllUsers,
    getSingleUser,
    // getUserByGig,
    postSingleUser,
    // deleteInventoryItem,
    editUserDetails,
  } = require("../controllers/usersControllers");

router.get("/", getAllUsers);
router.get("/:id", getSingleUser);
// router.get("/gigs/:id", getUserByGig);
router.post("/", postSingleUser);
// router.delete("/:id", deleteInventoryItem);
router.put("/:id", editUserDetails);

module.exports = router;
