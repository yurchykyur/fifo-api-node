const { Broker } = require("../../models");

const getAll = async (_, res) => {
  const result = await Broker.find();

  res.status(200).json({
    status: "success",
    code: 200,
    data: { brokers: result },
  });
};

module.exports = getAll;
