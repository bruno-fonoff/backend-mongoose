const mongoose = require("mongoose");

const { Schema, model, Types } = require("mongoose");

const marketSchema = new Schema({
  corporateName: { type: String, required: true, trim: true },
  type: {
    type: String,
    required: true,
    enum: [
      "groceryStore",
      "miniMarket",
      "market",
      "superMarket",
      "hyperMarket",
    ],
  },
  size: {
    type: String,
    required: true,
    enum: ["small", "medium", "large", "giant"],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
  },
  order: [{ type: Types.ObjectId, ref: "Fruit" }],
});

const MarketModel = model("Market", marketSchema);
module.exports = MarketModel;
