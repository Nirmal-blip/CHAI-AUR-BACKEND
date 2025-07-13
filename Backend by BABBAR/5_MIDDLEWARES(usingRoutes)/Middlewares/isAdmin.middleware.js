
const isAdminMiddleware=(req,res,next)=>{
    console.log("isAdminMiddleware is running");
    // Check if the user is a student
    if (req.user && req.user.role === 'admin') {
        next(); // Proceed to the next middleware or route handler
    } else {
        res.status(403).json({
            message: 'Access denied. You must be a Admin to access this resource.',
            status: 'error'
        });
    }
}

export default isAdminMiddleware;