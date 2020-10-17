const express=require('express');
const app=express();
const dbConnect=require('./db')

const router=require('./router')

const bodyParser=require('body-parser')

const port=8080;

app.listen(port ,()=>{
    console.log("Server in running")
    dbConnect('mongodb://localhost/itemDB')
})

app.use(bodyParser.json())
app.use(router)
