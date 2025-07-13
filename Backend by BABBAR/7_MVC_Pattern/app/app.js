import express from "express"
import connectDB from "../config/db.js";
import dotenv from "dotenv";
import product from "../Routes/product.routes.js";

dotenv.config();
const app= express();
const PORT=process.env.PORT || 3000;

//middleware
app.use(express.json()); // to parse JSON input

//Connecting DB
connectDB();


//getting routes

app.use('/products', product);
  


app.listen(PORT,()=>{
 console.log(`Server is running on port ${PORT}`);
})


export default app;