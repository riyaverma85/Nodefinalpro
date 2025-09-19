
const express=require("express");
const route=express.Router();
const uploadMiddleware=require("../middlewares/cloudinary");
const doctorController=require("../controller/doctorController");

route.post("/registration",uploadMiddleware.upload.single("file"),doctorController.regisTration)
route.post("/login",doctorController.doctorLogin)
route.get("/getdoctor",doctorController.getDoctor)
route.post("/search",doctorController.searchDoctor)

// route.post("/getname",doctorController.getName)
// route.post("/getcity",doctorController.getCity)
// route.post("/getspeciality",doctorController.getSpeciality)
route.get("/doctorInfo",doctorController.DoctorInfo)
route.post("/patientInfo",doctorController.PatientInfo)
route.get("/patientshow",doctorController.patientShow)




module.exports=route;