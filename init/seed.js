const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const { data } = require("./data.js");

const MONGO_URL = process.env.ATLASDB_URL;

main();

async function main() {
  try {
    await mongoose.connect(MONGO_URL);
    await Listing.deleteMany({});
    const seededData = data.map((object) => ({
      ...object,
      owner: "68610be9df5b932fed3deb0b",
    }));
    await Listing.insertMany(seededData);
    mongoose.connection.close();
  } catch (err) {
    console.error("Error seeding DB:", err);
  }
}