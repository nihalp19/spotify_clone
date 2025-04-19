import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName : {
        type : String,
        required : true
    },
    imageUrl : {
        type : String,
        required : true
    },
    clerkId : {
        type : String,
        required : true,
        unique : true
    }
},{timestamps : true})


const USER = mongoose.model("user",userSchema)

export default USER