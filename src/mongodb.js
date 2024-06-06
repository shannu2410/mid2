const mongoose=require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/hbs1")
.then(()=>{
    console.log("Mongo db connected")
})
.catch(()=>{
    console.log("failed")
})
const LoginSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=new mongoose.model("collections1",LoginSchema)
module.exports=collection