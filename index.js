const express = require("express");
const app = express();

require("dotenv").config();

const dbConnect = require("./config/db.config");
dbConnect();

app.use(express.json());

const marketRouter = require("./routes/market.router");
app.use("/market", marketRouter);

const fruitRouter = require("./routes/fruit.router");
app.use("/fruit", fruitRouter);

app.listen(Number(process.env.PORT), () => {
  console.log(`server running at port ${process.env.PORT}`);
});
