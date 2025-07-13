

// Middleware for logging
const authMiddleware = (req, res, next) => {
    console.log('Authentication middleware is running');
 
    //tumhari sahayta ke liye ek dummy user bana rha hu mai
    const dummyUser = {
        id: 1,
        username: 'Nirmal',
        role: 'student'
    };
    if(dummyUser) {
        req.user = dummyUser; // Attach user to request object
        console.log('User authenticated:', dummyUser.username);
    }
    else{
      res.json({
             message: 'Authentication failed',
             status: 'error'
      })
    }
    next(); // Call the next middleware or route handler
 
 };

 export default authMiddleware;