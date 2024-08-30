import { Request,Response } from "express";
import { Quote } from "../Schema/Quote";

export async function Getall(req:Request,res:Response){
    const Qurey=req.query
    try{
        if(Qurey.Anime){
            const Anime=await Quote.find({Anime:Qurey.Anime}).limit(Number(Qurey.Limit)) 
            return res.status(200).json({
                status:200,
                data:Anime
            })
        }
        if(Qurey.Character){
            const Anime=await Quote.find({Character:Qurey.Character}).limit(Number(Qurey.Limit))
            return res.status(200).json({
                status:200,
                data:Anime
            })
        }
        if(Qurey.Category){
            const Anime=await Quote.find({Category:Qurey.Category}).limit(Number(Qurey.Limit))
            return res.status(200).json({
                status:200,
                data:Anime
            })
        }
        return res.status(200).json({
            status:200,
            data:await Quote.find().limit(5)
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

export async function Post(req:Request,res:Response){
    const Data=req.body

    try{
        const NewQuote=await Quote.create(Data)
        return res.json({
            status:200,
            data:NewQuote
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

export async function Delete(req:Request,res:Response) {
    const Qurey=req.query

    try{
        if(Qurey.Character){
            const Delete=await Quote.findOneAndDelete({Name:Qurey.Character})
            return res.status(200).json({
                status:200,
                data:Delete
            })
        }
        if(Qurey.Anime){
            const Delete=await Quote.findOneAndDelete({Anime:Qurey.Anime})
            return res.status(200).json({
                status:209,
                data:Delete
            })
        }
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