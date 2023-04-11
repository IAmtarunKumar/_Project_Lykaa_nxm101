const express = require("express")
const {CartModel} = require("../modelFile/cartmodel")
const cart = express.Router()
// const {UserModel} = require("../modelFile/usersModel")
// const bcrypt = require("bcrypt")
// const jwt = require("jsonwebtoken")


cart.post("/postincart",async (req, res)=>{
    try {
        let createData = req.body
        console.log(createData)
        const create = new CartModel(createData)
        await create.save()
        res.send({msg:"your post is created"})
    } catch (error) {
    res.send("wrong in cart")
    }
})

cart.get("/", async(req,res)=>{
let data = await CartModel.find()
res.send(data)
})



cart.delete("/delete/:id", async (req, res)=>{
    try {
        let id = req.params.id
       

      
            await CartModel.findByIdAndDelete({_id:id})
            res.send({msg:"your post is deleted"})
        
        
        
    } catch (error) {
        console.log("something went wrong in delete users data")
    }
})


cart.delete("/buy/:id", async (req, res)=>{
    try {
        let id = req.params.id
       

      
            await CartModel.findByIdAndDelete({_id:id})
            res.send({msg:"your post is deleted"})
        
        
        
    } catch (error) {
        console.log("something went wrong in delete users data")
    }
})


module.exports = {cart}