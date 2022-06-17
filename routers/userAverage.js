const express = require("express");
const router = express.Router();
const { setGradeInformation, getSemesterAverage, getYearAverage } = require("../controllers/userAverage");

router.post("/userAverage", setGradeInformation);

router.get("/semesterAverage", getSemesterAverage)

router.get("/yearAverage", getYearAverage)

module.exports = router;