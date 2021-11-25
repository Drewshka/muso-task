const express = require("express"),
  router = express.Router(),
  {
    // getGigsByUser,
    getAllGigs,
    getSingleGig,
    postGig,
    deleteGig,
    editGigDetails,
  } = require("../controllers/gigsControllers");

// router.get("/users/:id", getGigsByUser);
router.get("/", getAllGigs);
router.get("/:id", getSingleGig);
router.post("/", postGig);
router.delete("/:id", deleteGig);
router.put("/:id", editGigDetails);

module.exports = router;
