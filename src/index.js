const express=require('express');
const bodyParser=require('body-parser');

const userRoutes =require('./route/index')

let app=express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api',userRoutes);


app.listen(3000,()=>console.log(`server is running at 3000 port`));


