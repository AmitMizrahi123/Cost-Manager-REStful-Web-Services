const express = require("express");
const router = express.Router();
const { setGradeInformation } = require("../controllers/userAverage");

router.post("/userAverage", setGradeInformation);

module.exports = router;