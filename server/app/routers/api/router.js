const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const glucoseRouter = require("./glucose/router");

router.use("/glucose", glucoseRouter);

/* ************************************************************************* */

module.exports = router;
