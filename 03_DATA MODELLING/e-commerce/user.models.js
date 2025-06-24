import mongoose from "mongoose"

// This file defines the User model schema for MongoDB using Mongoose.
const userSchema=new mongoose.Schema({

    userName:{
        type:String,
        required:true,
        unique:true,
        lowercase:true, // Ensure usernames are stored in lowercase
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true, // Ensure emails are stored in lowercase
        match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'], // Basic email validation
    },
    password:{
        type:String,
        required:true,
        unique:true,
    }},{
    timestamps:true// timestamp will add createdAt and updatedAt fields 
    })

export const User=mongoose.model("User",userSchema);
// Export the User model based on the userSchema
// Note: Name User will be used to create a collection named 'users' in MongoDB (collection is same as table in SQL)