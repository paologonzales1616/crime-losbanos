require("dotenv").config();
const express = require("express");
const server = express();
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

const port = process.env.PORT || 5000;

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(logger("dev"));

server.get("/data/ordinances", async (req, res) => {
  const ordinances = require("./db/ordinance.json");
  return res.json(ordinances);
});

server.get("/data/laws", async (req, res) => {
  const laws = require("./db/laws.json");
  return res.json(laws);
});

// Serve the static files from the React app
server.use(express.static(path.join(__dirname, "client/build")));

// Handles any requests that don't match the ones above
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
