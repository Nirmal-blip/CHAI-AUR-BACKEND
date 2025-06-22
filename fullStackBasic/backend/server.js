import express from 'express';

const app=express();
const PORT=process.env.PORT||3000;
app.get('/', (req, res) => {
    res.send('Server is running');
    });


//get alist of 5 jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [{
        id:1,
        title:'1st joke',
        content:'people are like slinkies, they are not good for much but they bring a smile to your face when you push them down the stairs'
    }, {
        id:2,
        title:'2nd joke',
        content:'This is the second joke'
    }, {
        id:3,
        title:'3rd joke',
        content:'This is the third joke'
    }, {
        id:4,
        title:'4th joke',
        content:'This is the fourth joke'
    }, {
        id:5,
        title:'5th joke',
        content:'This is the fifth joke'
    }
    ];

res.send(jokes);

});
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
