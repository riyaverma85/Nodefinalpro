
const doctorModel=require("../models/doctorModel");
const patientModel=require("../models/patientModel")
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
const getDoctor=async(req,res)=>{
    try{
        const doctor=await doctorModel.find();
        res.status(200).json(doctor)
    } catch (error) {
        console.log(error)
    }
    console.log("okkk")
}
// const getSpeciality=async(req,res)=>{
//     const{speciality}=req.body; 
//     try {
//         const searchspe=await doctorModel.find({speciality:speciality});
//       console.log(searchspe);
//       res.status(200).json(searchspe);
//     } catch (error) {
//         console.log(error)
//     }
    
// }
// const getName=async(req,res)=>{
//     const{doctorname}=req.body;
//     try {
//         const searchname=await doctorModel.find({doctorname:doctorname});
//         console.log(searchname);
//         res.status(200).json(searchname);
//     } catch (error) {
//         console.log(error)
//     }
// }
// const getCity=async(req,res)=>{
//     const{city}=req.body;
//     try {
//         const searchcity=await doctorModel.find({city:city});
//         console.log(searchcity);
//         res.status(200).json(searchcity);
//     } catch (error) {
//         console.log(error)
//     }
// }

// Merge function: name, city, speciality search
const searchDoctor = async (req, res) => {
  const { query } = req.body;

  if (!query) {
    return res.status(400).json({ message: "Please provide a search value" });
  }

  try {
    const searchResult = await doctorModel.find({
      $or: [
        { doctorname: query },
        { city: query },
        { speciality: query }
      ]
    });

    res.status(200).json(searchResult);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};




const DoctorInfo=async(req,res)=>{
    const{id}=req.query;
    const Doctor=await doctorModel.findById(id);
    res.send(Doctor);
}
const PatientInfo=async(req,res)=>{
    const{id,patientname,diseases,address,contact,email}=req.body;
    const patient=await patientModel.create({
        patientname:patientname,
        diseases:diseases,
        address:address,
        contact:contact,
        email:email,
        docid:id
    })
    res.status(200).json({msg:"Patient Info Submitted Successfully",patient})
}
const patientShow=async(req,res)=>{
    const{id}=req.query;
    const Patient=await patientModel.find({docid:id})
    res.send(Patient);
}
module.exports={
    regisTration,
    doctorLogin,
    getDoctor,
    // getName,
    // getCity,
    // getSpeciality,
    searchDoctor,
    DoctorInfo,
    PatientInfo,
    patientShow
}