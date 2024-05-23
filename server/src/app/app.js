const express = require("express");
const cors = require("cors");
const rateRoutes = require("./routers/rateRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", rateRoutes);

module.exports = app;
