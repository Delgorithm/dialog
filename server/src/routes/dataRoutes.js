const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/rates", (req, res) => {
	const day = req.query.day;
	if (!day) {
		return res.status(400).json({ error: "Le paramètre 'day' est requis" });
	}

	const query = "SELECT rate, hour FROM dialogbdd WHERE day = ?";
	db.query(query, [day], (err, results) => {
		if (err) {
			console.error("Erreur lors de l'exécution de la requête:", err);
			return res.status(500).json({ error: "Erreur interne du serveur" });
		}
		res.json(results);
	});
});

router.post("/addData", (req, res) => {
	const data = req.body;
	console.log("Données reçues pour insertion:", data);

	if (!Array.isArray(data) || data.length === 0) {
		return res.status(400).send("Aucune donnée à insérer.");
	}

	const query = "INSERT INTO dialogbdd (rate, hour, day) VALUES ?";
	const values = data.map((item) => [item.rate, item.hour, item.day]);
	console.log("Valeurs préparées pour insertion:", values);

	db.query(query, [values], (err, result) => {
		if (err) {
			console.error("Erreur lors de l'ajout des données:", err);
			return res.status(500).send("Erreur interne du serveur");
		}
		res.json({ message: "Données ajoutées avec succès", result });
	});
});

module.exports = router;
