import express,{Application,Request,Response} from 'express'
import { Delete, Getall, Post } from './src/QuoteController'
import mongoose from 'mongoose'
import { Check, Forgot, Login, Reset, Restrict, Sigup } from './src/AuthController'

mongoose.connect("mongodb://localhost:27017") //todo Put the Link in env file

const app:Application= express()
const port:number=3000
//*To get all the boday data from user
app.use(express.json())

app.route("/Forgot").post(Forgot)
app.route("/Reset").post(Reset)
app.route("/Sigup").post(Sigup)
app.route("/Login").post(Login)
app.route("/Anime").get(Check,Restrict("admin"),Getall).post(Check,Restrict("admin"),Post).delete(Check,Restrict("admin"),Delete) //todo Need a PATCH Method

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})