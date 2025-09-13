
const doctorModel=require("../models/doctorModel");
const regisTration=async(req,res)=>{
       try {
        const{doctorname,speciality,city,address,contact,email,password}=req.body;
        const Doctor=await doctorModel.create({
            doctorname:doctorname,
            speciality:speciality,
            city:city,
            address:address,
            image:req.file.path,
            contact:contact,
            email:email,
            password:password
        })
        res.json({
            success:true,
            fileUrl:req.file.path      //Cloudinary file
        })

       } catch (error) {
         res.status(500).json({success:false,message: error.message})
       }
}
module.exports={
    regisTration
}