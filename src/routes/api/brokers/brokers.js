const express = require("express");

const { ctrlBrokers } = require("../../../controllers");

const brokersRouter = express.Router();

brokersRouter.get("/", ctrlBrokers.getAll);

module.exports = brokersRouter;
