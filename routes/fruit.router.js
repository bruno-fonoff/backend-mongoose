const router = require("express").Router();
const FruitModel = require("../models/Fruit.model");
const MarketModel = require("../models/Market.model");
//CREATE

router.post("/create-fruit/:marketId", async (req, res) => {
  try {
    const { marketId } = req.params;
    const newFruit = await FruitModel.create({ ...req.body, market: marketId });

    const editedMarket = await MarketModel.findOneAndUpdate(
      { _id: marketId },
      { $push: { order: newFruit._id } },
      { new: true }
    );

    return res
      .status(201)
      .json({ message: "Your fruit has been created.", newFruit });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Sorry, your fruit cannot be created.", error });
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

router.patch("/edit/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const editFruit = await FruitModel.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    return res
      .status(200)
      .json({ message: "Your fruit has been updated.", editFruit });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Check out the changed information", error });
  }
});

//DELETE

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleteFruit = await FruitModel.deleteOne({ _id: id });
    return res
      .status(200)
      .json({ message: "Your order has been deleted.", deleteFruit });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Sorry, fruit order cannot be deleted.", error });
  }
});

module.exports = router;
