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
}
export const index = new Controlador()