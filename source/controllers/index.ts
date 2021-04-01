import { Response, Request } from 'express'
import { UserController } from "./users";
import { User, FindUser } from '../interfaces/User'
import { JsonWebToken } from './Jwt'
import { comparePassword, encryptPassword } from '../lib/helpers/helper';
export class Controlador {
    constructor() { }
    index(req: Request, res: Response) {
        res.json({ msg: "Hi to the CNetwork API" })
    }
    post(req: Request, res: Response) {
        res.json({
            post: null
        })
    };
    async register(req: Request, res: Response) {
        let info: User = req.body;
        if (!info.name || !info.nickname || !info.password || !info.email) {
            res.status(403).send("Todos los campos son obligatorios!")
            return;
        } else {
            info.password = await encryptPassword(info.password)
            console.log(info);
            let user:any = new UserController().createUser(info);
            let JWT = new JsonWebToken();
            let token = await JWT.encode({id:user.id})
            res.json(token).status(200)
        }
        /**if(!info)
        let Users       = new UserController();
        let user        = await Users.createUser(info); 
        let JWT         = new JsonWebToken("24h");
        let jwt         = await JWT.encode(user.info._id)

        res.status(200).json(jwt)
        */
    }
    async login(req: Request, res: Response) {
        let info: login = req.body;
        let controller = new UserController();
        if (!info.email || !info.password) {
            res.status(403).send("Rellene todos los campos!")
            return;
        }
        else {
            let datos = await controller.login(info.email);
            
            if (!datos.state) {
                res.status(403).send(datos.message)
                return;
            }
            let isCorrect = await comparePassword(info.password, datos.pwd)
            if (isCorrect) {
                let jwt = new JsonWebToken();
                let id = { id: datos.id}
                let token = await jwt.encode(id);
                res.status(200).json(token);
            } else {
                res.status(403).send("Contraseña erronea!");
            }
        }
    }
}
interface login {
    email: String,
    password: string,
    state: Boolean,
    message: String,
    id: String
}
export const index = new Controlador()