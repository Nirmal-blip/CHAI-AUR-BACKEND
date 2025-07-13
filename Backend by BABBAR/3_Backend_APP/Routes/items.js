import router from 'express';
const items= router();


items.get('/',(req,res)=>{
    res.json({
        message: 'Hello World!',
        status: 'success'
    });
})

items.post('/submit',(req,res)=>{
    res.json({
        message: 'Data submitted successfully!',
        status: 'success'
    });
})

export default items;