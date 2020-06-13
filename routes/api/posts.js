const express = require("express");
const router = express.Router();

// @route       get api/posts
// @desc        test route
// @accress     public

router.get("/", (req, res) => res.send("Posts route"));

module.exports = router;