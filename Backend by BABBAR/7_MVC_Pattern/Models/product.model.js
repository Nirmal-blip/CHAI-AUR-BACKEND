import mongoose from 'mongoose';
import {Schema,model} from 'mongoose';


const productSchema=new Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    price:{
        type:Number,
        required:true,
        trim:true,
    },
    description:{
        type:String,
        trim:true,
    },
    image:{
        type:String,
        trim:true,
    },


},{
    timestamps:true, // This will add createdAt and updatedAt fields automatically
})


export const Product =new model('Product',productSchema);