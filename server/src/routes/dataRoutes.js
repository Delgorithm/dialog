const express = require("express");
const router = express.Router();
const dataController = require("../controllers/dataController");
const upload = require("../middlewares/multer");

router.post("/addData", dataController.addData);
router.get("/rates", dataController.getRates);
router.post("/upload", upload.single("file"), dataController.uploadFile);

module.exports = router;
