import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true,}
    ,
    name:{
        type:String,
        required:true,
        unique:true, // Ensure product names are unique
        trim:true // Remove whitespace from both ends of the string
    },

    productImage:{
        type:String,
        required:true, // URL or path to the product image 
        },

    price:{
        type:Number,
        required:true,
        min:0 // Ensure price is a non-negative number
    },
    stock:{
        default:0, // Default stock is 0
        type:Number,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Category', // Reference to the Category model
        required:true // Ensure every product has a category
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User', // Reference to the User model
        required:true // Ensure every product has an owner
    }
},{
    timestamps: true // timestamp will add createdAt and updatedAt fields
})


export const Product = mongoose.model("Product", productSchema);
// Export the Product model based on the productSchema