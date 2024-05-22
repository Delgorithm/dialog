const express = require("express");
const cors = require("cors");
const ratesRoutes = require("./routes/ratesRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", ratesRoutes);

module.exports = app;
