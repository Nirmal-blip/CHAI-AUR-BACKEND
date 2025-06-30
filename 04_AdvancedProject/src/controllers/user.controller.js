import {asyncHandler} from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js";
import {User} from "../models/user.models.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";
const registerUser=asyncHandler(async(req,res)=>{
          // steps to register
  //get user details from frontend(can be seen from db)
  //validation-(not-empty)
  //check if user already exist(check by username or email)
  //check for images, check for avatar
  //upload images to cloudinary, avatar ko pkka dekhna
  //create user object - create entry in db
  //remove password and refresh token field from response
  //check  for user creation
  //return response



//to take response from frontend(see from postman bro)
  const {userName,fullName,email,password}=req.body;
  console.log("email: ",email);
  //validation
  if([fullName,email,userName,password].some((field)=>
    field?.trim()==="")){
   throw new ApiError(400,`${field} is required`)
  }
  //already exist
  const existedUser= User.find({
    $or:[{userName}, {email}]
  })
  if(existedUser){
    throw new ApiError(409,"User with userName or Email exists")
  }

  //to check the images(multer provide krta hai yeh)
 const avatarLocalPath= req.files?.avatar[0]?.path;
 const coverImageLocalPath=req.files?.coverImage[0]?.path;

if(!avatarLocalPath){
    throw new ApiError(400,"Avatar image is required");
}

    //upload them to cloudinary(method from cloudinary,js)
    const avatar=await uploadOnCloudinary(avatarLocalPath);
    const coverImage=await uploadOnCloudinary(coverImageLocalPath);
    //check avatar pkka gya cloudinary pe
    if(!avatar){
        throw new ApiError(400,"Avatar Not Uploaded")
    }

  //now make the user object (in mongodb)
  const user=await User.create({
    fullName,
    avatar:avatar.url,
    coverImage:coverImage?.url ||"",
    email,
    password,
    userName:userName.toLowerCase(),
   })

  //mongoDb khud se id bnata hai jisse hum easily check kr skte hai user bna ya nahi
   const createdUser=await User.findById(user._id).select(
    "-password -refreshToken"//.select() mai vo likho jo nahi chahiye
   )
   if(!createdUser){
    throw new ApiError(500,"Something went wrong in registering the user")
   }

   //return response(imported ApiResponse)
   return res.status(201).json(
    new ApiResponse(200,createdUser,"User registered successfully")
   )
})

export  {registerUser};