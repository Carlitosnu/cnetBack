import {Response, Request} from 'express'
import {UserController} from "./users";
import {User,FindUser} from '../interfaces/User'
import {JsonWebToken} from './Jwt'
export class Controlador{
    constructor(){}
    index(req:Request,res:Response){
        res.json({msg:"Hi to the CNetwork API"})
    }
    post(req:Request,res:Response){
        res.json({
            post:null
        })
    };
    async register(req:Request,res:Response){
        let Body:User = req.body
        let Controller = new UserController()
        let user:FindUser = await Controller.createUser(Body);
        let tokenController = new JsonWebToken();
        let token = await tokenController.encode(user.userId)
        res.json({
            token
        })
    }
    async login(req:Request, res:Response){
        let info:login = req.body;
        let controller = new UserController();
        if(!info.user || !info.password){
            res.status(403).send("Rellene todos los campos!")
            return;
        }
        let data:login = {
            user : info.user,
            password: info.password
        }
        let datos = await controller.login(data);
        if(!datos.state){
            res.status(403).send(datos.message)
            return;
        }
        let jwt = new JsonWebToken();
        let token = await jwt.encode(datos.id);
        res.status(200).json(token);
    }

}
interface login{
    user: String,
    password:String
}
export const index = new Controlador()