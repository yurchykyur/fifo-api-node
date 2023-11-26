const { Broker } = require("../../models");

const { ctrlWrapper } = require("../../helpers");

const getAll = ctrlWrapper(async (_, res) => {
  const result = await Broker.find();

  res.status(200).json({
    status: "success",
    code: 200,
    data: { brokers: result },
  });
});

module.exports = getAll;
