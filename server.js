const express=require('express');
const errorHandler = require('./middleware/errorHandler.js');

const dotenv=require('dotenv').config();

const app=express()

const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/contacts',require('./routes/contactRoutes.js'));

app.use(errorHandler);

app.listen(port,()=>{
    console.log(`Sever started at ${port}`);
});