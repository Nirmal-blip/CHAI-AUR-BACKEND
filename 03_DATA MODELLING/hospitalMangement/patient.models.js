import mongoose from 'mongoose'

const patientSchema=new mongoose.Schema({
    patientName:{
        type:string,
        required:true,
        trim:true // Remove whitespace from both ends of the string
    },
    age:{
        type:Number,
        required:true,
        min:0 // Ensure age is a non-negative number
    },
    adress:{
        type:String,
        required:true,
        trim:true // Remove whitespace from both ends of the string
    },
    bloodGroup:{
        type:String,
        required:true,
        enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'], // Blood group options
        trim:true // Remove whitespace from both ends of the string}
    },
    gender:{
        type:String,
        enum:['Male','female','other']
        ,
        required:true,
        trim:true // Remove whitespace from both ends of the string
    },

    diagnosedWith:{
        type:String,    
    required:true},

    admittedIn:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hospital', // Reference to the Hospital model
        required:true // Ensure every patient is admitted in a hospital
    }
}
,{timestamps:true})


export const Patient=mongoose.model("Patient",patientSchema);
// Export the Patient model based on the patientSchema