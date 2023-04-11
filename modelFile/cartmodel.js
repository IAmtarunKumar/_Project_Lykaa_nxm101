
const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({
    image : String,
    title : String,
    price : Number,
    category : String,
    discount : String,
    rating : Number,
    stock : Number
  
    // userID : String
    // name : String
})

const CartModel= mongoose.model("cartdata", cartSchema)

module.exports = {CartModel}