const router = require("express").Router();
const FruitModel = require("../models/Fruit.model");

//CREATE

router.post("/create-fruit", async (req, res) => {
  try {
    const newFruit = await FruitModel.create(req.body);
    return res.status(201).json(newFruit);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

//READ

router.get("/all-fruits", async (req, res) => {
  try {
    const allFruits = await FruitModel.find();
    return res.status(200).json(allFruits);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

//READ details

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const fruit = await FruitModel.findOne({ _id: id });
    return res.status(200).json(fruit);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

//UPDATE

module.exports = router;
