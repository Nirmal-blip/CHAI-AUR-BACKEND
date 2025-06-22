require('dotenv').config()

const express = require('express')
const app = express()


app.get('/', (req, res) => {
  res.send('Hello Ji!')
})

app.get('/twitter',(req,res)=>{
    res.send("twitter")
})

app.get('/youtube',(req,res)=>{
    const url="https://www.youtube.com/watch?v=X4Y-py3Axyk";
    res.send(`<h1>Youtube link of Thugesh Show 
     </h1>
        <a href=${url}>link </a>`);
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
