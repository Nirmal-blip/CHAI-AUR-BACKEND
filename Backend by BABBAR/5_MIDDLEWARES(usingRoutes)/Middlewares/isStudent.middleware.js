
const isStudentMiddleware=(req,res,next)=>{
    console.log("isStudentMiddleware is running");
    // Check if the user is a student
    if (req.user && req.user.role === 'student') {
        next(); // Proceed to the next middleware or route handler
    } else {
        res.status(403).json({
            message: 'Access denied. You must be a student to access this resource.',
            status: 'error'
        });
    }
}

export default isStudentMiddleware;