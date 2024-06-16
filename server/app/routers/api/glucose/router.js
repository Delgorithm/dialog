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

router.get("/:id", read);

router.put("/:id", amountValidateGlucose, validateGlucose, edit);

router.post("", amountValidateGlucose, validateGlucose, add);

router.delete("/:id", destroy);

module.exports = router;
