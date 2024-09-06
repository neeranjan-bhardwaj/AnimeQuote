import { Users } from "../Schema/User";
import { Request,RequestHandler,Response,NextFunction } from "express";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { Types } from "mongoose";
import { promisify } from "util";

const go:string="slioierfugh fsobihw5thk wrgoijgrbtg n3lr;tijnk mwrgnlijo " //! This just for Developing put it in env

const Token=(id:Types.ObjectId)=>{
    return jwt.sign({id},go,{
        expiresIn:'1d'
    })
}
let user:Document|null;

interface Decoded{
    id:Types.ObjectId
}

export async function Sigup(req:Request,res:Response) {                              
    try{
        const {Email,Name,Password,Role}=req.body
        const NewUser=await Users.create({
            Email:Email,
            Name:Name,
            Password:Password,
            Role:Role
        })

        res.status(200).json({
            message:"User created successfully",
            token:Token(NewUser._id),
            user:NewUser
        })
    }catch(err){
        if(err instanceof Error){
            return res.status(400).json({
                status: 400,
                message: err.message
            })
        }
        else if(typeof err=="string"){
            return res.status(400).json({
                status: 400,
                message: err
            })
        }
        return res.status(500).json({
            status: 500,
            message: "Internal Server Error"
            })    
    }
}

export async function Login(req:Request,res:Response) {
    try{
        const {Email,Password}=req.body
        if(!Email||!Password) throw new Error("entry password and mail") //todo Change it after doing Error Handling

        const user=(await Users.findOne({Email}).select('+Password'))
        if(!user||!await bcrypt.compare(Password,user.Password)) throw new Error("the password incorrect") 

        res.json({
            message:"User logged in successfully",
            token:Token(user._id)
        })
    }catch(err){
        if(err instanceof Error){
            return res.status(400).json({
                status: 400,
                message: err.message
            })
        }
        else if(typeof err=="string"){
            return res.status(400).json({
                status: 400,
                message: err
            })
        }
        return res.status(500).json({
            status: 500,
            message: "Internal Server Error"
            })
    }
}

export const Check:RequestHandler=async(req,res,next)=>{
    try{
        let token;
        if(req.header('Authorization')){
            token=req.header('Authorization')
            // console.log(token+"hi")
        }

        if(!token) throw new Error('You are not Login')
        // console.log(token+"go")

        //* In case need to promisefi
        const decoded:Decoded = await new Promise((resolve, reject) => {
            jwt.verify(token, go, (err:any, decoded:any) => {
                if (err) {
                    reject(err);
                } else {
                resolve(decoded);
                }
            });
        });
        user=await Users.findById(decoded.id)
        next()
        // console.log(decoded.id)
    }catch(err){
        if(err instanceof Error){
            return res.status(400).json({
                status: 400,
                message: err.message
            })
        }
        else if(typeof err=="string"){
            return res.status(400).json({
                status: 400,
                message: err
            })
        }
        return res.status(500).json({
            status: 500,
            message: "Internal Server Error"
            })
    }
}

export const Restrict=(...roles:string[])=>{
    return (req:Request,res:Response,next:NextFunction)=>{
        try{
            // console.log(user.Role)
            if(!roles.includes(user.Role)){
                throw Error("You are not admin")
            }
            next()
        }catch(err){
        if(err instanceof Error){
            return res.status(400).json({
                status: 400,
                message: err.message
            })
        }
        else if(typeof err=="string"){
            return res.status(400).json({
                status: 400,
                message: err
            })
        }
        return res.status(500).json({
            status: 500,
            message: "Internal Server Error"
            })
    }
    }
}

