const db = require("../../database/db");

const getRates = (req, res) => {
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
};

module.exports = { getRates };
