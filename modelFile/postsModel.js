
const mongoose = require("mongoose")

const postsSchema = mongoose.Schema({
    image : String,
    title : String,
    price : Number,
    category : String,
    discount : String,
    rating : Number,
    stock : Number,
    brand : String
    // userID : String
})

const PostsModel = mongoose.model("postsData", postsSchema)

module.exports = {PostsModel}