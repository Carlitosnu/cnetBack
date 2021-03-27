interface post {
    user:String,
    title:String,
    likedBy?:Array<String>,
    description:String,
    comment?:Array<comments>
}
interface comments{
    description:String,
    user:String,
    likedBy:Array<String>
    subcomments:Array<this>
}
import {Response, Request} from "express"
class testing{
    constructor(){}
    post(req:Request,res:Response){
        let post:Array<post> = [
            {
                user:"Example UserName",
                description:"An awesome comment",
                title:"This is a awesome post ;)",
            },
            {
                user:"Joe Man",
                description:"Pop stars",
                title:"This is a awesome post ;)",
                likedBy:[
                    "Stela",
                    "Armanda",
                    "Example User"
                ]
            },
            {
                user:"Richard Joe Man",
                description:"Hi everyone",
                title:"This is my fisrt post :)",
                likedBy:[
                    "Stela",
                    "Armanda",
                    "Example User"
                ]
            }
        ]
        res.json(post)
    };
}
export let Testing = new testing();
