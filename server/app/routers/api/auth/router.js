const express = require("express");

const router = express.Router();

const {
  verifyHashPassword,
} = require("../../../middlewares/verifyHashPassword");

const userActions = require("../../../controllers/userActions");

const { verifyUser } = require("../../../middlewares/verifyUser");

// const { verifyToken } = require("../../../middlewares/verifyToken");

router.post("/users", verifyHashPassword, userActions.add);

router.post("/login", verifyUser);

module.exports = router;
