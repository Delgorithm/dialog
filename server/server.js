require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const multer = require("multer");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

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
app.post("/upload", upload.single("file"), (req, res) => {
	console.log(req.file);
	if (!req.file) {
		return res.status(400).send("No file uploaded.");
	}
	res.send({ filePath: `/uploads/${req.file.filename}` });
});

const db = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	port: process.env.DB_PORT,
});

db.connect((err) => {
	if (err) {
		console.error("Erreur de connexion à la base de données : ", err);
	}
	console.log("Connecté à la base de données MySQL");
});

// BDD
app.get("/rates", (req, res) => {
	const day = req.query.day;
	if (!day) {
		return res.status(400).send("Le paramètre 'day' est requis");
	}

	const query = "SELECT rate, hour FROM dialogbdd WHERE day = ?";
	db.query(query, [day], (err, results) => {
		if (err) {
			console.error("Erreur lors de l'exécutioin de la requête:", err);
			return res.status(500).send("Erreur interne du serveur");
		}
		res.json(results);
	});
});

app.listen(port, () => {
	console.log(`Dialog app is listening on port ${port}`);
});
