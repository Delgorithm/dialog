const express = require("express");

const router = express.Router();

const userActions = require("../../../controllers/userActions");
const { verifyUser } = require("../../../middlewares/verifyUser");
const {
  verifyHashPassword,
} = require("../../../middlewares/verifyHashPassword");
const { verifyToken } = require("../../../middlewares/verifyToken");

router.post("/users", verifyHashPassword, verifyToken, userActions.add);

router.post("/login", verifyUser);

module.exports = router;
