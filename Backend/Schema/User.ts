import mongoose,{Schema,model,InferSchemaType,Document} from "mongoose";
import validator from "validator"; //todo use npm i @types/validator to use import
import bcrypt from 'bcryptjs' //todo use npm i @types/bcryptjs to use import

const UserSchema=new Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        validate:[validator.isEmail,'give mail'] //! May throw Error   
    },
    Password:{
        type:String,
        required:true,
        select:false
    },
    Role:{
        type:String,
        enum:["user","admin"],
        // default:"user"
    }
    //* This to varifi both password are == or ! 
    //* Not using Conform Password For now . In this API 
    // Conform:{
    //     type:String,
    //     validetor:{
    // Only works with on SAVE or Create
    //         validator:function(el)={
    //             return el===this.Password
    //         },
    //     }
    // }
})

//* This is for Hashing or incarpting the password
UserSchema.pre('save',async function(next){
    if(!this.isModified('Password')) return next() //in case password is not modified

    this.Password=await bcrypt.hash(this.Password,12)
    next()

    // this.Conform=undefined  //! In case of Conform password
})

type User = InferSchemaType<typeof UserSchema> //* Is type of User Schema

export const Users= mongoose.model<User>("User",UserSchema)