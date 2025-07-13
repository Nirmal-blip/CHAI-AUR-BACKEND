import express from 'express';


export const app=express();

const PORT= process.env.PORT || 3000;

//imported items router file
import items from './Routes/items.js';

//load into application
app.use('/api',items);

// /api/  ---> GET
// /api/submit ---> POST
// /api/update ---> PUT
// /api/delete ---> DELETE



//app is listening
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
