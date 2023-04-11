const { query } = require("express")
const express = require("express")
const posts = express.Router()
const {PostsModel} = require("../modelFile/postsModel")


posts.get("/", async (req, res)=>{
    try {
        let id = req.body.userID
        let data = await PostsModel.find()
        let filterData = data.filter((item)=>{
            return id == item.userID
        })
        let device1 = req.query.device1
        let device2 = req.query.device2
        if(device1 || device2){
            let data = await PostsModel.find({$or:[{device:device1},{device:device2}]})
            res.send(data)

        }else{

            res.send(filterData)
        }
    } catch (error) {
        console.log("something went wrong in get  data")
    }
})

//all data route start
posts.get("/alldata",async (req, res)=>{
    try {
       
       let data = await PostsModel.find()
        res.send(data)
    } catch (error) {
        console.log("something went wrong")
    }
})

//all data route end
posts.get("/findbyid/:id",async (req, res)=>{
    try {
       let id = req.params.id
       let data = await PostsModel.find({"_id" : id})
        res.send(data)
    } catch (error) {
        console.log("something went wrong")
    }
})
// find by id route start 

// find by id route end 



posts.post("/create",async (req, res)=>{
    try {
        let createData = req.body
        const create = new PostsModel(createData)
        await create.save()
        res.send({msg:"your post is created"})
    } catch (error) {
        
    }
})

//PATCH USER DATA
posts.patch("/update/:id", async (req, res)=>{
    try {
        const payload = req.body
        let id = req.params.id
   
            // const update = {title, body, device}
            await PostsModel.findByIdAndUpdate({_id:id}, payload)
            res.send({msg:"your post is updated"})
        
          
        
       
    } catch (error) {
        console.log("something went wrong in update users data")
    }
})


//DELETE USER DATA
posts.delete("/delete/:id", async (req, res)=>{
    try {
        let id = req.params.id
       

      
            await PostsModel.findByIdAndDelete({_id:id})
            res.send({msg:"your post is deleted"})
        
        
        
    } catch (error) {
        console.log("something went wrong in delete users data")
    }
})

//Filter routes 

//Low to high
posts.get("/lth", async (req, res)=>{
    try {
      
       
            let data = await PostsModel.find().sort({"price" : 1})
            res.send(data)

            res.send("data")
        
    } catch (error) {
        console.log("something went wrong")
    }
})


//high to low

posts.get("/htl", async (req, res)=>{
    try {
      
       
            let data = await PostsModel.find().sort({"price" : -1})
            res.send(data)

            res.send("data")
        
    } catch (error) {
        console.log("something went wrong")
    }
})

//discount
posts.get("/discount", async (req, res)=>{
    try {
      
            let data = await PostsModel.find().sort({"discount" : -1})
            res.send(data)

    } catch (error) {
        console.log("something went wrong")
    }
})


//Rating 

posts.get("/rating", async (req, res)=>{
    try {
      
       
            let data = await PostsModel.find().sort({"rating" : -1})
            res.send(data)

            res.send("data")
        
    } catch (error) {
        console.log("something went wrong ")
    }
})

//name

posts.get("/title", async (req, res)=>{
    try {
      
       
            let data = await PostsModel.find().sort({"title" : -1})
            res.send(data)

       
        
    } catch (error) {
        console.log("something went wrong in get  data")
    }
})


///Price filter 

posts.get("/499", async (req, res)=>{
    try {
      
       
            // let data = await PostsModel.find().sort({"title" : -1})

            let data = await PostsModel.find({ price : { $gte :0 , $lte : 499}})
            res.send(data)

       
        
    } catch (error) {
        console.log("something went wrong in get  data")
        console.log(error)
    }
})



posts.get("/999", async (req, res)=>{
    try {
      
       
            // let data = await PostsModel.find().sort({"title" : -1})

            let data = await PostsModel.find({ price : { $gte :500 , $lte : 999}})
            res.send(data)

       
        
    } catch (error) {
        console.log("something went wrong in get  data")
        console.log(error)
    }
})



posts.get("/1999", async (req, res)=>{
    try {
      
       
            // let data = await PostsModel.find().sort({"title" : -1})

            let data = await PostsModel.find({ price : { $gte :1000 , $lte : 1999}})
            res.send(data)

       
        
    } catch (error) {
        console.log("something went wrong in get  data")
        console.log(error)
    }
})


