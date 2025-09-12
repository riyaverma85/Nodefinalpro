
const multer=require("multer");
const {v2}=require("cloudinary");
const {CloudinaryStorage}=require("multer-storage-cloudinary");

//cloudinary configuration
v2.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

//Multer storage with cloudinary
const storage=new CloudinaryStorage({
    cloudinary:v2,
    params:{
        folder:"mern_uploads",   //folder name on cloudinary
        allowed_formats:["jpg","png","jpeg","webp","pdf"]    //allowed file  types
    },
})

const upload=multer({storage:storage});
module.exports={
    upload
}