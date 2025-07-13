import exrpress from 'express';

const app= exrpress();

import items from "./Routes/items.js";
//applying routes
app.use('/items',items);


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});