const express = require("express");

const logger = require("morgan");

const cors = require("cors");

require("dotenv").config();

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));

app.use(cors());

app.use(express.json);

app.use(express.static("public"));

app.use("/api", (_, res) => {
  res.status(200).json({ message: "Not found" });
});

app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, _, res, next) => {
  const { status: statusError = 500, error = { message: "Server error" } } =
    err;

  res
    .status(statusError)
    .json({ ...error, status: "Error", code: statusError });
});

module.exports = app;
