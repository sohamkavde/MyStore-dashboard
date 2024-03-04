import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/Mystore")
.then(()=>{
    console.log("connected....");
}).catch(()=>{
    console.log("error");
});

const schema = mongoose.Schema({
    ProductName:{
        type:String,
        required:true
    },
    ProductTitle:{
        type:String,
        required:true
    },
    ProductDescription:{
        type:String,
        required:true
    },
    UploadDateAndTime:{
        type:String,
        required:true
    }
});

const bannerImageSchema = mongoose.Schema({
    Image:{
        type:String,
        required:true
    }
});

const Products = mongoose.models.products|| mongoose.model("products",schema);
const BannerImage = mongoose.models.bannerImage || mongoose.model("bannerImage",bannerImageSchema);
module.exports = {Products,BannerImage};
