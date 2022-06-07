const express = require("express");
const router = express.Router();
const { register, signin, allUsers, deleteAllUsers } = require("../controllers/userController");

router.post("/register", register);

router.post("/signin", signin);

router.get("/allUsers", allUsers)

router.post("/deleteAllUsers", deleteAllUsers)

module.exports = router;