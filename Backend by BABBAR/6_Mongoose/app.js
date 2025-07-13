import express from 'express';
import mongoose from 'mongoose';
import ConnectDB from './Db/db.js';
import dotenv from "dotenv";
dotenv.config(); // This MUST come before any use of process.env

const app= express();


const PORT= process.env.PORT || 3000;

ConnectDB();


//Routes
app.use(express.json());

import carsRoutes from './Routes/cars.routes.js';
app.use('/cars',carsRoutes)



app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

export default app;