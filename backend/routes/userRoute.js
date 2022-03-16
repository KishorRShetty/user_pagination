const express = require("express");
const { registerUser, getUsers, getSingleUser, updateUser } = require("../controllers/userController");

const router = express.Router();

router.route("/register").post(registerUser);
router.route("/allUsers").get(getUsers);
router.route("/user/:id").get(getSingleUser).put(updateUser);

module.exports = router;