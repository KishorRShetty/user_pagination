const express = require("express");
const { registerUser, getUsers } = require("../controllers/userController");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/allUsers").get(getUsers);

module.exports = router;