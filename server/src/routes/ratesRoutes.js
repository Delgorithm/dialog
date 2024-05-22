const express = require("express");
const router = express.Router();
const ratesController = require("../controllers/ratesController");

router.get("/rates", ratesController.getRates);

module.exports = router;
