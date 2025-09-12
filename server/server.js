
const express=require("express");
const cors=require("cors");
require("dotenv").config();
const mongoose=require("mongoose");
const doctorRoute=require("./routes/doctorRoute");
const bodyparser=require("body-parser");
app.use(cors())
const app=express();

//Database connection
mongoose.connect(process.env.DBCON).then(()=>{
    console.log("Database connected");
})
//body parser middleware
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());


app.use("/doctor",doctorRoute);
const Port=process.env.PORT || 8000
app.listen(Port,()=>{
    console.log(`Server is running on port ${Port}`);
})