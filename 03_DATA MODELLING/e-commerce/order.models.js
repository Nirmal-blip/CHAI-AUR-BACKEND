import mongoose from 'mongoose'

const orderNumberSchema = new mongoose.Schema({
  productId:{
    type: mongoose.Schema.Types.ObjectId,   
    ref: 'Product', // Reference to the Product model
    required: true
  },
  quantity:{
    type:Number,
    required:true,
    min:1 // Ensure quantity is at least 1
  },
})


const orderSchema = new mongoose.Schema({
    orderPrice:{
        type:Number,
        required:true,
    },
    customer:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User', // Reference to the User model
        required:true
    },
    orderItems:{
        type:[orderNumberSchema], // Array of order items
        required:true,
        unique:true // Ensure order numbers are unique
        },
        address:{
        type:String,
        required:true,
        },
        status:{
        type:String,    
        enum: ['pending', 'shipped', 'delivered', 'cancelled'], // Order status options(enum gives options for status)
        default: 'pending' // Default status is 'pending'
        }

},{timestamps:true})

export const Order=mongoose.model("Order",orderSchema);
// Export the Order model based on the orderSchema