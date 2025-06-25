// const asyncHandler = (fn) => {}


const asyncHandler = (requestHandler)=>{
    (req,res,next)=>{
      Promise.resolve(requestHandler(req,res,next)).reject((err)=>next(err))
    }
}
 

export { asyncHandler}



//const asyncHandler =async()=>{}
//const asyncHandler =async(func)=>{()=>{}}


//its the way to call function inside function
// const asyncHandler=(fn)=>async(req,res,next)=>{
//     try{ 
//         await fn(req,res,next)

//     }
//     catch(error){
//         res.status(err.code||500).json({
//             success:false,
//             message:err.message

//         })
//     }

// }