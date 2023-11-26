const express = require("express");

const { ctrlBrokers } = require("../../../controllers");

const brokersRouter = express.Router();

brokersRouter.get("/", ctrlBrokers.getAll);

brokersRouter.post("/", ctrlBrokers.addBroker);

brokersRouter.delete("/:brokerId", ctrlBrokers.deleteBroker);

module.exports = brokersRouter;
