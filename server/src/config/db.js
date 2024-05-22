require("dotenv").config();
const mysql = require("mysql2");

const db = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	port: process.env.DB_PORT,
});

db.connect((err) => {
	if (err) {
		console.error("Erreur lors de la connexion à la BDD : ", err);
	}
	console.log("Connecté avec succès à la BDD MySQL");
});

module.exports = db;
