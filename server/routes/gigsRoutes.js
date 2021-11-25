const express = require("express"),
  router = express.Router(),
  {
    // getGigsByUser,
    // getAllGigs,
    listGigs,
    getSingleGig,
    postGig,
    deleteGig,
    editGigDetails,
  } = require("../controllers/gigsControllers");

// router.get("/users/:id", getGigsByUser);
// router.get("/", getAllGigs);
router.get("/", listGigs);
router.get("/:id", getSingleGig);
router.post("/", postGig);
router.delete("/:id", deleteGig);
router.put("/:id", editGigDetails);

module.exports = router;
