if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const dataRoutes = require("./routes/dataRoutes");

const app = express();

const corsOptions = {
	origin:
		process.env.NODE_ENV === "production"
			? "https://dialog-frontend.vercel.app/"
			: "http://localhost:5173/",
	optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api", dataRoutes);

module.exports = app;
