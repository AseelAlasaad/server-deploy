
'use strict';
const express=require('express');
const app=express();
require('dotenv').config();
const PORT=process.env.PORT|| 3000;
const notfound=require('./handlers/404');
const stamper=require('./middelware/stamper');


app.get('/',(req,res)=>{
    res.status(200).send('This is the home route');
})

app.get('/data',stamper,(req,res)=>{
    const outputObj={
        "name":"Aseel",
        "age":"23",
        "time":req.timestamp
    };
    res.status(200).json(outputObj);
});

app.use('*',notfound);

function start(){
    app.listen(PORT,()=>{
        console.log(`Server started on ${PORT}`);
    })
}



module.exports={app,start};