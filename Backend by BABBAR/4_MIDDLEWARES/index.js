import express from 'express';

const app=express();

const PORT= process.env.PORT || 3000;

//loading middleware into app(inbuilt middleware)
app.use(express.json()); // To parse JSON bodies


// ++++++ app middlewares ++++++

//++++++creating middlewares for- logging, auth ,validation+++++

const loggingMiddleware = (req, res, next) => {
    console.log('logged')
    next(); // Call the next middleware or route handler
}

const authMiddleware = (req, res, next) => {
    console.log('authenticated');
    next(); // Call the next middleware or route handler
}

const validationMiddleware = (req, res, next) => {
    console.log('validated');
    next(); // Call the next middleware or route handler
}
// NOTE:MIDDLEWARES SHOULD BE ABOVE OF ROUTES

//++++++loading middlewares into app+++++
app.use(loggingMiddleware); // Apply logging middleware
app.use(authMiddleware); // Apply authentication middleware
app.use(validationMiddleware); // Apply validation middleware


//++++++creating routes++++++
app.get('/',(req,res)=>{
    console.log('GET request received');
    console.log(req.body); // Log the request body
    res.send('Hello World!');
})

//routes using

import login from './Routes/login.route.js';
app.use('/login', login); // Apply the login route

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})