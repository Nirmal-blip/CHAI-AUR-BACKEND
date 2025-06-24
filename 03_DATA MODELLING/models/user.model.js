import mongoose from 'mongoose';
// This file defines the User model schema for MongoDB using Mongoose.
const userSchema= new mongoose.Schema({
userName:{
    type:String,
    required:true,
    unique:true,
}
,password:{
    type:String,
    required:true,}
,email:{
    type:String,
    required:true,
    unique:true,}
},{
    timestamps: true,//timestamp will add createdAt and updatedAt fields
})

// Export the User model based on the userSchema
//Note:Name User will be used to create a collection named 'users' in MongoDB (collection is same as table in SQL)
export const User=mongoose.model("User",userSchema);