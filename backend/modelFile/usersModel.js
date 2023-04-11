
const mongoose = require("mongoose")

const usersSchema = mongoose.Schema({
    name : {type : String , required : true},
    email :{type : String , required : true},
    number : {type : String , required : true},
    password : {type : String , required : true}
})

const UserModel = mongoose.model("usersData", usersSchema)

module.exports = {UserModel}