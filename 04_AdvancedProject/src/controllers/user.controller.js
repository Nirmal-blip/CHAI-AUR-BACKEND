import {asyncHandler} from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js";
import {User} from "../models/user.models.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";


const generateAccessAndRefreshTokens = async (userId)=>{
  try{
   const user=await User.findById(userId)
   const accessToken=user.generateAccessToken()
   const refreshToken=user.generateRefreshToken()

   //to add the refresh token in our db field
   user.refreshToken=refreshToken
   await user.save({validateBeforeSave:false})//validation nahi krna kyunki password save nahi ho rha

return {accessToken,refreshToken}

  }
  catch(error){
    throw new ApiError(500,"Something went wrong while generating refresh and access token")
  }
}



//register user code
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
  const existedUser= await User.findOne({
    $or:[{userName}, {email}]
  })
  if(existedUser){
    throw new ApiError(409,"User with userName or Email exists")
  }


  // console.log(req.files)
  //to check the images(multer provide krta hai yeh)

  //will show the error

//  const avatarLocalPath= req.files?.avatar[0]?.path;
//  const coverImageLocalPath=req.files?.coverImage[0]?.path;  



 //check avatar pkka gya cloudinary pe ya undefined to nahi hai kya
 let avatarLocalPath = "";
 let coverImageLocalPath = "";
 
 // ✅ Avatar must be provided
 if (
   !req.files ||
   !Array.isArray(req.files.avatar) ||
   req.files.avatar.length === 0
 ) {
   throw new ApiError(400, "Avatar image is required");
 } else {
   avatarLocalPath = req.files.avatar[0].path;
 }
 
 // ✅ Cover image is optional
 if (
   req.files &&
   Array.isArray(req.files.coverImage) &&
   req.files.coverImage.length > 0
 ) {
   coverImageLocalPath = req.files.coverImage[0].path;
 }
 


    //upload them to cloudinary(method from cloudinary,js)
    const avatar=await uploadOnCloudinary(avatarLocalPath);
    const coverImage=await uploadOnCloudinary(coverImageLocalPath);
   
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

//login user code
const userLogin=asyncHandler(async(req,res)=>{
  //req body -> data
  //userName or email
  //find the user
  //password check
  //access and refresh token
  //send cookie

  //taking email and username password from frontend
  const {email,userName,password}=req.body
//if username doesnt exist
  if(!userName || !email){
    throw new ApiError(400, "Username or email is required")
  }

//finding that is the user wxist in my user db
const user=User.findOne({
  $or:[{userName},{email}]//if they exist in my db
})

//we will say user doesnt exist
if(!user){
  throw new ApiError(404,"User doesnt exist")
}

//now to compare password we have made the bcrypt function compare password 
const isPasswordValid = await user.isPassWordCorrect(password)

if(!isPasswordValid){
  throw new ApiError(401,"Password is Incorrect")
}

//now getting AccessTokenorRefreshToken

const {accessToken,refreshToken}=await generateAccessAndRefreshTokens(user._id);

//now giving tjis accessToken and refresh token to cookies



})


export  {registerUser};