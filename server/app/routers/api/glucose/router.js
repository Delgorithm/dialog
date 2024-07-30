const express = require("express");

const router = express.Router();

const {
  browse,
  read,
  edit,
  add,
  destroy,
} = require("../../../controllers/glucoseActions");

const validateGlucose = require("../../../middlewares/validateGlucose");
const amountValidateGlucose = require("../../../middlewares/amountValidateGlucose");

router.get("", browse);

router.get("/:date", read);

router.put("/:date", amountValidateGlucose, validateGlucose, edit);

router.post("", amountValidateGlucose, validateGlucose, add);

router.delete("/:date", destroy);

module.exports = router;
