const router = require("express").Router();
const MarketModel = require("../models/Market.model");

//CREATE
router.post("/create-market", async (req, res) => {
  try {
    const newMarket = await MarketModel.create(req.body);

    return res
      .status(201)
      .json({ message: "Your order has been created.", newMarket });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Sorry, your order cannot be created.", error });
  }
});

//READ

router.get("/all-markets", async (req, res) => {
  try {
    const allMarkets = await MarketModel.find(); //.populate("order");
    return res.status(200).json(allMarkets);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

//READ details

router.get("/:marketId", async (req, res) => {
  try {
    const { marketId } = req.params;
    const market = await MarketModel.findOne({ _id: marketId }).populate(
      "order"
    );
    return res.status(200).json(market);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

//UPDATE

router.patch("/edit-market/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const editMarket = await MarketModel.findOneAndUpdate(
      { _id: id },
      { ...req.body },
      { new: true }
    );
    return res
      .status(200)
      .json({ message: "Your order has been updated.", editMarket });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Check out the changed information.", error });
  }
});

//DELETE

router.delete("/delete-market/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deleteMarket = await MarketModel.deleteOne({ _id: id });
    return res
      .status(200)
      .json({ message: "Your order has been deleted.", deleteMarket });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Sorry, your order cannot be deleted.", error });
  }
});
module.exports = router;
