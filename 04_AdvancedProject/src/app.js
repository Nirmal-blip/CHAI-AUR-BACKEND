import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app=express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));
app.use(express.json({limit:'16kb'}))// Limit the size of JSON payloads to 16kb
app.use(express.urlencoded({extended:true,limit:'16kb'}))// Limit the size of URL-encoded payloads to 16kb

app.use(express.static('public')); // Serve static files from the 'public' directory(means stores images pdf etc)

app.use(cookieParser()); // Parse cookies from incoming requests


export default app; // This is the main application file where the Express app is created.