import Product from "../models/Product.js";

export const createProduct = async(req,res)=>{
    try{
        const {name,description,category,price,image} = req.body;

        await Product.create({name,description,category,price,image});
        res.status(201).json({message:"Product added successfully.!"})
    }
    catch(err){
        res.status(501).json({message:"Internal server error.!"});
    }
}

export const updateProduct = async(req,res)=>{
    try{
        const product = req.params.id;
        if(!product){
            res.status(401).json({message:"Product not found.!!"})
        }

        await Product.findByIdAndUpdate(product,req.body,{new:true});
        res.status(201).json({message:"Product updated successfully.!"})
    }
    catch(err){
        res.status(501).json({message:"Internal server error.!"});
    }
}

export const deleteProduct = async(req,res)=>{
    try{
        const product = req.params.id;
        if(!product){
            res.status(401).json({message:"Product not found.!!"})
        }

        await Product.findByIdAndDelete(product);
        res.status(201).json({message:"Product deleted successfully.!"})
    }
    catch(err){
        res.status(501).json({message:"Internal server error.!"});
    }
}

export const getAllProducts = async(req,res)=>{
    try{
        const products = await Product.find();
        res.status(200).json(products);
    }
    catch(err){
        res.status(501).json({message:"Internal server error.!"});
    }
}

export const getProductById = async(req,res)=>{
    try{
        
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    }
    catch(err){
        res.status(501).json({message:"Internal server error.!"});
    }
}