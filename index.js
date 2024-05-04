const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');

const Product = require('./models/product.model');
const productRoute = require("./routes/product.route");
const app = express();
const port = 3000;


const url = "mongodb+srv://imethudara:Coconuttree21816*@backenddb.4jmky86.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB";
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use('/api/products',productRoute);


app.get('/',(req,res)=>{
    res.send("Hello Tharuka");
});


mongoose.connect(url)
.then(() =>{
  console.log("Connected to database!");
  app.listen(port,()=>{
    console.log(`Server is running ${port}`)
  });
}).catch(()=>{
  console.log("Connection failed!");
})