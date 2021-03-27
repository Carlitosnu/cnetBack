import express, { Application } from "express"
import {connect} from './database'
import path from "path";
import cors from "cors"
import morgan from "morgan";
import router from './router/router'
export class Servidor{
    app:Application;
    constructor(private port:String | Number ){
        this.app = express()
        this.server_settings()
        this.server_init()
        connect("mongodb://localhost:27017/cnetwork")
        this.router()
    }
    server_settings(){
        this.app.use(cors({
            origin:"*"
        }))
        this.app.set("port", process.env.PORT || this.port)
        this.app.set("views", path.join(__dirname,"views"))
        this.app.use(morgan("dev"))
        this.app.set("view engine",".hbs")

        // EXPRESS STATIC FILES
        this.app.use(express.static(path.join(__dirname,"public")))
    }
    server_init(){
        this.app.listen(this.app.get("port"),()=>{
            console.log("Server On port " + this.app.get("port"));
        })
    }
    router(){
        this.app.use("/",router)
    }
}