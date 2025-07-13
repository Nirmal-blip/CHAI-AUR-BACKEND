import express from 'express';

const app= express();


const PORT= process.env.PORT || 3000;

//using routes

import auth from './Routes/auth.route.js';

app.use('/auth', auth); // Apply the auth route
// /auth/login ---> POST
// /auth/signup ---> POST
// /auth/logout ---> GET
// /auth/profile ---> GET
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});


export default app; // Export the app for testing or further use