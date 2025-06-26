import mongoose ,{Schema} from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const userSchema=new Schema({

userName:{
    type:String,
    required:true,
    unique:true,
    trim:true,//removes whitespaces
    lowercase:true,
    index:true, //for faster search
},

email:{
 type:String,
 required:true, 
 unique:true,
trim:true,
 lowercase:true
},
fullName:{
    type:String,
    required:true,
    trim:true,
},

avatar:{
 type:String,//cloudinary image url
 required:true,
 trim:true,
  lowercase:true
},

coverImage:{
    type:String,
    trim:true,
     lowercase:true
},
watchHistory:[{
   type:Schema.Types.ObjectId,
   ref:'Video', // Reference to the Video model
}],
password:{
    type:String,
    required:[true,'Password is required'],
    trim:true,},

refreshToken:{
    type:String,
    default:"",//if user is not logged in, it will be empty
    trim:true,}
},{
    timestamps:true,//createdAt and updatedAt fields will be added automatically
})






// Method to generate bcrypt hash for the password
userSchema.pre("save",async function(next){
    if(!this.isModified("password")) return next(); //if password is not modified, then no need to hash it


    this.password=await bcrypt.hash(this.password,10); //hashing the password before saving it to the database
    next();
})

//to generate new methods
userSchema.methods.isPasswordCorrect=  async function(Password){
    //time lgega isilye await
    return await bcrypt.compare(Password,this.password); //compare the entered password with the hashed password
}



// Method to generate JWT token(fast hai to no need of async)
userSchema.methods.generateAccessToken=function(){
  return jwt.sign(
        {userId:this._id,
         userName:this.userName,
         email:this.email,
         fullName:this.fullName,
        }, // Payload
        process.env.ACCESS_TOKEN_SECRET, // Secret key
        {expiresIn:process.env.ACCESS_TOKEN_EXPIRY} // Options
    );
}
userSchema.methods.generateRefreshToken=function(){
      return jwt.sign(
        {userId:this._id,}, // Payload
        process.env.REFRESH_TOKEN_SECRET, // Secret key
        {expiresIn:process.env.REFRESH_TOKEN_EXPIRY} // Options
    );
}



export const User=mongoose.model('User',userSchema);