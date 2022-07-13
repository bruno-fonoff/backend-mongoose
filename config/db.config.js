const mongoose = require("mongoose");

async function connect() {
  try {
    const dbConnect = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to DB", dbConnect.connection.name);
    // console.log(dbConnect);
  } catch (err) {
    console.error("DB connection error", err);
  }
}

module.exports = connect;
