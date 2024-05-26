const express = require("express");
const router = express.Router();
const multer = require("multer");
const db = require("../config/db");

// Configure storage for Multer
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "src/public/assets/images");
	},
	filename: function (req, file, cb) {
		cb(null, `${Date.now()}_${file.originalname}`);
	},
});

const upload = multer({ storage });

// Endpoint to handle file upload
router.post("/upload", upload.single("file"), (req, res) => {
	console.log(req.file);
	if (!req.file) {
		return res.status(400).send("No file uploaded.");
	}
	res.send({ filePath: `/uploads/${req.file.filename}` });
});

// BDD : To retrieve the good data from it
router.get("/rates", (req, res) => {
	const day = req.query.day;
	if (!day) {
		return res.status(400).send("Le paramètre 'day' est requis");
	}

	const query = "SELECT rate, hour FROM dialogbdd WHERE day = ?";
	db.query(query, [day], (err, results) => {
		if (err) {
			console.error("Erreur lors de l'exécution de la requête:", err);
			return res.status(500).send("Erreur interne du serveur");
		}
		res.json(results);
	});
});

// BDD : To add the data from inputs to it
router.post("/addData", (req, res) => {
	const data = req.body;

	const query = "INSERT INTO dialogbdd (rate, hour, day) VALUES ?";
	const values = data.map((item) => [item.rate, item.hour, item.day]);

	db.query(query, [values], (err, result) => {
		if (err) {
			console.error("Erreur lors de l'ajout des données: ", err);
			return res.status(500).send("Erreur interne du serveur");
		}
		res.json({ message: "Données ajoutées avec succès", result });
	});
});

module.exports = router;
