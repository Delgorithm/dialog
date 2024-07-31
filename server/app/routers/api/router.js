const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const authRouter = require("./auth/router");
const glucoseRouter = require("./glucose/router");
const usersRouter = require("./users/router");

router.use("/auth", authRouter);
router.use("/glucose", glucoseRouter);
router.use("/users", usersRouter);

/* ************************************************************************* */

module.exports = router;
