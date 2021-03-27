import {Document} from "mongoose"
export enum Rango{
    Usuario,
    Admin,
    Moderator,
    King
}
export interface FindUser{
    state:boolean,
    userId:string
}
export interface User extends Document{
    name:String,
    rank: Rango,
    nickname:number,
    id?: String,
    email:String,
    photo?:String,
    password:String,
    creationDay:Date,
    updateAt:Date,
    post?: Array<Post>
}
export interface Post{
    creator: String,
    id:String,
    CreateAt:Date,
    likes:Array<String>
}