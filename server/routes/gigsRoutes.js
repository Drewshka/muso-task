const express = require("express"),
  router = express.Router(),
  {
    getAllGigs,
    getSingleGig,
    getGigsByUser,
    postSingleGig,
    deleteGig,
    editGig,
  } = require("../controllers/gigsControllers");

router.get("/", getAllGigs);
router.get("/:id", getSingleGig);
router.get("/users/:id", getGigsByUser);
router.post("/", postSingleGig);
router.delete("/:id", deleteGig);
router.put("/:id", editGig);

module.exports = router;
