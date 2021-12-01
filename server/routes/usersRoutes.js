const express = require("express"),
  router = express.Router(),
  {
    listUsers,
    getSingleUser,
    postUser,
    editUserDetails,
    deleteUserAndGigs,
  } = require("../controllers/usersControllers");

router.get("/", listUsers);
router.get("/:id", getSingleUser);
router.post("/", postUser);
router.put("/:id", editUserDetails);
router.delete("/:id", deleteUserAndGigs);

module.exports = router;
