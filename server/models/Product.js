import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    category:{
        type:String
    },
    price:{
        type:Number
    },
    image:{
        type:String
    }
},{timestamps:true});

const Product = mongoose.model('Product',productSchema);

export default Product;