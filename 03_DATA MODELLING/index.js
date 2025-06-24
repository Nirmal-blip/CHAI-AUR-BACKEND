import express from 'express';
import dotenv from 'dotenv';

dotenv.config(); // <-- this should be called before using process.env

const app=express();
const PORT=process.env.PORT||4000;
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})