const express = require("express"),
  router = express.Router(),
  {
    listUsers,
    getSingleUser,
    postUser,
    editUserDetails,
    deleteUserAndGigs,
    // deleteUser,
    // getUserByGig,
  } = require("../controllers/usersControllers");

router.get("/", listUsers);
router.get("/:id", getSingleUser);
router.post("/", postUser);
router.put("/:id", editUserDetails);
router.delete("/:id", deleteUserAndGigs);

// router.delete("/:id", deleteUser);
// router.get("/gigs/:id", getUserByGig);

module.exports = router;
