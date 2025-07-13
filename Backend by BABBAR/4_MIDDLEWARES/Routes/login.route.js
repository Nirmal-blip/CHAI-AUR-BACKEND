import router from 'express';


const login = router();

//using middlewares

const loginMiddleware=((req,res,next)=>{
    console.log('Login Middleware is running');
    next(); // Call next middleware or route handler
})

//+++ loading login middleware +++
login.use(loginMiddleware);


login.get('/', (req, res) => {
    res.json({
        message: 'Login Page',
        status: 'success'
    });
});

export default login;