const { ctrlWrapper } = require("../../helpers");
const { Broker } = require("../../models");

const deleteBroker = ctrlWrapper(async (req, res) => {
  const { brokerId } = req.params;
  console.log(brokerId);
  const result = await Broker.findByIdAndDelete({ _id: brokerId });
  console.log(result);

  res.status(204).send();
});

module.exports = deleteBroker;
