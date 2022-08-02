const express = require('express')
const bodyParser = require ('body-parser')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config();


const app = express();
app.use(bodyParser.json())
app.use("/",(req,res) => res.status(200).json({
    message:"this is api"
}));
const dburl=process.env.DATABASE_URI;

mongoose.connect(dburl,{
    
} ).then(()=>console.log("database connected successfully"))
const PORT=process.env.PORT ||5004
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})


module.exports = app; 