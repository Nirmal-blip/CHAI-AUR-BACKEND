//YEH file saare item specific routed ko store kregi

import express from 'express'




const router = express.Router()

//Request ki kahani 

//router.METHOD(PATH, HANDLER)

//Get Request

router.get('/',(req,res)=>{
    // res.send('Hello World!');

    res.json({
        message: 'Hello World!',
        status: 'success'
    });

})

import path from 'path';
const __dirname = path.resolve();
//Post Request
router.post('/submit',(req,res)=>{
    // res.send('Data submitted successfully!');
    res.sendFile(path.join(__dirname, 'dummy.html'));
})

//Put Request(Update)
router.put('/update',(req,res)=>{
    res.send('Data updated successfully!');
})
//Delete Request
router.delete('/delete',(req,res)=>{
    res.send('Data deleted successfully!');
}) 



export default router;
