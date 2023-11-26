const { Broker } = require("../../models");

const { ctrlWrapper } = require("../../helpers");

const addBroker = ctrlWrapper(async (req, res) => {
  const result = await Broker.create({ ...req.body });

  res.status(201).json({
    status: "success",
    code: 201,
    data: { broker: result },
  });
});

module.exports = addBroker;
