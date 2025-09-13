
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
const doctorLogin=async(req,res)=>{
     const{email,password}=req.body;
     try {
        const doctor=await doctorModel.findOne({email:email});
        if(!doctor){
            res.status(401).json({msg:"Email is not registerd"})
        }
        if(doctor.password!=password)
        {
            res.status(401).send({msg:"Inavalid Password"})
        }
        res.status(200).send({msg:"Login Successfull",doctor})
     } catch (error) {
        console.log(error)
     }
}
module.exports={
    regisTration,
    doctorLogin
}