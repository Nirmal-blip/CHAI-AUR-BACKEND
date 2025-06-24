import mongoose from "mongoose"

const categorySchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true, // Ensure category names are unique
        trim:true // Remove whitespace from both ends of the string
    },
},{
    timestamps:true // timestamp will add createdAt and updatedAt fields(field=attribute in a SQL)
})

export const Category=mongoose.model("Category",categorySchema);
// Export the Category model based on the categorySchema    
// Note: Name Category will be used to create a collection named 'categories' in MongoDB (collection is same as table in SQL)