import mongoose from "mongoose"

const hospitalSchema=  new mongoose.Schema({
    HospitalName:{
        type:String,
        required:true,
        unique:true, // Ensure hospital names are unique
        trim:true // Remove whitespace from both ends of the string
        },
    
    AdressLine:{
        type:String,
        required:true,
        unique:true, // Ensure hospital names are unique
        trim:true // Remove whitespace from both ends of the string
        },
    City:{
        type:String,
        required:true,
        unique:true, // Ensure hospital names are unique
        trim:true // Remove whitespace from both ends of the string
        },
    Pincode:{
        type:String,
        required:true,
        unique:true, // Ensure hospital names are unique
        trim:true // Remove whitespace from both ends of the string
        },
   SpecializedIn:[{
    type:String
   }]
},{
    timestamps: true // timestamp will add createdAt and updatedAt fields
})


export const Hospital=mongoose.model("Hospital",hospitalSchema);
// Export the Hospital model based on the hospitalSchema