posts.get("/2999", async (req, res)=>{
    try {
      
       
            // let data = await PostsModel.find().sort({"title" : -1})

            let data = await PostsModel.find({ price : { $gte :2000 , $lte : 2999}})
            res.send(data)

       
        
    } catch (error) {
        console.log("something went wrong in get  data")
        console.log(error)
    }
})





posts.get("/3000", async (req, res)=>{
    try {
      
       
            // let data = await PostsModel.find().sort({"title" : -1})

            let data = await PostsModel.find({ price : { $gte :4000 }})
            res.send(data)

       
        
    } catch (error) {
        console.log("something went wrong in get  data")
        console.log(error)
    }
})

//brand routs

posts.get("/latus", async (req, res)=>{
    try {
      
       
            // let data = await PostsModel.find().sort({"title" : -1})

            let data = await PostsModel.find({brand :"Lotus Herbals" })
            res.send(data)

       
        
    } catch (error) {
        console.log("something went wrong in get  data")
        console.log(error)
    }
})

posts.get("/nykaa", async (req, res)=>{
    try {
      
       
            // let data = await PostsModel.find().sort({"title" : -1})

            let data = await PostsModel.find({category :"Nykaa Naturals" })
            res.send(data)

       
        
    } catch (error) {
        console.log("something went wrong in get  data")
        console.log(error)
    }
})

posts.get("/nivea", async (req, res)=>{
    try {
      
       
            // let data = await PostsModel.find().sort({"title" : -1})

            let data = await PostsModel.find({category :"NIVEA" })
            res.send(data)

       
        
    } catch (error) {
        console.log("something went wrong in get  data")
        console.log(error)
    }
})

posts.get("/biotique", async (req, res)=>{
    try {
      
       
            // let data = await PostsModel.find().sort({"title" : -1})

            let data = await PostsModel.find({category :"BIOTIQUE" })
            res.send(data)

       
        
    } catch (error) {
        console.log("something went wrong in get  data")
        console.log(error)
    }
})

posts.get("/face", async (req, res)=>{
    try {
      
       
            // let data = await PostsModel.find().sort({"title" : -1})

            let data = await PostsModel.find({category :"FACES CANADA" })
            res.send(data)

       
        
    } catch (error) {
        console.log("something went wrong in get  data")
        console.log(error)
    }
})



// brand route end 
//category routes

posts.get("/women", async (req, res)=>{
    try {
      
       
            // let data = await PostsModel.find().sort({"title" : -1})

            let data = await PostsModel.find({category : "Women" })
            res.send(data)

       
        
    } catch (error) {
        console.log("something went wrong in get  data")
        console.log(error)
    }
})

posts.get("/unisex", async (req, res)=>{
    try {
      
       
            // let data = await PostsModel.find().sort({"title" : -1})

            let data = await PostsModel.find({category : "unisex" })
            res.send(data)

       
        
    } catch (error) {
        console.log("something went wrong in get  data")
        console.log(error)
    }
})



//discount routes 


posts.get("/10", async (req, res)=>{
    try {
      
       
            // let data = await PostsModel.find().sort({"title" : -1})

            let data = await PostsModel.find({ discount : { $gte :10 }})
            res.send(data)

       
        
    } catch (error) {
        console.log("something went wrong in get  data")
        console.log(error)
    }
})



posts.get("/20", async (req, res)=>{
    try {
      
       
            // let data = await PostsModel.find().sort({"title" : -1})

            let data = await PostsModel.find({ discount : { $gte :10 }})
            res.send(data)

       
        
    } catch (error) {
        console.log("something went wrong in get  data")
        console.log(error)
    }
})




posts.get("/30", async (req, res)=>{
    try {
      
       
            // let data = await PostsModel.find().sort({"title" : -1})

            let data = await PostsModel.find({ discount : { $gte :30 }})
            res.send(data)

       
        
    } catch (error) {
        console.log("something went wrong in get  data")
        console.log(error)
    }
})



posts.get("/40", async (req, res)=>{
    try {
      
       
            // let data = await PostsModel.find().sort({"title" : -1})

            let data = await PostsModel.find({ discount : { $gte :40 }})
            res.send(data)

       
        
    } catch (error) {
        console.log("something went wrong in get  data")
        console.log(error)
    }
})













module.exports = {posts}