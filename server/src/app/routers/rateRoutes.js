const express = require("express");
const { getRates } = require("../controllers/rateController");

const router = express.Router();

router.get("/rates", getRates);

module.exports = router;
