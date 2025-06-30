// const asyncHandler = (fn) => {}


  const asyncHandler = (requestHandler) => {
    return async (req, res, next) => {
      try {
        await requestHandler(req, res, next);
      } catch (error) {
        next(error); // forward to Express error handler
      }
    };
  };
  

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