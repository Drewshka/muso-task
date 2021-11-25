const express = require("express"),
  router = express.Router(),
  {
    getAllUsers,
    getSingleUser,
    postSingleUser,
    editUserDetails,
    // getUserByGig,
    // deleteInventoryItem,
  } = require("../controllers/usersControllers");

router.get("/", getAllUsers);
router.get("/:id", getSingleUser);
router.post("/", postSingleUser);
router.put("/:id", editUserDetails);
// router.get("/gigs/:id", getUserByGig);
// router.delete("/:id", deleteInventoryItem);

module.exports = router;
