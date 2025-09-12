
const multer=require("multer");
const {v2}=require("cloudinary");
const {CloudinaryStorage}=require("multer-storage-cloudinary");

v2.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})