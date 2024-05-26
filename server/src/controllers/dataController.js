const db = require("../config/db");

exports.addData = (req, res) => {
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
};

exports.getRates = (req, res) => {
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
};

exports.uploadFile = (req, res) => {
	console.log(req.file);
	if (!req.file) {
		return res.status(400).send("No file uploaded.");
	}
	res.send({ filePath: `/uploads/${req.file.filename}` });
};
