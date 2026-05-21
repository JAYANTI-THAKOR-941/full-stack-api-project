import User from "../models/User.js";

export const register = async(req,res)=>{
    try{
        const {name,email,password} = req.body;

        const user = await User.findOne({email});
        if(user){
            res.status(401).json({message:"User already exits.!!"})
        }

        await User.create({name,email,password});
        res.status(201).json({message:"User Register successfully.!"})
    }
    catch(err){
        res.status(501).json({message:"Internal server error.!"});
    }
}

export const login = async(req,res)=>{
    try{
        const {email,password} = req.body;

        const user = await User.findOne({email});

        if(!user){
            res.status(401).json({message:"User not found!"})
        }

        res.status(200).json({message:"Login successfully.!",user});
    }
    catch(err){
        res.status(501).json({message:"Internal server error.!"});
    }
}