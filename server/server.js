
const express=require("express");
const cors=require("cors");
require("dotenv").config();

app.use(cors())
const app=express();
const Port=process.env.PORT || 8000
app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`);
})