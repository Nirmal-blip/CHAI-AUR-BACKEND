import mongoose from "mongoose"

const hospitalhours=  new mongoose.Schema({
    openingTime:{
        type:String,    
        required:true,
        trim:true // Remove whitespace from both ends of the string
    },
    closingTime:{
        type:String,    
        required:true,
        trim:true // Remove whitespace from both ends of the string
    },
},{
    timestamps: true // timestamp will add createdAt and updatedAt fields 
})


const doctorSchema=  new mongoose.Schema({
    doctorname:{
        type:String,
        required:true,
        trim:true// Remove whitespace from both ends of the string
        },
    specialization:{
        type:String,
        required:true,
        trim:true // Remove whitespace from both ends of the string
    },
    experience:{
        type:Number,
        required:true,
        min:0 // Ensure experience is a non-negative number
    },
    contactNumber:{
        type:String,
        required:true,
        trim:true // Remove whitespace from both ends of the string
    },
    workInHospital:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital', // Reference to the Hospital model
        required:true // Ensure every doctor is associated with a hospital
    },
    salary:{
        type:Number,
        required:true,
        min:0 // Ensure salary is a non-negative number
    },
    hospitalTime:{
  type:[hospitalhours], // Array of hospital hours
        required:true // Ensure every doctor has defined working hours  
    }
}
,{
    timestamps: true // timestamp will add createdAt and updatedAt fields
})


export const Doctor=mongoose.model("Doctor",hospitalSchema);
// Export the Hospital model based on the hospitalSchema
