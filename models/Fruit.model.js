const mongoose = require("mongoose");

const { Schema, model } = require("mongoose");

const fruitSchema = new Schema({
  market: { type: mongoose.Types.ObjectId, ref: "Market" },
  genus: { type: String, required: true, trim: true },
  name: { type: String, required: true, trim: true },
  family: { type: String, required: true, trim: true },
  order: { type: String, required: true, trim: true },
  quantity: { type: Number, required: true },
  createAt: { type: Date, default: Date.now() },
  // nutritions: {
  //   carbohydrates: { type: Number, required: true },
  //   protein: { type: Number, required: true },
  //   fat: { type: Number, required: true },
  //   calories: { type: Number, required: true },
  //   sugar: { type: Number, required: true },
  //   fiber: { type: Number, required: true },
  // },
});

const FruitModel = model("Fruit", fruitSchema);
module.exports = FruitModel;
