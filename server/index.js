require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

const connection = mysql.createConnection({
	host: "localhost",
	user: "newuser",
	password: "Root.59.",
	database: "dialogdb",
});

connection.connect((err) => {
	if (err) {
		console.error("Erreur de connexion à MYSQL : ", err);
	} else {
		console.log("Connexion à MySQL réussie !");
	}
});

app.post("/", (req, res) => {
	const { value, day } = req.body;
	const sql = "INSERT INTO mesure (valeur, jour) VALUES (?, ?)";
	connection.query(sql, [value, day], (err, result) => {
		if (err) {
			console.error("Errur : dans l'instertion des données : ", err);
		} else {
			console.log("Réussite : Insertion des données ");
		}
	});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Serveur Express en cours d'exécution sur le port ${PORT}`);
});
