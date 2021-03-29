import express, { Application } from "express"
import {connect} from './database'
import path from "path";
import cors from "cors"
import morgan from "morgan";
import router from './router/router';
import {config} from "./config"
export class Servidor{
    app:Application;
    //El constructor que se encarga de iniciar las configuraciones y el servidor
    constructor(){
        //Se configura el servidor
        this.app = express()
        this.server_settings()
        this.server_init()
        // Esta es la funcion para conectarse a la db
        connect(config.mongo)
        this.router()
    }
    server_settings(){
        // Con este nos encargamos de setear el uso publico
        /**
         * @todo Cambiar a archivos de configuracion para evitar ataques y mejorar seguridad
         */
        this.app.use(cors({
            origin:"*"
        }))
        // Si existe un puerto lo setamos
        this.app.set("port", process.env.PORT || config.port)
        this.app.use(morgan(config.morgan))

        // EXPRESS STATIC FILES
        this.app.use(express.static(path.join(__dirname,"public")))
    }
    server_init(){
        //Iniciamos el servidor
        this.app.listen(this.app.get("port"),()=>{
            console.log("Server On port " + this.app.get("port"));
        })
    }
    router(){
        //Ingresamos las rutas
        this.app.use("/",router)
    }
}