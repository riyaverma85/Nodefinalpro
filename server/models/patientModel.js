
const mongoose=require("mongoose");
const patientSchema=new mongoose.Schema(
    {
        patientname:{
            type:String,
            required:true
        },
        Diseases:{
            type:String,
            required:true
        },
        
        address:{
            type:String,
            required:true
        },
        contact:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        docid:{type:mongoose.Schema.Types.ObjectId,ref:"doctor"}

    },{timestamps:true}
)
module.exports=mongoose.model("patient",patientSchema)