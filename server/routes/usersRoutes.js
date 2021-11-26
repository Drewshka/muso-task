const express = require("express"),
  router = express.Router(),
  {
    // getAllUsers,
    // postSingleUser,
    listUsers,
    getSingleUser,
    postUser,
    editUserDetails,
    deleteUser,
    // getUserByGig,
    // deleteInventoryItem,
  } = require("../controllers/usersControllers");

// router.get("/", getAllUsers);
//   router.post("/", postSingleUser);

router.get("/", listUsers);
router.get("/:id", getSingleUser);
// router.get("/gigs/:id", getSingleUser);

router.post("/", postUser);
router.put("/:id", editUserDetails);
router.delete("/:id", deleteUser);

// router.get("/gigs/:id", getUserByGig);
// router.delete("/:id", deleteInventoryItem);

module.exports = router;
