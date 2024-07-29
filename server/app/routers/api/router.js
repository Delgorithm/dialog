const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const authRouter = require("./auth/router");

router.use("/auth", authRouter);

const glucoseRouter = require("./glucose/router");

router.use("/glucose", glucoseRouter);

/* ************************************************************************* */

module.exports = router;
