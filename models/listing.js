const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
    type: String,
    required:true,
    },
    description:String,
    image:{
        filename: String,
        url: String,
        // type: String,
        // default:"https://unsplash.com/photos/a-shadow-self-reflects-upon-a-beach-scene-7LO7-3hqwks",
        // set:(v) =>
        //      v === ""
        //      ? "https://unsplash.com/photos/a-shadow-self-reflects-upon-a-beach-scene-7LO7-3hqwks" 
        // : v,
    },
    price:Number,
    location:String,
    country:String,
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;