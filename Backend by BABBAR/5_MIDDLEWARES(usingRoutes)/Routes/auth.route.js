import router from "express";


const auth = router();

//importting middlewares

import authMiddleware from "../Middlewares/auth.middleware.js";
import isStudentMiddleware from "../Middlewares/isStudent.middleware.js";
import isAdminMiddleware from "../Middlewares/isAdmin.middleware.js";


//better way to load middleware
// Route for authentication
auth.get('/student', authMiddleware, isStudentMiddleware , (req, res) => {

   const message={
      message: 'Login successful',
        status: 'success'
   }
    res.json(message);

    console.log(message);
});
auth.get('/admin', authMiddleware, isAdminMiddleware , (req, res) => {

   const message={
      message: 'Login successful',
        status: 'success'
   }
    res.json(message);

    console.log(message);
});

export default auth;
// Route for signup