const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const { data } = require("./data.js");

const MONGO_URL = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/wanderlust";

main();

async function main() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("MongoDB connected.");

    await Listing.deleteMany({});
    console.log("Old listings deleted.");

    await Listing.insertMany(data);
    console.log("Sample listings inserted.");

    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding DB:", err);
  }
}
