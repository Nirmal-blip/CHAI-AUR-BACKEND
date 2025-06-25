// require('dotenv').config()

// import mongoose from 'mongoose'
// import {DB_NAME} from './constants.js'


import dotenv from 'dotenv'
dotenv.config({path: './config.env'})



//+++ BEST APPROACH +++++
import ConnectDB from './db/db.js'

ConnectDB();











 /* +++++ BASIC APPROACH ++++++++

import express from 'express'
const app=express();
//using iife(immediately invoked function expression) to connect to the database
;(async ()=>{
    try{
     const res= await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
     app.on("error",(error)=>{
        console.log("Error",error);
        throw error;
     })

     app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
     })
    }
    catch(err){
        console.log("Error while connecting to the database", err);
        throw err;
    }
})()*/