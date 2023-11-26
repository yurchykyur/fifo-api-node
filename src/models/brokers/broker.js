const { model, Schema } = require("mongoose");

const Joi = require("joi");

const { handleMangooseError } = require("../../helpers");

const brokerSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for broker"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

brokerSchema.post("save", handleMangooseError);

const addBrokerSchema = Joi.object({
  name: Joi.string().required(),
});

const brokerJoiSchemas = { addBrokerSchema };

const Broker = model("broker", brokerSchema);

module.exports = { Broker, brokerJoiSchemas };
