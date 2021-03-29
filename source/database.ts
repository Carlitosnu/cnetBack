import mongoose from "mongoose";

export function connect(url:String){
    url = url.toString()
    mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true,

    }).then(()=>{
        console.log("DB is Connected");       
    })
}