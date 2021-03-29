import {User} from "../interfaces/User";
import mongoose,{Schema} from "mongoose"

//Esto es lo que los usuarios tienen
const UserSchema:Schema = new Schema({
    email: {
        type: String,
        required:true,
        unique:true
    },
    nickname: {
        type: String,
        required:true,
        unique:true
    },
    post:{
        type:Array,
        default: [],
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        default: "default.png"
    },
    rank:{
        required:true,
        type:Number,
        default:0
    },
    creationDay:{
        type:Date,
        default:Date.now()
    },
    updatedAt:{
        type:Date,
        default:Date.now()
    }
})
// Enviamos esto a otros archivos
const User = mongoose.model<User>("User", UserSchema);
export {User};