
const express=require("express");
const route=express.Router();
const uploadMiddleware=require("../middlewares/cloudinary");
const doctorController=require("../controller/doctorController");

route.post("/registration",uploadMiddleware.upload.single("file"),doctorController.regisTration)
route.post("/login",doctorController.doctorLogin)
module.exports=route;