import mongoose from "mongoose"

// This file defines the Todo model schema for MongoDB using Mongoose.
const todoSchema= new mongoose.Schema({
title:{
    type:String,
    required:true}
,
description:{
    type:String,
    required:true
},
completed:{
    type:Boolean,
    default:false },

createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User', // Reference to the User model
    required:true
}    
},{
    timestamps:true
})

export const Todo=mongoose.model("Todo",todoSchema);// Export the Todo model based on the todoSchema
// Note: Name Todo will be used to create a collection named 'todos' in MongoDB (collection is same as table in SQL)